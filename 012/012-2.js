function createCounter() {
	let count = 0;
	return function () {
		count++;
		return count;
	};
}

const result = createCounter();
console.log(result());
console.log(result());
console.log(result());


