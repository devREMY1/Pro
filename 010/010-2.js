// Функція яка приймає два числа і колбек
function sum(a, b, callback) {
	const result = a + b;
	callback(result);
}

// Колбек-функція для виведення результату
function display(result) {
	console.log(`Результат: ${result}`);
}

// Виклик функції sum із переданими числами і колбеком
sum(5, 7, display);
