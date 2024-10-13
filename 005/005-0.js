const { isStudent, height } = require('./005-1');

// Undefined (Невизначений)
let undefinedVariable;
// Boolean (Буліан, Логічний)
let isTrue = true;
let isFalse = false;
// Number (Число)
let age = 25;
let price = 19.99;
// String (Строка)
let name = 'John';
// BigInt
let bigInteger = 9007199254740991n;
// Symbol
let uniqueSymbol = Symbol('unique');
// Object (Об'єкт)
let person = {
	name: 'Alice',
	age: 30,
	isStudent: false,
};
let colors = ['red', 'green', 'blue']; // Масиви теж є об'єктами
let currentDate = new Date(); // Створення об'єкту дата
let nullValue = null;

// Приклад використання instanceof

// Визначення конструктора в класі
class MyStructure {
	constructor(name, age) {
		this.name = name;
		if (typeof age === 'number') {
			this.age = age;
		} else {
			console.log('Вік має бути числом!');
			this.age = null;
		}
	}
}

let myObject = new MyStructure('John', 23);

if (myObject instanceof MyStructure) {
	console.log('Це екземпляр MyStructure');
} else {
	console.log('Це не екземпляр MyStructure');
}
console.log(`${name} ${age} ${isStudent} ${height}`);
