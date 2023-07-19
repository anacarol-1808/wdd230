const date = new Date();
let day = date.getDay();
//console.log(day);

const banner = document.querySelector('.banner');
const closeButton = document.querySelector("#close-x");


if (day == 1 | day == 2 | day == 3) {
	closeButton.addEventListener("click", () => {
		if (closeButton.textContent.includes("📅")) {
			banner.style.display= "block";
			closeButton.textContent = "✖";
		} else {
			banner.style.display = "none";
			closeButton.textContent = "📅";
		}
	});
} else {
	banner.style.display = "none";
	closeButton.style.display = "none";
}
