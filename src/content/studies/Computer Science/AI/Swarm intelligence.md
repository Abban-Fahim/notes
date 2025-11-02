This biological algorithm argues that observed intelligence can emerge from a when a large group of self-interested individuals communicate with each other. The mechanisms upon which the individual acts upon may itself be rudimentary or unintelligent, but a common task or benefit is often tackled by the swarm as a result of interacting with each other. The typical characteristics of observed swarm intelligence include:
- the swarm exhibits higher intelligence than the sum of its member's
- the swarm's intelligence is not inherently programmed, but rather emerges as in [[Computer Science/AI/Behaviour based robotics]]
- interactions between individuals and their neighbours are local, with no central coordinator
- robust to internal and external perturbations 

An individual in such a swarm also possesses certain characteristics:
- it operates completely autonomously
- aware of sur
- auton sequenc
- self-adaptive
- allows for dynamic expansion

Stigmergy is a behaviour when an insect's behaviour is influenced by the previous behaviour of other insects. It manifests in ant colonies, in the concept of pheromones which are left out by previous ants. The presence and freshness of the pheromones act as meta-heuristics, guiding more ants to follow the same path, which in turn reinforces the same heuristic even more. In computing, we formalise this behaviour as Ant Colony Optimisation (ACO) algorithm. The decision to either exploit a good path (lots of pheromones), or explore randomly, is characterised by a probabilistic decision function.

A probabilistic road map (PRM) is a graph that contains sampled states in a continuous configuration space

## Boids

- maintains cohesion by moving towards the average distance in between its neighbours
- avoid crowding by staying equidistant from all its neighbours
- aligns itself to the average of its neighbours orientations

## Particle Swarm Optimisation

PSO is based on a social theory that interaction between individuals promotes adaption, hence improved collective intelligence. The amount and   works in continuous

Swarm is a set of particles $P$. A particle $p$ is made up of a position $x\in{\mathbb{R}^{D}}$ and velocity $v\in{\mathbb{R}^{D}}$. $x$ exists in the search space, and is a vector of your $D$ inputs. In the classic formulation, a particle only shares information with a number of closest particles, or all particles within a certain distance.

The algorithm starts with a population initialised with random positions and weights. Throughout its iterations, it maintains two specific positions
- `pBest` for the particles own best position so far
- `nBest` for its neighbors best position so far

We then modify the velocity (and hence next position) according to `pBest` and `nBest` values. 

Consider adding variations of pso to compare
- using global neighbors vs local ones vs global vs hybrid

we have a few hyper parameters 
- $\beta$ owns position arrogance cognitive weight
- $\gamma$ others positions social weight
- $\delta$ global positions trends
- $\alpha$ inertia how much to stay together

$$v_{i,t+1}=\alpha{v_{i,t}}+\beta{(p_{i,t}-x_{i,t})}+\delta$$

Also we add $r_{n}$ to the last three factors to add randomness in exploration

## Ant Colony Optimisation

Works in discrete