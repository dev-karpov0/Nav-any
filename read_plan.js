// преобразуем строку с XML-файлом в дерево XML-документа
// String planXML must be defined
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
       paths - массив путей перемещения (путь: тип пути, направление перемещения)
       point_by_id - ассоциативный массив (ключ - строковый id, значение - индекс пункта)
*/

let plan = {
    points: [],
    paths: [],
    point_by_id: new Map(),
    stairs_by_id: new Map(),
    elevator_by_id: new Map()
};

const motionDir = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" };

// добавляет точку к плану
function add_point (point)
{
    plan.points.push(point);
    let point_index = plan.points.length - 1;
    plan.point_by_id.set(point.id, point_index);
}

// строит структуру данных "План здания"
function read_plan ()
{
    let root = xmlDoc.getElementsByTagName("Plan")[0];
    for (const plan_child of root.childNodes) {
        if (plan_child.tagName == "Exit") {
            let point_exit = {
                floor: plan_child.attributes["floor"].nodeValue,
                id: plan_child.attributes["id"].nodeValue,
                name: ("name" in plan_child.attributes ? plan_child.attributes["name"].nodeValue : "Выход"),
                type: "Exit",
            };
            add_point(point_exit);
        }
        else if (plan_child.tagName == "Floor") {
            floor_num = parseInt(plan_child.attributes["num"].nodeValue);
            for (floor_child of plan_child.childNodes) {
                if (floor_child.tagName == "Path") {
                    let dir_str = floor_child.attributes["dir"];
                    let dir = function(dir_str) {
                        switch (dir_str) {
                            case "up":
                                return UP;
                                break;
                            case "right":
                                return RIGHT;
                                break;
                            case "down":
                                return DOWN;
                                break;
                            case "left":
                                return LEFT;
                                break;
                        }
                    }
                    let path = {
                        type: floor_child.attributes["type"],
                        dir: dir,                                               
                    };
                    // add path
                    plan.paths.push(path);
                    let path_index = plan.paths.length - 1;
                    // add starting point to path
                    let point_index = get_point_by_id(floor_child.attributes["start"], floor_num);
                    add_point_to_path(point_index, path_index);
                    // read path
                    read_path(floor_child, path_index, floor_num);
                }
                else
                    process_xml_node(floor_child, -1, floor_num);
            }
        }
    }
}

read_plan();
// console.log(plan);
