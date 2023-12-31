## Equation of a line

Using the knowledge of two position vectors on a line in 3d or 2d space, $\vec{a}$ and $\vec{b}$, we can find the equation of that line as:

$$r=a+t(b-a)$$

We can generalise $b-a$ as the directional vector of that line, which is quite similar to a gradient in Cartesian lines. Hence the general form:

$$r=a+td$$

The scalar $t$ is the variable that maps to exactly one point on the line, and when determining if a point exists on a line, we can use this fact of a unique $t$ to solve the equation and check. 

We can also write the equation of line in vectors parametrically:

$$x=a_{i}+tb_{i}$$
$$y=a_{j}+tb_{j}$$
$$z=a_{k}+tb_{k}$$
$$\frac{x-a_{i}}{b_{i}}=\frac{y-a_{j}}{b_{j}}=\frac{z-a_{k}}{b_{k}}$$

## Parallel, intersecting, skew lines

If the directional vectors of two line are scalar products of each other, then they are parallel lines. Intersecting lines must only cross each other at a singular point, and that point can be found by solving for both values of $t$ simultaneously.

Skew lines

## Dot product

This is the first kind of product of multiplying two vectors, which gives a scalar value as such

$$\vec{a}\cdot\vec{b} = a_{i}b_{i}+a_{j}b_{j}+a_{k}b_{k} = |a||b|\cos{\theta}$$

Where $\theta$ is the angle between the two vectors $\vec{a}$ and $\vec{b}$. For parallel vectors this angle is 0, giving us just $|a||b|$. For perpendicular vectors it is $\frac{\pi}{2}$, which gives us a dot product of 0.

## Cross product

Bruhhhh