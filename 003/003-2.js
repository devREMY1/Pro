function check() {
	let code = prompt('Введите две буквы номерного знака: \nПример: ВТ, АА')

	switch (code) {
		case 'ВТ':
			alert('Херсонська область')
			break
		case 'AA':
			alert('Киїськая область')
			break
		case 'АВ':
			alert('Вінницька область')
			break
		case 'АС':
			alert('Волинська область')
			break
		case 'АЕ':
			alert('Дніпропетровська область')
			break
		case 'АН':
			alert('Донецька область')
			break
		default:
			alert('Код не существует или не зарегистрирован.')
	}
}

check()
