const baseURL = "index.html";

const linksURL = "data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.members[0].address);//testing only
    displayMembers(data);
}

getMembers();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".article-members-grid");

let index = 0;

function displayMembers(data) {
    (data.members).forEach(item => {
        // Create elements to add to the 'article' .grid element
        let box = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');

        // Give content to elements created
        logo.setAttribute('src', data.members[index].icon);
        logo.setAttribute('alt', data.members[index].logo);
        name.textContent = `${data.members[index].name}`;
        address.textContent = `${data.members[index].address}`;
        phone.textContent = `${data.members[index].phoneNumber}`;
        website.textContent = `${data.members[index].website}`;

        // Append the article with the newly created elements
        display.appendChild(box);
        box.appendChild(logo);
        box.appendChild(name);
        box.appendChild(address);
        box.appendChild(phone);
        box.appendChild(website);

        index++;
    });
}


gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("article-members-grid");
	display.classList.remove("article-members-list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("article-members-list");
	display.classList.remove("article-members-grid");
}


