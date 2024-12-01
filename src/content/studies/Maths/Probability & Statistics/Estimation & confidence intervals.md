## Parameter estimation and error

Statistics is the field of estimating information about entire populations using finite samples. These are usually *parameters* of distributions that define the population, given as $x$. The *estimators* of these parameters are a function, $\hat{\Theta}_{n}$, of the sampled random variables, $X_{1},X_{2},\dots,X_{n}$, which depend on $\theta$.

An estimator is considered *completely unbiased* if $E[\hat{\Theta}_{n}]=\theta$, for all $\theta$, or it may be an *asymptotically* unbiased estimator as the number of samples approaches large values. The error of an estimator can be a better indicator of how unbiased it is, given using a **mean squared error**, given as

$$E[(\hat{\Theta}_{n}-\theta)^{2}]+Var(\hat{\Theta}_{n})$$

where the first term is the estimator's bias and the second being its variance.

To estimate variance, we must first know something about the mean. If the mean is known exactly, then an unbiased estimator for the variance is simple

$$\hat{S}^{2}_{n}=\frac{1}{n}\sum\limits_{i=1}^{n}(X_{i}-\mu)^{2}$$

If the mean is unknown, we can use its estimation (sample mean), $\bar{X}_{n}$ to get an unbiased estimator as follows

## Confidence intervals

## $t$-Student distribution

Given $X_{1},X_{2},\dots{X_{n}}$ independent observations of $X$, we can give an estimate of the mean and variance of a combined distribution


$$S^{2}_{n}=\frac{1}{n-1}\sum\limits_{k=1}^{n}(X_{k}-\mu)^{2}$$

