When we have circuits with complex arrangements of capacitors and inductors with AC power sources, we can transform the resulting differential equations into complex numbers. An RLC circuit described as 

$$E = \frac{1}{C}\int{i\ dt} + L \frac{di}{dt} + iR$$

can be converted to 

$$= \frac{I}{j \omega C}+j\omega L I + IR = I(R + \frac{1}{j \omega C} + j \omega L)$$

### Impedance

In AC. loads are calculated using *impedance*, $Z$, and uses the unit $\Omega$.

$$Z_{total} =R+ \omega L j - \frac{j}{\omega C}$$
$$ = R + j(\omega L - \frac{1}{\omega C})$$

This is a sum of all capacitance, inductance, and resistance in the circuit.

The real part is exclusively made of resistance, while the imaginary component is known are *reactance*, $X$. Inductive reactance is positive, while capacitive reactance is negative, and these cause current to *lead* and *lag* respectively.

When dealing with impedances in parallel, we can use conventions to describe them. *Admittance* is $Y = \frac{1}{Z}$, and is made up of 

$$Y = G+jB$$

where $G = \frac{1}{R}$ is *conductance*, and $B=\frac{1}{X}$ is *susceptance*. All of these inverse-ohm units are measured in *siemens*, $S$.

### Phasors and sinusoids

When describing a voltage, we express it as a complex number, and we can use a trigonometric function to also a specify a frequency for the source. The phase angle is a $\theta$ in the complex number.

$$V_{s} = A \cos(\omega t+\varphi) = A \angle{\varphi^{\circ}}$$

We can use some trigonometry to express all sinusoids in the general form as above

## Three-phase

Three AC voltages of equal magnitude, with phase differences of 120$^{\circ}$, described as such

$$V_{A}=V\angle{{0}^{\circ}}\;\;\;V_{B}=V\angle{{-120}^{\circ}}\;\;\;V_{C}=V\angle{{120}^{\circ}}$$

The total power of the of these phase voltages equal $P=3VI\cos{\theta}$

The way we connect : star or delta

[[insert digram of star & delta]]

For a balanced star-connected system, the current is the same in the line and phases, but voltage is related with

$$V_{L}=\sqrt{3}V_{P}\;\;\;\;\;I_{L}=I_{P}$$
$$P$$

The opposite is true for a delta-connected system

$$$$