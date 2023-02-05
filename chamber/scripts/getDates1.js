let theTotal = total(1,2,3,4,5,6,7,8,9,10)




function total(...theNumbers){
	let sum = 0
	for(let aNumber in theNumbers){
		sum += aNumber*1//Want to know why aNumber is multiplied by 1? Remove it and find out. :)
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

let currentDateAndTime = new Date();

let currentDate = currentDateAndTime.toLocaleDateString('en-us', {
	day: 'numeric',
	month: 'numeric',
	year: 'numeric'
})

let todayDisplay = document.querySelector(".currentdate");
console.log("currentDateAndTime: " + currentDateAndTime);
console.log(todayDisplay);

todayDisplay.innerHTML = currentDate;

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let visitsDisplay = document.querySelector(".visits");
console.log(visitsDisplay)
console.log("numVisits:" + numVisits);
// determine if this is the first visit or display the number of visits.
if (numVisits != 0) {
	visitsDisplay.innerHTML = "Page Visits:" + numVisits;
} else {
	visitsDisplay.innerHTML = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
//todayDisplay = Date.now();
//todayDisplay = "message";


//members.json
