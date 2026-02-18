GP consists of a class of of evolutionary algorithms that evolve computational models or programs, when there is no known algorithm to solve a problem or model a desired behaviour. Instead of operating binary strings used in genetic algorithms, we instead need to work with representations of programs.

GP representations may be compared with two dependant characteristics, between which there are is a trade-off as they are inversely proportional to each other:
- expressiveness, which is how much complex behaviour we can express with fewer elements. While all all representation are required to be Turing complete, more expressive sets allow for simpler and smaller programs to perform more tasks, while also being easy to understand.
- evolvability is the capacity of an evolution to evolve. Syntactical and encoding constraints often limit how freely we can apply genetic operators to a given solution. Hence more expressive representations tend to have less freedom during evolution, as they contain more rules for forming valid programs. Vice versa, a highly evolvable representation often consists of simpler structures and elements, limiting how expressive they can be.

GP is usually applied to problems which cannot be trivially solved by using known algorithms or models. While fixed neural networks can represent non-linear behaviours, the required size of the network (and subsequent optimisation time) grows quickly with the complexity problem, and in the end produces a solution we can't really explain. Additionally, genetic algorithms only operate on fixed size chromosomes, and are applied to solving optimisation problems. GP instead evolves a variety of different operations and constructs, that are difficult to represent in other techniques, like loops and exponential functions, resulting in "programs" with more natural control flow and syntax. One application of GP is symbolic regression, where an entire symbolic expression can be evolved to find one that fits a measured physical process, while allowing the use of complex expressions like exponentials and quadratics (hard to do in neural networks).

## Koza

This representation uses trees to represent programs, with each node representing an operation, and its children being operators or other operations, provided that terminal nodes are always operators. Syntax must be defined formally, for example by using Backus-Naur form, to ensure only valid operations can be put together (for example, to prevent division by zero).

Crossover between two programs involves taking a sub-tree of one and appending it to the terminal of another, sort of like grafting in horticulture. Fitness is however not the only quality that determines the chance of mating, as similarity between mates must be considered to ensure that crossover doesn't result much weaker offspring. Mutation can be achieved by,
- changing an operation node (AND -> OR, + --> -, etc.)
- changing a terminal node (x -> y)
- expanding a terminal node (x -> NOT x, y -> sin(y), etc.)

Closure is a property of an operation set that ensures that all the functions in the set are able to perform their operation using any given output, in any given arrangement. For example, a set like {+, -, AND, OR, sin, cos} has cases without closure since it mixes operations with different data-types (boolean and numeric) without a suitable way of converting between them. To deal with sets of no-closure, we must define strict type-checking, or develop ways to repair them. Simply penalising and discarding such cases would be wasteful to diversity, while mutating them until they are valid can be costly but allow for greater exp##
loration. Type-constraining can prevent the need for this by limiting what crossovers can take place, however this puts a severe strain on evolvability.

Despite the high expressiveness afforded by this representation, a common problem during evolution is the build of bloat, where tree sizes grow rapidly due to larger programs being easier to come across, and crossover usually causing a net growth in tree size. This "survival of the fattest" leads to bulkier, slower, and less interpret-able programs. To limit this, we can penalise the fitness of a solution proportional to its depth, or by code optimisation to remove sections that don't contribute to the solution.  

## Cartesian

Programs in CGP are represented as inter-connected grids with each element representing an operation with a number of inputs and outputs, modelled by how circuits are designed in FGPAs. We aim to the learn links between them,
low expr, high evol

## Linear

Linear GP operates on lists of sequential instructions, This is well suited to how low-level instructions
very low expr, med evol

## Grammatical evoultion

used with formal grammar

## Genetic improvement
