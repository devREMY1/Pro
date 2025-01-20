let a = 'global';
function outer() {
	let b = 'outer';
	function inner() {
		let c = 'inner';
		console.log(c);
		console.log(b);
		console.log(a);
	}
	console.log(a);
	console.log(b);
	inner();
}
outer();
console.log(a);

function createCounter() {
	let count = 0;
	function increment() {
		count++;
		console.log(`Count ${count}`);
	}
	function decrement() {
		count--;
		console.log(`Count ${count}`);
	}
	return {
		increment,
		decrement,
	};
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.increment();
counter2.decrement();
counter2.increment();

function createPerson(name, age, height) {
	/* Локальні змінні для зберігання даних про людину */
	const personDetails = {
		name: name,
		age: age,
		height: height,
	};
	/* Функція для зміни інформації про людину */
	function updatePersonDetails(newName, newAge, newHeight) {
		/* Зміна полів об'єкта */
		personDetails.name = newName || personDetails.name;
		personDetails.age = newAge || personDetails.age;
		personDetails.height = newHeight || personDetails.height;
	}
	/* Функція для виведення інформації про людину */
	function displayPersonDetails() {
		console.log(
			`Ім'я: ${personDetails.name}, Вік: ${personDetails.age}, Зріст: ${personDetails.height}`
		);
	}
	/* Повертаємо об'єкт з методами для зміни та виведення інформації про людину */
	return {
		updateDetails: updatePersonDetails,
		displayDetails: displayPersonDetails,
	};
}
/* Створення об'єкта Person */
const person = createPerson('John', 25, 175);

/* Виведення початкової інформації */
person.displayDetails();

/* Зміна інформації та виведення оновленої інформації */
person.updateDetails('Jane', 30, 160);
/* Виведення інформації */
person.displayDetails();

// Якщо закрита функція визначає змінну з тим самим ім'ям, що й ім'я змінної у зовнішній області, немає способу знову посилатися на змінну у зовнішній області.

var createPerson = function (name) {
	return {
		setName: function (name) {
			name = name;
		},
	};
};
console.log(createPerson('andrew'));

let createPerson = function (name) {
	return {
		setName: function (newName) {
			name = newName;
		},
		getName: function () {
			return name;
		},
	};
};

console.log(createPerson('andrew'));

function makeAdder(x) {
	return function (y) {
		return x + y;
	};
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2));

console.log(add10(2));

function outer() {
	let x = 10;

	function inner() {
		let y = 5;
		return x + y;
	}

	return inner;
}

const closureFunc = outer();
const result = inner();
