$G_{i}$ represents the frame of $i$-th gate of the track. 

Local $+z$-axis marks the side where a the drone should enter from. Bezier anchor points are placed in order, where $d$ is a constant:

1. $d\cdot\hat{Z}_{G_{i}}$ for entering point
2. $\begin{bmatrix}0 & 0 & 0\end{bmatrix}^{T}$ in the frame $G_{i}$
3. $-d\cdot\hat{Z}_{G_{i}}$ for exiting point

Aim is to minimise the constant $d$ to reduce time spent in straight line travelling through the gate, while ensuring no collisions happen.

Points in the path are stored in the following structure for an $n$ gate track, where $A_{j}$ is the anchor point, and $C_{j}$ is the control point for the $j$-th point, and there are three of these for each7 $i$-th gate:

$$
\begin{bmatrix}
0 & 1 & 2 & 3 & 4 & \dots & i & i & i & \dots & n-1 & n \\
A_{0} & C_{0} & C_{1} & A_{1} & C_{1} & \dots & C_{i} & A_{i} & C_{i} & \dots & C_{n} & A_{n}
\end{bmatrix}
$$

The total number of anchor points is given by $3n-2$
