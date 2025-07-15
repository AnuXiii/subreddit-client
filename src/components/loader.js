function Loader(parent, isLoading = false) {
	const existingLoader = parent.querySelector(".loader");

	if (!isLoading) {
		existingLoader ? existingLoader.remove() : "";
		return;
	}

	if (existingLoader) return;

	const loader = document.createElement("div");
	loader.className = "loader";
	loader.innerHTML = `<div class="spin"></div>`;

	const computedStyle = window.getComputedStyle(parent).position;

	if (computedStyle !== "relative" && computedStyle !== "absolute") {
		parent.style.position = "relative";
	}

	parent.appendChild(loader);
}

export default Loader;
