document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.burger-icon')) {
		document.documentElement.classList.toggle('menu-open');
		e.preventDefault();
	}

})