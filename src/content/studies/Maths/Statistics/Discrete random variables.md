A variable is said to be random if it only takes certain values by chance. Any situation with independent trials, or trials without replacements may generate such variables. We describe these variables with $P(X)$, where $X$ is the discrete random variable, and $P(x) = p$ gives the probability of the required event, when $x$ is the value of $X$.

The mean and variance of a random variable is simplified as

$$E(X) = \Sigma (x \cdot p) $$
$$Var(X) = \Sigma (x^{2} \cdot p) - [E(x)]^2$$
$$SD(X) = \sqrt{Var(X)}$$

## Binomial distribution

When we model value of X to be a *success case*, we can calculate the probability of achieving a number of successes, $r$, in a fixed number of independent trials, $n$.

$$X \sim B(n,p) = \binom{n}{r} p^{r} (1-p)^{n-r} $$

Also for $X\sim B(n,p)$, we can find the mean and variance as

$$E(X) = np$$
$$Var(X) = np(1-p)$$
$$SD(X) = \sqrt{Var(X)}$$

## Geometric distribution

A discrete random variable is said to have a *geometric distribution* if
- the repeated trials are independent
- the repeated trials can be infinite
- there are only two possible outcomes
- the probability of each success, $p$, is constant

$$Geo(r) = p(1-p)^{r-1} ~~~ \text{for} ~ r \ge 1$$
$$Geo(r) = pq^{1-r} ~~~~ \text{where} ~ q = p-1 $$

This gives us the probability of having only *fails* until the *r*-th trial, which is a success, hence giving us $r-1$ fails. For larger values of $r$, we can use the following

$$P(x\le r) = 1-(1-p)^{r} = 1-q^{r}$$
$$P(X>r) = (1-p)^{r} = q^{r}$$

The mode of any geometric distribution is 1, as the  highest chance of a success is on the first trial. The mean of a geometric distribution is given as (proof in tablet notes!)

$$E(x) = \frac{1}{p}$$

