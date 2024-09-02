let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let messageEl = document.getElementById("message");
let headingEl = document.createElement("h1");
let spinnerEl = document.getElementById("spinner");


function appendsearchresult(search_results) {
    if (search_results.length < 1) {
        messageEl.textContent = "no results found";
        searchResultsEl.textContent = "";
        headingEl.textContent = "";
    } else {
        searchResultsEl.textContent = "";
        messageEl.textContent = "";
        headingEl.textContent = "Popular Books";
        searchResultsEl.appendChild(headingEl);
        for (let i of search_results) {
            let title = i.title;
            let image = i.imageLink;
            let author = i.author;
            let imgel = document.createElement("img");
            let textel = document.createElement("p");
            imgel.setAttribute("src", image);
            textel.textContent = author;
            searchResultsEl.appendChild(imgel);
            searchResultsEl.appendChild(textel);
            console.log(i);

        }
    }
}

searchInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none");
        let val = searchInputEl.value;
        let url = "https://apis.ccbp.in/book-store?title=" + val;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                appendsearchresult(search_results);
                spinnerEl.classList.toggle("d-none");
            });
    }
});