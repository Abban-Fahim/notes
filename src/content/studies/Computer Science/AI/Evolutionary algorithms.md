Any genetic algorithm (GA) starts by randomly sampling a pool of organisms from the configuration space of chromosomes. A gene is the basic unit that makes up chromosomes, and may be represented as a binary or tuple element (like $\{A,C,T,G\}$ in humans). Each chromosome represents a phenotype - a semantic characteristic of an organism. The fitness of an organism is defined by the combination of these phenotype, and the aim of a GA is to optimise these using similar biological analogies.

The typical GA pipeline follows the following ideas in order, in generational steps until the population converges. Different algorithms are discriminated by their choice of sub-algorithm at each stage.

## Fitness evaluation

This step decodes the organism's chromosomes to values to be input to a fitness evaluation function. This measure empirically tells us how well the organism's features are adapted to its purpose. A variety of meta-heuristics could also be applied here to help guide the evolution.

## Selection

Here the fitness scores from the previous step is used to prefer evolving the fitter organisms, according to the concept of 'survival of the fittest'. One method is roulette wheel .... This should ensure lower fitness individual still do get chance cuz they might have room fo improvements. 

## Reproduction

This is the pseudo-random mechanism of picking one or two candidates to be used for 'reproduction'. Here we choose between the two most common methods in nature:
- Mutation (asexual) is performed by taking a candidate individual and mutating its genes. Pseudo-randomness is used to decide the number of affected genes as well as the changes themselves. 
- Crossover (sexual) is where two fit individuals have their genes combined at different segments to create a new offspring. The segments can vary in length, number and position: a binary crossover divides the DNA into two sections, and each side is made up of one parent; an n-point crossover may split the DNA sequence into further such sections; a rolling cross-over has many indices in the sequence chosen to come from either parent, resulting in a lot of diversity. The chosen method may also chose to further mutate the offspring after crossover, better mimicking nature.

## Survival

how is survival handled, population update
- steady-state: one parent selected to produce a child that replaces the worst from the generation
- generational: replace whole population using fit children

# Neuro-evolution

Modifying neural networks (hyper-params or weights, or both) using GA
- CMA-ES - covariance matrix basically provides a metahueristic vector 
- NEAT
- liiiiiiiiiiiiiiiiiiiiiiiiiiiii