console.log(5 === '5'); // false, оскільки типи різні (число і рядок)
console.log(5 === 5); // true, оскільки значення і типи збігаються

console.log(5 == '5'); // true, оскільки рядок "5" приводиться до числа 5
console.log(5 == 5); // true, оскільки значення однакові

console.log(true == null); // false, оскільки true не приводиться до null
console.log(true === null); // false, оскільки різні типи

console.log(null == 0); // false, оскільки null приводиться до false, але 0 — це число
console.log(null === 0); // false, оскільки різні типи

console.log(false == 0); // true, оскільки false приводиться до 0
console.log(false === 0); // false, різні типи (boolean і number)

console.log(false == 0); // true, оскільки false приводиться до 0
console.log(false === 0); // false, різні типи (boolean і number)
