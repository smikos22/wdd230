function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

async function loadData() {
	const response = await fetch("https://smikos22.github.io/wdd230/chamber/data/members.json");
	const jsonString = await response.text();
	
	const jsonObj = JSON.parse(jsonString);

    let firstRandomNumber = 3
    let secondRandomNumber = 3
    while(firstRandomNumber == 3) {	
        firstRandomNumber = getRandomInt(7)
    }
    while(secondRandomNumber == 3 || firstRandomNumber == secondRandomNumber){
        secondRandomNumber = getRandomInt(7)
    }

  //  console.log(randomNumber)
	
    // Spot light first business
   // const randomBusinessName = document.querySelector("#name");
    const randomBusinessImage = document.querySelector("#image");
   // const randomBusinessMembershipLevel = document.querySelector("#membershipLevel");
   // const randomBusinessPhoneNumber = document.querySelector("#phoneNumber");
    const randomBusinessUrl = document.querySelector("#url");
   // const randomBusinessAddress = document.querySelector("#address");
    let key = "Businesses"
    let randomBusiness = jsonObj[key][firstRandomNumber]
   // randomBusinessName.innerHTML = randomBusiness["name"]
   // randomBusinessAddress.innerHTML = randomBusiness["address"]
   // randomBusinessPhoneNumber.innerHTML = randomBusiness["phoneNumber"]
   // randomBusinessMembershipLevel.innerHTML = randomBusiness["membershipLevel"]
    randomBusinessImage.setAttribute("src", randomBusiness["image"])
    randomBusinessUrl.innerHTML = randomBusiness["url"]
    randomBusinessUrl.setAttribute("href", randomBusiness["url"])
	
     // Spot light second business
     //const secondRandomBusinessName = document.querySelector("#secondName");
     const secondRandomBusinessImage = document.querySelector("#secondImage");
    // const secondRandomBusinessMembershipLevel = document.querySelector("#secondMembershipLevel");
    // const secondRandomBusinessPhoneNumber = document.querySelector("#secondPhoneNumber");
     const secondRandomBusinessUrl = document.querySelector("#secondUrl");
    // const secondRandomBusinessAddress = document.querySelector("#secondAddress");
     //let key2 = "secondBusinesses"
     let secondRandomBusiness = jsonObj[key][secondRandomNumber]
    // secondRandomBusinessName.innerHTML = secondRandomBusiness["name"]
    // secondRandomBusinessAddress.innerHTML = secondRandomBusiness["#address"]
    // secondRandomBusinessPhoneNumber.innerHTML = secondRandomBusiness["phoneNumber"]
    // secondRandomBusinessMembershipLevel.innerHTML = secondRandomBusiness["membershipLevel"]
     secondRandomBusinessImage.setAttribute("src", secondRandomBusiness["image"])
     secondRandomBusinessUrl.innerHTML = secondRandomBusiness["url"]
     secondRandomBusinessUrl.setAttribute("href", secondRandomBusiness["url"])
    //console.log(key2);

	return;
}

const jsonString = loadData();
