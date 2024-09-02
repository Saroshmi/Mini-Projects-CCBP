let parael = document.getElementById("jokeText");


function Makejoke() {
    let options = {
        method: "GET"
    };

    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(text) {
            parael.textContent = JSON.stringify(text);
        });
}