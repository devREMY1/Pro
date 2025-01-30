function generateUniqueId(length) {
	let counter = 0;
	return function () {
		counter++;
		const chars = 'abcdefghijklmnopqrstuvwxyz0123456789!?@';
		let result = '';

		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * chars.length);
			result += chars[randomIndex];
		}
		return result + counter;
	};
}

const randomId = generateUniqueId(8);
console.log(randomId());
console.log(randomId());
console.log(randomId());
