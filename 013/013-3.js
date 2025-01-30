const person = {
	name: 'Andrew',
	age: 22,
};
function updateUserInfo(person, newName) {
	return { ...person, name: newName };
}

console.log(updateUserInfo(person, 'Alice'));
console.log(person);
