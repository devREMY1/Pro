const fruits = ['яблуко', 'банан', 'апельсин', 'груша', 'ківі'];

const sortedFruits = fruits.slice().sort();
console.log('Відсортований масив:', sortedFruits);

const fruitsString = sortedFruits.join(', ');
console.log('Рядок фруктів:', fruitsString);

const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log('Фрукти більше 5 літер:', longFruits);

const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('Фрукти у верхньому регістрі:', upperCaseFruits);

const fruitsReduced = fruits.reduce((acc, fruit) => acc + '-' + fruit);
console.log('Рядок із роздільником "-":', fruitsReduced);
