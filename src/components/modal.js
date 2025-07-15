const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.querySelector(".modal");

let isOpen = false;

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function openModal() {
	modal.hidden = false;
	modal.classList.remove("fade-out");
	modal.classList.add("fade-in");
	document.body.classList.add("overflow-hidden");
	document.getElementById("subreddit-input").focus();
	isOpen = true;
}

document.addEventListener("keydown", (e) => {
	if (isOpen && e.key === "Escape") {
		closeModal(e);
	}
});

function closeModal(e) {
	if (e.target === modal || e.target.closest("#close-modal") || e.key === "Escape") {
		modal.classList.remove("fade-in");
		modal.classList.add("fade-out");
		modal.addEventListener(
			"animationend",
			() => {
				modal.hidden = true;
				document.body.classList.remove("overflow-hidden");
				modal.classList.remove("fade-out");
				isOpen = false;
			},
			{ once: true }
		);
	}
}

export { openModalBtn, closeModalBtn };
