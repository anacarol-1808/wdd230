/*Using localStorage to store the latest visit date by the client, 
display one of three possible messages about the time between page visits in the sidebar content area.
- If this is the user's first visit, display "Welcome! Let us know if you have any questions.".
- If the amount of time between visits is less than a day, display "Back so soon! Awesome!".
- Otherwise, display the number of days in a message like this: 
"You last visited n days ago.", where n is the actual, whole number of days between visits. 
If the number of days is 1, then change the language to "day" not "days".*/

const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit === null){
    document.querySelector("#message").innerHTML = `Welcome! Let us know if you have any questions`;
    localStorage.setItem("lastVisit", new Date());
}

else {
    const currentDate = new Date();
    const previousVisit = new Date(lastVisit);
    const timeDiff = (currentDate.getTime() - previousVisit.getTime());

    let daysSinceLastVisit = Math.floor(timeDiff / 84600000);

    localStorage.setItem("lastVisit", currentDate)

    if (daysSinceLastVisit < 1){
        document.querySelector("#message").innerHTML = `Back so soon! Awesome!`;
    }
    else if(daysSinceLastVisit == 1){
        document.querySelector("#message").innerHTML = `You last visited ${daysSinceLastVisit} day ago.`;
    }
    else{
        document.querySelector("#message").innerHTML = `You last visited ${daysSinceLastVisit} days ago.`;
    }
}




