let currentDateAndTime = Date()


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

let todayDisplay = document.querySelector(".currentdate");
let visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
// determine if this is the first visit or display the number of visits.
if (numVisits != 0) {
	visitsDisplay = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
todayDisplay = Date.now();
//todayDisplay = "message";

export async function myFunction(){
    const response = await fetch("https://smikos22.github.io/wdd230/chamber/data/members.json");
	const jsonString = await response.text();
	
	const jsonObj = JSON.parse(jsonString);

    console.log(jsonObj);
    for (key in jsonObj){
        console.log(key);
    }
}


//async function loadData(){
//	const section = document.querySelector("#learning");
//	const aTags = section.querySelectorAll("a");

/*	count = 0
	for (key in jsonObj){
		for (value in jsonObj[key])
		{
			console.log(count)
			console.log(aTags[count])
			console.log(jsonObj[key][value])
			aTags[count].href= jsonObj[key][value]
			count += 1;
		}
	}
	return;
}

const jsonString = loadData();*/
    
