function createLogger(initialLog = '') {
	let log = initialLog;

	return function (newMessage) {
		if (log) {
			log += ' ';
		}
		log += newMessage;
		return log;
	};
}

const logger = createLogger();

console.log(logger('Перший запис'));
console.log(logger('Другий запис'));
console.log(logger('Третій запис'));

const anotherLogger = createLogger('Старт');
console.log(anotherLogger('Додано'));
console.log(anotherLogger('Ще запис'));
