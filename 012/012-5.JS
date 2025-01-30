function multiplyBy(multiply) {
	return function (value) {
		return multiply + value;
	};
}

const result = multiplyBy(10);
console.log(result(12));
