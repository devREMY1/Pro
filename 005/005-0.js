let number = 32;
let string = 'Hello world';

let numberr = 'Hello world!' * '2';

// ??????????? 7 примітивів
undefined;
Boolean;
number;
string;
bigint;
Symbol;
null;

typeof instance === 'undefined';
typeof instance === 'boolean';
typeof instance === 'number';
typeof instance === 'string';
typeof instance === 'bigint';
typeof instance === 'symbol';
typeof instance === 'object';

// 8-й тип:

{
	object;
}

typeof instance === 'object';

('Приклади ініціалізації');

// Невизначений
let undefinedVariable;

//Буліан, Логічний
let isTrue = true;
let isFalse = false;

//Число
let age = 25;
let price = 19.99;

//Строка
let name = 'John';

//BigInt
let bigInteger = 9007199254740991n;

//Symbol
let uniqueSymbol = Symbol('unique');

//Об'єкт
let person = {
	name: 'Alice',
	age: 30,
	isStudent: false,
};

//Масиви теж є об'єктами
let colors = ['red', 'green', 'blue'];

//Створення об'єкту дата
let currentDate = new Date();
//Null
let nullValue = null;

('Приклад використання instanceof');
let myObject = new MyStructure();
if (myObject instanceof MyStructure) {
	console.log('Це екземпляр MyStructure.');
} else {
	console.log('Це не екземпляр MyStructure.');
}

//Тип null: В JavaScript null має тип "object". Це є історичною особливістю мови, і воно може викликати певні непорозуміння або дивні поведінки при перевірці типу.
console.log(typeof null);

let myObject = { name: 'John' };
myObject = null;
console.log(myObject);

let x;
console.log(x);
console.log(x === null);

// Неініціалізовані змінні:
let x;
console.log(x);

// Повертається при відсутності значення:
function doSomething() {}
let result = doSomething();
console.log(result);

// Використання у функціях:
function example(arg) {
	console.log(arg);
}
example();

// Тип даних:
typeof undefined;

// Порівняння:
undefined == null; /* true, при нестрогому порівнянні, undefined рівне null. */
undefined === null; /* false, при строгому порівнянні, типи різні. */

// ???????????? boolean

// Приклад використання оператора if:
if ('умова') {
	//блок коду, який виконується якщо умова повертає true
} else {
	//Блок коду, який виконується якщо умова повертає false
}

// Наприклад:
let hour = 12;
if (hour < 18) {
	console.log('Добрий день');
} else {
	console.log('Добрий вечір');
}

// Приклад використання логічної умови в циклі for:
for ('початок'; 'умова'; 'крок') {
	//тіло циклу
}

// Наприклад:
for (let i = 1; i <= 3; i++) {
	console.log(i);
}

//Оператор "!" для інверсії значення.
if (!false) {
	console.log('умова спрацювала');
}

// ?????????????? Числа (number)

// Приклад використання констант і метод для безпечних цілих чисел
// Максимальне безпечне ціле число
console.log(Number.MAX_SAFE_INTEGER);
// Minimal
console.log(Number.MIN_SAFE_INTEGER);
//Перевірка, чи число є безпечним цілим числом
console.log(Number.isSafeInteger(42));
console.log(Number.isSafeInteger(9007199254740991));

let positiveZero = +0;
let negativeZero = -0;
console.log(positiveZero === negativeZero);
let result1 = positiveZero / 3;
let result2 = negativeZero / 3;
console.log(result1);
console.log(result2);
console.log(result1 === result2);

// Текстові рядки (string)

let myString = 'JavaScript';
//Отримання символу за індексом
let firstChar = myString[0];
let secondChar = myString[1];
let fifthChar = myString[4];
console.log(firstChar, secondChar, fifthChar);

let originalString = 'Hello';
//Створення нового рядка на основі існуючого
let newString = originalString + ', World!';
console.log(originalString);
console.log(newString);

// Застосування методу substring:
let myString = 'JavaScript';
let substring = myString.substring(0, 4);
console.log(substring);

let name = 'John';
let age = 30;
let greeting = `Привіт, мене звати ${name} і мені ${age} років.`;
console.log(greeting);

let multiLine = `
Рядок 1
Рядок 2
Рядок 3`;
console.log(multiLine);

// ??????????? Тип даних Велике ціле (BigInt)

let bigInt = 19241924124n;
console.log(bigInt);
console.log(typeof bigInt);

let num = 9007199254740991;
console.log(num);
console.log(num + 1);
console.log(num + 2);

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

const num = 9223372036854775801;
console.log(num);

let dimension = 19007n;
const value = 2545n;

const num = 9223372036854775801n;
console.log(num);

// ??????????????????? Тип даних Символ (Symbol)

const obj = {};
let myPrivateValue = Symbol();
obj[myPrivateValue] = 'Значення для цієї властивості';
console.log(obj);

// ?????????????????  Об'єкти

const user = {};

// Об'єкт може мати різні властивості та методи:
const user = {
	name: 'Tom',
	age: 24,
};
console.log(user);

let id;
console.log(id);
id = 45;
console.log(id);
id = '45';
console.log(id);
