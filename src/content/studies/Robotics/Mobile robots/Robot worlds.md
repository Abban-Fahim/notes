## Point worlds

A representation of the robot's environment using Cartesian points for all objects, goals, and regions. This is by far the most simple way of modelling a world, as well as for creating behaviours for.

## Convex and non-convex worlds

A set of points (in a world) is convex if every line in-between two points of the set lies in the set. Controllers and behaviours created for point worlds can not work by themselves, as they will eventually end up in Zeno errors. Non-convex worlds create even more complexity, as their shapes have no concrete mathematical description, and these can evolve to 'labyrinths' to represent even more complex boundaries and regions.