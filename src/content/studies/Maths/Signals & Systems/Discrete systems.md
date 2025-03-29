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

## Correlations

While convolutions describe the relation between the output signal of an LTI system to its input and impulse response, **correlations** describe the degree of similarity between two signals.

$$R_{x[n]h[n]}=\sum\limits_{m=-\infty}^{m=\infty}{x[m]h[m-]}$$

## Sampling

Nyquist frequency, $f$ is twice the maximum 

For other sampling rates, the aliasing is as follows

$$f_{o}=
\begin{cases}
f_{i} & 0<f_{s}<2f_{i} \\
f_{s}-f_{i} & 2f_{i}
\end{cases}
$$

## z transforms

This is the equivalent of [[Maths/Signals & Systems/Laplace transform|Laplace transform]] in the discrete domain, using the frequency variable $z$. Transformations are given as

$$x[n]\leftrightarrow{X[z]}$$
$$x[n-a]\leftrightarrow{z^{-a}X[z]}$$
$$x[n]$$

To related between this, Laplace transforms, DTFT, CTFT, we use the following 

$$z=e^{-sj}=e^{-nTt}$$

## Discrete Fourier transforms

There are two variations of this: DTFT is continuous in the frequency domain, while DFT is 