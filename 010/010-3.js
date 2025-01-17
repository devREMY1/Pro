const p = new Promise(function (resolveCallback, rejectCallback) {
	let a = false;
	setTimeout(function () {
		if (a) {
			resolveCallback(a);
		} else {
			rejectCallback(a);
		}
	}, 2000);
});

p.then(function (boolean) {
	console.log(`Успішне виконання`);
}).catch(function (boolean) {
	console.error(`Відхилено! Виникла помилка `);
});
