GP consists of a class of of evolutionary algorithms that evolve computational models or programs, when there is no known algorithm to solve a problem or model a desired behaviour. Instead of operating binary strings used in genetic algorithms, we instead need to work with representations of programs.

GP representations may be compared with two dependant characteristics, between which there are is a trade-off as they are inversely proportional to each other:
- expressiveness, which is how much complex behaviour we can express with fewer elements. While all all representation are required to be Turing complete, more expressive sets allow for simpler and smaller programs to perform more tasks, while also being easy to understand.
- evolvability is the capacity of an evolution to evolve. Syntactical and encoding constraints often limit how freely we can apply genetic operators to a given solution. Hence more expressive representations tend to have less freedom during evolution, as they contain more rules for forming valid programs. Vice versa, a highly evolvable representation often consists of simpler structures and elements, limiting how expressive they can be.

## Koza

This representation uses trees to represent programs
high expr, low evol

## Cartesian

uses grids, learns links between them, used to evolve circuits represented as an FGPA
low expr, high evol

## Linear

low-level instructions for a programme
very low expr, med evol

## Grammatical evoultion

used with formal grammar

## Genetic improvement