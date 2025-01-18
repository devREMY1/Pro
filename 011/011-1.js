function outerFunction(callback) {
	let outerVariable = 'Я зовнішня змінна';
	console.log(outerVariable);
	function timeout() {
		setTimeout(function innerFunction() {
			let innerVariable = 'Я внутрішння змінна';
			callback(innerVariable);
		}, 2000);
	}

	timeout();
}

outerFunction(function (result) {
	console.log(result);
});
