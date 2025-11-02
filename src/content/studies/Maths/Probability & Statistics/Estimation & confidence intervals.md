## Parameter estimation and error

Statistics is the field of estimating information about entire populations using finite samples. These are usually *parameters* of distributions that define the population, given as $x$. The *estimators* of these parameters are a function, $\hat{X}_{n}$, of the sampled random variables, $Y_{1},Y_{2},\dots,Y_{n}$, which depend on $\theta$.

An estimator is considered *completely unbiased* if $E[\hat{X}_{n}]=x$, for all $\theta$, or it may be an *asymptotically* unbiased estimator as the number of samples approaches large values. The error of an estimator can be a better indicator of how unbiased it is, given using a **mean squared error**, given as

$$
\epsilon_{MSE}=E[(\hat{\Theta}_{n}-\theta)^{2}]+Var(\hat{\Theta}_{n})
$$

where the first term is the estimator's bias and the second being its variance. One common estimator of the mean is the sample mean, which is usually asymptotically unbiased

$$
\bar{X}_{n}=\frac{1}{n}\sum\limits_{i=1}^{N}{X_{i}}
$$

To estimate variance, we must first know something about the mean. If the mean is known exactly, then an unbiased estimator for the variance is simple

$$
\hat{S}^{2}_{n}=\frac{1}{n}\sum\limits_{i=1}^{n}(X_{i}-\mu)^{2}
$$

If the mean is unknown, we estimate it as above, and the previous variance estimator becomes only asymptotically unbiased, and the always unbiased estimator becomes 

$$
\hat{S}^{2}_{n}=\frac{1}{n-1}\sum\limits_{i=1}^{n}{(X_{i}-\bar{X}_{n})^{2}}
$$

## $t$-Student distribution

With the aforementioned unbiased estimator for variance when mean is also estimated, the [[Maths/Probability & Statistics/Gaussian distribution#Central Limit Theorem|central limit theorem]] does not apply as usual, and a generalised standard normal distribution for, the t-student distribution, must be used at $n-1$ degrees of freedom

$$
T_n=\frac{\bar{X}_{n}-\mu}{\hat{S}^{2}_{n}/\sqrt{n}}
$$

Note that as $n$ approaches $\infty$, the t-distribution approaches $\mathcal{N}$, and so does $S^{2}_{n}$ approaches $\sigma^{2}$, and usually $n\ge50$ is sufficient for this convergence.

## Confidence intervals

An estimator does well for many parameters, but uncertainty can make them unreliable, hence why *intervals* are a better way of describing how confident your estimation is. Typically, a percentage value is chosen $0<\alpha<1$, with the *confidence level* being $1-\alpha$, and hence why $\alpha$ is usually chosen to be very small values, indicating higher confidence. The interval is then defined for $x$ as $[X^{-}_{n},X^{+}_{n}]$, where $X^{-}_{n}\le X^{+}_{n}$ and both are also RVs. The 'confidence' is then numerically spelled out as

$$
P(X^{-}_{n}\le x \le X^{+}_{n})\ge1-\alpha
$$

For finding the confidence interval of an estimate of a mean, which we take a sampled mean $\bar{X}_{n}$ henceforth, from $n$ realisations, we need knowledge about $\sigma^{2}$. IF $\sigma^{2}$ is known, then we use it as is with the central limit theorem divided by n

$$
Z_{n}=\frac{\bar{X}_{n}-\mu}{\sigma/\sqrt{n}}\sim\mathcal{N}(0,1)
$$

which then gives us the interval

$$
[\bar{X}_{n}-\frac{\sigma{c}}{\sqrt{n}},\bar{X}_{n}+\frac{\sigma{c}}{\sqrt{n}}]
$$

$$
P(-c\le Z_{n}\le c)=2P(Z_{n}\le{c})-1\ge1-\alpha
$$

However, when $\sigma^{2}$ is unknown, we must use its estimate $\hat{S}^{2}_{n}$ instead. Provided that $n\ge50$, we do not need need to use the t-distribution, giving us essentially the same limits

$$
[\bar{X}_{n}-\frac{\hat{S}_{n}c}{\sqrt{n}},\bar{X}_{n}+\frac{\hat{S}_{n}c}{\sqrt{n}}]
$$

however when $n<50$ the estimator must converge to a t-distribution instead

$$
[\bar{X}_{n}-\frac{\hat{S}_{n}t}{\sqrt{n}},\bar{X}_{n}+\frac{\hat{S}_{n}t}{\sqrt{n}}]
$$

$$
P(-t\le T_{n}\le t)\ge1-\alpha\;\;\;\;\;\;\;T_{n}\sim{t\text{-Student}(n-1)}
$$

