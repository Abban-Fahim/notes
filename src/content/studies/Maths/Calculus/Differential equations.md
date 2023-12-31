The **order** of a differential equation is the *highest degree differential term it has.

The **degree** of a differential equation is the *highest power* of the dependant variable, or its differential terms.

**Homogenous** equations have *no other terms* except the dependant variables. 

**Linear** equations have a *degree of 1*, and have no products involving the dependant variable or its differentials.

### First order DEs

#### Variable separation



#### Transformation

#### Integrating factor

### Second order DEs

#### Homogenous equations

This equation must be in the form

$$a\frac{\text{d}y^{2}}{\text{d}^{2}t} + b\frac{\text{d}y}{\text{d}t} + cy = 0$$

And hence we can use the **auxiliary equation** to solve it as a quadratic

$$a \lambda^{2} + b \lambda + c = 0$$

The general equation of this solution depends on the nature of the roots:
- real and different ($\sqrt{b^{2}-4ac} > 0$)

$$ y = C_{1}e^{\lambda_{1} t} + C_2e^{\lambda_{2} t} $$

- real and equal ($\sqrt{b^{2}-4ac}=0$)

$$y=(C_{1} + C_{2}t)e^{\lambda t}$$

- complex conjugate pair ($\sqrt{b^{2}-4ac}<0$)

$$y = e^{pt}[C_{1}\cos{(qt)} + C_{2}\sin{(qt)} ]$$
$$p = \Re{(\lambda)}, \;\; q=\Im{(\lambda)} $$

#### Inhomogeneous equations
