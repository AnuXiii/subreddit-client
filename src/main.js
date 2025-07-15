import loadTheme from "./theme/toggleTheme";
import { loadSubreddits } from "./localStorage/localStorage";

window.addEventListener("load", () => {
	loadTheme();
	loadSubreddits();
});
