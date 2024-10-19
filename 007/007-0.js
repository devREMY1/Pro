//
let courses = ['Front-end Basic', 'Front-end Pro', 'Front-end Guru'];

//
courses[20] = 'Front-end EZ';

//
courses[courses.length] = 'Node.js';
console.log(courses);
console.log(typeof courses);

//
courses['secretCourse'] = 'Secret Course';
console.log(courses);
console.log(courses.length);

// Перевірка, що певна структура є масивом (спеціальний метод isArray())
console.log(Array.isArray(courses));

// Об'єднує всі елементи масиву в рядок, розділяючи їх вказаним роздільником.
const arrJoin = ['Hello', 'World', '!'];
const joinArr = arrJoin.join(' ');
console.log(joinArr);

// Змінює порядок елементів масиву на зворотний.
const arrReverse = [1, 2, 3, 4, 5];
console.log(arrReverse.reverse());

// Сортує елементи масиву за їхніми значеннями (за замовчуванням у лексикографічному порядку).
const arrSort = ['Hello', 'World', '!'];
console.log(arrSort.sort());

// Повертає новий масив, що складається з поєднання поточного масиву та інших масивів або значень.
const arrConcat1 = ['Hello', 'World', '!'];
const arrConcat2 = ['Big', 'Planet'];
console.log(arrConcat1.concat(arrConcat2));

//  Повертає зазначений фрагмент масиву, не змінюючи його.(Кінцевий індекс не включається в новий масив)
const arrSlice = [1, 2, 3, 4, 5];
console.log(arrSlice.slice(1, 3));

//  Змінює вміст масиву, додаючи, видаляючи або замінюючи елементи.Видаляє один елемент починаючи з індексу arr.splice(start-index, deleteCount);
const arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(2, 1);
console.log(arrSplice);
console.log(arrSplice.length);

//  Додає один або кілька елементів в кінець масиву і повертає нову довжину масиву
const arrPush = [1, 2, 3, 4, 5];
arrPush.push(6, 7);
console.log(arrPush);
console.log(arrPush.length);

//  Видаляє останній елемент з масиву і повертає його значення.
const arrPop = [1, 2, 3, 4, 5];
console.log(arrPop);
console.log(arrPop.pop());
console.log(arrPop);
console.log(arrPop.length);

// Видаляє перший елемент з масиву і повертає його значення.
const arrShift = [1, 2, 3, 4, 5];
console.log(arrShift);
console.log(arrShift.shift());
console.log(arrShift);
console.log(arrShift.length);
// Додає один або кілька елементів в початок масиву і повертає нову довжину масиву.
console.log(arrShift.unshift(1));
console.log(arrShift);
console.log(arrShift.length);

//  Виконує вказану функцію один раз для кожного елемента масиву.
const arrForEach = [1, 2, 3, 4, 5];
arrForEach.forEach(item => console.log(item));

// Створює новий масив з результатами виклику вказаної функції для кожного елемента масиву.
const arrMap = [1, 2, 3];
const mapArr = arrMap.map(item => item * 2);
console.log(arrMap, mapArr);

//  Створює новий масив, що містить всі елементи, для яких вказана функція повертає true.
const arrFilter = [1, 2, 3, 4, 5];
const filterArr = arrFilter.filter(item => item % 2 === 0);
console.log(filterArr);

//  Перевіряє, чи задовольняють всі елементи масиву вказану умову.
const arrEvery = [2, 4, 6, 8];
const everyArr = arrEvery.every(item => item % 2 === 0);
console.log(everyArr);

// Перевіряє, чи хоча б один елемент масиву задовільняє вказану умову.
const arrSome = [1, 2, 3, 4, 5];
console.log(arrSome.some(item => item % 2 === 0));

// Застосовує функцію до кожного елемента масиву, щоб отримати одне значення.
const arrSum = [1, 2, 3, 4, 5];
console.log(
	arrSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
);
// accumulator — це змінна, в якій зберігається результат обчислень на кожному кроці.
// currentValue — це поточний елемент масиву, над яким працює reduce().

// Застосовує функцію до кожного елемента масиву, починаючи з кінця, щоб отримати одне значення.
const arrReduceRight = ['a', 'b', 'c'];
console.log(
	arrReduceRight.reduceRight(
		(accumulator, currentValue) => accumulator + currentValue
	)
);

// Повертає індекс першого збігу елемента у масиві. Якщо елемент не знайдено, повертає -1.
const arrIndexOf = [1, 2, 3, 4, 5, 3];
console.log(arrIndexOf.indexOf(3));

//  Повертає індекс останнього збігу елемента у масиві. Якщо елемент не знайдено, повертає -1.
const arrLastIndexOf = [1, 2, 3, 4, 5, 3];
console.log(arrLastIndexOf.lastIndexOf(3));
