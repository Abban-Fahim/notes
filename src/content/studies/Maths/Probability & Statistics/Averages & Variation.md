## Mode

This denotes the value that appears the most in a sample. For sets of grouped data, we can find a **modal class** which is the range with the highest frequency of samples.

## Median

This describes the halfway value of an ordered set of data. For odd number of $n$ samples, this will be the $\frac{n+1}{2}$th value. For even number of $n$ samples, this will be $\frac{1}{2}(x_{\frac{n}{2}} + x_{\frac{n}{2}+1})$.

For grouped data, we can estimate the median to be the 50th percentile.

## Mean

The general premise of an arithmetic mean is the sum of all sampled values divided by the number of samples. There are different notations given for this:

$$\bar{x} = \mu = E[x] = \frac{\Sigma xf}{\Sigma f} $$

We can also *code* data to make it more convenient to use with means, as it just involves a simple translation

$$E[x] = E[x-b] + b$$

For continuous RVs, the expected value is calculated using

$$E[X]=\int_{-\infty}^{\infty}{xf_X(x)\,dx}$$

For all RVs

$$E[X+Y]=E[X]+E[Y]$$

and for independent RVs

$$E[X\cdot{Y}]=E[X]\cdot E[Y]$$

## Ranges

For simple un-grouped data, this is just the difference between the smallest and largest values in the dataset. For grouped data, we use the boundary values of the minimum and maximum ranges.

To measure the variance of the more central values, we use the **interquartile range**, $IQR$, instead. This is the difference between the 25th and 75th percentiles, formally written as $Q_{3}-Q_{1}$.

## Variance and standard deviation

This measures how spread out the data is from the mean, taking account for both positive and negative spreads. Variance is given as $\sigma^{2}$ or $\text{Var}(x)$, and the standard deviation is just the square root of variance $\text{SD}(x) = \sigma$. Variance can be described as

$$\text{Var}(x) = \frac{\Sigma(x-\bar{x})^{2}f}{\Sigma f} = \frac{\Sigma x^{2}f}{\Sigma f} - \bar{x}^{2} $$

For continuous RVs,

$$Var(x)=E[(X-E[X])^{2}]=E[X^{2}]-E[X]^{2}$$

and for independent RVs

$$Var(X+Y)=Var(X)+Var(Y)$$

When combining datasets, we use the following for mean and variance

$$E[x+y] = \frac{\Sigma x + \Sigma y}{n_{x}+n_{y}}$$
$$Var(x+y) = \frac{\Sigma x^{2} + \Sigma y^{2}}{n_{x} + n_{y}} - [E(x+y)]^{2}$$
