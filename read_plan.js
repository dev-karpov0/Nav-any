// String planXML needs to be defined
let xmlDoc;
if (window.DOMParser)
{
    let parser = new DOMParser();
    xmlDoc = parser.parseFromString(planXML, "text/xml");
}
else  // Internet Explorer
{
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.loadXML(txt);
}

/*
    Структура данных "План здания":
       points - массив пунктов (пункт: этаж, id, название, тип пункта)
       paths - массив путей (...)
       point_by_id - ассоциативный массив (ключ - строковый id, значение - индекс пункта)
*/

let plan = {
    points: [],
    paths: [],
    point_by_id: new Map(),
    stairs_by_id: new Map(),
    elevator_by_id: new Map()
};

function add_point ()
{

}

function read_plan ()
{
    let root = xmlDoc.getElementsByTagName("Plan")[0];
    //console.log(root);
    for (const plan_child of root.childNodes) {
       //if (plan_child.nodeType != 1)   // this is not tag
       //    continue;
        if (plan_child.tagName == 'Exit') {
            let point_exit = {
                floor: plan_child.attributes["floor"].nodeValue,
                id: plan_child.attributes["id"].nodeValue,
                name: ("name" in plan_child.attributes ? plan_child.attributes["name"].nodeValue : "Выход"),
                point_type: "Exit",
            };
            add_point(point_exit);
           
            console.log(point_exit);
        }
    }
}

read_plan();
