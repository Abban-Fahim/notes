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

## Properties of FT

##

## Fast Fourier Transform
