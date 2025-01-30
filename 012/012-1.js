function calculateDiscount(discount) {
	const discountConvert = parseFloat(discount) / 100;

	return function (price) {
		return price * (1 - discountConvert);
	};
}

const result = calculateDiscount('20%');
console.log(result(100));
console.log(result(10));
console.log(result(200));
