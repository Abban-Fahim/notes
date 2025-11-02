These motor work by moving by fixed step angles, $\theta_{step}$, while being able to generate high holding torque, which allows for the load to stay in place and be restored after any disturbances.

## Variable reluctance

These have multi-toothed rotors made of soft iron, while the stator has poles that project inwards towards the rotor, with small air gaps of 0.2 to 0.02 mm between them to maximise torque. The poles, in pairs of series of parallel, are individually wound with electromagnetic coils which are the only powered elements in the motor. When a pole phase is powered, one tooth's polarity becomes North, while its pair opposite to it becomes South. This causes the rotor to rotate and align itself with the powered pole pair. When this phase is turned off, and another is energised, the rotor teeth closest to the new poles move to align themselves, causing a movement by $\theta_{step}$. This value for this only related to the number of phases, $m$, and the number of rotor teeth, $N_{R}$, not to the number of poles:

$$
\theta_{step}=\frac{360}{mN_{R}}
$$

## Hybrid motors

These replace the iron core of the rotor with a permanent magnet, which prevents it from moving freely when the motor is completely turned off. There are two sections each of the stator and rotor, each offset by half a step from the other, creating double the interleaved teeth hence giving half the step size

$$
\theta_{step}=\frac{360}{2mN_{R}}
$$

The two rotor sections have different polarities to work as intended, and this constructions gives them a larger size and rotor inertia then VR motors, while more rotational resolution.

## Static, dynamic and holding torque

Static torque is what is produced by the motor when it is not moving, while dynamic is the torque produced during movement. The maximum static torque, or holding torque $T_{max}$, is produced when the rotor teeth are aligned with the phase, and is an important characteristic to consider as it defines what is the maximum load it can keep at a stationary position.

## Pull-in and pull-out torque

Pull-in torque is a function of stepping frequency (hence speed) which defines the maximum torque that the motor can apply during starting or stopping. It is inversely proportional to the frequency, and a stepper cannot start if the load torque exceeds this value.

The pull-out torque is similarly related to the frequency, and is the maximum dynamic torque the motor can provide without falling out of steps. If this is exceeded by the load torque, the motor will no longer be accurate. 

## Control schemes

The aforementioned control scheme of turning off all phases and then turning on one phase to cause rotor movement is known as the "1-phase on" scheme. Taking a three phase stepper, the sequence (of switched-on phases) for two revolutions would be given as:

$$
\text{A B C A B C}
$$

Another method is "2-phase on", is done by turning on two phases on at time. When both are turned on, the overlap in torques gives a higher holding torque, with the compromise of more power dissipation. The sequence goes

$$
\text{AB BC CA AB BC CA}
$$

A compromise between both of the above schemes is called **half-stepping**, where only one phase is on initially, then the next phase is turned on without turning off the previous, and then finally the initial phase is turned off, giving us double the motor resolution and giving smoother operation, while still having a higher power requirement than the one phase scheme. The sequence would be given as

$$
\text{A AB B BC C CA A AB B BC C CA}
$$

Lastly, there is **micro-stepping** which increases the resolution further by gradually increasing the current supplied to a phase, as the torque is proportional to the current. The number of micro-steps between 0 and the peak current determines how much stepper resolution you get.