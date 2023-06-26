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

/*Using localStorage to store the latest visit date by the client, 
display one of three possible messages about the time between page visits in the sidebar content area.
- If this is the user's first visit, display "Welcome! Let us know if you have any questions.".
- If the amount of time between visits is less than a day, display "Back so soon! Awesome!".
- Otherwise, display the number of days in a message like this: 
"You last visited n days ago.", where n is the actual, whole number of days between visits. 
If the number of days is 1, then change the language to "day" not "days".*/

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const theDateToday = new Date();
// initialize display elements
let messageElement = document.querySelector('#message');
// processing
const today = Date.now();


let date = localStorage.setItem('dateNow', '0');
console.log(date);
let numberedKey = Number(date.key());


if (numberedKey == null | numberedKey == 0) {
	messageElement = 'Welcome! Let us know if you have any questions.';
	//Maybe you could set the local storage again once 
}
if (numberedKey > 0) {
	let timePassed = today - numberedKey;
	if (timePassed < 84600000) {
		messageElement = 'Back so soon! Awesome!';
	}
	else {
		let numberOfDays = timePassed / 84600000;
		if (numberOfDays <= 1) {
			messageElement = 'You last visited' + `${numberOfDays}` + 'day ago.';
		}
		else {
			messageElement = 'You last visited' + `${numberOfDays}` + 'days ago.';
		}		
	}
}

