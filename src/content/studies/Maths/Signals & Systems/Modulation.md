## Double-sided modulation

This simplest modulation involves simply multiplying by a sinusoidal in the time domain, defined in the [[Maths/Signals & Systems/Fourier transforms#Modulation|Fourier transform properties]]

$$X_{DSB}(\omega)=\mathcal{F}\{m(t)\cos(\omega_{c}t)\}=\frac{1}{2}[M(\omega-\omega_{c})+M(\omega+\omega_{c})]$$

To demodulate this signal

## Ordinary amplitude modulation

We have a DC term with amplitude $A$. The ratio of the peak of your signal over the DC term, $\mu$ should be normalised

$$0<\frac{m_{p}}{A}<1$$

## Phase modulation

This modulation is represented by a $\varphi(t)$ term within the sinusoidal arguments. Visually, the modulated signal also displays changes in its frequencies.

$$x_{c}(t)=A\cos[\omega_{c}t+\varphi(t)]$$
$$\varphi(t)=k_{p}m(t)$$


## Frequency modulation

The general formula is

$$A\cos(\omega_{c}t)+A\varphi(t)\sin(\omega_{c}t)$$
