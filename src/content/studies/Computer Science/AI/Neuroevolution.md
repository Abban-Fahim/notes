The topology and other hyper-parameters of a neural network strongly affect its possible performance. Neuroevolution is the application of genetic algorithms to optimise the topology and weights of a neural network simultaneously. The simplest implementation of this fixes a topology and evolves a fixed length chromosome that encodes the weights and biases of the network.

## Evolution by composition

ESP evolves the weights of each neuron separately, essentially learning every task separately. The population multiple instances of the same neuron with different weights, and all the neurons being in large population together forces them to cooperate with each other in the full network. We can evolve the number of layers or nodes in each layer, to match

## Covariance matrix adaptive strategies

CMA-ES first samples a random population using a multivariate Gaussian distribution. To recombine these matrices, we chose a new mean (centre) to describe the samples in the space, with more weight-age given to the candidates at a better solution. The covariance matrix of this new distribution (the radii of the hyper-ellipsoid) are used to move all the members stochastically, tending towards the optima. In this way, the covariance provides a meta-heuristic vector for the evolution to speed up with, despite having a small search space.

## Neuroevolution of evolving topology

NEAT requires we start with a pre-trained network, which it then encodes directly into a list of nodes (neurons) and links (connections and their weights). The lists essentially act as variable length chromosomes, which are evolved in the following ways
- nodes (first list) can be mutated by adding new ones, and then adding new links as needed to fully connect that new node
- weights can be randomly perturbed by adding random values
- links can be toggled with a probability; a new link can be added by selecting two random nodes; when a new link is created, it will be enabled if it already exists
- crossover operates primarily on the nodes list, by simply adding any disjoint (unique genes within order) and excess genes (unique genes out of the order), and taking duplicate genes only from the fittest parent; disabled genes are also always inhereted.