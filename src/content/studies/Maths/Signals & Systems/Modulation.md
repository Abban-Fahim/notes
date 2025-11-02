## Double-sided modulation

This simplest modulation involves simply multiplying by a sinusoidal in the time domain, defined in the [[Maths/Signals & Systems/Fourier transforms#Modulation|Fourier transform properties]]

$$
X_{DSB}(\omega)=\mathcal{F}\{m(t)\cos(\omega_{c}t)\}=\frac{1}{2}[M(\omega-\omega_{c})+M(\omega+\omega_{c})]=M(\omega-\omega_{c})
$$

To demodulate this signal, we need to modulate it again with a carrier signal of the same frequency and phase difference. The demodulated signal has to then pass through a LPF to remove the high residue frequencies.

## Ordinary amplitude modulation

To eliminate the need for a perfectly synchronised carrier signal, we can instead transfer the carrier itself, giving us the signal,

$$
x_{AM}=m(t)\cos{\omega_{c}t}+A\cos{\omega_{c}t}
$$

We have a DC term with amplitude $A$. The ratio of the peak of your signal over the DC term, $\mu=\frac{m(t)}{A}$ should be normalised

$$
0\le\mu\le1
$$

If $\mu>1$, the signal is over-modulated and you need synchronous demodulation again.

## Phase modulation

This modulation is represented by a $\varphi(t)$ term within the sinusoidal arguments. Visually, the modulated signal also displays changes in its frequencies.

$$
x_{PM}(t)=A\cos[\omega_{c}t+\varphi(t)]
$$

$$
\varphi(t)=k_{p}m(t)
$$

The frequency at any given moment is given as the derivative of the argument to cosine function

$$
\omega_{i}=\omega_{c}+\frac{d\varphi(t)}{dt}=\omega_{c}+k_{p}\frac{dm(t)}{dt}
$$

## Frequency modulation

Here the term used is the derivative of the phase term

$$
\frac{d\varphi(t)}{dt}=k_{f}m(t)
$$

$$
x_{FM}(t)=A\cos\left[\omega_{c}t+k_{f}\int_{-\infty}^{t}{m(\lambda)d\lambda}\right]
$$

$$
\omega_{i}=\omega_{c}+k_{f}m(t)
$$

$$
A\cos(\omega_{c}t)+A\varphi(t)\sin(\omega_{c}t)
$$

