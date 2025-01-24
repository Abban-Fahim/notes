Defined by this monstrosity:

$$X\sim\mathcal{N}(\mu,\sigma^{2})=\frac{1}{\sigma\sqrt{2\pi}}\exp\left(-\frac{(x-\mu)^{2}}{2\sigma^{2}}\right)$$


![[imgs/stn.png]]

If a continuous random variable is said to be normally distributed, its mean = mode = median, and its PDF can be drawn as a symmetric bell shape centered around $\mu$ and its height inversely proportional to $\sigma$.

This gives us a probability function that tells us the probability of certain value $X$ of random variable $x$ in a range. The probability of $X$ being less than $\mu$ are 50%, and the same for greater than. For the standard normal distribution $X\sim N(0,1)$, we can find the following properties using symmetry:

$$\Phi(x)=P(X<x)$$
$$\Phi(-x)=1-\Phi(x)$$
$$P(X>x)=1-P(X<x)$$
$$P(X_{1}<x<X_{2})=\Phi(X_{2})-\Phi(X_{1})$$

If a function follows a normal distribution but does not have $\mu=0$ and $\sigma=1$, we can convert them to this standard form by coding the variable $X$ as such

$$\frac{X-\mu}{\sigma}$$

## Central Limit Theorem

Given $X_{1},X_{2},\dots,X_{n}$ *i.i.d* (independent and identical distribution) observations, which all share a common mean $\mu$ and variance $\sigma^{2}$, the distribution of their summation is given as

$$S_{n}=\sum\limits_{i=1}^n{X_{i}}$$
$$Z_{n}=\frac{S_{n}-n\mu}{\sigma\sqrt{n}}$$

Then $Z_{n}$ converges to a Gaussian distribution with mean $n\mu$ and variance $\sigma\sqrt{n}$. The minimum value of $n$ for uniform distribution is 8, while for most other distributions $n\ge{30}$. A requirement for these distributions is that $\mu$ and $\sigma^{2}$ must exist and be finite, and those which don't fulfil that requirement cannot converge (i.e Cauchy distribution).

## Multivariate Gaussian

For a $k$-dimension random vector (of random variables), $X=[X_{1},\dots,X_{k}]^{T}$, the notation for its normal distribution is

$$X\sim\mathcal{N}_{k}(\mu,\Sigma)$$

where $\mu$ is the $k$-dimensional mean-vector given as

$$\mu=E[X]=[E[X_{1}],\dots,E[X_{k}]]^{T}$$

and $\Sigma$ is the $k\times{k}$ covariance matrix. This linear separation allows computing the marginal distributions very easily

$$X_{n}\sim\mathcal{N}(\mu_{n},\sigma_{nn})$$

When $X$ is a random vector of $\mathbb{R}^{N}$ and $Y$ of $\mathbb{R}^{M}$, and $C$ be a $N\times{M}$ matrix, then distribution of $Z=X+CY$ is given as

$$Z\sim\mathcal{N}(z;m_{X}+Cm_{Y},\Sigma_{X}+C\Sigma_{Y}C^{T})$$

## Additive white Gaussian noise

bruh

$$y=f_{Y|X}(y|x)=\left(\frac{1}{2\pi\sigma^{2}}\right)^{\frac{N}{2}}\exp{\frac{-||y-x||^{2}_{2}}{2\sigma^{2}}}$$

