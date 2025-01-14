// ??????????????? Вступ
const person = {
	name: 'Ruslan',
	age: 39,
	localtion: 'Ukraine',
	ocupation: 'Video Editor',
	workExperience: [
		{ title: 'Company A', from: '12-04-24', till: 'now' },
		{ title: 'Company B', from: '12-04-23', till: '12-04-24' },
	],
	greet: name => console.log(`Hello ${name}`),
};

// ?????????????????? Звернення до властивостей

console.log(person.name);
console.log(person['age']);

person.age = 27;
person.gender = 'male';

console.log(person);

// ?????????????????? Методи обʼєкта

console.log(person.greet('Andrew'));

// ????????????????? Створення за допомогою Object

// ?????????????? Створення обʼєктів через статичний метод Object.create()

const object = Object.create(person);
const anotherObject = Object.create(null);

console.log(object);
console.log(anotherObject);

console.log(object.hasOwnProperty('age'));

object.age = 50;
console.log(object);
console.log(object.age);
console.log(object.hasOwnProperty('age'));

// ????????????????? Видалення властивостей
delete object.age;
console.log(object);
console.log(object.age);
console.log(object.hasOwnProperty('age'));

// ??????????????? Перевірка наявності властивості у обʼєкті

console.log('x' in object);
console.log('b' in object);

object.x = undefined;
console.log(object.x);
console.log(object.y);

console.log('x' in object);
console.log('y' in object);

// ????????????? JSON та серіалізація обʼєктів
const person2 = {
	name: 'Bob',
	id: '123144214',
	age: 26,
	isStudent: false,
};

const personSerialized = JSON.stringify(person2);

console.log(personSerialized);
console.log(typeof personSerialized);

const personDeserialized = JSON.parse(personSerialized);

console.log(personDeserialized);
console.log(typeof personDeserialized);
