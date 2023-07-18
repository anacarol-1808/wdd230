// On the home page use your JSON data source of members to supply two to three 'spotlight' advertisements 
// for the chamber members who have silver or gold membership levels only.
// The home page should randomly load different, qualified members.


const baseURL = "index.html";
const linksURL = "data/members.json";

const division = document.querySelector("#spotlightAdv");

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);//testing only
    getLenght(data);
    displayMembers(data);
}

getMembers();

let lenght = 0;

function getLenght(data) {
    (data.members).forEach(item => {
        lenght++;
    });
    console.log(`This is lenght ${lenght}`);
}   

let index = 1;

function displayMembers(data) {
    //getting random position 
    let number = Math.random() * (lenght-1);
    let numberRound = Math.round(number);
    console.log(numberRound);
    console.log(data.members[0].membership);

    if (data.members[numberRound].membership == 'gold' | data.members[numberRound].membership == 'silver') {
        let heading = document.createElement('h3');
        let paragraph = document.createElement('p');

        heading.textContent = '${data.members[numberRound].name}';
        
    } else {
        
    }

   
}