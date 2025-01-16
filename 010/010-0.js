function myPhone(reasonForCall) {
	return `
  -Hi, it's Andrii speaking. How may I help you ?
  -${reasonForCall}.
  -Oh, okay, I go you. Thanks for your call!
  `;
}

function applyForJob(callback) {
	console.log(
		'Thanks for you application, we call you back with our response in couple of seconds'
	);
	setTimeout(function () {
		console.log(callback('You`re hired'));
	}, 3000);
}

applyForJob(myPhone);

// ??????????? Практичні приклади використання

function doSomething(callback) {
	console.log('Виконується перше дійство...');
	// передаємо управління в іншу функцію

	callback();
}

function doSomethingElse() {
	console.log('Виконується друге дійство...');
}

doSomething(doSomethingElse);

const p = new Promise(function (resolveCallback, rejectCallback) {
	let a = 4;
	setTimeout(function () {
		if (a > 5) {
			resolveCallback(a);
		} else {
			rejectCallback(a);
		}
	}, 3000);
});

p.then(function (value) {
	console.log(`value was ${value}`);
}).catch(function (value) {
	console.error(
		`Wrong number: expected value bigger than 5, received value ${value}`
	);
});
