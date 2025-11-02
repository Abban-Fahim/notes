## Terminology

A *node* is a singular element of graph, and it may have one or many *attributes*. An *edge* connects two nodes together, and it can have an attribute called *weight*. An edge may be *directed*, where it connects a *source* node to a *destination* node in order, or undirected where there is no order. A graph with only directed edges is a *directed graph*, while one with the opposite is called an *undirected graph*.

The *endpoints* of a node are the nodes it is connected to. All edges connected to a node are its *incident* edges, and the degree of a node is the number its incident edges. *Adjacent* nodes are those that are connected by a single edge. *Parallel* edges are those connecting the same two nodes, while a *self-loop* connects the same node to itself. A *simple graph* does not contain either parallel edges or self-loops.

A *path* is sequence of alternating nodes and incident edges, starting and ending with nodes. A *simple* path has no repeating edges or nodes. A *cycle* is a path that starts and ends at the same node, while a simple cycle is a simple path likewise.

## Representation

When representing graphs graphically or in code, we can use many ways, with two being adjacency *matrices* and *lists*. 

An adjacency matrix is of size $n\times{n}$, where $n$ is the number of nodes in the graph, and each element is a boolean. The rows and columns are labelled with the nodes and a 1 in cell $(i,j)$ denotes that the node $N_{i}$ is connected to $N_{j}$, while a 0 denotes no connection. For undirected graphs, both cells $(i,j)$ and $(j,i)$ must be 1 to represent a bidirectional connection. The space complexity of this is O$(N^{2})$, and access time can be O$(1)$ using hash tables, adding or removing nodes can have worst-case complexities of O$(N^{2})$.

An adjacency list is an array of lists, where each element in the array is a node in the graph, and its list contains the nodes it is connected to. Again, an undirected graph requires redundant data in both node's lists. Here the space complexity is O$(N+E)$ on average, but in dense graphs up to O$(N^{2})$. The access times are now O$(degree(N))$, which can be $N-1$ itself hence O$(N)$ at worst case. Adding nodes however takes constant time, while removal takes up to O$(N^{2})$. The trade-off between the two depends on whether your priority is search or insertion, and whether the graph is dense or sparse.

## Uninformed traversal

### Breadth-first search (BFS)

Here we find all nodes connected to source node $s$ in order of how far they are from $s$. Directly adjacent nodes to a node are visited first before going to an adjacent node and making it the new source. It discovers nodes in "waves", where all the nodes with distance 1 are first, then $2$, and so on until reachable nodes have been found. When discovering a node, each one is marked as "visited" so to not discover it again. A queue can be utilised for BFS by adding all the adjacent nodes of $s$ to the queue, and removing the oldest node from that queue when discovering.  

### Depth-first search (DFS)
  
Starting with a node $s$, we first discover all nodes farthest from $s$ until we lastly discover its adjacent nodes. Similarly to BFS, it may use a stack to simplify the order of search, as the newest nodes added to the stack will be popped first. First $s$ is added to the stack, then an adjacent node is explored and added to the stack, and hence repeating that cycle, until no unexplored adjacent nodes are found, and then it pops the current node and backtracks to the previous node on the stack to find more unexplored adjacent nodes.

### Uniform-cost search

Involves expanding the cheapest edges first, based on the coat of traversal. This differs to the above as they minimise the number of transitions, meanwhile uniform search works with weighted graphs. Conceptually, this is actually similar to Dijkstra's algorithm discussed below, except that it is uninformed and does not initialise any nodes to $\infty$, instead works until it reaches the goal state(s). This makes it significantly faster for infinitely large graphs, where it is impractical to solve for all nodes while keeping the same upper bound for speed.

### Euler graphs

A problem designed by Leonhard Euler states that could you design a walk through a city such that you could walk through each of its bridges exactly once. We can model parts of the city as nodes and bridges between them as edges. An Euler graph contains a single continuous path where every vertex is visited and every edge is traversed only once. If a graph has exactly two nodes with odd degrees, it contains an Euler path. An Euler cycle is the same as a path it returns to the starting vertex.

## Union find

## MST algorithms

A minimum spanning tree (MST) is an acyclic sub-graph of graph $G(N,E)$ connecting all vertices with edges $T$ such that $T\subseteq{E}$ and edges are represented as $(u,v)\in{E}$, such that the weight of the sub-graph, $w(T)$, is minimised,

$$
w(T)=\sum\limits_{(u,v)\in{T}}{w(u,v)}
$$

A *cut* of a graph is splitting a graph's vertices into two non-empty disjoint sets. A *crossing-edge* in that cut is an edge that used to connect the a vertex in one set to the other. The cut-property states that the *minimum crossing-edge* (one with lowest weight) of any cut in a graph is always part of the MST of that graph.

### Prim's

This follows a growing MST approach, where each time a new node and edge are added to the MST, the MST is one disjoint set from the rest of the nodes, and hence by the cut-property we can find the edge that belongs in the next growth of the MST as it is the minimal of all the crossing-edges at that given time.

To implement it, we must start at a source node and make a cut to separate it into the MST from the rest of the graph. Now all the crossing-edges, here the incident edges, can be added a to priority-queue. A list of visited $n$ nodes and $n-1$ edges are created to keep track of the ones making up the MST: when adding a crossing-edge, we must not add edges already in the MST, and those that connect to a vertex already in the MST. The running time of this algorithm depends on the min-heap implementation, but in the worst-case using a binary heap is O$(E\log{N})$ 

### Kruskal's

This algorithm shifts focus on to edges only. First, it sorts all the edges by ascending weight, and adds the edges in that order to the growing MST only if they don't form a cycle in the existing MST. The proof of this again lies in the cut-property, as any edge considered for the MST is minimum and since it doesn't form a cycle, it must be a crossing edge from the MST to the rest of the graph, hence making it a minimal crossing-edge. The space complexity of this algorithm is proportional $E$ since we just store all the edges in sorted order, while the running time is proportional to $E\log{E}+V+E$ hence worst-case time complexity is O($E\log{E}$). 

## Shortest path algorithms

A *shortest* path from a source node $s$ to destination node $v$ gives the minimal weight sequence of edges that allow traversal from $s$ to $v$. By nature, a shortest path is a simple path. A sub-path of a shortest path is also itself a shortest path, and the shortest paths from $s$ to all connected $v$ forms a tree.

### Dijkstra's

This algorithm assumes that the graph is undirected and all weights are non-negative. Conceptually, we imagine a cloud that starts from $s$ and eventually covers all nodes. While growing, we add vertices $u$ outside the cloud according to the smallest $d(u)$ value that stores the distance of $u$ from $s$, and we updated these every time we add an adjacent node to the cloud. This $d(v)$ value is initially $\infty$ for all nodes that are not $s$, and the method for updating this distance property of a node not in the cloud, $v$, connected via edge $e$ to a node inside the cloud, $u$

$$
d(v)=\min{\{d(v),\ d(u)+weight(e)\}}
$$

A priority queue stores all the nodes $v$ with their $d(v)$, and the algorithm always adds the minimum distance node, until all connected nodes are in the cloud. The final $d(v)$ give the distance of every node $v$ from $s$. The running time for this algorithm is O$(E\log{N})$.

### A* search

This algorithm relies on pre-computed heuristics, and a cost function, $f(n)$, is minimised when expanding, which is given as

$$
f(n)=g(n)+h(n)
$$

where $h(n)$ is the heuristic value of the node $n$, and $g(n)$ is the accumulated sum of edges leading to the expanded node $n$.

### Bellman-Ford

This algorithm accounts for negative edge weights. The algorithm indicates if a solution is possible by returning a boolean false if there is a negative-weight cycle reachable from the source (hence no solution is possible), or true along with the actual solution. It first follow's the same method of edge-relaxation from Dijkstra to set the distance property for all vertices in the graph, with a strict assumption that the graph is directed, since undirected negative edges result immediately in a negative-weight cycle. It then loops over every edge again and checks for negative-weight cycles in the following way

$$
d(v)>d(u)+w(u,v)
$$

If this condition is true, it returns false, else true. Its time complexity is O$(EN)$.
