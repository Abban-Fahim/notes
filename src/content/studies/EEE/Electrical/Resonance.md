## Series RLC circuits

In a series RLC circuit, the resonance occurs when both reactance are equal $(X_{C}=X_{L})$, and the frequency at which this happens is $f_{r}$. With the above, we can also deduce that the total impendence of the circuit is only composed of $R$, and hence there is no voltage across the capacitor and inductor, like a short circuit.

![[imgs/resonance-f.png]]

We can find $f_{r}$, and hence $\omega_{r}$, as this

$$f_{r} = \frac{1}{2\pi \sqrt{LC}} \;\;\;\; \omega_{r} = \frac{1}{\sqrt{LC}}$$

### Quality factor

In an RLC circuit, energy is passed between the inductor and capacitor, and the alternating voltage creates a harmonic oscillator of energy transfer between them. This is the general definition for the *quality factor* $(Q)$, and is equal to $\frac{\text{reactive power}}{\text{average power}}$, and can be generalised as

$$Q=\frac{X}{R}$$
$$Q=\frac{1}{R}\sqrt{\frac{L}{C}}$$

This has an application for finding the **bandwidth** of a voltage source, which is the frequency range between the two points of half power consumption.

$$BW = \frac{f_{r}}{Q}$$

## Parallel RLC circuits

If we use the concepts of admittance to find total impedances in a parallel RLC circuit, we get the same expression for resonant frequency when $|X_{C}|=|X_{L}|$. The $Q$-factor for a parallel circuit is defined as the inverse of the series equivalent, while inherently being the same concept

$$Q=\frac{R}{X} = R \sqrt{\frac{C}{L}}$$

Here, the Q factor instead increases the **current** through the capacitors and inductors.

### Series and parallel equivalence

Impedances in parallel $(\sum{\frac{1}{Z_{n}}})^{-1} = (\sum{Y_{n}})^{-1}$ can be converted to 
