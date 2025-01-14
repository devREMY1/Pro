//??????????????????????? Вступ до масивів

const array = [1, 2, 3, 4, 5, 6];

const courses = ['Front-end Basic', 'Front-end Pro', 'Front-end Guru'];

courses[3] = 'CyberSec';
courses[1] = 'Front-end Professional';

console.log(courses);

//?????????????????????? Розуміння властивості length

courses[courses.length] = 'Node.js';
console.log(courses);

courses[20] = 'Solidity';
console.log(courses);

//?????????????????????? Масиви це обʼєкти

console.log(typeof courses);

const vegis = new Array(45);
const fruits = new Array('mango', 'banana', 'kiwi');

let sparseArray = [, , , 23];

console.log(sparseArray[2]);
console.log(sparseArray[3]);

const sparseArrayy = [, ,];
console.log(sparseArrayy.length);

//?????????????????????????? Індекси

courses['secretCourse'] = 'Secret Courses';
console.log(courses);
console.log(courses.length);

//???????????????????????????? Очищення масивів

courses.length = 2;
console.log(courses);

delete courses[3];
console.log(courses);

console.log(Array.isArray(courses));

//??????????????????????????? Методи масивів

// 1. join(): Об'єднує всі елементи масиву в рядок, розділяючи їх вказаним роздільником.
const arr1 = ['Hello', 'World', '!'];
const joinedString = arr1.join(', ');

// 2. reverse(): Змінює порядок елементів масиву на зворотний.
const arr2 = [1, 2, 3, 4, 5];
arr2.reverse();

// 3. sort(): Сортує елементи масиву за їхніми значеннями (за замовчуванням у лексикографічному порядку).
const arr3 = [3, 1, 4, 1, 5, 9, 2];
arr3.sort();

// 4. concat(): Повертає новий масив, що складається з поєднання поточного масиву та інших масивів або значень.
const arr4 = [1, 2, 3];
const arr4_1 = [4, 5, 6];
const concatenatedArray = arr4.concat(arr4_1); // [1, 2, 3, 4, 5, 6]

// 5. slice(): Повертає зазначений фрагмент масиву, не змінюючи його.
const arr5 = [1, 2, 3, 4, 5];
const slicedArray = arr5.sliced(1, 3);

// 6. splice(): Змінює вміст масиву, додаючи, видаляючи або замінюючи елементи.
const arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1);

// 7. push(): Додає один або кілька елементів в кінець масиву і повертає нову довжину масиву.
const arr7 = [1, 2, 3];
arr7.push(4, 5);

// 8. pop(): Видаляє останній елемент з масиву і повертає його значення.
const arr8 = [1, 2, 3, 4, 5, 6];
const poppedElement = arr8.pop();

// 9. shift(): Видаляє перший елемент з масиву і повертає його значення.
const arr9 = [1, 2, 3, 4, 5];
const shiftedElement = arr9.shift();

// 10. unshift(): Додає один або кілька елементів в початок масиву і повертає нову довжину масиву.
const arr10 = [2, 3, 4, 5];
const newLength = arr10.unshift(1);

//???????????????????????? Функціональні методи масивів

// 1.forEach(): Виконує вказану функцію один раз для кожного елемента масиву.
const arr11 = [1, 2, 3];
arr11.forEach(item => console.log(item));

// 2. map(): Створює новий масив з результатами виклику вказаної функції для кожного елемента масиву.
const arr12 = [1, 2, 3];
const mappedArr = arr12.map(item => item * 2);

// 3. filter(): Створює новий масив, що містить всі елементи, для яких вказана функція повертає true.
const arr13 = [1, 2, 3, 4, 5, 6];
const filteredArr = arr.filter(item => item % 2 === 0);

// 4. every(): Перевіряє, чи задовольняють всі елементи масиву вказану умову.
const arr14 = [2, 4, 6, 8];
const isEven = arr14.every(item => item % 2 === 0);

// 5. some(): Перевіряє, чи хоча б один елемент масиву задовільняє вказану умову.
const arr15 = [1, 3, 5, 7, 8];
const hasEven = arr15.some(item => item % 2 === 0);

// 6. reduce(): Застосовує функцію до кожного елемента масиву, щоб отримати одне значення.
const arr16 = [1, 2, 3, 4];
const sum = arr16.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	0
);

// 7. reduceRight(): Застосовує функцію до кожного елемента масиву, починаючи з кінця, щоб отримати одне значення.7. reduceRight(): Застосовує функцію до кожного елемента масиву, починаючи з кінця, щоб отримати одне значення.
const arr17 = ['a', 'b', 'c'];
const concatenatedString = arr17.reduceRight(
	(accumulator, currentValue) => accumulator + currentValue
);

// 8. indexOf(): Повертає індекс першого збігу елемента у масиві. Якщо елемент не знайдено, повертає -1.
const arr18 = [1, 2, 3, 4, 5];
const index = arr18.indexOf(3);

// 9. lastIndexOf(): Повертає індекс останнього збігу елемента у масиві. Якщо елемент не знайдено, повертає -1.
const arr19 = [1, 2, 3, 4, 5, 3];
const lastIndex = arr19.lastIndexOf(3);
