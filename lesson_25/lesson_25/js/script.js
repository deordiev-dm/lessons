// ! Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

document.addEventListener("click", clickActions);

function clickActions(e) {
	e.target.classList.contains("item")
		? e.target.classList.toggle("active")
		: null;
}

// ! Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.addEventListener("load", pageLoaded);
const bodyElement = document.body;

function pageLoaded(e) {
	bodyElement.classList.add("loaded");
}

// ! Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const headerElement = document.querySelector("header");
const footerElement = document.querySelector("footer");

headerElement.addEventListener("mouseenter", headerActions);
headerElement.addEventListener("mouseleave", headerActions);

function headerActions(e) {
	if (e.type === "mouseenter") footerElement.classList.add("new-bg");
	else if (e.type === "mouseleave") footerElement.classList.remove("new-bg");
}

// ! Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item
// виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

const target = document.querySelector("[data-interval]");
const targetText = target.textContent;

let i = 1;
target.textContent = `${targetText} ${i}`;
const endTimer = target.dataset.finishPoint;
const intervalTimer = target.dataset.interval;
// data-interval="1000" data-finish-point="10"

// Intersection Observer API

let options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.3,
};

let callback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const timer = setInterval(() => {
				++i <= endTimer
					? (target.textContent = `${targetText} ${i}`)
					: clearInterval(timer);
			}, intervalTimer);
		}
	});
};

let observer = new IntersectionObserver(callback, options);
observer.observe(target);

// ефект паралаксу
const backgroundImage = document.querySelector("img");
window.addEventListener("scroll", parallaxEffect);

function parallaxEffect(e) {
	backgroundImage.style.cssText = `transform: translateY(${0.7 * scrollY}px);`;
}
