This is a biological idea that observes intelligence in large groups of self-interested individuals communicate with each other. The mechanisms which the individual acts upon may themselves be rudimentary or "unintelligent", but can give emergence to self-organised systems that exhibit a more complex behaviour than the any of its individual parts. The typical characteristics of swarm systems include:
- the collective swarm exhibits higher intelligence than the sum of either of its member's
- the swarm's intelligence is not inherently programmed, but rather emerges
- interactions between individuals and their neighbours are local, with no central coordinator
- are robust to failures of individual members

All individual in such swarms also posses certain characteristics:
- operates completely autonomously
- aware of its surroundings
- they must sequence new tasks autonomously
- they are self-adaptive to the failure/removal of another member
- allows for dynamic expansion in members

There are two ways individuals in a swarm may communicate: direct local interactions or through the environment. The first allows for members to communicate their state to other members in their neighbourhood, which can be defined either by proximity in the search space or by $k$-nearest neighbours. The other method modifies the environment in ways that can be understood and influence other members. Stigmergy is one example behaviour from nature, found in insect behaviour, where they leave traces that influence behaviour of subsequent insects who visit the same place.

## Boids

This as an early experiment to model the behaviour of bird flocks and fish schools. It was defined on three basic rules:
- maintain cohesion by steering towards the average distance in between its neighbours
- avoid crowding by staying equidistant away from all its neighbours
- aligns oneself towards the average direction of its neighbours

When all the boids are given access to a local neighbourhood, they exhibit a curious flocking behaviour, starting from random states and continue their movement forever in the same group and overall direction and speed. 

## Particle Swarm Optimisation

PSO is based on a social theory that interaction between individuals promotes adaption, hence displays a form collective intelligence. By being influenced the fitness of their neighbours, we allow for adaptations to be copied by other members, resulting in convergence despite initial randomness. This idea is implemented to solve non-linear and non-convex optimisation problems, by moving particles around with individual velocities around the search space.

The swarm is a set of particles, where each particle consists of a position $x\in{\mathbb{R}^{D}}$ and velocity $v\in{\mathbb{R}^{D}}$. $x$ exists in the search space, and is a vector of your $D$ inputs, and its fitness at any point can be evaluated to a real number. All particles shares information with other particles in a neighbourhood, which can consist of either a set of closest neighbours, or a set of randomised particles across the space, or a hybrid of both. The algorithm starts with the population initialised to random positions and velocities. Throughout its iterations, it tracks three specific positions
- $x^{*}$ for the particles own best position so far
- $x^{+}$ for its neighbours best position so far
- $x^{!}$ for the best position so far anywhere in the population

We then modify the velocity of the particle, and step its position forward by a step size $\epsilon$, according to these values. The difference in each of these best positions and the current position is weighted and added to the velocity. We have a few hyper parameters 
- $\beta$ owns position arrogance cognitive weight
- $\gamma$ others positions social weight
- $\delta$ global positions trends
- $\alpha$ inertia how much to stay together

$$
v=\alpha{v}+\beta{(x^{*}-x)}+\gamma(x^{+}-x)+\delta(x^{!}-x)
$$

Note that the sum of these weights must add up to 4, with $\alpha$ being less then one to prevent the particles blowing up. We also randomise all the weights, except $\alpha$, to be between 0 and the actual value, to add random three factors to add mutations in population characteristics.

## Ant Colony Optimisation

This is inspired by the use of stigmergy in ant colonies, where pheromones are left out along the path taken by ants to their food as scents. Thee presence of pheromones in-turn guide the choice of path taken by subsequent ants, who tend to follow trails with high concentration of these scents. We implement this as an algorithm to solve discrete space problems such as graphs, where the presence and freshness of "pheromones" act as meta-heuristics. This guides subsequent ants towards the same path, in order to reinforces the same heuristic further.

In graphs, the pheromones are deposited along edges, and their strength is proportional to the weight of the edge, and can be implemented to decay over time. Exploration can be encouraged by having a stochastic transition rule to encourage ants to move along paths with low pheromones too.