// ????????????????? Приведення та перетворення типів

console.log(4 + '2');
console.log(typeof (4 + '2'));

console.log('5' * '4');
console.log(typeof ('5' * '4'));

console.log('5' == 5); //true
console.log('0' == false); //true
console.log(0 == false); //true
console.log('5' == true); //false
console.log('' == false); //true
console.log(null == false); //false
console.log(null == true); //false
console.log(undefined == false); //false
console.log(undefined == true); //false
console.log(undefined == null); //true

//??????????????????? Явне перетворення типів

Number('1024');
String(891234);
Boolean(5);

+'1024';
891234 + '';
!!5;
!!0;

let number = 22;
number.toString();
number.toString(16);

true.toString();

console.log(parseInt('678 px'));
console.log(parseInt('678.23 px'));
console.log(parseInt('yo 678 px'));

console.log(+'678 px');
console.log(parseInt('678 px'));

String(Infinity);
String(NaN);

console.log(+'');

console.log(!!'');
console.log(!!NaN);
console.log(!!0);
console.log(!!null);
console.log(!!undefined);

console.log(+true);
console.log(+false);

let a = 5;
console.log(a.value);

5;
toString();
'hello'.at(0);

console.log(null.value);

