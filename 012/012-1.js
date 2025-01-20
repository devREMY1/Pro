function claculateDiscount(discountPercentage) {
	return function (purchaseAmount) {
		return purchaseAmount * (discountPercentage / 100);
	};
}

const discount10 = claculateDiscount(10);
const discount20 = claculateDiscount(20);

console.log(discount10(100));
console.log(discount20(200));
