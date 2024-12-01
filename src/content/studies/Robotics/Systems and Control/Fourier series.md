## Mathematical tools

### Even and odd functions

An even function is symmetrical around the y-axis, and as described as:

$$f(-x)=f(x)$$

An odd function is symmetric around the origin, and is given by

$$f(-x)=-f(x)$$

Examples of the former include $\cos{x},\, x\sin{x},\, |x|$, and of the latter $\sin{x},\, x$.

Integrating them has some useful properties

$$\int_{-a}^{a}f_{even}(x)\ dx=2\int_{0}^{a}f_{even}(x)\ dx$$
$$\int_{-a}^{a}f_{odd}(x)\ dx=0$$

### Euler's formula

Other useful relations to convert between trigonometric identities and exponential expressions, all derived from Euler's identity, $e^{j\pi}=-1$, are the following

$$e^{jx}=\cos{x}+j\sin{x}$$
$$\cos{x}=\frac{e^{jx}+e^{-jx}}{2}$$
$$\sin{x}=\frac{e^{jx}-e^{-jx}}{2j}$$

## Trigonometric Fourier series

Any periodic signal, $\tilde{x}(t)$ can be given with the following general equation

$$\tilde{x}(t)=a_{0}+\sum\limits_{k=1}^{\infty}{a_{k}\cos{(k\omega_{0}t)}+b_{k}\sin{(k\omega_{0}t)}}$$

where the constants can be found from the signal itself

$$a_{0}=\frac{1}{T_{0}}\int_{T_{0}}{\tilde{x}(t)\,dt}$$
$$a_{k}=\frac{2}{T_{0}}\int_{T_{0}}{\tilde{x}(t)\cos{(k\omega_{0}t)}\,dt}$$
$$b_{k}=\frac{2}{T_{0}}\int_{T_{0}}{\tilde{x}(t)\sin{(k\omega_{0}t)}\,dt}$$

## Exponential Fourier series

The sum of sines and cosines can also be written using Euler's formula as an exponential, in a larger range with only one constant

$$\tilde{x}(t)=\sum\limits_{k=-\infty}^{\infty}c_{k}e^{kjw_{0}t}$$

This representation is consistent with the previous with the following

$$c_{0}=a_{0}$$
$$c_{k}+c_{-k}=a_{k}$$
$$j(c_{k}-c_{-k})=b_{k}$$

The latter of these equations can be solved to yield

$$c_{k}=\frac{1}{2}(a_{k}-jb_{k})$$
$$c_{-k}=\frac{1}{2}(a_{k}+jb_{k})$$
$$c_{k}=c_{-k}^{*}$$

To solve for $c_{k}$ directly, we can use

$$c_{k}=\frac{1}{T_{0}}\int_{t_{0}}^{t_{0}+T_{0}}{\tilde{x}(t)e^{-jkw_{0}t}\,dt}$$

This constant is also useful in Parseval's theorem to calculate power, stating that the energy expended in the time-domain must equal the energy expended in the frequency-domain, using the law of conservation of energy

$$P_{x}=\sum\limits_{k_{-\infty}}^{\infty}{|c_{k}|^{2}}$$

## Compact Fourier series

Another representation of periodic signals is synthesised as

$$\tilde{x}(t)=d_{0}+\sum\limits_{k=1}^{\infty}d_{k}\cos(k\omega_{0}t+\phi_{k})$$

Similar to the exponential series, the constants can be expressed using trigonometric identities

$$d_{0}=a_{0}$$
$$d_{k}=\sqrt{a_{k}^{2}+b_{k}^{2}}$$
$$\phi_{k}=-\arctan{\frac{b_{k}}{a_{k}}}$$

## Dirichlet conditions

A periodic signal $\tilde{x}(t)$ is said to be expandable into a Fourier series if and only if

- it is possible to integrate the absolute of one cycle of the function bound by this inequality

$$\int_{0}^{T_{0}}{|\tilde{x}(t)|\,dt}<\infty$$

- the signal has a finite number of discontinuities in one time interval
- the signal has a finite number of minima and maxima in one time interval

