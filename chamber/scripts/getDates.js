const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

//Get the date and time the document was last modified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})