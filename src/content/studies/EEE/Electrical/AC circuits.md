When we have circuits with complex arrangements of capacitors and inductors with AC power sources, we can transform the resulting differential equations into complex numbers. An RLC circuit described as 

$$E = \frac{1}{C}\int{i\ dt} + L \frac{di}{dt} + iR$$

can be converted to 

$$= \frac{I}{j \omega C}+j\omega L I + IR = I(R + \frac{1}{j \omega C} + j \omega L)$$

### Impedance

In AC. loads are calculated using *impedance*, $Z$, and uses the unit $\Omega$.

$$Z_{total} =R+ \omega L j - \frac{j}{\omega C}$$
$$ = R + j(\omega L - \frac{1}{\omega C})$$

This is a sum of all capacitances, inductance, and resistance in the circuit.

The real part is exclusively made of resistance while the imaginary component is known are *reactance*, $X$. Inductive reactance is positive, while capacitive reactance is negative, and these cause current to *lead* and *lag* respectively.

When dealing with impedances in parallel, we can use conventions to describe them. *Admittance* is $Y = \frac{1}{Z}$, and is made up of 

$$Y = G+jB$$

where $G = \frac{1}{R}$ is *conductance*, and $B=\frac{1}{X}$ is *susceptance*. All of these inverse-ohm units are measured in *siemens*, $S$.

### Phasors and sinusoids

When describing a voltage, we express it as a complex number, and we can use a trigonometric function to also a specify a frequency for the source. The phase angle is a $\theta$ in the complex number.

$$V_{s} = A \cos(\omega t+\varphi) = A \angle{\varphi^{\circ}}$$

We can use some trigonometry to express all sinusoids in the general form as above

$$\cos(-\theta) = \cos(\theta)$$
$$-\cos(\theta) = \cos(\theta+180^{\circ})$$
$$\sin(\theta) = \cos(\theta - 90^{\circ})$$
$$-\sin(\theta) = \sin(\theta+180^{\circ}) = \cos(\theta+90^{\circ})$$

