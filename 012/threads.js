// Уяви, що це твій "фітнес-трекер" у вигляді коду

function stepCounter() {
	let steps = 0;
	return function () {
		steps++;
		console.log(`Кроків зроблено: ${steps}`);
	};
}

const mySteps = stepCounter();
mySteps();
mySteps();
mySteps();
mySteps();

// Шаблон для різних випадків
function greetingGenerator(prefix) {
	return function (name) {
		console.log(`${prefix}, ${name}`);
	};
}

const sayHello = greetingGenerator('Привіт');
const sayHi = greetingGenerator('Hi');

sayHello('Андрій');
sayHi('Маша');

// Уяви, що у тебе є скарб, і ти хочеш, щоб до нього можна було дістатися тільки через певні двері:

function treasureBox() {
	let treasure = 'Золото піратів'; // Скарб прихований тут
	return {
		openBox: () => console.log(`Тут: ${treasure}`),
		replaceTreasure: newTreasure => (treasure = newTreasure),
	};
}

const myBox = treasureBox();

myBox.openBox(); //Тут золото піратів
myBox.replaceTreasure('Діаманти короля');
myBox.openBox(); // Тут Діаманти короля
