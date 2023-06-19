// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/




/* Dark Mode setup */
const modeButton = document.querySelector("#mode");
const main = document.querySelector("#main");
const heading = document.querySelector("#heading");
const list = document.querySelector('#activity-list');
const information = document.querySelector('#information');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		heading.style.color = "#fff";
		list.style.color = "#fff";
		information.style.color = "#fff";
		modeButton.textContent = "✖";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
		heading.style.color = "#3E1F47";
		list.style.color = "#000";
		information.style.color = "#000";
		modeButton.textContent = "🌙";

	}
});
