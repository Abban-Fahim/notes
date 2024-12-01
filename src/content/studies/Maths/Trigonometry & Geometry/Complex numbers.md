play -n synth 3 sine 300 fade l 0 3 2.8 trim 0 1 repeat 4;If you're studying maths, mechanics, contemporary physics, dynamics... anything grounded in 'insanity', the imaginary unit is defined as so

$$i = \sqrt{-1}$$

However, if you're studying electrical engineering, you will be a clown (like me) and use $j$ for the imaginary unit instead

> The imaginary unit
> $$i = j = \sqrt{-1} = \angle{90^{\circ}}$$
> 

In 'rectangular' form, a complex number is represented by $z=a+ib$, where $a$ is the 'real' part and $b$ is the 'imaginary' part. 

Another representation of these numbers is the 'polar' or 'phasor' form, which uses $r\angle{\theta^{\circ}}$. On an Argand diagram, $r$ would be the length of the point from origin, calculated as $\sqrt{a^{2}+b^{2}}$, and $\theta$ being the anti-clockwise angle from +real axis, calculated as $\arctan{\left(\frac{b}{a}\right)}$.

When we combine the two forms using the relations $a=r\cos{\theta}$ and $b=r\sin{\theta}$, we get the following:

$$r\angle{\theta^{\circ}}=a+ib=r(\cos{\theta}+i\sin{\theta})$$
$$\text{Simplified exponential:}\;\; = re^{i\theta}$$

## Complex arithmetic

Addition and subtraction can be performed with real and imaginary parts separately. Multiplication and division can be performed easier in polar form, by using magnitudes normally and respectively adding or subtracting the angle.

A _complex conjugate_, denoted with $\bar{z}$ or $z^{\star}$ is when the sign of the imaginary part is flipped. On an Argand diagram, the conjugate is the same point reflected on the x-axis. Multiplying a complex number with it conjugate gives us a helpful real number:

$$(a+ib)(a-ib)=a^{2}+b^{2}$$

Geometrically, multiplication (using polar form) scales the a point on the Argand diagram by the modulus, as well as moving its angle anti-clockwise by the argument. The opposite is true for division, where scaling is done by $\frac{1}{\text{modulus of denominator}}$, and moves the angle clockwise instead.

## Loci

### Circles

An equation involving a complex number in the form $|z|=r$ plotted on an Argand diagram forms a circle with the radius $r$, with the centre of the circle mimicking the properties of normal algebraic circles. For centre $(a,b)$ and radius $r$

$$|z-(a+ib)|=r$$

### Part lines

A line segment can be created on the Argand diagram using the equation

$$\arg{(z-(a+ib))}=\alpha$$

This creates a line segment starting from the point $(a,b)$ at an angle $\alpha$ to horizontal axis going forever.

### Perpendicular bisectors

The solution to the following equation can be plotted as a line:

$$|z-z_{1}|=|z-z_{2}|$$

That line is in fact the perpendicular bisector between the two Cartesian points that make up $z_{1}$ and $z_{2}$.

## Roots of equations

There are always $n$ roots of an $n$th-degree polynomial. Some of these can be complex numbers too. Whenever complex numbers do occur as roots, they come in conjugate pairs.

- For quadratic equations, either 2 real roots, or a conjugate pair of complex roots.
- For cubic equations, either 3 real roots, or 1 real root with a conjugate pair of complex roots.
- For quartic equations, either 4 real roots, or 2 real and 1 conjugate pair of roots, or 2 conjugate pairs of complex roots.

## Square roots

To find the square roots of a complex number, we may assume the those roots are complex as well, and hence:

$$z=\sqrt{z^{2}}=c+id$$
$$z^{2}=a+ib=(c+id)^{2}$$
$$a=c^{2}-d^{2}\;\;\;\;\;b=2cd$$

Assuming that $a+ib$ is the complex number we must find the roots of, we must solve the last two equations for $c$ and $d$, which will give us the values of the complex roots. The two square roots are related as

$$z_{1}=c+id\;\;\;\;\;z_{2}=-(c+id)$$

Another way of finding these square roots is by expressing it in polar form:

$$z^{2}=a+ib=r_{1}e^{i\theta_{1}}=(r_{2}e^{i_{2}\theta})^{2}$$
$$r_{1}e^{i_{1}\theta}=r_{2}^{2}e^{i_{2}2\theta}$$
$$r_{2}=\sqrt{r_{1}}\;\;\;\;\;\;\theta_{2}=\frac{\theta_{1}}{2},\frac{\theta_{1}+2\pi}{2}$$

The modulus $r_{2}$ will be the same for both square roots, and their arguments will have a difference of $\pi$.
