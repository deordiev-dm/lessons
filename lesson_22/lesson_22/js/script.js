"use strict"
/*
const color = "red";
let myName = "dima";
console.log(myName);

if (10>0) {
	myName = "vasya";
	console.log(myName);
};

myName = "eminem";
console.log(myName);
console.log(color);
*/

// помилка
// let num = 12d;

// немає помилки
// let num = "12d";


// інкремент та декремент

/*
let a = 0;
let b = a++;
console.log(`a = ${a}`); // a = 1  
console.log(`b = ${b}`); // b = 0
*/

/*
let a = 0;
let b = ++a;
console.log(`a = ${a}`); // a = 1  
console.log(`b = ${b}`); // b = 1
*/

/*
console.log(Boolean(0));
console.log(!!0);
*/

// Оператор порівняння з null/undefined
/*
let someVar; // undefined
let someOtherVar = null; // null
console.log(someVar ?? someOtherVar); // null
console.log(1 ?? someVar); // 1
console.log(someOtherVar ?? 1); // 1
*/

// Домашка з уроку 5 на каналі
/*
console.log('35' + - '22'); // 35-22

console.log("35" * "22"); // 770

console.log("58" > 22++); // error - інкремент використовуємо зі змінними

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers); // 0

console.log(!false && 11 || 18 && !""); // 11

let name = 0;
console.log(name ?? "Без ім'я"); // 0
*/

// задаємо значення змінній після об'яви
let userNameOne;
userNameOne = "Dimitri";

// задаємо значення під час об'яви
let userNameTwo = "Dimitri";

// перезапис значення у змінній
let myAge = 20;
console.log(myAge = 2025-2002);

// копіювання значення змінної у іншу змінну
let myNewAge = myAge;
console.log(myNewAge);

if (3>0) {
	myNewAge = 30;
	console.log(`Мій вік ${myNewAge}`);
}

console.log(myNewAge);

let someValue = 10;
console.log(someValue);

if (10 - 1 == 9) {
	let someValue = 2;
	console.log(someValue);
}

console.log(someValue);

const MY_CAT_NAME = "Peach";
const myCatColor = "Orange"

// myCatColor = "Brown" error 

console.log(myCatBreed);
var myCatBreed;

let a = "hello";
console.log(typeof a);

let b = 20;
console.log(typeof b);

let c;
console.log(typeof c); // undefined

console.log(typeof variableDontExist); // undefined

let d = null;
console.log(d)
console.log(typeof d) // object

let e = 10 > 2;
console.log(e); // true
console.log(typeof e); // boolean

let f = 0/0; 
console.log(f); // NaN
console.log(typeof f); // number

let g = 10/0;
console.log(g); // Infinity
console.log(typeof g); // number

let g1 = -10/0;
console.log(g1); // -Infinity
console.log(typeof g1); // number

let g2 = Infinity/Infinity; 
console.log(g2); //NaN

let g3 = 0*Infinity;
console.log(g3); //Nan

let v1 = 0;
console.log(Boolean(0)); //false
console.log(!!v1); // false
console.log(Function(v1));
console.log(String(v1)); // "0"

let v2;
console.log(!!0); //false
console.log(!!null); //false
console.log(!!v2); // false, bc variable is undefined
console.log(!!(20 / 0)); // true
console.log(!!(10 * "abc")); // false, bc NaN
console.log(!!("")); // false, bc sting is empty
console.log(!!(" ")); // true, bc of the space

// Основні методи рядків
let string_1 = 
"Собака любить м'ясо, ворона любить сир, а я люблю бавовну з доставкою на Крим!";

console.log(string_1.length); // 78
console.log(string_1[0]); // C
console.log(string_1[10]); // и
console.log(string_1[1001]); // undefined
console.log(string_1[-1]); // undefined

let stringUpperCase = string_1.toUpperCase();
console.log(stringUpperCase);

let stringLowerCase = string_1.toLowerCase();
console.log(stringLowerCase);

// пошук у рядку
console.log(string_1.includes('Крим')); // true

// JS is case-dependent
console.log(string_1.startsWith('С')); // true
console.log(string_1.startsWith('с')); // false 

console.log(string_1.endsWith('!')); // true

let stringSlice = string_1.slice(10, 22);
console.log(stringSlice); // ить м'ясо, в

let stringReplace = string_1.replace("Крим", "москву");
console.log(stringReplace);

// Основні методи чисел
console.log(Math.floor(54.9)); // 54
console.log(Math.ceil(342.001)); // 343
console.log(Math.round(67.50)); // 68
console.log(Math.round("23.4")); // 23
console.log(Math.round("23.o")); // NaN
console.log(Math.round(true)); // 1 
console.log(Math.round(1/0)); // Infinity
console.log(Math.abs(-12.3)); // 12.3
console.log(Math.random()); // випадкове число від 0 до 1
let v3 = 2;
let v4 = Infinity;
let v5 = 20 * "string2"; // NaN
let v6 = null;
let v7 = 231.2;
let v8 = -12.4
let v9 = "1200"
console.log(Math.max(v3, v4, v5, v6, v7, v8, v9)); //NaN
console.log(Math.max(v3, v4, v6, v7, v8, v9)); // Infinity
console.log(Math.max(v3, v6, v7, v8, v9)); // 1200
console.log(Math.max(v3, v6, v7, v8)); // 231.2

console.log(Math.min(v3, v4, v5, v6, v7, v8, v9)); //NaN
console.log(Math.min(v3, v4, v6, v7, v8, v9)); // -12.4
console.log(Math.min(v3, v4, v6, v7, v9)); // 0

let maxWidthPx = "1270.5px";
let maxWidth = parseFloat(maxWidthPx);
console.log(maxWidth); // 1270.5

let columnGap = "column-gap: 30px";
console.log(columnGap = parseInt(columnGap)); // NaN

console.log("20" - "32"); // -12
console.log("13" - Infinity); // -Infinity
console.log("12.9089" * "007.213"); // 93.11189569999999
console.log(12 / (10 < 9)); // Infinity
console.log("12" + 2 + 19); // 12219
console.log(+"12" + 2 + 19); // 33
