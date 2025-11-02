Every link may have a linear ($v_{i}$) and angular ($\omega_{i}$) velocity. These velocity vectors are usually associated with a frame, and also have to be defined in reference to a frame, with the preceding superscript defining the reference frame and the next the associated frame. The leading subscript references the vector of which the quantity is a derivative of:

$$^{A}(^{B}V_{Q})=\frac{^{A}d}{dt}\ ^{B}Q=\ ^{A}_{B}R\ ^{B}Q$$

Linear velocity between two frames is given by:

$$^{A}V_{Q}=\ ^{A}V_{BORG}+\ ^{A}_{B}R\ ^{B}V_{Q}$$

The angular velocity of a point in a base frame when its own description frame is rotating relative to it is given by a circle around that rotation vector

$$^{A}V_{Q}=\ ^{A}\Omega_{B}\times\ ^{A}Q$$

The total velocity of a point Q defined in frame B, relative to frame A is the sum of (1) linear velocity of B relative to A, (2) linear velocity of Q relative to B, transformed to A, (3) circular linear velocity due to angular velocity of B rotating relative to A

$$^{A}V_{Q}=\ ^{A}V_{BORG} + \ ^{A}_{B}R\ ^{B}V_{Q} +\ ^{A}\Omega_{B}\times\ ^{A}_{B}R\ ^{B}Q$$
## Neighbouring velocities

In general, the velocity of frame {$i+1$} is its own velocities in the joint axis direction (Z), plus the velocities of joint {$i$} transformed to {$i+1$}. To recursively find the angular velocity of a frame with respect to movement in the previous frame:

$$^{i+1}\omega_{i+1}=\ ^{i+1}_{i}R\ ^{i}\omega_{i} + \dot{\theta}_{i+1}\ ^{i+1}\hat{Z}_{i+1}$$

For a prismatic joint, we don't have any rotation in {$i+1$}, hence we just drop the second term:

$$^{i+1}\omega_{i+1} =\ ^{i+1}_{i}R\ ^{i}\omega_{i}$$

The recursive equation for neighbouring linear velocity of a revolute joint:

$$^{i+1}v_{i+1}=\ ^{i+1}_{i}R\ (\ ^{i}v_{i} +\ ^{i}\omega_{i}\times\ ^{i}P_{i+1})$$

And likewise for prismatic joints:

$$^{i+1}v_{i+1}=\ ^{i+1}_{i}R\ (\ ^{i}v_{i} +\ ^{i}\omega_{i}\times\ ^{i}P_{i+1})+\dot{d}_{i+1}{}^{i+1}\hat{Z}_{i+1}$$

## Jacobian matrices

A multinational array of derivatives, consisting of $n$ functions dependant on $n$ variables. In an $n$-DOF manipulator, a Jacobian can be used to represent a transformation that can compute the velocity of an end-effector (or any intermediate frame) at instantaneous time.

The number of rows is usually always 6, given by the 6 quantities that they may represent: linear and angular velocities in the x, y, and z directions. The number of columns is $n$, representing every joint variable in the given robot.

$$\begin{align*}
V&=F(\Theta)\\
\delta{V}&=\frac{\partial{F}}{\partial{\Theta}}\delta{\dot{\Theta}}\\
\frac{\partial{V}}{\partial{\dot{\Theta}}}&=J(\Theta)
\end{align*}$$
$$J(\Theta)=\frac{\partial{}}{\partial{\dot{\Theta}}}\begin{bmatrix}v_{x} \\ v_{y} \\ v_{z} \\ \omega_{x} \\ \omega_{y} \\ \omega_{z}\end{bmatrix}=\begin{bmatrix}{\frac{\partial{v_{x}}}{\partial{\Theta_{1}}}} & {\frac{\partial{v_{x}}}{\partial{\Theta_{2}}}} & \dots & {\frac{\partial{v_{x}}}{\partial{\Theta_{6}}}} \\ {\frac{\partial{v_{y}}}{\partial{\Theta_{1}}}} & {\frac{\partial{v_{y}}}{\partial{\Theta_{2}}}} & \dots & {\frac{\partial{v_{y}}}{\partial{\Theta_{6}}}} \\ \vdots & \vdots & \ddots & \vdots \\ 
{\frac{\partial{\omega_{z}}}{\partial{\Theta_{1}}}} & {\frac{\partial{\omega_{z}}}{\partial{\Theta_{2}}}} & \dots & {\frac{\partial{\omega_{z}}}{\partial{\Theta_{6}}}} \end{bmatrix}$$

This Jacobian matrix can the be used to linearly transform *joint velocities* to the *end-effector velocities*, or vice versa with its inverse, which is especially useful as we can calculate what velocities we should move the joints with to move the arm with a desired Cartesian velocity. 

$$\begin{align*}
V&=J(\Theta)\,\dot{\Theta}\\
\dot{\Theta}&=J^{-1}(\Theta)\,V
\end{align*}$$

However the inverse presents the problem of *singularities*, which are mathematically configurations of $\Theta$ where the Jacobian cannot be inverted, detectable as the determinant of such a matrix is 0. Physically, these are configurations where a manipulator loses some degrees of freedom, and is impossible for the arm to move in the corresponding Cartesian direction. These are obviously found at the boundaries of the arms workspace, where the end effector cannot move any further outside this workspace, but also in the interior when two or more joint (Z) axes line up causing it to lose a degree or more of freedom.

## Differential transformation

If we want to describe the an infinitesimally small transformation, we can use some assumptions and represent it using a simplified homogeneous transformation matrix, with a translation by $[dx,dy,dz]^{T}$ and a Euler angle rotation by $[\delta{x},\delta{y},\delta{z}]^{T}$

$$\begin{bmatrix}1 & \delta{x}\end{bmatrix}$$