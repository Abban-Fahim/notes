A permutation is a unique way of arranging a set of elements. When we consider the permutations of an entire set of unique elements, we denote it as $^{n}P_{n}$, which is equal to $n!$. 

If our set has repetition in elements, the permutations are less than $n!$ as the repeated elements give the same arrangements when swapped. Hence the expression for permutations can expressed in terms of $p,\,q,\,r\,\dots$ which are the occurrences of every unique element in the set, and must add up to $n$

$$\frac{n!}{p!\times q!\times r!\times \dots}$$

When only selecting $r$ elements from a set of $n$, the possible permutations amount to

$$^{n}P_{r} = \frac{n!}{(n - r)!}$$

A combination is a way of selecting element(s), when the order of selection has no effect. When selecting $n$ elements from a set of $r$, we describe the number of possible combinations to be

$$^{n}C_{r} = \frac{n!}{r!(n-r)!}$$

A unique property of combinations is symmetry across the values of $r$, hence $^{n}C_{r}= \ ^{n}C_{n-r}$. This formula is also identical to the binomial distribution.