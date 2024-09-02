let searchel = document.getElementById("searchInput");
let searchresultel = document.getElementById("searchResults");
let spinnerel = document.getElementById("spinner");

function createandAppend(result) {
    let {
        link,
        title,
        description
    } = result;
    let resultitemel = document.createElement("div");
    resultitemel.classList.add("result-item");
    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultitemel.appendChild(titleEl);

    let titlebreakel = document.createElement("br");
    resultitemel.appendChild(titlebreakel);

    let urlel = document.createElement("a");
    urlel.classList.add("result-url");
    urlel.href = link;
    urlel.target = "_blank";
    urlel.textContent = link;
    resultitemel.appendChild(urlel);

    let linkbreakel = document.createElement("br");
    resultitemel.appendChild(linkbreakel);

    let descriptionel = document.createElement("p");
    descriptionel.classList.add("link-description");
    descriptionel.textContent = description;
    resultitemel.appendChild(descriptionel);

    searchresultel.appendChild(resultitemel);
}

function display(searchresults) {
    spinnerel.classList.add("d-none");

    for (let result of searchresults) {
        createandAppend(result);
    }
}

function searchwikipedia(event) {
    if (event.key === "Enter") {
        spinnerel.classList.remove("d-none");
        searchresultel.textContent = "";

        let searchinput = searchresultel.value;
        let options = {
            method: "GET"
        };
        fetch("https://apis.ccbp.in/wiki-search?search=", options)
            .then(function(response) {
                return response.json();
            })

            .then(function(data) {
                let {
                    search_results
                } = data;
                display(search_results);
            });
    }
}

searchel.addEventListener("keydown", searchwikipedia);