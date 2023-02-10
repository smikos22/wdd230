async function loadData() {
	const response = await fetch("https://smikos22.github.io/wdd230/chamber/data/members.json");
	const jsonString = await response.text();
	
	const jsonObj = JSON.parse(jsonString);
	const section = document.querySelector("#business");
	const aTags = section.querySelectorAll("a");
/*	
	//loop through <a> tags
	let count = 0
	for (tag of aTags) {
		console.log(count)
		//console.log(tag)
		console.log(aTags[count])
		count += 1

	*/	
	count = 0
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

const jsonString = loadData();
