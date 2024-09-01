let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < numbers.length; i++) {
	if (Number.isInteger(numbers[i] / 2)) {
		console.log(`${numbers[i]} є парним числом`);
	} else {
		console.log(`${numbers[i]} є непарним числом`);
	}
}
