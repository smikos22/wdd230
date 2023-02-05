fetch('data/members.json')
  .then(response => response.text())
  .then(data => {

  //  console.log(data);
    members = JSON.parse(data);
    membersArray = members["Businesses"]
  //  console.log(membersArray)

    for (let i = 0; i < membersArray.length; i++) {
        //console.log(membersArray[i])
        bussiness = membersArray[i];
        //console.log(row)
        //console.log(bussiness["name"])
        const para = document.createElement("p");
        //para.innerHTML = row["name", "address", "phoneNumber",
        //"url", "image", "membershipLevel"]
        for (key in bussiness) {
   //         console.log(bussiness[key]);
            para.innerHTML += bussiness[key]
            para.innerHTML += "<br>"
            //para.innerHTML += bussiness[key];
        }
    //    console.log("")
        //document.body.appendChild(para);
    }
    


  })
  .catch(error => {
    console.error(error);
  });

  ///grid template
  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector("article");
  
  // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
  
  gridbutton.addEventListener("click", () => {
      // example using arrow function
      display.classList.add("grid");
      display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", showList); // example using defined function
  
  function showList() {
      display.classList.add("list");
      display.classList.remove("grid");
  }
  
  
