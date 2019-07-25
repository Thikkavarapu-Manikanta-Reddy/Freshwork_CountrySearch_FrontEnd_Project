window.addEventListener('load', () => {
    document.getElementById("search-bar")
        .addEventListener("keyup", (event) =>{
            event.preventDefault();
            countrysearch();
    });
});
function countrysearch(){

    let search = document.getElementById("search-bar").value;
    const baseurl = new Request("https://restcountries.eu/rest/v2/name/" + search);

    fetch(baseurl).then((response) => {
        if(response.status === 200)
            return response.json();
       else
       {
        const searchdata = document.getElementById("search-results")
        while(searchdata.firstChild){
            searchdata.removeChild(searchdata.firstChild)
        }
        alert("No Country Found!!");
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