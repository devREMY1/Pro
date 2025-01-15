function cheaker(arg) {
	if (Number.isFinite(arg)) {
		console.log('Аргумент є числом');
	} else {
		console.log('Аргумент не є числом');
	}
}
cheaker(10);
cheaker('text');
