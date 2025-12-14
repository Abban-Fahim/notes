A mobile robot which moves using two independently driven wheels on either side, and may include extra castor wheels for stability. The kinematic model of these robots is based around the two speed values of the wheels, $v_{L}$ and $v_{R}$. The robot has physical parameters $r$ as the radius of the wheels, and $l$ as the width of the vehicle, essentially the distance between the two wheels.

Since these robots are usually used in a planar setting, their state can be described with three values, {$x,y,\phi$}. The kinematics of these states can be described in terms of the robots parameters as

$$\dot{x}=\frac{R}{2}(v_{R}+v_{L})\cos{\phi}$$
$$\dot{y}=\frac{R}{2}(v_{R}+v_{L})\sin{\phi}$$
$$\dot{\phi}=\frac{R}{l}(v_{R}-v_{L})$$

## Unicycle model

A simplification of planar robot models, including differential drives, where we directly speak in terms ,of translational and angular velocity, which would give us $v$ in $\mathbb{R}^{2}$ and a scalar $\omega$. The kinematics here are similar but simpler than the above model

$$\dot{x}=v\cos{\phi}$$
$$\dot{y}=v\sin{\phi}$$
$$\dot{\phi}=\omega$$

It is recommended to design controllers for this model for all differential drive robots, and they're low-level controllers may be implemented to convert this model to their own underlying dynamics.

