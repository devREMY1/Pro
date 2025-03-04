const API_URL = 'https://api.monobank.ua/personal/statement/';
const CUSTOM_CATEGORIES_KEY = 'customCategories';
let transactions = [];
let currentChart = null;
let categories = {};
let timeline = {};

const MCC_CATEGORIES = {
	5811: 'Кафе та ресторани',
	5411: 'Продукти',
	7299: 'Послуги',
	4814: 'Телекомунікаційні послуги',
	4900: 'Комунальні платежі',
	6538: 'Переказ коштів',
	9402: 'Пошта',
	// Додайте інші MCC-коди за потреби
};

document.addEventListener('DOMContentLoaded', () => {
	const saveTokenBtn = document.getElementById('saveTokenBtn');
	const periodButtons = document.querySelectorAll('.period-buttons button');
	const chartToggleButtons = document.querySelectorAll('.chart-btn');
	const saveCategoryBtn = document.getElementById('saveCategoryBtn');
	const closeModalBtn = document.querySelector('.modal .close');

	if (saveTokenBtn) saveTokenBtn.addEventListener('click', saveToken);
	periodButtons.forEach(btn =>
		btn.addEventListener('click', () =>
			loadStatement(parseInt(btn.dataset.days))
		)
	);
	chartToggleButtons.forEach(btn =>
		btn.addEventListener('click', () => toggleChart(btn.dataset.chart))
	);
	if (saveCategoryBtn)
		saveCategoryBtn.addEventListener('click', saveCustomCategory);
	if (closeModalBtn)
		closeModalBtn.addEventListener('click', closeCategoryModal);

	// Завантажуємо дані за останні 7 днів при першому завантаженні сторінки
	loadStatement(7);

	// Додаткова ініціалізація для адаптивності
	window.addEventListener('resize', () => {
		if (currentChart) {
			currentChart.resize();
		}
	});
});

function saveToken() {
	const token = document.getElementById('tokenInput').value;
	localStorage.setItem('monobankToken', token);
}

async function loadStatement(days) {
	const token = localStorage.getItem('monobankToken');
	if (!token) return alert('Токен не знайдено!');

	const now = Math.floor(Date.now() / 1000);
	const from = now - days * 86400;

	try {
		showLoading();
		const response = await fetch(`${API_URL}0/${from}/${now}`, {
			headers: { 'X-Token': token },
		});

		if (response.status === 429) {
			throw new Error('Перевищено ліміт запитів. Спробуйте пізніше.');
		}

		if (!response.ok) throw new Error('Помилка запиту');

		transactions = await response.json();
		processTransactions(transactions);
	} catch (error) {
		console.error('Помилка завантаження даних:', error);
		showError(
			error.message ||
				'Не вдалося завантажити дані. Перевірте токен та спробуйте ще раз.'
		);
	} finally {
		hideLoading();
	}
}

function processTransactions(transactions) {
	const customCategories =
		JSON.parse(localStorage.getItem(CUSTOM_CATEGORIES_KEY)) || {};

	let income = 0;
	let expense = 0;
	let creditUsed = 0;
	categories = {};
	timeline = {};

	transactions.forEach(transaction => {
		const amount = transaction.amount / 100;
		const date = new Date(transaction.time * 1000).toISOString().split('T')[0];

		if (amount > 0) {
			income += amount;
		} else {
			expense += Math.abs(amount);
			if (transaction.balance < 0) creditUsed += Math.abs(amount);

			const category =
				customCategories[transaction.id] ||
				MCC_CATEGORIES[transaction.mcc] ||
				'Інше';
			categories[category] = (categories[category] || 0) + Math.abs(amount);

			timeline[date] = (timeline[date] || 0) + Math.abs(amount);
		}
	});

	updateUI(income, expense, creditUsed, categories, timeline);
	renderTransactions(transactions, customCategories);
	renderCategoryStats(categories);
	generateAdvice(categories, expense);
}

function updateUI(income, expense, creditUsed, categories, timeline) {
	document.getElementById('income').textContent = income.toFixed(2);
	document.getElementById('expense').textContent = expense.toFixed(2);
	document.getElementById('creditUsed').textContent = creditUsed.toFixed(2);

	renderChart(
		'pie',
		Object.entries(categories).map(([name, value]) => ({ name, value }))
	);
}

function renderChart(type, data) {
	const ctx = document.getElementById('expensesChart');
	if (!ctx) {
		console.error('Canvas element not found');
		return;
	}

	if (currentChart) {
		currentChart.destroy();
	}

	const chartConfig = {
		type: type,
		data: {
			labels: data.map(item => item.name || item.date),
			datasets: [
				{
					data: data.map(item => item.value || item.amount),
					backgroundColor: data.map(
						(_, index) => `hsl(${index * 25}, 70%, 60%)`
					),
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					position: 'right',
				},
			},
		},
	};

	if (type === 'line') {
		chartConfig.options.scales = {
			x: {
				type: 'time',
				time: {
					unit: 'day',
				},
				adapters: {
					date: {
						locale: 'uk',
					},
				},
			},
		};
	}

	currentChart = new Chart(ctx, chartConfig);
}

function toggleChart(chartType) {
	const buttons = document.querySelectorAll('.chart-btn');
	buttons.forEach(btn =>
		btn.classList.toggle('active', btn.dataset.chart === chartType)
	);

	if (chartType === 'pie') {
		renderChart(
			'pie',
			Object.entries(categories).map(([name, value]) => ({ name, value }))
		);
	} else {
		renderChart(
			'line',
			Object.entries(timeline).map(([date, amount]) => ({
				date: new Date(date),
				amount,
			}))
		);
	}
}

function renderTransactions(transactions, customCategories) {
	const container = document.getElementById('transactions');
	if (!container) return;

	container.innerHTML = transactions
		.map(
			transaction => `
        <div class="transaction-card" data-id="${transaction.id}">
            <div>
                <strong>${transaction.description}</strong>
                <div>${new Date(
									transaction.time * 1000
								).toLocaleDateString()}</div>
            </div>
            <div>
                <span class="category-tag">${
									customCategories[transaction.id] ||
									MCC_CATEGORIES[transaction.mcc] ||
									'Інше'
								}</span>
                <span class="amount ${
									transaction.amount > 0 ? 'income' : 'expense'
								}">
                    ${(transaction.amount / 100).toFixed(2)} ₴
                </span>
            </div>
        </div>
    `
		)
		.join('');

	container.querySelectorAll('.transaction-card').forEach(card => {
		card.addEventListener('click', () => openCategoryModal(card.dataset.id));
	});
}

function renderCategoryStats(categories) {
	const container = document.getElementById('categoryStats');
	if (!container) return;

	container.innerHTML = Object.entries(categories)
		.map(
			([category, amount]) => `
            <div class="category-card">
                <h4>${category}</h4>
                <div class="amount">${amount.toFixed(2)} ₴</div>
            </div>
        `
		)
		.join('');
}

function openCategoryModal(transactionId) {
	const modal = document.getElementById('categoryModal');
	if (!modal) return;

	modal.style.display = 'flex';
	const saveCategoryBtn = document.getElementById('saveCategoryBtn');
	if (saveCategoryBtn) {
		saveCategoryBtn.dataset.transactionId = transactionId;
	}
}

function closeCategoryModal() {
	const modal = document.getElementById('categoryModal');
	if (modal) {
		modal.style.display = 'none';
	}
}

function saveCustomCategory() {
	const saveCategoryBtn = document.getElementById('saveCategoryBtn');
	if (!saveCategoryBtn) return;

	const transactionId = saveCategoryBtn.dataset.transactionId;
	const categorySelect = document.getElementById('categorySelect');
	if (!categorySelect) return;

	const category = categorySelect.value;
	const customCategories =
		JSON.parse(localStorage.getItem(CUSTOM_CATEGORIES_KEY)) || {};
	customCategories[transactionId] = category;
	localStorage.setItem(CUSTOM_CATEGORIES_KEY, JSON.stringify(customCategories));
	closeCategoryModal();
	processTransactions(transactions);
}

function generateAdvice(categories, totalExpense) {
	const advice = [];
	const thresholds = {
		'Кафе та ресторани': 0.15,
		Розваги: 0.2,
		Транспорт: 0.1,
	};

	for (const [category, threshold] of Object.entries(thresholds)) {
		const categoryExpense = categories[category] || 0;
		const categoryPercent = categoryExpense / totalExpense;
		if (categoryPercent > threshold) {
			advice.push(`На ${(categoryPercent * 100).toFixed(
				1
			)}% витрат складає категорія "${category}". 
                Рекомендуємо скоротити витрати до ${threshold * 100}%`);
		}
	}

	const adviceContainer = document.getElementById('advice');
	if (adviceContainer) {
		adviceContainer.innerHTML = advice
			.map(text => `<div class="advice-item">${text}</div>`)
			.join('');
	}
}

function showLoading() {
	const loadingElement = document.createElement('div');
	loadingElement.id = 'loading';
	loadingElement.textContent = 'Завантаження...';
	loadingElement.style.position = 'fixed';
	loadingElement.style.top = '50%';
	loadingElement.style.left = '50%';
	loadingElement.style.transform = 'translate(-50%, -50%)';
	loadingElement.style.padding = '10px';
	loadingElement.style.background = 'rgba(0, 0, 0, 0.7)';
	loadingElement.style.color = 'white';
	loadingElement.style.borderRadius = '5px';
	loadingElement.style.zIndex = '1000';
	document.body.appendChild(loadingElement);
}

function hideLoading() {
	const loadingElement = document.getElementById('loading');
	if (loadingElement) {
		loadingElement.remove();
	}
}

function showError(message) {
	const errorElement = document.createElement('div');
	errorElement.className = 'error-message';
	errorElement.textContent = message;
	errorElement.style.position = 'fixed';
	errorElement.style.top = '10px';
	errorElement.style.left = '50%';
	errorElement.style.transform = 'translateX(-50%)';
	errorElement.style.padding = '10px';
	errorElement.style.background = 'rgba(255, 0, 0, 0.7)';
	errorElement.style.color = 'white';
	errorElement.style.borderRadius = '5px';
	errorElement.style.zIndex = '1000';
	document.body.appendChild(errorElement);
	setTimeout(() => errorElement.remove(), 5000);
}
