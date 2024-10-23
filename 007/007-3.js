let fruits = ['яблуко', 'банан', 'апельсин', 'груша', 'ківі'];

// sort
let sortFruits = [...fruits].sort();
console.log(sortFruits);

// join
let joinFruits = fruits.join(',');
console.log(joinFruits);

// filter
let filterFruits = fruits.filter(item => item.length === 5);
console.log(filterFruits);

// map
let mapFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(mapFruits);

// reduce
let reduceFruits = fruits.reduce((accumulator, currentValue) => {
	return accumulator + '-' + currentValue;
});
console.log(reduceFruits);
