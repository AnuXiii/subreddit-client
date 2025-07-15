const mainContainer = document.querySelector(".main");
const scrollRightBtn = document.getElementById("scroll-to--right");
const scrollLeftBtn = document.getElementById("scroll-to--left");

scrollRightBtn.addEventListener("click", scrollRight);
scrollLeftBtn.addEventListener("click", scrollLeft);

function scrollRight() {
	const num = mainContainer.getBoundingClientRect().width;
	mainContainer.scrollLeft += num;
}

function scrollLeft() {
	const num = mainContainer.getBoundingClientRect().width;
	mainContainer.scrollLeft -= num;
}

mainContainer.addEventListener("scroll", () => {
	const scrollLeft = mainContainer.scrollLeft;
	const scrollRight = mainContainer.scrollLeft + mainContainer.clientWidth;
	const scrollMax = mainContainer.scrollWidth;

	if (scrollLeft <= 0) {
		scrollLeftBtn.classList.add("disabled");
		scrollRightBtn.classList.remove("disabled");
	} else if (scrollRight >= scrollMax - 1) {
		scrollLeftBtn.classList.remove("disabled");
		scrollRightBtn.classList.add("disabled");
	} else {
		scrollLeftBtn.classList.remove("disabled");
		scrollRightBtn.classList.remove("disabled");
	}
});

function sectionScroller(section) {
	let isDown = false;
	let startY;
	let scrollTop;

	section.addEventListener("mousedown", (e) => {
		isDown = true;
		section.classList.add("dragging");
		startY = e.pageY - section.offsetTop;
		scrollTop = section.scrollTop;
	});

	section.addEventListener("mouseleave", () => {
		isDown = false;
		section.classList.remove("dragging");
	});

	section.addEventListener("mouseup", () => {
		isDown = false;
		section.classList.remove("dragging");
	});

	section.addEventListener("mousemove", (e) => {
		if (!isDown) return;
		e.preventDefault();
		const y = e.pageY - section.offsetTop;
		const walk = y - startY;
		section.scrollTop = scrollTop - walk;
	});
}

export { sectionScroller };
