An optimisation problem's objective is to find a solution, $\hat{x}\in{F}$, that minimises or maximise an objective, functionally described as $L(x)$. $F$ should be a finite or infinite set of search space which must be explored to find the solution. The selection of an optimisation algorithm depends on the qualities of your search space, whether you have heuristics, and how many solutions you need. In practise, the search space is usually discretised by need, unless the algorithm uses analytical or symbolic methods, as computers cannot represent a continuous function otherwise. Gradients are a commonly provided along with the objective function, as some algorithms use them to guide their search towards the function's vertices.

## Convexity

A convex function is where the line segment between any two distinct points on its graph lies entirely on or above the graph. A property of such a function is that it has only one minimum, and hence when optimising such a space, we can (and usually should) find a global solution. Non-convex models are usually harder to optimise for global solutions, as you cannot determine if you have reached one or not, and hence different algorithm must be adapted to tackle this.

## Heuristics and meta-heuristics

Uninformed search is the class of search algorithms explore the entire search space with basic information like start and end goals, and don't exploit any information to speed up the search. Hence, they can be quite slow as they may explore the entire space systematically, some examples including BFS and DFS. These contrast with more widely used "informed" algorithms that exploit some heuristic functions about the space to guide them towards an optimal solution, hence speeding up the algorithm.

Heuristics (and meta-heurestics) are functions of the search space, and they provide us a score that tells us how close we are to the optimal solution, differing from the objective function by not giving or using its exact value. For example, grid-based search the two common heuristics are Manhattan and Euclidean (L1 & L2) distance that give us our exact distance from the goal, but not taking into account obstacles and their effects on the shortest path. Other common heuristics include graph-edge weights, gradients and search history.

## Hill climbing

At every exploration step, this algorithm evaluates the fitness in its neighbouring states, and only moves to the best of them if any are better than the current step. The stochastic flavour of this algorithm randomly considers other better solutions too, to promote exploration. In the case of non-convex spaces however, the performance of this algorithm depends heavily on the initial position, as the search can converge on local optima, often the first one it encounters.

## Tabu search

The core idea here is to maintain a list of visited nodes in a tabu list. At each step, we move to the next best neighbour if and only if it is not in the tabu list (it doesn't matter if the new target is worse than the current or the history). One flavour of this algorithm that reduces memory footprint is keeping a short-term memory, i.e. making the tabu list of fixed length.

## Simulated annealing

This uses ideas from thermodynamics and metallurgy... combining hill climbing with random walk... avoids local optima with stochastically accepting worse states...

## Exploration vs exploitation

This is a common trade-off faced in the previous and many other learning and optimisation algorithms. Whenever a problem cannot be analytically optimised, we have no precise of where the solution lies. A key requirement of iterative optimisation algorithms then is to explore regions further than the initial feasible areas. This concept is called exploration (or diversification for swarms), and too little of it can lead to solutions being stuck in local optima. On the other hand, exploitation refers to utilising the heuristics to explore mostly its current neighbourhood, maximise its reward for following the heuristic, which is required to achieve a strong approximate solution.

## Multi-objective optimisation