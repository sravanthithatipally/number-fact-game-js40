let inputele = document.getElementById("userInput");
let factele = document.getElementById("fact");
let spinnerele = document.getElementById("spinner");

function togetoutput(event) {
    let inputval = inputele.value;
    if (event.key === "Enter") {
        if (inputval === "") {
            alert("Enter a number");
        } else {

            let value = event.target.value;
            let url = "https://apis.ccbp.in/numbers-fact?number=" + value;
            let options = {
                method: "GET",
                "Content-Type": "application/json",
                Accept: "application/json"
            };
            spinnerele.classList.remove("d-none");
            factele.classList.add("d-none");

            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })

                .then(function(jsonData) {
                    spinnerele.classList.add("d-none");
                    factele.classList.remove("d-none");
                    let {
                        fact
                    } = jsonData;
                    factele.textContent = fact;
                });

        }
    }
}

inputele.addEventListener("keyup", togetoutput);