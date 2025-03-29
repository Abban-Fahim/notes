A *linear time-invariant* system is defined as input-output system that is constrained to the input and output (both regarded as functions $x(t)$ and $y(t)$, being linearly mapped, and that the output is also not dependant on the particular time when the input is applied, hence for input $x(t-T)$, the output must be $y(t-T)$.

## Convolutions

A convolution is a mathematical operation, given as a function of time. To use it, we require input signal to the convolution

$$y(t)=x(t)*h(t)=\int_{-\infty}^{+\infty}{x(t)h(t-\lambda)\,d\lambda}$$

## Stability

To prove if a system is stable, we can check using the following inequality

$$\int_{-\infty}^{+\infty}{|h(t)|\,dt}<\infty$$

## Impulse and system response

The system's behaviour can be described using one function: the impulse response, $h(t)$. Mathematically, it is the vale the input is convoluted with to get the output

$$y(t)=x(t)*h(t)$$

It is called the impulse response since when $x(t)=\delta(t)$, it causes $y(t)=h(t)$. In the frequency domain, $H(s)$ is called the system response or transfer function, and is defined as such

$$H(s)=\frac{Y(s)}{X(s)}$$

## Poles and zeros

The system response can be used to also identify important characteristics of a system without solving the entire equation, through its poles and zeros, defined in the numerator and denominator of $H(s)$ respectively

$$H(s)=\frac{N(s)}{D(s)}=K\frac{p_{m}s^{m}+p_{m-1}s^{m-1}+\dots+p_{0}}{z_{n}s^{n}+z_{n-1}s^{n-1}+\dots+z_{0}}$$

This gives us $m$ poles and $n$ zeros, where $K$ is a constant

## Stability

If all the poles lie on the negative side of the real axis, the system is stable for the entire ROC. If even a single pole is on the positive real side, the system is no longer stable

For discrete systems ($z$ domain), the boundary (ROC?) is defined by a unit circle, $|z|=1$. Stability is achieved when the poles are inside the circle, hence $|z|<1$, and unstable otherwise.

## Shannon's sampling theorem

A **band-limited** signal is only greater than zero within a bandwidth of $\omega_{m}//f_{m}$, and its time-domain signal can be uniquely determined from its samples at a sampling time $T_{s}$, where $f_{s}>2f_{m}$. If $f_{s}$ is not twice size of $f_{m}$, then the samples will overlap and you will lose information on the receiving end. This minimum $2f_{m}$ is called the *Nyquist rate*, and its inverse the interval.
## Sampling

Nyquist frequency, $f$ is twice the maximum 

For other sampling rates, the aliasing is as follows

$$f_{o}=
\begin{cases}
f_{i} & 0<f_{s}<2f_{i} \\
f_{s}-f_{i} & 2f_{i}
\end{cases}
$$