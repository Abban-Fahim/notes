#### NEED TO CHANGE ROLES OF Y, X AND THETA IN PREVIOUS ESTIMATION NOTES
## Likelihood

In noisy systems, we try to estimate the likelihood of estimator, $x$, by observing values, $y$. The **maximum likelihood estimator** (MLE), achieves this using an assumption about the model of the observations, given the actual RV, hence $y|x\sim{f_{Y|X}(y|x)}$. It is calculated by finding the parameter that maximises this (joint) **likelihood function**

$$x_{MLE}=\argmax_{x}{f_{Y|X}(y|x)}=\argmax_{x}{\prod\limits_{n=1}^{N}{f_{Y|X}(y_{n}|x)}}$$

However this method is only asymptotically unbiased, and for a smaller number of observations, it is better to use more information that we may have about $x$ and treat it like an RV, which can be modelled as a **prior distribution** function, $f_{X}(x)$. With this, and the marginal distribution of the likelihood, $f_{Y}(y)$, we find the **posterior distribution**, which describes what we know about $x$ given our observations, $y$

$$f_{X|Y}(x|y)=\frac{f_{Y|X}(y|x)f_{X}(x)}{f_{Y}(y)}$$

This is the basis for a better estimator, the **maximum a posteriori** (MAP), given as

$$\hat{x}_{MAP}=\argmax_{x}{f_{X|Y}(x|y)}=\argmax{f_{Y|X}(y|x)f_{X}(x)}$$

Another thing to note about the posterior is that it will be from the same family of distributions as the prior, if the likelihood distribution is also in the same, hence they are conjugate distributions. In both cases of MLE and MAP it is usually more convenient to work in logarithms of the likelihood and posterior respectively, as it is equivalent but simpler in computation. This method is useful for use with optimisation techniques, however may lead to plateaus and non-unique derivatives when trying to optimise. An alternative is the **minimum mean squared error** (MMSE) estimator, also called posterior mean, which minimises the square of the error of the expected value, which for multivariate distribution would be given as

$$\hat{x}_{MMSE}=\argmin_{x}E[(\hat{x}-x)^{T}(\hat{x}-x)]$$

This is estimator is unbiased and asymptotically Gaussian. It is difficult to solve in practise however, as the integral is often not easy to solve

$$\hat{x}_{MMSE}=E_{f(x|y)}[x]=\int{xf_{X|Y}(x|y)\,dx}$$

However when we enforce a linear relation between $\hat{x}$ and $y$, the problem becomes significantly easier to solve, such that

$$\hat{x}=Wy+b$$

For cases where we cannot, computational methods must be relied on like Monte Carlo sampling to approximate $E[g(x)]=\int{g(x)f(x|y)}$. It works by generating a large number ($N_{MC}$) of samples of RVs $x_{1},\dots,x_{n}$ of the distribution $f_{X|Y}(x|y)$, and then approximating as

$$\frac{1}{N_{MC}}\sum\limits_{n=1}^{N_{MC}}{g(x_{n})}\approx{E[g(x)]}$$

The MMSE estimator may also not make much sense with some discrete RVs, especially those with non-numerical values, in which case the MAP estimator works better. Both methods are also equivalent when the mode and mean of the posterior distribution are equal.