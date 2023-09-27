

let toField = document.getElementById("to");
let fromField = document.getElementById("from");
let button = document.getElementById("button");
let routeText = document.getElementById("route-text");
let errorText = document.getElementById("error-text");
let state = false;

function showRoute()
{
    if (!state) {
        let from_point = fromField.value;
        let to_point = toField.value;
        let route = findRoute(from_point, to_point);
        if (route.status !== RouteFinderStatus.SUCCESS)
        {
            switch (route.status)
            {
                case RouteFinderStatus.INVALID_SOURCE:
                    errorText.innerHTML = `Пункт ${from_point} отсутствует`;
                    break;

                case RouteFinderStatus.INVALID_DESTINATION:
                    errorText.innerHTML = `Пункт ${to_point} отсутствует`;
                    break;
            }
            errorText.hidden = false;
            return;
        }
        let route_str = route.route_str_list.join("<br/>");
        routeText.hidden = false;
        routeText.innerHTML = route_str;

        toField.hidden = true;
        fromField.hidden = true;

        errorText.hidden = true;

        button.innerHTML = "Проложить новый маршрут";

        // toField.classList.add("collapsed");
        // fromField.classList.add("collapsed");

        state = true;
    } else {
        toField.hidden = false;
        toField.value = "";

        fromField.hidden = false;
        fromField.value = "";

        routeText.hidden = true;

        button.innerHTML = "Проложить маршрут";

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