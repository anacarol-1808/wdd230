const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

const modeButton = document.querySelector("#mode");
const main = document.querySelector("#main");
let heading = document.querySelector("main-h2-heading");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "✖";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
		modeButton.textContent = "🌙";
	}
});
