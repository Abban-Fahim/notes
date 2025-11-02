# Motors

The stationary windings in the motor are the stator, usually made of a permanent magnet or electromagnets in larger, industrial settings. The rotating windings are the rotor (also called armature), which contains commutators with gaps between them, which allow the current to alternate in polarity every half-rotation, and use brushes that provide contact to draw current.

## Types of winding

The rotor can have two types of windings, one of which is **lap**. This is where the winding has the same number of paths between the positive and negative ends as there are poles, giving higher current at lower voltages, giving us $c=2p$ parallel paths.

**Wave** windings alternatively only have two paths, regardless of the number of poles, giving us half the current across each path, giving lower current but higher voltages, and simply $c=2$.

## Useful energy

The total useful energy between the brushes in the motor is given as

$$
E=\frac{2pZN_{r}\phi}{60c}
$$

where,
- $p$ is the number of pole pairs
- $Z$ is the number of inductors
- $N_{r}$ is the speed of the motor in rpm
- $\phi$ is the flux generated per pole
- $c$ is the number of parallel paths between +ve and -ve brushes

The rotor always has a certain amount of (small) resistance, $R_{a}$, and the current provided to the motor, $I_{a}$ creates some loses through this resistance. The entire circuit, with source terminal voltage $V_{t}$, is hence given as

$$
V_{t}=E+I_{a}R_{a}
$$

## Power and torque

The useful power developed by the motor can be given from the above values as

$$
P=\frac{2pZN_{r}\phi}{60c}I_{a}
$$

The mechanical power developed by the movement is dependant torque generated and speed

$$
P=T\omega=T\frac{N_{r}2\pi}{60}
$$

Equating the two gives us

$$
\frac{2pZN_{r}\phi}{60c}I_{a}=T\frac{N_{r}2\pi}{60}
$$

Finally, solving for torque gives

$$
T=\frac{pZ\phi{I_{a}}}{c\pi}
$$

Which shows us a proportional relationship for a motor's torque ($Z$, $p$ and $c$ are constant for any given motor)

$$
T\propto{\phi{I_{a}}}
$$

# Generators

May be done at a later date...