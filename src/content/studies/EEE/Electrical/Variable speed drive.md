Speed and load-torque relations:

- Forward drive: positive (anti-clockwise) motor movement, and its torque is the same. The load torque is in the opposite direction, hence there is a resultant force in the direction of the motor.
- Braking: also the same motor movement, but the load torque is in the same direction as the movement, causing the resultant motor torque to be in the opposite direction as the motor's movement. The braking may be done in one of four ways: mechanically through heat losses in friction; through eddy current losses in a specially constructed machine; dynamically by acting as a generator to a circuit; via regeneration the same way but the energy produced is fed back into the electric system.
- Reverse drive: the same as the first, but in the opposite direction.
- Plugging (reverse braking): again, the same as braking.

To analyse the requirements of motors, we first need to refer the load's inertia, torques, and power rating to the frame of the motor itself. We can have two types of loads, rotational or transnational. Both are usually connected to the motor shaft using gears or transmissions, which have their own efficiencies $\eta$. 

For rotational loads, their gear ratio's are given with $N_{1}$ and $N_{2}$ where $a=\frac{N_{1}}{N_{2}}$ and also define the ratio of the output speed, $\omega_{m1}$, over the input speed, $\omega_{m}$, in the opposite direction. Their inertia (without losses), torque and power, for $n$ loads, can be referred to the motor with

$$
I=I_{0}+a_{1}^{2}I_{1}+a_{2}^{2}I_{2}+\dots+a_{n}^{2}I_{n}
$$

$$
T=T_{I0}+\frac{a_{1}T_{1}}{\eta_{1}}+\frac{a_{2}T_{2}}{\eta_{2}}+\dots+\frac{a_{1}T_{1}}{\eta_{n}}
$$

$$
P=Tw=T_{I0}w_{m}+\frac{a_{1}T_{1}w_{m1}}{\eta_{1}}+\frac{a_{2}T_{2}w_{m2}}{\eta_{2}}+\dots+\frac{a_{n}T_{n}w_{mn}}{\eta_{n}}
$$

For transnational loads, the equivalent for $n$ loads is given as

$$
I=I_{0}+m_{1}(\frac{v_{1}}{\omega_{m}})^{2}+m_{2}(\frac{v_{2}}{\omega_{m}})^{2}+\dots+m_{n}(\frac{v_{n}}{\omega_{m}})^{2}
$$

$$
T=T_{I0}+\frac{F_{1}}{\eta_{1}}\frac{v_{1}}{\omega_{m}}+\frac{F_{2}}{\eta_{2}}\frac{v_{2}}{\omega_{m}}+\dots+\frac{F_{n}}{\eta_{n}}\frac{v_{n}}{\omega_{m}}
$$

$$
P=T\omega
$$

## Transportation drive

These mechanical systems have very high moments of inertia requires a larger torque to get them moving initially. To minimise the time taken to drive between stations, the positive and negative accelerations must be maximised, as well as the cruising speed. The maximum magnitude of either acceleration is dictated by passenger comfort.

To compute torque

$$
T_{m}=\frac{rman}{n_{1}}
$$

$$
T_{\omega}=\frac{2n_{2}anI_{\omega}}{n_{1}r}
$$

$$
T_{G}=G
$$

$$
T_{R}=\frac{20\gamma mn}{10^{3}n_{1}}
$$

where,

$$
n=\frac{N_{1}}{N_{2}}
$$

$$
r\text{ is the radius of the wheel}
$$

$$
n_{1}\text{ is the number of driving motors}
$$

$$
n_{2}\text{ is the number of axles on the train}
$$

$$
I_{\omega}\text{ is the moment of inertia of one wheel}
$$

$$
G\text{ is the gradient when going up slopes}=\sin{\theta}
$$

## Components of load

There is a component of frictional torque present no matter the speed of the motor, known as Coulomb torque, $T_{C}$. The viscous frictional torque, $T_{B}$, is proportional the speed of the motor and given with a constant as $T_{B}=B\omega$. The final component is standstill torque, $T_{S}$, which is high at initial low torques, and decreases as the load is in motion.

There is also windage torque caused by shafts moving in fluids, and lastly we have the inertial torque to start objects moving, given by

$$
T_{J}=J\frac{d\omega}{dt}
$$

## Steady state stability

Equilibrium of a motor system occurs when the (supplied) motor torque, $T$, equal to the load torque, $T_{l}$. For such a point to be stable, the difference in $T$ and $T_{l}$ must ensure that the motor speed, $\omega_{m}$ is restored back to the equilibrium point. More specifically, if the disturbance lowers $\omega_{m}$, $T$ must be higher than $T_{l}$, which would cause acceleration to then increase $\omega_{m}$ back to the stable point. Vice versa, the an increase in $\omega_{m}$ must cause deceleration to lower it back to the same point. This means the following condition must be satisfied

$$
\frac{dT_{l}}{d\omega_{m}}>\frac{dT}{d\omega_{m}}
$$

## Load equalisation

When load torque fluctuates too much too often, the motor will draw pulses of current, and causing fluctuation in the line voltage, which has adverse affects on other electronics drawing from the same source, and also requires a very high rating motor. This occurs in applications like jackhammers and blooming mills, where peak torque is required at very few moments, requiring non-smooth changes in power draw. To fix this, we may use capacitors in the electronics to store energy during non-peak usage, to then discharge during usage, hence ensuring source current is smoother. A mechanical way of doing the same is by using a flywheel (in non-reversible drives), or by closed-loop control of the current. This allows for usage of a motor whose max torque is lower than the peak, where energy is stored via acceleration during low-load periods. 

