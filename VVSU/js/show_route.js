

let toField = document.getElementById("to");
let fromField = document.getElementById("from");
let button = document.getElementById("button");
//let routeText = document.getElementById("route-text");
let errorText = document.getElementById("error-text");
let outputContainer = document.getElementById("output-container");
let outputBlock = document.getElementById("output");
let outFrom = document.getElementById("out-from");
let outTo = document.getElementById("out-to");
let state = false;

function showRoute()
{
    if (!state) {
        let from_point = fromField.value;
        let to_point = toField.value;

        let route = '';
        try {
            route = findRoute(from_point, to_point);
        } catch (e) {
            errorText.innerHTML = e.message;
            errorText.hidden = false;
            return;
        }

        //let route_str = route.join("<br/>");
        let route_str = route.map((val, idx) => {
            return `<div class="output__step">${val}</div>`;
        }).join(' ');

        outputContainer.innerHTML = route_str;
        //routeText.hidden = false;
        //routeText.innerHTML = route_str;

        outFrom.innerHTML = from_point;
        outTo.innerHTML = to_point;

        toField.hidden = true;
        fromField.hidden = true;

        errorText.hidden = true;

        button.innerHTML = "Проложить новый маршрут";

        outputBlock.hidden = false;

        // toField.classList.add("collapsed");
        // fromField.classList.add("collapsed");

        state = true;
    } else {
        toField.hidden = false;
        toField.value = "";

        fromField.hidden = false;
        fromField.value = "";

        //routeText.hidden = true;

        button.innerHTML = "Проложить маршрут";

        outputBlock.hidden = true;

        state = false;
    }
}

/*При нажатии ENTER в текстовом поле*/
const clickEvent = function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        showRoute();
    }
}

toField.addEventListener("keypress", clickEvent);
fromField.addEventListener("keypress", clickEvent);