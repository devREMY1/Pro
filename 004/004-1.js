let bool = true;
let countF = 1;
let countS = 1;

while (bool) {
	console.log(countF + ' x ' + countS + ' = ' + countF * countS);
	countS++;
	if (countS === 11) {
		countF++;
		countS = 1;
	}
	if (countF === 11) {
		break;
	}
}

