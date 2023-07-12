const baseURL = "https://anacarol-1808.github.io/wdd230/";

const linksURL = "https://anacarol-1808.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data.weeks[0].links[0].url);
    //console.log(data.weeks);
    displayLinks(data.weeks);
}
  
const create = document.querySelector('#activity-list');

getLinks();

function displayLinks(weeks) {
    console.log(weeks.lenght)
    weeks.forEach(item => {
        // Create elements to add to the 'ul' activity-list element
        let line = document.createElement('li');
        let weekNumber = document.createElement('span');
        
        // Build the 'span' content out to show the week number
        weekNumber.textContent = `${item.week}: `;

        // Append the ul(activity-list) with the created elements
        line.appendChild(weekNumber);

        // set attributes for anchor element
        (item.links).forEach(element => {
            console.log(element);
            let anchor = document.createElement('a');
            anchor.setAttribute('href', element.url);
            anchor.textContent = `${element.title} | `;            
            line.appendChild(anchor);
        });

        
        
        
        create.appendChild(line);        
        //console.log(item.links[0].url);
    });
    
}
