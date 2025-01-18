var globalVar = 10;

function varA() {
	var localVar = 5;
	let blockVar = `Я змінна в блоці`;
	const constVar = `Моє значення незмінне`;

	console.log(`globalVar: ${globalVar}`);
	console.log(`localVar: ${localVar}`);
	console.log(`blockVar: ${blockVar}`);
	console.log(`constVar: ${constVar}`);

	localVar = 20;
	blockVar = 'Я змінився';
	// const не дозволяє змінювати значення

	console.log(`localVar після зміни : ${localVar}`);
	console.log(`blockVar після зміни : ${blockVar}`);

	if (true) {
		let innerLet = 'Я тільки в цьому блоці';
		var innerVar = 'Я видима у функції';
		console.log(innerLet);
		console.log(innerVar);
	}
	// innerLet недоступна поза блоком
	console.log(innerVar);

	function letB() {
		let b = 5;
		console.log(`b всередині letB ${b}`);
	}

	letB();

	return { localVar, blockVar, constVar };
}

const result = varA();
console.log(`Результат виконання varA: `, result);

// Спроба доступу до локальних змінних за межами функції

// console.log(localVar); //  Помилка: localVar недоступна

// console.log(blockVar); // Помилка: blockVar недоступна

// console.log(constVar); // Помилка: constVar недоступна
