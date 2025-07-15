const emptyBox = document.querySelector(".empty-box");

function emptyBoxHandler(isHidden = false) {
	isHidden ? showEmptyBox() : hideEmptyBox();
}

function showEmptyBox() {
	emptyBox.classList.remove("scale-out");
	emptyBox.classList.add("scale-in");

	emptyBox.hidden = false;

	emptyBox.addEventListener(
		"animationend",
		() => {
			emptyBox.hidden = false;
		},
		{ once: true }
	);
}

function hideEmptyBox() {
	emptyBox.classList.remove("scale-in");
	emptyBox.classList.add("scale-out");

	emptyBox.addEventListener(
		"animationend",
		() => {
			emptyBox.hidden = true;
		},
		{ once: true }
	);
}

export default emptyBoxHandler;
