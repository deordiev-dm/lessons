"use strict";
document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest(".burger-menu")) {
		document.documentElement.classList.toggle("menu-open");
		e.preventDefault();
	}
});

document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest(".search-bar-header__label")) {
		document.documentElement.classList.toggle("search-open");
		e.preventDefault();
	}
});

// ================================= //
// !BOM - Browser Object Model
// ?navigator object
// console.log(navigator.userAgent);
// console.log(navigator.language);
// ?location object
// let myAddress = location.href;
// console.log(myAddress);
// myAddress = "google.com"; // changed only the variable
// location.href = "https://www.google.com/";
// location.href = "http://127.0.0.1:5500/#hash"

// ? alert - message
// alert("Hello!");

// ? confirm - gets true or false from the user
// let userAnswer = confirm("press OK if you want to leave the site");
// if (userAnswer) location.href = "https://www.google.com/";

// ? prompt - gets a string from a user
// let userAnswerName = prompt("Say your name");
// console.log(userAnswerName);

// !DOM - Document Object Model
// *navigation withhin document
// const htmlElement = document.documentElement;
// console.log(htmlElement);

// const headElement = document.head;
// console.log(headElement);

// const bodyElement = document.body;
// console.log(bodyElement);

// const mainElement = document.main;
// console.log(mainElement); // !undefined

// console.log(document.body.firstElementChild) // wrapper
// console.log(document.body.lastElementChild); // script
// console.log(document.body.firstElementChild.firstElementChild); // так робити можна

// const wrapperChildren = document.body.firstElementChild.children;
// console.log(wrapperChildren); // ! dynamic collection

// for (const element of wrapperChildren) {
// 	console.log(element);
// 	console.log(typeof element); // object
// }

// const bodyElement = document.body;
// console.log(bodyElement.parentElement); // html
// console.log(bodyElement.previousElementSibling); // head
// console.log(bodyElement.nextElementSibling); // null

// const cardElement = document.querySelector(".articles-page__item");
// console.log(cardElement);

// const cardElements = document.querySelectorAll(".articles-page__item");
// console.log(cardElements); // ! static collection

// cardElements.forEach((item) => {
// 	item.style.backgroundColor = `rgba(0, 50, 210, 0.5)`;
// });

// console.log(document.querySelectorAll("img"));
// const authorElement = document.querySelector(".item-articles__author");
// let authorElementParent = authorElement.closest(".articles-page__item");
// console.log(authorElementParent);

// document.querySelector(".header__container").innerHTML = `<p>Привіт</p>
// <p>І вітаємо в сім'ї Los Pollos Hermanos</p>
// <p>Мене звати Густаво, але ви можете називати мене просто Гас</p>`;

// const userName = prompt("Enter your name below:");
// const titleOfThePage = document.querySelector(".body-content__title a");
// titleOfThePage.textContent = `${userName}, ти сонечко!`;

// ! create element
// let newObject = document.createElement(`div`);
// newObject.innerHTML = `
// <span>Hello World!</span>
// <p>lorem ipsum dolor</p>`;

// ! add element
// let cardElement = document.querySelector(`.articles-page__item`);
// cardElement.before(newObject);
// cardElement.after(newObject);
// cardElement.prepend(newObject);
// cardElement.append(newObject);

//! beforebegin, afterbegin, beforeend, afterend
// cardElement.insertAdjacentHTML(
// 	"beforeend",
// 	`
// <h2>Hello, World!</h2>
// <p>Lorem ipsum dolor sit amet.</p>`
// );
// виходить що це те саме додавання коду, але тепер його не потрібно окремо виводити в змінну, менше коду

// !insertAdjacentText OR insertAdjacentElement

// clone object
// let cardElement = document.querySelector(`.travel__item`).cloneNode();
// console.log(cardElement);

// let anotherCardElement = document.querySelector(`.travel__item`).cloneNode(1);
// console.log(anotherCardElement);

// document.querySelector(`.articles-page__item`).remove();

// let cardElement = document.querySelector(`.articles-page__item`).className;
// console.log(cardElement);

// document.querySelector(`.articles-page__item`).className = `some-class`; // ! cannot add another class or remove
// document.querySelector(`.articles-page__item`).classList.add(`another-class`);
// document.querySelector(`.articles-page__item`).classList.remove(`item-articles`);
// document.querySelector(".articles-page__item").classList.toggle("hello", window.innerWidth > 700);

// const fontSize = 36 / 16;

// const mainTitle = document.querySelector(`.body-content__title a`);
// mainTitle.style.fontSize = `${fontSize}rem`;

//! перезапис стилів, усі інші стираються
// mainTitle.style = `
// color: yellow;
// padding-top: 10px;
// `;

// mainTitle.style.display = `inline-block`;
// mainTitle.style.paddingTop = `150px`;
//! cancelation
// mainTitle.style.paddingTop = ``;

// const styles = getComputedStyle(mainTitle);
// console.log(styles);
// const headingDisplay = styles.display;
// console.log(headingDisplay);

// !Домашка
// const bodyElement = document.body;

// !Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

// let addList = (numberOfLi = 3) => {
// 	let list = document.createElement("ul");
// 	for (let i = 0; i < numberOfLi; i++) {
// 		list.insertAdjacentHTML(
// 			"beforeend",
// 			`
// 			<li>Пункт списку №${i + 1}</li>
// 			`
// 		);
// 	}
// 	document.body.insertAdjacentElement("afterbegin", list);
// };

// !Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тексту зелений.

// let bodyElement = document.body;
// bodyElement.classList.add(`loaded`);

// if (bodyElement.classList.contains(`loaded`)) bodyElement.style.color = `green`;

// !Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// const itemElements = document.querySelectorAll(`.item`);
// for (let i = 1; i <=	 itemElements.length; i++) {
// 	itemElements[i - 1].classList.add(`active`);
// 	itemElements[i - 1].textContent = `Елемент №${i}`;
// }

// !Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

// const button = document.querySelector(`.button`);
// let scrollToElement = (element) => {
// 	element.scrollIntoView({
// 		block: "center",
// 		inline: "nearest",
// 		behavior: "smooth",
// 	});
// };

// scrollToElement(button);

// !Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// const link = document.querySelector(`.link`);
// let number = +link.dataset.number;
// if (number < 200) link.style.color = `red`;

// const mainElement = document.querySelector(`main`);
// console.log(mainElement.firstChild);
// console.log(mainElement.firstElementChild);
// console.log(mainElement.children);
// console.log(mainElement.childNodes);
// console.log(mainElement.hasChildNodes());
