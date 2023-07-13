const baseURL = "https://anacarol-1808.github.io/wdd230/chamber/index.html";

const linksURL = "https://anacarol-1808.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.members[0].logo);
    //displayMembers(data);
}

getMembers();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

let index = 0;

function displayMembers(data) {
    data.forEach(item => {
        // Create elements to add to the 'article' .grid element
        let box = document.createElement('section');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');

        // Give content to elements created
        logo.setAttribute('src', data.members[index].website);
        logo.setAttribute('alt', data.members[index].logo)
    });
}


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


