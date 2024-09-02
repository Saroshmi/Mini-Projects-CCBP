let resultel = document.getElementById("resultCountries");
let searchel = document.getElementById("searchInput");
let spinnerel = document.getElementById("spinner");
let searchvalue = "";
let countrylist = [];

function createandappend(country) {
    let countryel = document.createElement("div");
    countryel.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    resultel.appendChild(countryel);

    let countryflagel = document.createElement("img");
    countryflagel.src = country.flag;
    countryflagel.classList.add("country-flag", "mt-auto", "mb-auto");
    countryel.appendChild(countryflagel);

    let countryinfoel = document.createElement("div");
    countryinfoel.classList.add("d-flex", "flex-column", "ml-4");
    countryel.appendChild(countryinfoel);

    let countrynameEl = document.createElement("p");
    countrynameEl.textContent = country.name;
    countrynameEl.classList.add("country-name");
    countryinfoel.appendChild(countrynameEl);

    let countrypopel = document.createElement("p");
    countrypopel.textContent = country.population;
    countrypopel.classList.add("country-population");
    countryinfoel.appendChild(countrypopel);
}

function display() {
    for (let country in countrylist) {
        let countryname = country.name;
        if (countryname.toLowerCase().includes(searchvalue.toLowerCase())) {
            createandappend(country);
        }

    }
}

function getcountries(countrylist) {
    resultel.textContent = "";
    let options = {
        method: "GET",
    };

    spinnerel.classList.remove("d-none");
    resultel.classList.add("d-none");

    fetch("https://apis.ccbp.in/countries-data", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            resultel.classList.remove("d-none");
            spinnerel.classList.add("d-none");
            countrylist = jsondata;
            display(countrylist);
        });
}

function onchange(event) {
    searchvalue = event.target.value;
    getcountries();
}
getcountries();
searchel.addEventListener("keyup", onchange);