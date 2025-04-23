They are different from induction motor/generators as they rely on gears to make the rotors move. To find the r.m.s amplitude and frequency of the voltage induced by the generator, we use

$$|E|=\frac{\pi}{60\sqrt{2}}pnNLDB_{max}$$
$$f=\frac{p}{2}\frac{n}{60}$$

where,
- $p$ is the number of poles (contrary to notes in [[EEE/Electrical/DC machines|DC machines]])
- $n$ is the speed of the stator/rotor in rpm
- $N$ is the number of coil winding
- $L$ is the stator length
- $D$ is the stator diameter
- $B_{max}$ is the maximum flux density

In practise, the only way to vary the voltage output of such a generator is not with speed, but flux (density), as changing the former would also change the output frequency.

The real and reactive power delivered to the circuit by the generator is found with the power-delta curve

$$P=3\frac{|V_{t}||E|}{X_{s}}\sin{\delta}$$
$$Q=3\left(\frac{|V_{t}||E|}{X_{s}}\cos{\delta}-\frac{|V_{t}|^{2}}{X_{s}}\right)$$

This means the peak power (in watts) that can be delivered is at a power angle of 90$^{\circ}$, which would also give us the value at which torque output would be highest. However, due to electrical safety, they are not operated beyond 35$^{\circ}$. The excitation voltage, $E$ is given as

$$E=V_{t}+jIX_{s}$$

![[imgs/synchro.png]]

