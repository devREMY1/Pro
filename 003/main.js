let milk =
	'Рецепт с молоком: смешайте 200 мл молока с 2 яйцами, добавьте 100 г муки и 50 г сахара.'

let notmilk = 'Рецепт без молока: смешайте 2 яйца с 100 г муки и 50 г сахара.'

function verificatio() {
	alert(
		'Выберите какой рецепт вам больше подходит!\n1)Рецепт с молоком\n2)Рецепт без молока'
	)
	let userInput = prompt('Выберите рецепт 1 или 2:')
	let numberInput = parseFloat(userInput)

	if (numberInput == 1) {
		alert(milk)
		comment()
	} else if (numberInput == 2) {
		alert(notmilk)
		comment()
	} else if (numberInput == 0) {
		alert('Грустно что ты уходишь :(')
		return
	} else {
		alert(
			'Вы ввели не число или отменили ввод.\nПопробуйте ещё раз!\n\nДля завершения работы введите 0'
		)
		verificatio()
	}
}

function comment() {
	let commentInput = prompt('Оставте свой отзыв: ')
	let inputLength = commentInput.length
	let isOnlyNumbers = /^[0-9]+$/.test(commentInput)

	if (inputLength < 4) {
		alert('Вы ввели слишком короткий комментарий. Попробуйте снова.')
		comment()
	} else if (isOnlyNumbers) {
		alert('Комментарий не может состоять только из чисел. Попробуйте снова.')
		comment()
	} else {
		alert('Спасибо за ваш отзыв!\n' + commentInput)
		saveComment(commentInput)
	}
}

function saveComment(comment) {
	let comments = JSON.parse(localStorage.getItem('comments')) || []

	comments.push(comment)

	localStorage.setItem('comments', JSON.stringify(comments))

	displayComments()
}

function displayComments() {
	let comments = JSON.parse(localStorage.getItem('comments')) || []

	let commentsList = document.getElementById('commentsList')

	commentsList.innerHTML = ''

	comments.forEach(comment => {
		let listItem = document.createElement('li')
		listItem.textContent = comment
		commentsList.appendChild(listItem)
	})
}

window.onload = function () {
	displayComments()
	verificatio()
}
