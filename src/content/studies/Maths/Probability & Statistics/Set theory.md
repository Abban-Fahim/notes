## Axioms of probability

1. **Non-negativity**: all probabilities are non-negative, hence $A_{i}\ge{0}$
2. **Normalisation**: the sum of all individual probabilities add up to 1, hence $\sum\limits_{i=0}^{n}{A_{i}}=1$
3. **Countable Additivity**: all

A **super set** of a set is a set of all its subsets, and it uses exponential notation, to refer to which set it refers to. For example. for $S$

$$
S\in\set{1,2,3}
$$

$$
2^{S}\in\set{\emptyset,\set{1},\set{2},\set{3},\set{1,2},\set{2,3},\set{3,1},\set{1,2,3}}
$$

An experiment with its uncertainty can be defined using a probability triple:

$$
(\Omega, F, P)
$$

- $\Omega$ is the set of all possible outcomes of an experiment
- $F$ is the set of all defined events, which itself is a subset of $\Omega$, based on properties defined by what we want
- $P$ is the probability

## Independence

To prove that if two events are independent, the following property must hold true

$$
P(A)\times{P(B)}=P(A\cap{B})
$$

Two sets being disjoint does not mean they are independent. When two events are independent, any combination of them and their complement are also independent. 

To prove if two events are mutually exclusive events, the following property is true

$$
P(A\cap{B})=0
$$

## Conditional probability

given

$$
P(A|B)=\frac{P(A\cap{B})}{P(B)}
$$

The three theorems of co 

- Multiplicative rule:

$$
P(A_{1}\cap{A_{2}}\cap{A_{3}}\cap{\dots}A_{n})=P(A_{1})
$$

- Total probability theorem:

$$
P(A)=\sum\limits_{i=1}^{n}P(A\cap{E_{i}})=\sum\limits_{i=1}^{n}P(A|E_{i})P(E_{i})
$$

- Bayes' rule:

$$
P(B|A)=\frac{P(A|B)P(B)}{P(A)}
$$
