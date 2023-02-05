let theTotal = total(1,2,3,4,5,6,7,8,9,10)

function total(...theNumbers){
	let sum = 0
	for(let aNumber in theNumbers){
		sum += aNumber*1 //Want to know why aNumber is multiplied by 1? Remove it and find out. :)
	}
	return sum
}

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
if (modeButton != null) {
    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("☑️")) {
            main.style.background = "#000";
            main.style.color = "#fff";
            modeButton.textContent = "❎";
        } else {
            main.style.background = "#eee";
            main.style.color = "#000";
            modeButton.textContent = "☑️";
        }
    });
};

// ===SET CURRENT DATE AND SITE VISITS===

// Date Variables
let currentDateAndTime = new Date();  // A string containing the current data.
// Formats a Date object, to the format specified (day, month, year)
let currentDate = currentDateAndTime.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
})

let todayDisplay = document.querySelector(".currentdate"); // The first tag with class currentdate found in the HTML invoking this js file.
//console.log("currentDateAndTime: " + currentDateAndTime);
//console.log(todayDisplay);

// Set the html tag contained in todayDisplay to todays date stored in the currentDateAndTime variables.
todayDisplay.innerHTML = currentDate;

// Visit Variables
let numVisits = Number(window.localStorage.getItem("visits-ls")); // A number containing the stored value in localStorage
let visitsDisplay = document.querySelector(".visits"); // The first tag with class visits found in the HTML invoking this js file.
//console.log(visitsDisplay);
//console.log("numVisits: " + numVisits);

// Determine if this is the first visit or display the number of visits.
if (numVisits != 0) {
	visitsDisplay.innerHTML = "Page Vists: " + numVisits;
} else {
	visitsDisplay.innerHTML = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);