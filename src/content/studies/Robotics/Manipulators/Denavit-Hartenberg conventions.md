Any robotic manipulator can be described using the following components:

- a base
- *n* joints
- *n* links
- end effectors

## Types of joints

- **Revolute**: rotates around 1 axis, giving 1 DOF to the robot
- **Prismatic**: translate along 1 axis, giving 1 DOF to the robot
- **Spherical**: rotates around a spherical point, giving 3 DOF to the robot

## Kinematic parameters

Every link can be defined by two parameters, $a$ and $\alpha$. $a_{i-1}$ is the link's length, given by the distance between two joints along the common perpendicular. The first and last joints have an $a$ of 0. $\alpha_{i-1}$ is the angle between the $z$ axes of the joints, measured anti-clockwise around the $x$ axis.

Every joint also has its own parameters that together describe every unique configuration of the robot. $d_{i}$ is the perpendicular distance between the $x$ axes of two frames along the $z$-axes. $\theta_{i}$ is the angle between the common normal of two joints, measured around the $z$ axes. For revolute joints, $\theta_{i}$ is the variable that describes the defines of the joint, and likewise $d_{i}$ for prismatic joints.

![[imgs/D-H.png]]

These parameters give us a very convenient mapping to a transformation matrix mapping frame $i$ to $i-1$

$$
\begin{align*}
{}^{i-1}_{i}T&=R_{X}(\alpha_{i-1})\,D_{X}(a_{i-1})\,R_{Z}(\theta_{i})\,D_{Z}(d_{i})\\
&=\begin{bmatrix}c\theta_{i} & -s\theta_{i} & 0 & a_{i-1} \\ s\theta_{i}c\alpha_{i-1} & c\theta_{i}c\alpha_{i-1} & -s\alpha_{i-1} & -s\alpha_{i-1}d_{i} \\ s\theta_{i}s\alpha_{i-1} & c\theta_{i}s\alpha_{i-1} & c\alpha_{i-1} & c\alpha_{i-1}d_{i} \\ 0 & 0 & 0 & 1 \end{bmatrix}\\
\end{align*}
$$
