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

### L'Hopital rule

For cases when the expression $\frac{f(x)}{g(x)}$ approaching a constant $c$ equals to $\frac{0}{0}$, we can use this rule to find an equivalent expression around $c$. The property we use is

$$\lim_{x\to{c}}\frac{f(x)}{g(x)}=\lim_{x\to{c}}\frac{f'
(x)}{g'(x)}$$

This rule only holds true when these four conditions are met:

- Indeterminacy of form (as stated in the problem above):

$$\lim_{x\to{c}}{f(x)}=\lim_{x\to{c}}{g(x)}=0\text{ or }\pm\infty$$

- $f(x)$ and $g(x)$ are differentiable on an open interval of $\mathcal{I}$, except possibly around $c$
- Non-zero derivative of denominator: $g(x)\ne{0}$; $\forall{x}$; $x\ne{c}$
- Existence of the quotient of derivatives (the final expression stated above)

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

## Gibb's phenomenon

Given the regular approximation error function,

$$\epsilon^{(m)}=\tilde{x}(t)-\tilde{x}^{(m)}(t)$$

the magnitude of this function is relatively large closest to discontinuities, and approaches zero as it moves away from those discontinuities. The reason for this derives from using sinusoidal functions which cannot really approximate discontinuities.

## Properties of Fourier series

### Linearity

Consider two EFS for the following signals

$$\tilde{x}(t)=\sum\limits_{k=-\infty}^{\infty}{c_{k}e^{-jkw_{0}t}}$$
$$\tilde{y}(t)=\sum\limits_{k=-\infty}^{\infty}{d_{k}e^{-jkw_{0}t}}$$

Then the following property holds true for any two constants $\alpha_{1}$ and $\alpha_{2}$

$$\alpha_{1}\tilde{x}(t)+\alpha_{2}\tilde{y}(t)=\sum\limits_{k=-\infty}^{\infty}{(\alpha_{1}c_{k}+\alpha_{2}d_{k})e^{-jkw_{0}t}}$$

### Symmetry

As stated above for EFS, where $\forall{k}$

$$
\begin{align*}
c_{-k}=c_{k}^{*}&\;\;\;\text{ when }\Im(\tilde{x}(t))=0\\
c_{-k}=-c_{k}^{*}&\;\;\;\text{ when }\Re(\tilde{x}(t))=0
\end{align*}
$$

### Fourier series of even and odd signals

For an even function $\tilde{x}(t)$

$$\Im(\tilde{x}(t))=0$$

and similarly for an odd function

$$\Re(\tilde{x}(t))=0$$

### Time-shifting

Since Fourier series are time invariant, a shift in time by $\tau$ is the same as evaluating that function at the the time $\tau$, as

$$\tilde{x}(t-\tau)=\sum\limits_{k=-\infty}^{\infty}{(c_{k}e^{-jk\omega_{0}\tau})e^{-jk\omega_{0}t}}$$
