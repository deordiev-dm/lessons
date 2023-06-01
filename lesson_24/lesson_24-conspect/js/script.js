// Строгий режим
"use strict"

// WINDOW

// Отримання ширини вікна браузера (в'юпорта)
/*
const windowWidth = window.innerWidth;
console.log(windowWidth);

// Отримання висоти вікна браузера (в'юпорта)
let windowHeight = window.innerHeight;
console.log(windowHeight);

if (windowWidth >= 768) {
	// якісь дії
}
*/

//BOM
//Navigator

// Дані про браузер
// console.log(navigator.userAgent);

// Який в нас браузер
/*if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}*/

// Платформа
// console.log(navigator.platform);

// Location
// Адресний рядок браузера
// console.log(location.href);

// Перенаправлення користувача
//location.href = location.href + '#popup';

// Alert
// alert('Повідомлення');

// Сonfirm
/*
let confirmAnswer = confirm("Запитання");
console.log(confirmAnswer);

if (confirmAnswer){
	//якщо так
}else{
	//якщо ні
}
*/

//Prompt
/*
let promptAnswer = prompt("Запитання");
console.log(promptAnswer);
*/

// Document Object Model
// Об'ектна модель документу

// Навігація по документу
// До тегу html
/*
const htmlElement = document.documentElement;
console.log(htmlElement);
*/
// До тегу head
/*
const headElement = document.head;
console.log(headElement);
*/
// До тегу body
/*
const bodyElement = document.body;
console.log(bodyElement);
*/

// Перший та останній дочірній елемент
/*
const bodyElement = document.body;
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild);
*/

/*
// Усі дочірні елементи (Колекція)
const bodyElement = document.body;

// Колекція дочірніх елементів
const childNodes = bodyElement.children;
console.log(childNodes);
*/
/*
for (let i = 0; i < childNodes.length; ++i) {
	console.log(childNodes[i]);
}
*/

// For ... of метод перебору для колекцій
/*
for (let childNode of childNodes) {
	console.log(childNode);
}*/


// Навігація до батьківських та сусідніх елементів
/*
const bodyElement = document.body;
const previousSibling = bodyElement.previousElementSibling;
console.log(previousSibling);

const headElement = document.head;
const nextSibling = headElement.nextElementSibling;
console.log(nextSibling);
*/


// !!! Найчастіше використовується !!!
// Плшук та отримання довільного елементу

/*
// Оримання першого знайденого об'єкту
const liElement = document.querySelector('li');
console.log(liElement);

// Оримання список (статична колекція)
// знайдених об'єктів
const liElements = document.querySelectorAll('li');
console.log(liElements);

liElements.forEach(item => {
	item.style.color = `red`;
});
*/

// Селектор класів
// !!! Обов'язково використовуємо крапку для імені класу
/*
const liElements = document.querySelectorAll('.list__item');
console.log(liElements);
*/

// Уточнення пошуку
/*
const liElements = document.querySelectorAll('.list__item.active');
console.log(liElements);
*/

// Усі об'єкти які мають в назві класу __item
/*
const liElements = document.querySelectorAll('[class*="__item"]');
console.log(liElements);
*/

// Селектор ID
/*
const someElement = document.querySelector('#some-id');
console.log(someElement);
*/


// Пошук батьківського об'єкту
/*
const someElement = document.querySelector('#some-id');
const parentElement = someElement.parentElement;
console.log(parentElement);
*/

// Closest
// (Перевірка наявності батьківського об'єкту)
// ! Шукає не тільки батьківський об'єкт
// а й перевіряє чи є вказаний селектор у самого об'єкту

/*
const someElement = document.querySelector('#some-id');
const parentElement = someElement.closest('main');
// const parentElement = someElement.closest('.list__item');
console.log(parentElement);

if (parentElement) {

} else {

}
*/


// Зміна документу
// const listItems = document.querySelectorAll('.list__item');

// innerHTML - дає змогу отримати те що всередені об'єкту
// включно з тегами.
// Також дозволяє перезаписувати контент в середені об'єкту
/*
listItems.forEach(listItem => {
	listItem.innerHTML = '<span>Привіт!</span>';
});*/


// textContent дає змогу отримати текст всередені об'єкту.
// Також дозволяє перезаписувати текст в середені об'єкту
/*
listItems.forEach(listItem => {
	listItem.textContent = '<span>Привіт!</span>';
});
*/

// Створення об'єктів
/*
let newObject = document.createElement('div');
newObject.innerHTML = `<span>Hi!</span>`;

const wrapper = document.querySelector('.wrapper');

// Вставка створеного об'єкту
// Перед
wrapper.before(newObject);
// Після
wrapper.after(newObject);
// Всередену на початок
wrapper.prepend(newObject);
// Всередену в кінець
wrapper.append(newObject);
*/


// insertAdjacentHTML/Text/Element
/*
const wrapper = document.querySelector('.wrapper');
*/
/*
"beforebegin" – вставити html безпосередньо перед wrapper,
"afterbegin" – вставити html на початок wrapper,
"beforeend" – вставити html в кінець wrapper,
"afterend" – вставити html безпосередньо після wrapper.
*/
/*
wrapper.insertAdjacentHTML("beforeend", `
	<div class="block">
		<div class="block__item">123</div>
	</div>
`);
*/

// Клонування елементу
// cloneNode - клонує сам об'єкт
// coneNode(true) - клонує об'єкт з вмістом
/*
const list = document.querySelector('.list');
const listClone = list.cloneNode(true);
console.log(listClone);
*/

// Видалення об'єкту
/*
const list = document.querySelector('.list');
list.remove();
*/

// Стилі та класи
// className classList

// className - перезапис класу
// const list = document.querySelector('.list');
/*
list.className = 'some-class';
*/

// classList - метод роботи з класами
// !!! НЕ використовуємо крапку для імені класу
// list.classList.add('some-class'); // - додаємо клас
// list.classList.remove('list_red'); // - видаляємо клас
// list.classList.toggle('active'); // - якщо клас є видаляємо якщо немає додаємо
// list.classList.contains('classname'); // - поверне true якщо клас є
/*
if (list.classList.contains('list_red')) {
	console.log('Класс є');
}
*/

// Управління стилями
// style
//const list = document.querySelector('.list');

//let newPadding = 10 + 15;

// Додати властивість
//list.style.paddingTop = `${newPadding}px`;

// Прибрати властивість
//list.style.paddingLeft = ``;

/*
// Перезапис стілів на вказані
list.style.cssText = `
	background-color: green;
	padding-left: 20px;
	color: red;
`;
// Змінюємо одину властивість
list.style.backgroundColor = "blue";
*/

// Отримання стилю (його значення)
// getComputedStyle
/*
const list = document.querySelector('.list');
const listStyle = getComputedStyle(list);
const listFontSize = parseFloat(listStyle.fontSize);
console.log(listFontSize);
*/

// Робота з атрибутами
/*
const list = document.querySelector('.list');
//Перевіряємо наявність атрибута.
list.hasAttribute('name');
//Получаємо значення атрибута.
list.getAttribute('name');
//Установлюємо значення атрибута.
list.setAttribute('name', 'value');
//Удаляємо атрибут.
list.removeAttribute('name');
*/

// DATA атирибути
// Завжди буде повертатись рядок
// Унарний оператор + переведе рядок в число
/*
let speed = list.dataset.speedAnim;
console.log(typeof speed);
console.log(speed);

list.dataset.speedAnim = 2000;
*/

// Корисні властивості
// const list = document.querySelector('.list');

// Отримання імені тегу
/*
console.log(list.tagName);

if (list.tagName === 'UL') {
	// ...
}
*/
/*
// Атрибут hidden
list.hidden = true;

if (!list.hidden) {

}
*/

// Розміри та кординати

// Розміри вікна браузера (з полосами прокрутки)
// об'єкт window
/*
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);
*/

// Розміри вікна браузера (без прокрутки)
// об'єкт body
// clientWidth clientHeight
/*
const mainElement = document.body;
const windowClientWidth = mainElement.clientWidth;
const windowClientHeight = mainElement.clientHeight;
console.log(windowClientWidth);
console.log(windowClientHeight);
*/

// Кількість прокручений пікселів
// об'єкт window
/*
const windowScrollTop = window.scrollY;
const windowScrollLeft = window.scrollX;
console.log(windowScrollTop);
console.log(windowScrollLeft);
*/

// window.scrollBy (left, top)
// прокрутка відносно поточного положення
/*
window.scrollBy(0, 50);
console.log(window.scrollY);
*/

// window.scrollTo({ options })
// прокрутка на вказані кординати
/*
window.scrollTo({
	top: 500,
	left: 0,
	behavior: "smooth"
});
*/

// elem.scrollIntoView();
// Проктурка до об'єкту
/*
const list = document.querySelector('.list');
function scrollToBlock(element) {
	element.scrollIntoView({
		"start", "center", "end". За замовчуванням "center".
		block: "center",
		"start", "center", "end" чи "nearest". За замовчуванням "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}
scrollToBlock(list);
*/

// Позиція об'єкта
// offsetLeft та offsetTop
// offsetParent - батьківський об'єкт
// (позиція CSS-свойства absolute, relative, fixed чи sticky)
// відносно якого рахується кординати
/*
const list = document.querySelector('.list');

const listLeftPos = list.offsetLeft;
const listTopPos = list.offsetTop;

console.log(listLeftPos);
console.log(listTopPos);
*/

// Кординати відносно вікна браузера
// getBoundingClientRect
/*
const list = document.querySelector('.list');
console.log(list.getBoundingClientRect().top);
console.log(list.getBoundingClientRect().left);
*/

// Загальні розміри елемента (без зовнішніх відступів)
// offsetWidth и offsetHeight
/*
const list = document.querySelector('.list');
console.log(list.offsetWidth);
console.log(list.offsetHeight);
*/

// Отримання об'екта по кординатам
// document.elementFromPoint(x, y);
/*
const elem = document.elementFromPoint(50, 0);
console.log(elem);
*/

/*
// Intersection Observer API
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/