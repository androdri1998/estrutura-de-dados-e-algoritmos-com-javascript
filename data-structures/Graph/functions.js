const Queue = require('../Queue/queue');
const Stack = require('../Stack/stack');

const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2,
};

const initializeColor = vertices => {
    const color = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }

    return color;
}

const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    queue.enqueue(startVertex);
    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                queue.enqueue(w);
            }
        }

        color[u] = Colors.BLACK;
        if (callback) {
            callback(u);
        }
    }
}

const BFS = (graph, startVertex) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    const distances = {};
    const predecessors = {};
    queue.enqueue(startVertex);
    for (let i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                distances[w] = distances[u] + 1;
                predecessors[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }

    return {
        distances,
        predecessors,
    }
}

const createPathGraph = (vertices, shorterstPath) => {
    const fromVertex = vertices[0];
    let paths = [];
    for (let i = 1; i < vertices.length; i++) {
        const toVertex = vertices[i];
        const path = new Stack();
        for (let v = toVertex; v !== fromVertex; v = shorterstPath.predecessors[v]) {
            path.push(v);
        }
        path.push(fromVertex);
        let s = path.pop();
        while (!path.isEmpty()) {
            s += '-' + path.pop();
        }
        paths.push(s);
    }

    return paths.join('\n');
}

module.exports = {
    breadthFirstSearch,
    BFS,
    createPathGraph,
}