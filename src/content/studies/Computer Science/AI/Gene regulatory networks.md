	
	In cellular processes, the work of producing new genes (creating RNA, generating proteins), is usually regulated by the activity of other genes. The relationships between different genes and their regulators are best represented as graphs, as they rarely follow a strict hierarchy. A gene can have any number of regulators and logical relations with them, and can be defined with a boolean network equation. 

## Cellular automata

A special case of GRNs, where the individual components that interact with each other to update their own states, are based on the same rules for all cells. These simple rules work together to exhibit emergent behaviour, starting from a certain initial state. The state space is represented as a grid, with each cell has a number of states. Like the general case, the emergent behaviours can be classified:
- static regions, wherein its states do not change unless the regions neighbours are affected by another process
- oscillating objects, which cycle between the same set of states over and over again (heulmetian or something)
- travelling objects, also a kind of oscillating object whose periodicity appears by a certain translation away from its previous occurrence.

Elementary CAs were devised by Stephen Wolfram as a case of one-dimensional CAs, which consist of a horizontal grid where each element can have an odd number, $n$, of neighbours ($\lfloor{n/2}\rfloor$ adjacent and including itself). Given an $s$ number of states, we have $s^{n}$ number of possible update rules, and $s^{s^{n}}$ number of possible choices between these states. The most widely studied case is of $n=3$ and $s=2$, where we have 256 possible combinations of rules, and each of these rules is represented by its binary number of being 0 not being used and 1 not, and each rule being arranged in ascending order of its binary value. 

A popularly known CA is John Conway's Game of Life, where each cell has two possible states (dead or alive), and each update step follows four simple rules:
- under-population: a living cell with fewer than two living neighbour dies
- survival: a living cell with exactly two or three living neighbours stays alive
- over-population: a living cell with more than tree living neighbours dies
- reproduction: a dead cell with exactly three living neighbours becomes alive

The result of these simple rules is that it can simulate universal computation, depending purely on the initial state. People have discovered numerous patterns and initial configuration to simulate logic gates and entire processors through the game.

While regular CA defines your rules and outputs the behaviour of a given state, neural CA is the inverse problem, using some dataset of the observed behaviours, we learn the rules themselves, usually using some evolutionary algorithms.