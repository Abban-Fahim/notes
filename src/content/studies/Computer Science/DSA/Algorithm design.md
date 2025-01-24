Oft there are many ways to achieve the same things, in life as well as computer programming. The design of algorithms is a set of design patterns that an implementation follows, and these determine the overarching computational requirements and efficiency of the implementation.

## Brute force

The bluntest of knives. The longest to cut. But somehow the easiest one to prey on. Somehow. That analogy doesn't make sense. Regardless, the name is quite self-explanatory, as it involves solving a problem by considering every possible solution to it. Its obvious limitations are complexity growth, which in any case of working with graphs would grow exponentially or worse. 

## Backtracking

Instead of considering all possible solutions as above, this involves pruning out searches on solutions that are incorrect, and to consider a different path instead. This must consider all possible search paths until a dead end is found, and that path is then discarded. A unique path is determined by the choices given to us by an input set, and after traversing each choice we check for a dead end.

## Divide and Conquer

The basic outline of a divide and conquer algorithm is to:

- divide the problem into smaller sub-problems of the same task
- solve the sub-problems recursively
- combine the sub-problems to solve the original problem

The second step only stops recursing at a base case, and the third step usually happens multiples times with the smaller sub-problems, after which the smaller solution is returned and propagates up. An simple example of this algorithm is merge sort.

## Dynamic programming

This method usually applies when trying to reduce repeated computations in optimisation values, and utilises the same approach of solving and combining sub-problems. It depends on some form of memoisation, where previous sub-problem results are stored and looked up when they need to computed again. 