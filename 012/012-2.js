function createCounter() {
	let counter = 0;

	return function () {
		counter++;
		return counter;
	};
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
