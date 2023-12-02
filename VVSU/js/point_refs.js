
const swipeButtons = document.querySelectorAll('.swipe-button');
const referencesFloorMenu = document.querySelector('.references__floors');
const referencesElement = document.querySelector('.references');
const navigatorElement = document.querySelector('.navigator');
const referencesList = document.querySelector('.references__list');


let displayedIndex = 0;
let selectedFloorElement = null;
let pointsHTMLByFloor = new Map()

function pointNameToHTML(name, id) {
    return `<li><div>${name}</div><div>(${id})</div></li>`
}

function getFloorArray() {
    let floorSet = new Set()

    const len = plan.points.length;
    pointsHTMLByFloor['fav'] = '';
    for (let i = 0; i < len; i++) {
        //console.log(plan.points[i].floor)
        let point = plan.points[i];
        let floorNumber = Number(point.floor);
        floorSet.add(floorNumber)

        if (point.name.length !== 0) {
            let str = pointNameToHTML(point.name, point.id);
            if (pointsHTMLByFloor[floorNumber] === undefined) {
                pointsHTMLByFloor[floorNumber] = str;
            } else {
                pointsHTMLByFloor[floorNumber] += str;
            }
        }

        if (point.fav) {
            pointsHTMLByFloor['fav'] += pointNameToHTML(point.name, point.id);
        }
    }

    return Array.from(floorSet).sort();
}

function createFloorMenuItems(floor_array)
{
    referencesFloorMenu.innerHTML = '';

    const len = floor_array.length;
    let e = document.createElement('li');
    e.setAttribute('data-floor', 'fav');
   // e.innerHTML = '&#9734;';
    e.innerHTML = '&#10029;';
    referencesFloorMenu.appendChild(e);
    for(let i=0; i<len; i++) {
        let e = document.createElement('li');
        e.setAttribute('data-floor', floor_array[i].toString());
        e.innerHTML = floor_array[i].toString();
        referencesFloorMenu.appendChild(e);
    }
}

let floorArray = getFloorArray();
createFloorMenuItems(floorArray);

function selectFloor(element) {
    if (selectedFloorElement != null) {
        selectedFloorElement.classList.remove('references__floors_selected')
    }
    element.classList.add('references__floors_selected')
    selectedFloorElement = element;

    let floorNumber;
    if (element.getAttribute('data-floor') == 'fav')
        floorNumber = 'fav';
    else
        floorNumber = Number(element.getAttribute('data-floor'));
    referencesList.innerHTML = pointsHTMLByFloor[floorNumber];
}

if (referencesFloorMenu.childNodes.length !== 0) {
    selectFloor(referencesFloorMenu.childNodes[0]);
}

/*On menu item click*/
swipeButtons.forEach(function (curVal) {
    curVal.addEventListener("click", function(event) {
        if (displayedIndex === 0)
        {
            displayedIndex = 1;
            referencesElement.hidden = false;
            navigatorElement.hidden = true;
        }
        else
        {
            displayedIndex = 0;
            referencesElement.hidden = true;
            navigatorElement.hidden = false;
        }
    });
});

/*On swipe button click*/
referencesFloorMenu.addEventListener('click', function (e) {
    const item = e.target;
    if (item.tagName.toLowerCase() === "li") { //references__floors_selected
        //console.log('Item: ' + item.innerHTML)
        selectFloor(item);
    }
});
