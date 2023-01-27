let currentDateAndTime = Date()

console.log("It is now "+currentDateAndTime)


let theTotal = total(1,2,3,4,5,6,7,8,9,10)

console.log("The total is "+theTotal)


function total(...theNumbers){
	let sum = 0
	for(let aNumber in theNumbers){
		sum += aNumber*1//Want to know why aNumber is multiplied by 1? Remove it and find out. :)
	}
	return sum
}

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

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

// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// What does toggle mean? Instead of add and remove, toggle means add the class name (the parameter, which in this case is named 'responsive') if it does not currently exist, and remove the 

/*const options = {weeday: 'long', day: 'numberic', month: 'long', year:'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-Us', options);*/
// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
//todayDisplay.textContent = Date.now();

// You can view the localStorage data using the Applications panel in the browsers's DevTools.
//form//
const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

//rangevalue.addEventListener('change', displayRatingValue);
//rangevalue.addEventListener('input', displayRatingValue);
//key phrase

//Form at bottom of page.



const keyphrase = document.querySelector("#keyphrase");
const keyphrase2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#contactForm");

keyphrase2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (keyphrase.value != keyphrase2.value) {
		console.log(keyphrase)

		message.textContent = "User name DOES NOT MATCH!";
		message.style.display = "block";
		keyphrase2.style.backgroundColor = "#aa3333";
		keyphrase2.style.color = "#fff";
		keyphrase2.focus();
		keyphrase2.value = "";
		
	} 
	else {
		console.log(keyphrase2)
		message.style.display = "none";
		keyphrase2.style.backgroundColor = "#fff";
		keyphrase2.style.color = "#000";
		
	}
}
