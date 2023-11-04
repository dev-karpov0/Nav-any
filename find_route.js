// по индексам начального и конечного пунктов a, b 
//   возвращает маршрут - массив индексов пунктов
function get_route (from_index, to_index)
{
    // BFS
    let queue = [];  // очередь из вершин графа
    let visited_vertices = new Set();  // обработанные вершины, кратчайший путь до которых найден
    queue.push(from_index);
    visited_vertices.add(from_index);
    let prev_vertex = new Array(plan.points.length);  // для каждой вершины графа храним ее предшественника
    for (let i = 0; i < plan.points.length; i++)
        prev_vertex[i] = -1;
    while (queue.length > 0) {
        let point_index = queue.shift();
        for (e of plan.points[point_index].edges) {
            let adj_point = e.adj_point;
            if (!visited_vertices.has(adj_point)) {
                queue.push(adj_point);
                visited_vertices.add(adj_point);
                prev_vertex[adj_point] = point_index;
            }
        }
    }
    // восстанавливаем путь
    let route = [];
    if (!visited_vertices.has(to_index))  // целевая вершина недостижима
        return route;
    let point_index = to_index;
    while (point_index != -1) {
        route.push(point_index);
        point_index = prev_vertex[point_index];
    }
    route.reverse();
    return route;
}

function get_edge (point, adj_point_index)
{
    for (let i = 0; i < point.edges.length; i++) {
        if (point.edges[i].adj_point == adj_point_index) {
            return point.edges[i];
        }
    }   
}

function get_route_text (route)
{
    let route_text = [];
    let i = 0;
    let j = 0;
    let edge = get_edge(plan.points[route[0]], route[1]);
    let path_index = edge.path;
    let reversed_path = edge.reversed_path;
    while (i < route.length && j < route.length) {
        j = i + 1;
        let new_path_index;
        let reversed_new_path;
        while (j < route.length) {
            edge = get_edge(plan.points[route[j - 1]], route[j]);
            new_path_index = edge.path;
            reversed_new_path = edge.reversed_path;
            if (new_path_index != path_index) {
                j = j - 1;
                break;
            }
            j = j + 1;
        }
        if (j == route.length) {
            j = j - 1;
        }
        if (path_index == -1) {
            floorText =  " с " + plan.points[route[i]].floor +  " этажа до " + plan.points[route[j]].floor + " этажа.";
            route_text.push("Пройти по лестнице" + floorText);
        } else if (path_index == -2) {
            route_text.push("Проехать на лифте.");
        } else {
            let text = "Пройти " + plan.points[route[i]].name + " - " + plan.points[route[j]].name;
            if (j > i + 1) {
                let hidden = true;
                for (let k = i + 1; k < j; k++) {
                    if (!plan.points[route[k]].hidden) {
                        hidden = false;
                        break;
                    }
                }
                if (!hidden) {
                    text += " мимо: ";
                }
                let flag = false;
                for (let k = i + 1; k < j; k++) {
                    if (!plan.points[route[k]].hidden) {
                        if (flag) {
                                text += ", ";
                        }
                        flag = true;
                        text += plan.points[route[k]].name;
                    }
                }
            }
            text += ".";
            route_text.push(text);
        }
        
        if (new_path_index >= 0 && path_index >= 0) {
            let dir1 = plan.paths[new_path_index].dir;
            if (reversed_new_path) {
                dir1 = rotate_dir(dir1, "back");
            }
            let dir2 = plan.paths[path_index].dir;
            if (reversed_path) {
                dir2 = rotate_dir(dir2, "back");
            }
            let d = (dir1 - dir2 + 4) % 4;
            if (d > motionDirForStr("up")) {
                if (motionDir[d] == "left") {
                    route_text.push("Поверните налево.");
                } else if (motionDir[d] == "down") {
                    route_text.push("Поверните назад.");
                } else if (motionDir[d] == "right") {
                    route_text.push("Поверните направо.");
                }
            }
        }
        
        path_index = new_path_index;
        reversed_path = reversed_new_path;
        i = j;
        if (i == route.length - 1) {
            break;
        }      
    }
    return route_text;
}

function findRoute (point_from, point_to)
{
    if (!point_from || !point_to)
        throw new Error('Пункты не могут быть пустыми');

    point_from = point_from.trim();
    point_to = point_to.trim();

    //let route_strs = [`Маршрут от ${point_from} до ${point_to}`];

    if (point_from === point_to) {
        throw new Error('Пункты отправления и назначения совпадают');
    }

    if (!plan.point_by_id.has(point_from)) {
        //route_strs.push(`Пункт ${point_from} отсутствует`);
        throw new Error(`Пункт ${point_from} отсутствует`);
    }
    if (!plan.point_by_id.has(point_to)) {
        //route_strs.push(`Пункт ${point_to} отсутствует`);
        throw new Error(`Пункт ${point_to} отсутствует`);
    }

    let route = get_route(plan.point_by_id.get(point_from), plan.point_by_id.get(point_to));
    if (route.length == 0) {
        throw new Error(`Пункт ${point_to} недостижим из пункта ${point_from}`);
    }

    let route_text = get_route_text(route);
    //route_strs.push.apply(route_strs, route_text);  // добавить route_text к route_strs
    return route_text;
}