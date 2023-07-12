const baseURL = "https://anacarol-1808.github.io/wdd230/";

const linksURL = "https://anacarol-1808.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    //displayLinks(data);
}
  
getLinks();

/*const list = document.querySelector('#activity-list');

displayLinks(weeks) {
    weeks.forEach(week => {
        let line = document.createElement('li');
        line.textContent = ${week.}

        week.forEach(activity => {
            let link = document.createElement('a');
        })
        

        
    });
}*/