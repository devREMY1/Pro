// Об'єкт із інформацією про персонажа
const person = {
	name: 'Anti-Mag',
	universe: 'Dota 2',
	occupation: 'Carry',
	powers: [
		{
			name: 'Mana Break',
			description:
				"Passive ability that burns the enemy's mana with each hit and deals additional damage based on the amount of mana burned.",
		},
		{
			name: 'Blink',
			description:
				'Allows instant teleportation over a short distance, enabling Anti-Mag to quickly close in on or escape from enemies.',
		},
		{
			name: 'Counterspell',
			description:
				'Active ability that temporarily increases magic resistance and reflects the first spell back at the enemy caster.',
		},
		{
			name: 'Mana Void',
			description:
				"Ultimate ability that deals damage based on the target's missing mana, affecting nearby enemies as well. The lower the target’s mana, the higher the damage.",
		},
	],
};

class Character {
	constructor(name, universe, occupation, powers) {
		this.name = name;
		this.universe = universe;
		this.occupation = occupation;
		this.powers = powers;
	}

	introduce() {
		console.log(`Привіт, я ${this.name}!`);
	}

	showPowers() {
		console.log(`Суперсили персонажа ${this.name}:`);
		this.powers.forEach((power, index) => {
			console.log(`${index + 1}. ${power.name}: ${power.description}`);
		});
	}
}

const character = new Character(
	person.name,
	person.universe,
	person.occupation,
	person.powers
);

character.introduce();
console.log(`Всесвіт: ${character.universe}`);
console.log(`Роль: ${character.occupation}`);

character.showPowers();
