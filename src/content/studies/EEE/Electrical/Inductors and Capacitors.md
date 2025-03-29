### Preliminary exponential curves

We use the limit concept of exponential curves to model curves of certain real components:

$$\lim_{t\to+\infty}{e^{t}}=+\infty \;\;\;\;\;\;\;\; \lim_{t\to-\infty}{e^{t}} = 0$$

The following ways exist to rewrite this function:

![[imgs/exp_transients.png]]

### Capacitors

Capacitors store charge across two conductive plates, across an insulative medium. The behaviour of voltage and current across them can be modelled as such

$$V = \frac{1}{C}\int I \ dt$$
$$I = C \frac{dV}{dt}$$

The time constant is a ratio of inductance / capacitance to the series resistance

$$\uptau = RC $$

During **charging**, the voltage across a capacitor starts of at 0, and increases to be equal to all of load drop across the series resistor. The time taken for change, or known as *transient*, lasts for $5\uptau$ seconds. 

$$ V_{c} = E (1-e^{\frac{-t}{\uptau}}) $$
$$I = I_{0}\cdot e^{\frac{-t}{\uptau}} $$

Here $I_{0} = \frac{E}{R}$, the initial current through the RC circuit, and $E$ is full the voltage across the series resistance.

The curves for **discharging** are hence swapped for $I$ and $V$:

$$V_{c} = E \cdot e^\frac{-t}{\uptau}$$
$$I = -\frac{E}{R}(1-e^{\frac{-t}{\uptau}})$$

### Inductors

Conceptually, inductors reverse the roles of current and voltage in RC circuits, hence creating *RL* circuits. A inductor is usually a coil of wire that alternates in functionality due to perpendicular magnetic fields.

$$V = L \frac{dI}{dt}$$
$$I = \frac{1}{L}\int V \ dt$$

Inductors have the inverted transient effects as capacitors do, with the time constant being

$$\uptau = \frac{L}{R}$$

For **charging**:

$$V = E\cdot e^{\frac{-t}{\uptau}}$$
$$I = I_{0}(1-e^{\frac{-t}{\uptau}})$$

And respectively for **discharging**:

$$V = E(1-e^{\frac{-t}{\uptau}})$$
$$I = I_{0}\cdot e^{\frac{-t}{\uptau}}$$

### RLC circuits

An RLC circuit can be modelled with the following equations for its fundamental components:

$$V_{R} = R\ i_R$$
$$i_{C} = C \frac{dV_{c}}{dt}$$
$$V_{L} = L \frac{di_{L}}{dt}$$

To solve these, we usually first transform them to the frequency domain using the [[Maths/Signals & Systems/Laplace transform|Laplace transform]], as such

$$V_{R}(s)=RI(s)$$
$$V_{C}(s)=\frac{1}{sC}I(s)+\frac{v(0)}{s}$$
$$V_{L}(s)=L(sI(s)-i(0))$$

