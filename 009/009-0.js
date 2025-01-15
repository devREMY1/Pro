// ????????? Функції

// function "ідентифікатор" (аргументи) {
//   інструкції;
//   інструкції;
//   return вираз;
// }

// Оголошення фунції
function greet(name) {
	return `hello, ${name}!`;
}

// Виклик функції
console.log(greet('Andrew').toUpperCase());

// ????????????????? Function Declaration vs Function Initialization

let func = function (num) {
	return 2 + num;
};
console.log(func(10));

// ?????????????? Функції як значення і як обʼєкти

const myFunction = function (innerFunction) {
	const myTestValue = 'John';

	console.log(`this is my function`);
	console.log(`this is ineerFunction: ${innerFunction}`);
	console.log(
		`this is what returns from innerFuntion: ${innerFunction(myTestValue)}`
	);

	return function (arg) {
		`this function now will call the function, that was passed into myFunction`;
		innerFunction(arg);
	};
};

const generatedFunction = myFunction(greet);
console.log(generatedFunction('Bob'));

// ??????????? Анонімна самовикликаючася функція

(function (params) {
	console.log(params);
})('parameter 1');

// Примечание: "Подобный массиву" означает, что arguments имеет свойство length, а элементы индексируются начиная с нуля. Но при этом он не может обращаться к встроенным методам Array, таким как forEach() или map().
