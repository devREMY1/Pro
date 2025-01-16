function fetchData(url, callback) {
	console.log('Fetching data...');
	setTimeout(() => {
		const data = { userId: 1, username: 'Andriy' };
		console.log('Data fetched successfully.');
		callback(data);
	}, 2000);
}

function processData(data) {
	console.log(`Processing data for user: ${data.username}`);
}

fetchData('https://api.example.com/user', processData);

console.log(`
Колбеки (callbacks) в JavaScript — це функції, які передаються як аргумент до іншої функції та викликаються після завершення певної операції. 
Вони є основою для обробки асинхронного програмування.

**Основний принцип роботи:**
1. Функція передає іншу функцію (колбек) як аргумент.
2. Колбек викликається після завершення основної операції.

**Чому корисні:**
- Колбеки дозволяють уникати блокування виконання коду.
- Вони покращують читабельність і керованість асинхронного коду.

**Реальний приклад:**
Наприклад, при отриманні даних з сервера:

function fetchData(url, callback) {
  console.log('Fetching data...');
  setTimeout(() => {
    const data = { userId: 1, username: 'Andriy' };
    console.log('Data fetched successfully.');
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log(\`Processing data for user: \${data.username}\`);
}

fetchData('https://api.example.com/user', processData);
`);
