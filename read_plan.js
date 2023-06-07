// преобразуем строку с XML-файлом в дерево XML-документа
// строка planXML должна быть определена
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
       points - массив пунктов (пункт: этаж, id, название, тип пункта, массив ребер)
       paths - массив путей перемещения (путь: тип пути, направление перемещения, массив пунктов в пути)
       point_by_id - ассоциативный массив (ключ - строковый id, значение - индекс пункта)
*/
let plan = {
    points: [],
    paths: [],
    point_by_id: new Map(),
    stairs_by_id: new Map(),
    elevator_by_id: new Map()
};

const motionDir = ["up", "right", "down", "left"];

const motionDirForStr = str => {
    return motionDir.indexOf(str);
}

function get_stairs_point_id (point_id, floor)
{
    return point_id + "_stairs_" + String(floor);
}

function get_elevator_point_id (point_id, floor)
{
    return point_id + "_elevator_" + String(floor);
}

// находит пункт по идентификатору, указанному во входном файле
function get_point_by_id (point_id, floor)
{
    stairs_point_id = get_stairs_point_id(point_id, floor);
    elevator_point_id = get_elevator_point_id(point_id, floor);
    let point_index;
    if (plan.point_by_id.has(stairs_point_id))
        point_index = plan.point_by_id.get(stairs_point_id);
    else if (plan.point_by_id.has(stairs_point_id))
        point_index = plan.point_by_id.get(elevator_point_id);
    else
        point_index = plan.point_by_id.get(point_id);
    return point_index;
}

// добавляет пункт к плану
// возвращает индекс пункта
function add_point (point)
{
    plan.points.push(point);
    let point_index = plan.points.length - 1;
    plan.point_by_id.set(point.id, point_index);
    return point_index;
}

// добавляет пункт к пути
function add_point_to_path (point_index, path_index)
{
    plan.paths[path_index].path_points.push(point_index);
}

// обрабатывает узел xml-дерева с пунктом
function process_xml_node (xml_node, path_index, floor_num)
{
    let point = {
        floor: floor_num,
        id: ("id" in xml_node.attributes ? xml_node.attributes["id"].nodeValue : ""),
        name: ("name" in xml_node.attributes ? xml_node.attributes["name"].nodeValue : ""),
        type: "",
        location: ("location" in xml_node.attributes ? xml_node.attributes["location"].nodeValue : ""),
        hidden: (xml_node.attributes["show_name"] != "1"),
        edges: [],
    };    
    // добавляем новый пункт
    let point_index;
    if (point.id && plan.point_by_id.has(point.id)) {  // если пункт с таким id уже есть
        point_index = get_point_by_id(point.id, floor_num);        
    }
    else {
        let node_tag = xml_node.tagName;
        point.type = node_tag;
        if (node_tag == "Point") {
            point_index = add_point(point);
        }
        else if (node_tag == "Room") {
            if (point.name == "")
                point.name = point.id;
            point.hidden = false;
            point_index = add_point(point);
        }
        else if (node_tag == "Stairs") {
            let stairs_id = point.id;
            let stairs_point_id = get_stairs_point_id(stairs_id, floor_num);
            point.id = stairs_point_id;
            point.name = "Stairs";
            point.hidden = false;
            point_index = add_point(point);
            if (!plan.stairs_by_id.has(stairs_id))
                plan.stairs_by_id.set(stairs_id, []);
            plan.stairs_by_id.get(stairs_id).push(point_index);
        } 
        else if (node_tag == "Elevator") {
            let elevator_id = point.id;
            let elevator_point_id = get_elevator_point_id(elevator_id, floor_num);
            point.id = elevator_point_id;
            point.name = "Elevator";
            point.hidden = false;
            point_index = add_point(point);
            if (!plan.elevator_by_id.has(elevator_id))
                plan.elevator_by_id.set(elevator_id, []);
            plan.elevator_by_id.get(elevator_id).push(point_index);
        }
        else if (node_tag == "Wall") {
            point_index = add_point(point);
        }
        else if (node_tag = "Door") {
            point_index = add_point(point);
        }
    }
    // добавляем пункт к пути
    if (path_index != -1)
        add_point_to_path(point_index, path_index);
}

// возвращает номер направления после поворота
function rotate_dir (dir, rotate_str)
{
    let new_dir;
    if (rotate_str == "forward")
        new_dir = dir;
    else if (rotate_str == "left")
        new_dir = (dir + 3) % 4;
    else if (rotate_str == "right")
        new_dir = (dir + 1) % 4;
    else if (rotate_str == "back")
        new_dir = (dir + 2) % 4;
    return new_dir;
}

// преобразует информацию о пути из xml в нашу СД
function read_path (xml_node, path_index, floor_num)
{
    for (node_child of xml_node.childNodes) {
        if (node_child.tagName == "Path") {
            // обрабатываем путь перемещения
            let point_index = get_point_by_id(node_child.attributes["start"].nodeValue, floor_num);
            let rotate_str = node_child.attributes["rotate"].nodeValue;
            let parent_path_dir = plan.paths[path_index].dir;
            let dir = rotate_dir(parent_path_dir, rotate_str);
            let path = {
                type: node_child.attributes["type"].nodeValue,
                dir: dir, 
                path_points: [point_index],
            };
            // добавляем путь
            plan.paths.push(path);
            let new_path_index = plan.paths.length - 1;
            // читаем путь, внутренний по отношению к текущему пути
            read_path(node_child, new_path_index, floor_num);
        }   
        else if (node_child.tagName)
            process_xml_node(node_child, path_index, floor_num);
    }
}

// строит структуру данных "План здания"
function read_plan ()
{
    // TODO: добавить обработку ошибок во входном файле
    let root = xmlDoc.getElementsByTagName("Plan")[0];
    for (const plan_child of root.childNodes) {
        if (plan_child.tagName == "Exit") {
            // добавляем пункт типа "Выход"
            let point_exit = {
                floor: plan_child.attributes["floor"].nodeValue,
                id: plan_child.attributes["id"].nodeValue,
                name: ("name" in plan_child.attributes ? plan_child.attributes["name"].nodeValue : "Выход"),
                type: "Exit",
                hidden: false,
                edges: [],
            };
            add_point(point_exit);
        }
        else if (plan_child.tagName == "Floor") {
            floor_num = parseInt(plan_child.attributes["num"].nodeValue);
            for (floor_child of plan_child.childNodes) {
                if (floor_child.tagName == "Path") {
                    // обрабатываем путь перемещения
                    let dir_str = floor_child.attributes["dir"].nodeValue;
                    let dir = motionDirForStr(dir_str);
                    let path = {
                        type: floor_child.attributes["type"].nodeValue,
                        dir: dir, 
                        path_points: [],
                    };
                    // добавляем путь
                    plan.paths.push(path);
                    let path_index = plan.paths.length - 1;
                    // добавляем начальный пункт к пути
                    // тут важно указать этаж, поскольку пункт может оказаться
                    //   лестницей или лифтом, для которых идентификатор один и тот же на разных этажах
                    let point_index = get_point_by_id(floor_child.attributes["start"].nodeValue, floor_num);
                    add_point_to_path(point_index, path_index);
                    // читаем путь
                    read_path(floor_child, path_index, floor_num);
                }
                else if (floor_child.tagName)
                    process_xml_node(floor_child, -1, floor_num);
            }
        }
    }
}

read_plan();
//console.log(plan);
