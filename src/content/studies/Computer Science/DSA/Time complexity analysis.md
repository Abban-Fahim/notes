## Big-O notation

To understand the efficiency of a function, we can consider the following parameters

- accuracy
- time-complexity
- space-complexity

Most logical functions and data structures have an accuracy of 1.0, so it isn't of much importance, but is useful to consider in mathematical problems such as approximations. Space complexity is the growth rate of the amount of unit memory used by an algorithm during runtime, proportional to the input. Individual programs however rarely need to consider this due to efficient OS memory management and large available memory on modern systems. 

Time complexity is the rate of growth of the run-time of an algorithm proportional to input growth. We can consider the best, average, and worst cases of this for functions, however the most important is the latter. For worst case complexity, we use Big-O notation and simplify to only include the most prominent function of each input term. By dropping lower order terms and constants, we have a comparative benchmark that can be used to test and improve algorithms upon.

![[imgs/complexity.png]]

To define this upper bound of a function's runtime, we say that $f(n)$ is $O(g(n))$ with the positive constants $c$ and $n_{0}$ only if

$$
f(n)\le cg(n)\text{\;\;\; for } n\ge n_{0}
$$

## Master theorem

By only counting primitives of a recursive algorithm, we cannot determine if what its time complexity. The master theorem analyses certain recursive function by considering their recursive and base cases separately. The runtime of the algorithm must be expressed in the form:

$$
T(n)=aT\left(\frac{n}{b}\right)+f(n)
$$

where $a$ is the number of sub-problems in the recurrence, $b$ is the factor by which the input size decreases in every recurrent problem, and $n$ is the input size. $a$ and $b$ are constants and crucially not dependant on $n$. Another assumption is that the time complexity of the base case is $T(n)=\Theta(1)$, where the base case occurs when $n$ is less than the smallest possible value of $n$ that leads to recursion. The solution is given as one of three case, for recurrence problems that even have a solution through this theorem:

$$
c_{crit}=\log_b{a}
$$

$$
\begin{align*}
\text{If }&f(n)=O(n^{c})\text{ where }c<c_{crit}\\ &T(n)=O(n^{c_{crit}})
\end{align*}
$$

$$
\begin{align*}
\text{If }&f(n)=O(n^{c_{crit}}\log^{k}{n})\text{ where }k\ge0\\&T(n)=O(n^{c_{crit}}\log^{k+1}{n})
\end{align*}
$$

$$
\begin{align*}
\text{If }&f(n)=O(n^{c})\text{ where }c>c_{crit}\\ &T(n)=O(f(n))
\end{align*}
$$

## Amortised analysis

### Aggregate method

While individually considering the time complexity of different methods in a data structure, we may find some to be less efficient than others. However, in real scenarios, these heavier algorithms may be used less commonly than other ones. One way to think of it is a payment that is split up into multiple months, but we aren't required to pay the same amount every month. Instead, paying a higher amount in one month decreases the amount to be paid in other months. Here our time-consuming algorithms are a large payment upfront, but in reality they mean less to be paid later. The average time, or *amortised complexity*, is thus not only dependant on individual algorithms, but when they are run in context.

The simple task of adding up costs over time and dividing by the number of operations is the same as you'd use to know that the monthly payment is the same total amount, and is known as aggregate analysis. Stating mathematically, for $n$ operations, show that the worst case total time is $T(n)$, hence showing that the average time is $T(n)/n\approx O(1)$.

### Banker's method

This intuition is what the term "amortisation" actually derives from, accounting! We assign costs different to the actual cost $c_{i}$ of the operations, called "amortised" cost $\hat{c}_{i}$. The difference between these, negative or positive, is called credit, and it must always remain positive. You essentially deposit credits in advance, for doing expensive operations later which remove credits. To prove constant time for $n$ operations, the amortised cost form an upper bound on the actual cost:

$$
\sum\limits_{i=1}^{n}\hat{c}_{i}\ge\sum\limits_{i=1}^{n}c_{i}
$$

### Physicist's method

Also known as the potential method, it uses intuition behind stored potential energy problems. A potential function is assigned to an entire data structure $D$, where $i$ denotes the state of that data structure. The amortised cost is calculated as:

$$
\hat{c}_{i}=c_{i}+\Phi(D_{i})-\Phi(D_{i-1})
$$

which is the actual cost plus the change in potential due to the operation. When the change in potential is positive, it represents overcharging for an expensive operation, while negative change is an undercharge that makes up for the overcharges.
