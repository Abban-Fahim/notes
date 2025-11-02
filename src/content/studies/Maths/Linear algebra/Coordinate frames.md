> _Everything can be referenced to something else_ - anonymous

A frame is defined by 6 parameters, the x, y, and z axes, and their respective rotations. The position of a point is defined with a superscript denoting the frame of reference, like $^{A}P$, where $P$ is a point in reference to a the frame $A$.

Describing a frame to another frame, or even an entire object to another frame, we must use two things: a **position vector** and **rotation matrix**. The position vector uses three value Cartesian coordinates. The rotation matrix is a 3x3 matrix defined with a combination of individual rotation every axes:

$$
^{A}\hat{x}_{B}=\begin{bmatrix}r_{11} \\ r_{21} \\ r_{31}\end{bmatrix}\;\;\;\; ^{A}\hat{y}_{B}=\begin{bmatrix}r_{12} \\ r_{22} \\ r_{32}\end{bmatrix}\;\;\;\;
^{A}\hat{z}_{B}=\begin{bmatrix}r_{13} \\ r_{23} \\ r_{33}\end{bmatrix}
$$
$$^{A}_{B}R=\begin{bmatrix}r_{11} & r_{12} & r_{13} \\ r_{21} & r_{22} & r_{23} \\ r_{31} & r_{32} & r_{33}\end{bmatrix} = \begin{bmatrix}x_{B}.x_{A} & y_{B}.x_{A} & z_{B}.x_{A} \\ x_{B}.y_{A} & y_{B}.y_{A} & z_{B}.y_{A} \\ x_{B}.z_{A} & y_{B}.z_{A} & z_{B}.z_{A}\end{bmatrix}$$

The notation $^{A}_{B}R$ refers to the rotation matrix of rotating a point from frame $B$ to frame $A$. The inverse of this can be found using the transpose of this matrix. Rotating a position vector to a different frame is as simple as multiplying it by the matrix.

When only rotating about one axis, we can have a simplified function for the resulting elementary rotation matrix:

$$
R_{x}(\theta)=\begin{bmatrix}1 & 0 & 0 \\ 0 & \cos{\theta} & -\sin{\theta} \\ 0 & \sin{\theta} & \cos{\theta} \end{bmatrix}
$$
$$
R_{y}(\theta)=\begin{bmatrix}\cos{\theta} & 0 & \sin{\theta} \\ 0 & 1 & 0 \\ -\sin{\theta} & 0 & \cos{\theta} \end{bmatrix}
$$
$$
R_{z}(\theta)=\begin{bmatrix}\cos{\theta} & -\sin{\theta}  & 0 \\ \sin{\theta} & \cos{\theta} & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$

## Rules for rotation matrices

To be a valid rotation matrix, denoted as such, the following must be true:

$$R=\begin{bmatrix}R_{x} & R_{y} & R_{z}\end{bmatrix}$$
$$|R_{x}|=|R_{y}|=|R_{z}|=1$$
$$R_{x}.R_{y}=R_{y}.R_{z}=R_{z}.R_{x}=0$$
$$R_{x}\times R_{y}=R_{z}\;\;\; (\text{Vice versa with right hand rule})$$
$$R^{T}=R^{-1}$$

## Homogenous transformations

We can also combine both position and rotation matrices into a 4x4 matrix that simplifies both problems into one:

$$
^{A}_{B}T=\begin{bmatrix} r_{11} & r_{12} & r_{13} & p_{x} \\r_{21} & r_{22} & r_{23} &  p_{y} \\ r_{31} & r_{32} & r_{33} & p_{z} \\ 0 & 0 & 0 & 1\end{bmatrix}
$$

To transform a 3 dimensional vector, we pad it with a 1 at the bottom and multiply with the vector.

## Euler and fixed angles

Euler angles define rotations with three angles about a frame of reference, and an order of those rotations. The order can be defined either as intrinsic or extrinsic rotation where in the first frame of reference moves along with every elementary rotation, while the latter is defined around the initial fixed frame. The most common case of Euler angles are the extrinsic XYZ, also known as Roll-Pitch-Yaw (RPY) angles.

## Fixed and current frames

The **current** frame is the most recent transformation and is used in chains of rotations, while a **fixed** frame is the base frame that everything refers back to.

When chaining rotations, rotations relative to current frame are appended to the right, while relative a fixed frame they are prepended to the left.
