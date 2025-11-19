Geometrically, eigenvectors are the set of points,$x$ whose rotation vector are invariant in a linear transformation. During the transformation, each eigenvector is scaled by its eigenvalue, $\lambda$. All points on the span of an eigenvector (the line on which it lies), also remain invariant, however usually the smallest / normalised vector in this direction is taken. Note that not all transformations can have real eigenvalues / vectors, as seen in the the derivation below.

To find the eigenvalue of a square matrix $A$, we can first define it using a characteristic polynomial, where we can see the eigenvectors are only scaled after being transformed

$$
Ax=\lambda x
$$

To solve for the eigenvalues, we can rearrange to find a homogeneous equation as one combined transformation

$$

(\lambda I - A)x=\begin{bmatrix}\lambda-a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & \lambda-a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \dots & \lambda-a_{nn}\end{bmatrix}\begin{bmatrix}x_1 \\ x_2 \\ \vdots \\ x_{n}\end{bmatrix}=0

$$

Of course, for $x=0$, the equation holds true, however it does not provide us any interesting solution. To find the non-trivial (non-zero) values of this , we solve $\det(\lambda I - A) = 0$. For a 2x2 matrix, this gives us a quadratic equation to solve. For imaginary values of $\lambda$, no eigenvector exists, and there may one or two real solutions. Then we can substitute this $\lambda$ value into the first equation, which will give us the eigenvectors as $x$.

In the special case of diagonal matrices, the unique entries themselves are the eigenvalues. Another quick way to find the solution in 2x2 matrices is the mean-product rule, which comes from the quadratic nature of the problem

$$
\lambda=m\pm\sqrt{m^{2}-p}
$$

where $m$ is the average of the two diagonal entries, and $p$ is the determinant.