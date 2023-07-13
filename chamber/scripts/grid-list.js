const baseURL = "https://anacarol-1808.github.io/wdd230/chamber/index.html";

const linksURL = "https://anacarol-1808.github.io/wdd230/data/links.json";








const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


