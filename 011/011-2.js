console.log(regularFunction());

try {
	console.log(functionExpression);
} catch (error) {
	console.log(error.message);
}

function regularFunction() {
	return `Це звичайна функція`;
}

const functionExpression = function () {
	return `Це функціональний вираз`;
};

console.log(regularFunction());
console.log(functionExpression());
