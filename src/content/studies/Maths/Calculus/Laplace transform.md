In physics this transformation is used to turn deferential and integral equations in the *time domain* into simpler equations in the *frequency domain* (or *s-domain*). The formal definition is

$$\mathcal{L}\{f(t)\}=F(s)=\int_{0}^{\infty}{f(t)e^{-st}\;dt}$$

where $s$ is a complex number denoting frequency

$$s=a+jb=j\omega$$

The property of linearity states that the transformation of a sum of functions

$$\mathcal{L}\{\alpha f(t) + \beta g(t) + \cdots\}=\alpha\cdot\mathcal{L}\{f(t)\}+\beta\cdot\mathcal{L}\{g(t)\}+\mathcal{L}\{\cdots\}$$

The **first-shift theorem** states that for a time function that is the product of an exponential time function, the resulting Laplace transform is given as

$$\mathcal{L}\{e^{at}f(t)\}=F(s-a)$$

We can also transform differential and integral terms, which remains the most useful application of this transformation

$$\mathcal{L}\{f'(t)\}=sF(s)-f(0)$$
$$\mathcal{L}\{f''(t)\}=s^{2}F(s)-sf(0)-f'(0)$$

$$\mathcal{L}\left\{ \int_{0}^{t}{f(t)\;dt} \right\}=\frac{1}{s}F(s)$$

The Inverse Laplace Transform turns frequency domain functions into time domain functions and can be performed using the general solutions for normal transforms, along with a combination of partial fractions, first-shifts and factorisation. Here's a general definition I found on Wikipedia that I genuinely don't have any idea of how it works (as of second year undergrad)

$$\mathcal{L}^{-1}\{F(s)\}=f(t)=\frac{1}{2\pi j}\lim_{T\to\infty}\int_{\gamma-jt}^{\gamma+jT}{e^{st}F(s)\ ds}$$

The second-shift theorem