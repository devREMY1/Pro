const personREMY = {
	name: 'Remy',
	universe: 'Disney/Pixar',
	occupation: 'шеф-кухар',
	remyAbilities: [
		'Гостре чуття смаку та нюху',
		'Високі кулінарні навички',
		'Швидка реакція та спритність',
		'Вміння створювати нові рецепти',
		'Здатність до командної роботи з Лінгвіні',
		'Стійкість та наполегливість у досягненні мети',
		'Здатність надихати інших на креативність і працю',
	],
	introduce() {
		console.log(`Привіт, я ${this.name}!`);
	},
};

// Виведення всіх властивостей об'єкта
Object.entries(personREMY).forEach(([key, value]) => {
	console.log(`${key}:`, value);
});

// Виклик методу introduce
personREMY.introduce();

// Створення JSON-рядка
const personSerialized = JSON.stringify(personREMY);
console.log(personSerialized);

// Парсинг JSON-рядка назад в об'єкт
const personDeserialized = JSON.parse(personSerialized);
console.log(personDeserialized);

// Видалення методу
delete personREMY.introduce;
console.log(personREMY.introduce);

// Перевірка наявності методу
console.log(personREMY.hasOwnProperty('introduce'));
console.log('introduce' in personREMY);
