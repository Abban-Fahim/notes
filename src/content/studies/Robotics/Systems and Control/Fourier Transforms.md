Fourier analysis is a useful tool that only works on periodic signals. To transform non-periodic signals to periodic ones suitable for analysis, we use the Fourier transform, which is a subset of the more general [[Maths/Calculus/Laplace transform|Laplace transform]]. 

Conceptually, the time-domain signal $x(t)$ is the amplitude of the signal sampled at time instants infinitesimally close to each other, while the frequency-domain representation as the summation of individual contributions of all the frequencies, which are in-fact the amplitudes of the terms in the exponential [[Robotics/Systems and Control/Fourier series#Exponential Fourier series|Fourier series]] 

The transform integral is given in the frequency domain as

$$\begin{align*}
X(\omega)=\mathcal{F}\{x(t)\}&=\lim_{T_{0}\to{\infty}}{[c_{k}]T_{0}}\\
&=\lim_{T_{0}\to{\infty}}{\left[\int_{-\frac{T_{0}}{2}}^{\frac{T_{0}}{2}}{x(t)e^{-jk\Delta\omega{t}}\,dt}\right]} \\
&=\int_{-\infty}^{\infty}{x(t)e^{-j\omega{t}}\,dt}
\end{align*}$$

The inverse of this transform derives from the aforementioned exponential representation

$$\begin{align*}
x(t)=\mathcal{F}^{-1}\{X(\omega)\}&=\lim_{T_{0}\to\infty}[\tilde{x}(t)]\\
&=\frac{1}{2\pi}\int_{-\infty}^{\infty}{X(\omega)e^{j\omega{t}}\,d\omega}
\end{align*}$$

The existence of a Fourier transform for a given function (whether $\epsilon(t)$ converges 0 around non-discontinuities) is governed by the same [[Robotics/Systems and Control/Fourier series#Dirichlet conditions|Dirichlet conditions]] as the Fourier series.

## Properties of FT

### Linearity

The transformation is a linear operator, with the following relationship holding true

$$\alpha_{1}x_{1}(t)+\alpha_{2}x_{2}(t)+\dots+\alpha_{n}x_{n}(t)\longleftrightarrow_\mathcal{F}\alpha_{1}X_{1}(\omega)+\alpha_{2}X_{2}(\omega)+\dots+{\alpha_{n}X_{n}(\omega)}$$

### Duality

For the above definition of $x(t)$ and $X(\omega)$ in terms of each other, if we swap the roles of functions, we get the following relationships

$$X(t)\leftrightarrow{2\pi{x(-\omega)}}=x(-f)$$

### Symmetry

### Transforms of odd and even signals

Similar to the Fourier series, for even and functions functions

$$\Im(X(\omega))=0\;\;\;\text{ when }x(t)\text{ is even }\forall\omega$$
$$\Re(X(\omega))=0\;\;\;\text{ when }x(t)\text{ is odd }\forall\omega$$

### Time and frequency shifting

Time shifting is also similar to the Fourier series, given as

$$x(t-\tau)\leftrightarrow{X(\omega)e^{-j\omega\tau}}$$

This also goes the other way, when shifting by frequencies

$$x(t)e^{j\omega_{0}t}\leftrightarrow{X(\omega-\omega_{0})}$$

### Modulation

Multiplying the time function by cosine or sine causes it to be modulated, essentially its frequencies are shifted and scaled by $\frac{1}{2}$, in the case of cosine it shifts by its frequency, and sine does the same as well as an addtional time shift by $-\pi/2$

$$x(t)\cos(\omega_{0}t)\leftrightarrow{\frac{1}{2}}$$

### Time and frequency scaling

### Differentiation in time and frequency

### Convolution theorem (and multiplication)

### Integration

### Parseval's theorem

## Fast Fourier Transform
``