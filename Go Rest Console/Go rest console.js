let formel = document.getElementById("consoleForm");
let requrlel = document.getElementById("requestUrl");
let responsestsel = document.getElementById("responseStatus");
let requrlerr = document.getElementById("requestUrlErrMsg");
let reqmethod = document.getElementById("requestMethod");
let reqbodyel = document.getElementById("requestBody");
let responsebodyel = document.getElementById("responseBody");

let data = {
    requestURL: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
};

requrlel.addEventListener("change", function(event) {
    data.requestURL = event.target.value;
});

reqmethod.addEventListener("change", function(event) {
    data.requestMethod = event.target.value;
});

reqbodyel.addEventListener("change", function(event) {
    data.requestBody = event.target.value;
});

function validate(data) {
    let {
        requestUrl
    } = data;
    if (requestUrl === "") {
        requrlerr.textContent = "Required*";
    } else {
        requrlerr.textContent = "";
    }
}

function send(data) {
    let {
        requestURL,
        requestMethod,
        requestBody,
    } = data;
    let options = {
        method: requestMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
        },
        body: reqbodyel
    };
    fetch(requestURL, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            let responseStatus = jsondata.code;
            let responseBody = JSON.stringify(jsondata);
            responsestsel.value = responseStatus;
            responsebodyel.value = responseBody;
        });
}
formel.addEventListener("submit", function(event) {
    event.preventDefault();
    validate(data);
    send(data);
})