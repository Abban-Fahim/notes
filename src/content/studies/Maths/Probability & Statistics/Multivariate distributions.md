## Changing a variable

Assuming we have an RV $X\sim{f_{X}(x)}$, and $g(x)$ is a monotonic function of the same domain, we can describe the distribution of a random variable $Y=g(x)$ as

$$f_{Y}(y)=f_{X}(g^{-1}(y))|\frac{d}{dy}f_{X}(g^{-1}(y))|$$

## Bi-variate distributions

Two random variables can be combined in random behaviour together to have a joint PDF, $f_{X,Y}(x,y)$ in the domain $A\in\mathbb{R}^{2}$, whose CDF is given as

$$F_{X,Y}(x_{0},y_{0})=\int_{-\infty}^{y_{0}}\int_{-\infty}^{x_{0}}f_{X,Y}(x,y)\,dx\,dy$$

The inverse of this can be found using double partial differentiation

$$f_{X,Y}(x,y)=\frac{\partial^{2}{F_{X,Y}(x,y)}}{\partial{x}\partial{y}}$$

We can also find the marginal distribution of one of the two random variables, $x$, by integrating over the entire range of the other variable, $y$, hence given as

$$f_{X}(x)=\int_{y}{f_{X,Y}(x,y)\,dy}$$

which can be rewritten using [[Maths/Probability & Statistics/Bayes' Theorem|Bayes' Theorem]], like

$$f_{X}(x)=\int_{y}{f_{X|Y}(x|y)f(y)\,dy}$$

where $X$ and $Y$ are vectors. For conditional distributions involving two RVs, we use

$$f_{X|Y}(x|y)=\frac{f_{X,Y}(x,y)}{f_{Y}(y)}$$

For a sum of two of independent RVs, $Z=X+Y$, we find the marginal distribution using

$$f_{Z}(x)=\int{f_{Z|X}(x|x)f_{X}(x)\,dx}=\int{f_{Y}(z-x)f_{X}(x)\,dx}$$

## Expectations

The marginal expectation of a monotonic function will be

$$E[g(X)]=\iint\limits_{(x,y)\in{A}}{g(x)f_{X,Y}(x,y)\,dx\,dy}=\int{g(x)f_{X}(x)\,dx}$$

and conditional expectation will be 

$$E(g(X)|Y=y)=\int{g(x)f_{X|Y}(x|y)\,dx}$$

This gives us the following properties for expectations of independent joint $X$ and $Y$

$$E[XY]=E[X]E[Y]$$
$$E[g(X)h(Y)]=E[g(X)]E[h(Y)]$$
$$Var[X+Y]=Var[X]+Var[Y]$$

## Covariance and correlation

The covariance of joint two RVs describes the direction of relation between them as 2-D vector, and is given as

$$cov(X,Y)=E[(X-E[X])(Y-E[Y])]=E[XY]-E[X]E[Y]$$

If $X$ and $Y$ are independent, their covariance will be 0, but this doesn't make it a test for independence.

The correlation describes the magnitude of how variables are related, and is proportional to the covariance, given as

$$\rho(X,Y)=\frac{cov(X,Y)}{\sqrt{Var(X)Var(Y)}}$$

where the limits are $-1\le\rho(X,Y)\le1$ with a correlation of 0 indicating unrelated variables, and is always the case for independent variables.0