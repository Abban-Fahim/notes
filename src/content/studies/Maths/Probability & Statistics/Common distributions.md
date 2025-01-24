## Bernoulli distribution

The probability is described in a binary way, with success and failure state. The parameter $p$ states the probability of the success case, while $q$ is usually used to denote the failure, which equals to $1-p$

$$X\sim{Ber(p)}=\begin{cases}
p & 1 \\
1-p & 0
\end{cases}$$
$$E(X)=p$$
$$Var(X)=p(1-p)=pq$$

## Binomial distribution

An extension of the Bernoulli distribution where $p$ is the *success case* value, and $n$ is the number of independent trials. We can calculate the probability of achieving a number of successes, $r$, in $n$ trials as

$$X \sim B(n,p) = \binom{n}{r} p^{r} (1-p)^{n-r} = \binom{n}{r} p^{r}q^{n-r} $$
$$E(X) = np$$
$$Var(X) = np(1-p) = npq$$

## Geometric distribution

A discrete random variable is said to have a *geometric distribution* if
- the repeated trials are independent
- the repeated trials can be infinite
- there are only two possible outcomes
- the probability of each success, $p$, is constant

$$X\sim\text{Geo}(r) = p(1-p)^{r-1}=pq^{r-1} ~~~ \text{for} ~ r \ge 1$$

This gives us the probability of having only *fails* until the *r*-th trial, which is a success, hence giving us $r-1$ fails. For larger values of $r$, we can use the following

$$P(x\le r) = 1-(1-p)^{r} = 1-q^{r}$$
$$P(X>r) = (1-p)^{r} = q^{r}$$

The mode of any geometric distribution is 1, as the highest chance of a success is on the first trial. The mean of a geometric distribution is given as (proof in tablet notes!)

$$E(x) = \frac{1}{p}$$

## Uniform distribution

When the probability is uniform for the entire valid range from $a$ to $b$, for **continuous** datasets is given as

$$X\sim\mathcal{U}(a,b)=p_{X}(x)=\begin{cases}
\frac{1}{b-a} & x\in{[a,b]} \\
0 & x\notin[a,b]
\end{cases}$$

The expected values and variance are hence given as

$$E[X]=\frac{a+b}{2}$$
$$Var(X)=\frac{(b-a)^{2}}{12}$$

For **discrete** datasets, this is instead given as

$$X\sim\mathcal{U}(a,b)=p_{X}(x)=\begin{cases}
\frac{1}{b-a+1} & a\le{x}\le{b} \\
0 & \text{otherwise}
\end{cases}$$

with the following properties

$$E[X]=\frac{a+b}{2}$$
$$Var(X)=\frac{(b-a+1)^{2}-1}{12}$$

## Poisson distribution

Has one parameter, $\lambda$, given as

$$X\sim\text{Poisson}(\lambda)=p_{X}(k)=\frac{\lambda^{k}e^{-\lambda}}{k!},\;\;\;k\in\mathbb{W}$$

which also has the property

$$E[X]=Var(X)=\lambda$$

## Exponential distribution

Also only has one parameter, $\lambda$, and is given as

$$X\sim\text{Exp}(\lambda)=p_{X}(x)=\lambda{e^{-\lambda{x}}},\;\;\;x\ge{0}$$

and the properties of which are

$$E[X]=1/\lambda$$
$$Var(X)=\frac{1}{\lambda^{2}}$$

