let message;

let login = prompt('Співробітник, Директор, Немає логіна');

// if (login == 'Співробітник') {
// 	message = 'Привіт';
// } else if (login == 'Директор') {
// 	message = 'Привіт';
// } else if (login == '') {
// 	message = 'Немає логіна';
// } else {
// 	message = '';
// }

let ms =
	login == 'Співробітник' || login == 'Директор'
		? alert('Привіт')
		: alert('Немає логіна');
