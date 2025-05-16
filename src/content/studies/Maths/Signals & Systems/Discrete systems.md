## Convolutions

To do convolution with discrete functions

$$y[n]=x[n]*h[n]=\sum\limits_{k=-\infty}^{\infty}{x[k]h[n-k]}$$

Here if $x[n]$ has $a$ elements, and $h[n]$ has $b$ elements, then the output of their convolution will have $a+b-1$ elements. This can be used to truncate the summation limits as such

$$x[n]*h[n]=\sum\limits_{k=0}^{a+b-1}{x[k]h[n-k]}$$

Another way to limit is by having an upper-bound to the maximum of either input's size

$$x[n]*h[n]=\sum\limits_{k=0}^{\max(a,b)}{x[k]h[n-k]}$$

To expand this expression for all elements in $y[n]$, we do

$$y[0]=x[0]h[0]+x[1]h[-1]+x[2]h[-2]+\dots$$
$$y[1]=x[0]h[1]+x[1]h[0]+x[2]h[-1]+\dots$$
$$y[2]=x[0]h[2]+x[1]h[1]+x[2]h[0]+\dots$$

Circular convolution is done in a goofier way like bruh

## Correlations

While convolutions describe the relation between the output signal of an LTI system to its input and impulse response, **correlations** describe the degree of similarity between two signals.

$$R_{x[n]h[n]}=\sum\limits_{m=-\infty}^{\infty}{x[m]h[m-n]}$$

## Sampling

Nyquist frequency, $f$ is twice the maximum 

For other sampling rates, the aliasing is as follows

$$f_{o}=
\begin{cases}
f_{i} & 0<f_{s}<2f_{i} \\
f_{s}-f_{i} & 2f_{i}
\end{cases}
$$

## $z$-transforms

This is the equivalent of [[Maths/Signals & Systems/Laplace transform|Laplace transform]] in the discrete domain, using the frequency variable $z$, given as

$$X[z]=\sum\limits_{n=-\infty}^{\infty}{x(n)z^{-n}}$$
$$x[n-a]\leftrightarrow{z^{-a}X[z]}$$

Some $z$-transforms, with their ROC, include

$$d(n)\leftrightarrow1;\;\forall{z}$$
$$a^{n}u(n)\leftrightarrow\frac{z}{z-a};\;|z|>|a|$$
$$-a^{n}u(-n-1)\leftrightarrow\frac{z}{z-a};\;|z|<|a|$$

To related between this, Laplace transforms, DTFT, CTFT, we use the following 

$$z=e^{-sj}=e^{-nTt}$$

## Discrete Fourier transforms

There are two variations of this: DTFT is continuous in the frequency domain, while DFT is finite in both. The first transforms $n$ to the $\hat{\omega}=\omega{T}$ domain, given as

$$X(\hat{\omega})=\sum\limits_{n=-\infty}^{\infty}{x[n]e^{-j\omega{nT}}}$$

The overall magnitude of a DTFT can be calculated as

$$|X(\hat{\omega})|=\sqrt{X(\hat{\omega})X^{*}(\hat{\omega})}$$

DFT on the other hand is done only for a finite set of $N$ points, transforming the $N$ values from the $n$ domain to the same size of the $k$ domain, given as

$$X[k]=\sum\limits_{n=0}^{N-1}{x[n]e^{-j2\pi{kn}/N}}$$

For a 4-point DFT, we can summarise the operation as one matrix multiplication with the time signal transposed

$$X[k]=Dx{[n]}$$
$$
\begin{bmatrix}X[0] \\ X[1] \\ X[2] \\ X[3]\end{bmatrix}=\begin{bmatrix}1 & 1 & 1 & 1 \\ 1 & -j & -1 & j \\ 1 & -1 & 1 & -1 \\ 1 & j & -1 & -j\end{bmatrix}\begin{bmatrix}x[0] \\ x[1] \\ x[2] \\ x[3]\end{bmatrix}
$$

The values are also periodic, hence the property

$$X[k+N]=X[k]$$

The analogue frequencies of an $N$-point DFT, sampled at $f_{s}$, are given by $\frac{kF_{s}}{N}$ for all values of $k$. We can now replace the complex exponential in the DFT formula with the Twiddle factor

$$X[k]=\sum\limits_{n=0}^{N}{x[n]W_{N}^{kn}}$$

This allows for easily repeating the 4-point matrix entries with the following properties

$$W_{N}^{kn\text{ mod }{N}}=W_{N}^{kn}$$
$$W_{N}^{kn+\frac{N}{2}}=-W_{N}^{kn}$$

$$y[n]=x[n]+3x[n-1]-5y[n-1]-4y[n-2]$$