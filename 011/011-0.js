var a = 5;

// Змінні, які оголошені всередині функції є локальними.
const greet1 = function () {
	var a = 10;
};

// Локальна змінна всередині функції має більший пріоритет, тому якщо ми спробуємо вивести змінну a в консоль, то ми отримаємо вивід числа 10.
const greet2 = function () {
	var a = 10;
	console.log(a);
};

greet2();

// Робота function scope на простому прикладі:
var a = 5;
console.log(a);

function greet3() {
	var a = 10;
	console.log(a);
}

if (true) {
	var a = 15;
}

greet3();
console.log(a);

var a = 5;
console.log(a);

function greet4() {
	var a = 10;
	console.log(a);
}

if (true) {
	let a = 15;
}

greet4();
console.log(a);

var a = 5;

function outerFunction() {
	var a = 10;
	console.log(a);

	function innerFunction() {
		var a = 20;
		console.log(a);
	}
}

console.log(a);

// ми можемо оголошувати змінну кілька разів і при цьому у нас не буде помилки:
var a = 5;
var a = 50;
var a = 500;

// ми можемо взагалі не писати оператор var для оголошення змінної та це майже ні на що не вплине:
a = 5;

var a = 5;

function outerFunction2() {
	var a = 10;
	console.log(a);

	function innerFunction2() {
		a = 20;
		console.log(a);
	}
}

console.log(a);

console.log(a);
var a = 5;

var a;
console.log(a);
a = 5;

var a = 5;
function outerFunction3() {
	var a = 10;
	console.log(a);
	function innerFunction3() {
		console.log(a);
		var a = 20;
	}
}

console.log(a);

if (true) {
	var test = 'Variable declared by var';
}

console.log(test);

// Ми отримали помилку про те, що змінна не оголошена.
if (true) {
	let test = 'Variable declared by var';
	console.log(test);
}

console.log(test);

// не можна використовувати до їх оголошення.
console.log(test);
let test = 'Variable declared by let';

const element = [];

for (var i = 0; i < 5; i++) {
	element.push({
		click: function () {
			console.log(i);
		},
	});
}

element[0].click();
element[3].click();

const elements = [];

for (let i = 0; i < 5; i++) {
	elements.push({
		click: function () {
			console.log(i);
		},
	});
}

elements[0].click();
elements[1].click();
elements[3].click();

const x = 10;
x = 20;

console.log(test);
const test = 'Variable declared by const';

const person = {
	name: 'Andrii',
	age: 22,
	position: 'Course Maker',
};

console.log(person);

person.position = 'STO';
console.log(person);
