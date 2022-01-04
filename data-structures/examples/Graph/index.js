const Graph = require("../../Graph");

const { breadthFirstSearch, BFS, createPathGraph, depthFirstSearch, DFS, getTopSort } = require('../../Graph/functions');

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

const printVertex = value => console.log('Visited vertex: ' + value);
breadthFirstSearch(graph, myVertices[0], printVertex);

const shorterstPathA = BFS(graph, myVertices[0]);
console.log(shorterstPathA);

console.log(createPathGraph(myVertices, shorterstPathA));

depthFirstSearch(graph, printVertex);
console.log(DFS(graph));

const graphTopSort = new Graph(true);
const myVerticesTopSort = ['A', 'B', 'C', 'D', 'E', 'F'];
for (i = 0; i < myVerticesTopSort.length; i++) {
    graphTopSort.addVertex(myVerticesTopSort[i]);
}
graphTopSort.addEdge('A', 'C');
graphTopSort.addEdge('A', 'D');
graphTopSort.addEdge('B', 'D');
graphTopSort.addEdge('B', 'E');
graphTopSort.addEdge('C', 'F');
graphTopSort.addEdge('F', 'E');

const dfsGraphTopSort = DFS(graphTopSort);
const topSort = getTopSort(graphTopSort);
console.log('graph top sort', dfsGraphTopSort);
console.log('graph top sort result', topSort);

