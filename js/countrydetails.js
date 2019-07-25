window.addEventListener('load', () => {
    countrydetails();
});
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function countrydetails(){
console.log(JSON.parse(getParameterByName('countryname')));
var countrydetails = JSON.parse(getParameterByName('countryname'));
const countrydata = document.getElementById("country-details");
let flagimage2 = document.createElement("img");
flagimage2.setAttribute("src", countrydetails.flag);
flagimage2.className = "flagimage2";
countrydata.appendChild(flagimage2);
var br = document.createElement('br');
countrydata.appendChild(br);

var table = document.createElement('table');
table.innerHTML = "  <tr><th>Name</th><th>Capital</th><th>Region</th><th>SubRegion</th><th>Population</th></tr><tr><td>"
+countrydetails.name+"</td><td>"
+countrydetails.capital+"</td><td>"
+countrydetails.region+"</td><td>"
+countrydetails.subregion+"</td><td>"
+countrydetails.population+"</td></tr>";
countrydata.appendChild(table);
}