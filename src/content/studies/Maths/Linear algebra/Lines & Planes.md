## Equation of a line

Using the knowledge of two position vectors on a line in 3d or 2d space, $\vec{a}$ and $\vec{b}$, we can find the equation of that line as:

$$
r=a+t(b-a)
$$

We can generalise $b-a$ as the directional vector of that line, which is similar to a gradient in Cartesian equations of lines. Hence the general form:

$$
r=a+td
$$

The scalar $t$ is the variable that maps to exactly one point on the line, and when determining if a point exists on a line, we can use this fact of a unique $t$ to solve the equation and check. 

We can also write the equation of line in vectors parametrically:

$$
x=a_{i}+tb_{i}
$$

$$
y=a_{j}+tb_{j}
$$

$$
z=a_{k}+tb_{k}
$$

$$
\frac{x-a_{i}}{b_{i}}=\frac{y-a_{j}}{b_{j}}=\frac{z-a_{k}}{b_{k}}
$$

## Parallel, intersecting, skew lines

If the directional vectors of two line are scalar products of each other, then they are parallel lines. Intersecting lines must only cross each other at a singular point, and that point can be found by solving for both values of $t$ simultaneously.

Skew lines

## Equations of a plane

### Cartesian form

The orientation of any plane may be described a normal vector to that plane, and can be defined by vectors as:

$$
n.r=n.a
$$

Where $r$ is a general vector of the the same dimensions as $n$, and $a$ is a point on the plane. Expanded it can be defined as:

$$
n_{i}x+n_{j}y+n_{k}z=n.a
$$

### Parametric form

The equation of a line can be extended if a point and two direction vectors are known, that are parallel to the plane but not to each other.

$$
r=a+sd_{1}+td_{2}
$$

The two values may be calculated using two other non-co-linear points on the plane:

$$
r=a+s(b-a)+t(c-a)
$$

The two directional vectors may also be used to find the Cartesian equation by finding their cross product:

$$
n=d_{1}\times d_{2}
$$

