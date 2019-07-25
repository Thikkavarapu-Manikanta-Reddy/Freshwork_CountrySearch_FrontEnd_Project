window.addEventListener('load', () => {
    var x = document.getElementById("error");
      x.style.display = "none";
    document.getElementById("search-bar")
        .addEventListener("keyup", (event) =>{
            event.preventDefault();
            countrysearch();
    });
});
function countrysearch(){
    var x = document.getElementById("error");
      x.style.display = "none";
    let search = document.getElementById("search-bar").value;
    let radiobtn = document.querySelector('input[name="countrydetails"]:checked').value;
    console.log(radiobtn);
    let baseurl;
    if(radiobtn == 'name')
    {
        baseurl = "https://restcountries.eu/rest/v2/name/" + search;
        console.log(baseurl);
    }
    if(radiobtn == 'code')
    {
    baseurl = "https://restcountries.eu/rest/v2/alpha/" + search;
    console.log(baseurl);
    }
    if(radiobtn == 'currency')
    {
    baseurl = "https://restcountries.eu/rest/v2/currency/" + search;
    console.log(baseurl);
    }
    if(radiobtn == 'language')
    {
    baseurl = "https://restcountries.eu/rest/v2/lang/" + search;
    }
    if(radiobtn == 'capitalcity')
    {
    baseurl = "https://restcountries.eu/rest/v2/capital/" + search;
    console.log(baseurl);
    }
    if(radiobtn == 'callingcode')
    {
    baseurl = "https://restcountries.eu/rest/v2/callingcode/" + search;
    console.log(baseurl);
    }
    if(radiobtn == 'region')
    {
    baseurl = "https://restcountries.eu/rest/v2/region/" + search;
    console.log(baseurl);
    }
    if(radiobtn == 'regionbloc')
    {
    baseurl = "https://restcountries.eu/rest/v2/regionalbloc/" + search;
    console.log(baseurl);
    }
    fetch(baseurl).then((response) => {
        if(response.status === 200)
            return response.json();
       else
       {
        const searchdata = document.getElementById("search-results")
        while(searchdata.firstChild){
            searchdata.removeChild(searchdata.firstChild)
        }
        // alert("No Country Found!!");
        var x = document.getElementById("error");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        throw new Error("Data not found!!");
       }
    }).then(response => {
        //Todo dispaly search results
        console.log(response);
        const searchdata = document.getElementById("search-results")
    while(searchdata.firstChild){
        searchdata.removeChild(searchdata.firstChild)
    }
    for(i=0; i<response.length; i++){
        let card = document.createElement("div");
        card.className = "card";

        let flagimage = document.createElement("img");
        flagimage.setAttribute("src", response[i]["flag"]);
        flagimage.className = "flagimage";
        card.appendChild(flagimage);
        
        let countryname = document.createElement("h4");
        countryname.innerHTML = response[i]["name"];
        countryname.className = "countryname";
        card.appendChild(countryname);
        
        let cardlink = document.createElement("a");
        cardlink.className = "a";
        cardlink.setAttribute("href", "countrydetails.html?countryname="+JSON.stringify(response[i]));
        cardlink.appendChild(card);

        searchdata.appendChild(cardlink);
    }
    
    }).catch(error => {
        //Todo Report Error to user
        console.error(error);
    })
}