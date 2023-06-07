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

function get_route_text (route)
{
    route_text = [];
    for (point_index of route) {
        route_text.push(plan.points[point_index].name);
    }
    return route_text;
}

function findRoute (point_from, point_to)
{
    if (!point_from || !point_to)
        return [];
    point_from = point_from.trim();
    point_to = point_to.trim();

    let route_strs = [`Маршрут от ${point_from} до ${point_to}`];

    if (!plan.point_by_id.has(point_from)) {
        route_strs.push(`Пункт ${point_from} отсутствует`);
        return route_strs;
    }
    if (!plan.point_by_id.has(point_to)) {
        route_strs.push(`Пункт ${point_to} отсутствует`);
        return route_strs;
    }

    route = get_route(plan.point_by_id.get(point_from), plan.point_by_id.get(point_to));
    route_text = get_route_text(route);
    route_strs.push.apply(route_strs, route_text);  // добавить route_text к route_strs      
    
    return route_strs;
}