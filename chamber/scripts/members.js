async function loadData() {
	const response = await fetch("https://smikos22.github.io/wdd230/chamber/data/members.json");
	const jsonString = await response.text();
	
	const jsonObj = JSON.parse(jsonString);
	const section = document.querySelector("#business");
    const randomBusinessName = document.querySelector("#name");
    const randomBusinessImage = document.querySelector("#image");
    const randomBusinessMembershipLevel = document.querySelector("#membershipLevel");
    const randomBusinessPhoneNumber = document.querySelector("#phoneNumber");
    const randomBusinessUrl = document.querySelector("#url");
//    const randomBusinessAddress = document.querySelector("#address");

//	const aTags = section.querySelectorAll("a");
/*	
	//loop through <a> tags
	let count = 0
	for (tag of aTags) {
		console.log(count)
		//console.log(tag)
		console.log(aTags[count])
		count += 1

	*/	
	//count = 0
    let randomNumber = 0
	for (key in jsonObj){
        console.log(jsonObj[key][randomNumber])
        let randomBusiness = jsonObj[key][randomNumber]
        randomBusinessName.innerHTML = randomBusiness["name"]
        randomBusinessAddress.innerHTML = randomBusiness["address"]
        console.log(randomBusinessAddress)
        randomBusinessPhoneNumber.innerHTML = randomBusiness["phoneNumber"]
        randomBusinessMembershipLevel.innerHTML = randomBusiness["membershipLevel"]
        randomBusinessImage.setAttribute("src", randomBusiness["image"])
        randomBusinessUrl.innerHTML = randomBusiness["url"]
        randomBusinessUrl.setAttribute("href", randomBusiness["url"])
        //console.log(randomBusinessUrl)
        //randomBusinessUrl.innerHTML = randomBusiness["url"]

		//for (value in jsonObj[key])
		//{
			//console.log(count)
//			console.log(aTags[count])
			//console.log(jsonObj[key][value])
//			//aTags[count].href= jsonObj[key][value]
			//count += 1;
		//}
	}
	return;
}

const jsonString = loadData();
