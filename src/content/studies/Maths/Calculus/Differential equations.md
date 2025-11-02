The **order** of a differential equation is the *highest degree differential term* it has.

The **degree** of a differential equation is the *highest power* of the dependent variable, or its differential terms.

**Homogeneous** equations have *no other terms* except the dependent variables. 

**Linear** equations have a *degree of 1*, and have no products involving the dependent variable or its differentials.

## First order DEs

### Variable separation

This method involves separating a product of functions of the dependent ($x$) and independent ($t$) variables, in a linear DE given as

$$
\frac{dx}{dt}=h(x,t)=f(x)g(t)
$$

Which can be solved as

$$
\int{\frac{dx}{f(x)}}=\int{g(t)\;dt}
$$

### Transformation

Find a suitable substitution and define it as a new different, and solve the differential equation for that new variable, and finally substitute back the original variables to remove the new variable(s).

### Integrating factor

For an equation in the general form

$$
\frac{dx}{dt}+p(t)x=q(t)
$$

we can use the product role to simplify this expression with an integrating factor, $I$

$$
I(t)=e^{\int{p(t)\,dt}}
$$

and the then solve the simplified equation

$$
I(t)x=\int{I(t)q(t)\;dt}
$$

### General equation

For a differential equation in the form, and the value of $x(t_{0})$

$$
\frac{dx}{dt}+\alpha{x}=r(t)
$$

the general solution is given as

$$
x=e^{-\alpha(t-t_{0})}x(t_{0})+\int_{t_{0}}^{t}{e^{-\alpha(t-\uptau)}r(t)\;d\uptau}
$$

## Second order DEs

This equation must be in the form

$$
a\frac{dx^{2}}{d^{2}t} + b\frac{dx}{dt} + cx = 0
$$

And hence we can use the **auxiliary equation** to solve it as a quadratic

$$
a \lambda^{2} + b \lambda + c = 0
$$

The general equation of this solution depends on the nature of the roots:
- real and different ($\sqrt{b^{2}-4ac} > 0$)

$$
 x = C_{1}e^{\lambda_{1} t} + C_2e^{\lambda_{2} t} 
$$

- real and equal ($\sqrt{b^{2}-4ac}=0$)

$$
x=(C_{1} + C_{2}t)e^{\lambda t}
$$

- complex conjugate pair ($\sqrt{b^{2}-4ac}<0$)

$$
x = e^{pt}[C_{1}\cos{(qt)} + C_{2}\sin{(qt)} ]
$$

$$
p = \Re{(\lambda)}, \;\; q=\Im{(\lambda)} 
$$

## Inhomogeneous equations

Given a differential equation as

$$
Ly(t)=f(t)
$$

where $L$ is a linear differential operator

$$
L_{n}=a_{n}(t)\frac{d^{n}}{dt^{n}}+a_{n-1}(t)\frac{d^{n-1}}{dt^{n-1}}+\dots a_{1}(t)\frac{d}{dt}+a_0(t)
$$

We can decompose $y(t)$ into a sum of two equations, $y_{CF}+y_{PI}$, which can be solved separately. The first of which is the complementary function, given as as just $y(t)$ equated to 0

$$
Ly_{CF}=Ly(t)=0
$$

This can solved using the same techniques as the aforementioned techniques for solving a differential equations. The second part is the particular integral, which actually tackles the inhomogeneous part of the ODE

$$
Ly_{PI}=f(t)
$$

for certain terms in the inhomogeneous, we can make guesses for $y_{PI}$ and leave them with undetermined coefficients, and solve them by substituting them back into the ODE

$$

\begin{bmatrix}
e^{\alpha{t}} & Ae^{\alpha{t}} \\ \sin{\alpha{t}},\;\cos{\alpha{t}} & A\sin{\alpha{t}}+B\cos{\alpha{t}} \\ b_{0}+b_{1}t+\dots+{b_{n}t^{n}} & A_{0}+A_{1}t+\dots+A_{n}t^{n} \\ e^{\alpha{t}}\sin{\beta{t}},\;e^{\alpha{t}}\cos{\beta{t}} & e^{\alpha{t}}(A\sin{\beta{t}}+B\cos{\beta{t}})
\end{bmatrix}

$$

