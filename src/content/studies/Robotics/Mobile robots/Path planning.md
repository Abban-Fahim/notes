# Maps
## Point worlds

A representation of the robot's environment using Cartesian points for all objects, goals, and regions. This is by far the most simple way of modelling a world, as well as for creating behaviours for.

## Grid worlds

To simplify the map space, we can make a script

## Convex and non-convex worlds

A set of points (in a world) is convex if every line in-between two points of the set lies in the set. Controllers and behaviours created for point worlds can not work by themselves, as they will eventually end up in Zeno errors. Non-convex worlds create even more complexity, as their shapes have no concrete mathematical description, and these can evolve to 'labyrinths' to represent even more complex boundaries and regions.

# Planning

## Complete methods

These methods exactly represent the world as a continuous space, and find routes by creating nodes/trees in free space. 

## Grid methods

These algorithms require the world to be modelled as a grid. A search algorithm can then be applied to a graph to find the shortest between.  

## Sampling methods

These work by sampling nodes in the configuration space and connecting them as graphs/trees, hence reducing the size of the search space.

### Probabilistic road maps

Starts by sampling nodes across the free configuration space, utilising a configurable sampling method. When a new node is sampled, a number of existing nodes are checked as candidates for sharing an edge with. Here, the distance metric and how many nodes it should connect to is also configurable. Its also here where every edge is checked by a collision checker to see if is valid before confirming the connection. Through many iterations, a graph covering most of the search space is created. However the resolution and number of samples can prevent a path from always being found, hence they can be unreliable in tight spaces and environments with lots of obstacles.

### Rapidly-exploring random tree

This method constraints the expansion to follow a tree like structure...

## Potential fields

This approach does not require mapping, but instead solves the entire path planning and movement problem online. It models the robot as a point mass in a potential field, formulates the goal as a global minima in force function. Down the gradient represents an attractive force, essentially pulling the robot towards the goal. Obstacles are modelled as spikes in the function, where the steep rising gradients represent a repulsive force, pushing the robot away from them. Being further from a goal increases the attractive force, while being closer to an obstacle creates more repulsion.

Some implementations also define boundaries around obstacles beyond which the obstacle loses influence. One reason for doing this is to avoid a Zeno error at local minima in the function: where the attractive and repulsive forces are equal and opposite, hence freezing the robot. Another method for escaping the Zeno case is to try randomly choosing one of the directions to try anyway when your forces are balanced, although this does not guarantee you will not return to the same state.