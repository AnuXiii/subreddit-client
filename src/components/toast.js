import Toastify from "toastify-js";

function toast(msg, color = "bg-primary") {
	document.querySelectorAll(".toastify").forEach((el) => el.remove());

	Toastify({
		text: msg,
		duration: 3000,
		gravity: "top",
		position: "left",
		className: color,
	}).showToast();
}

export { toast };
