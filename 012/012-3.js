function createLogger() {
	let log = '';
	return function (message) {
		log += (log ? ' ' : '') + message;
		return log;
	};
}

const resultLogger = createLogger();
console.log(resultLogger('Andrew'));
console.log(resultLogger('hi'));
console.log(resultLogger('bro'));




