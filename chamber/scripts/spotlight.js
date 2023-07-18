// On the home page use your JSON data source of members to supply two to three 'spotlight' advertisements 
// for the chamber members who have silver or gold membership levels only.
// The home page should randomly load different, qualified members.


const baseURL = "index.html";

const linksURL = "data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.members[0].address);//testing only
    displayMembers(data);
}