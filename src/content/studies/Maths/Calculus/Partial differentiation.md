When a function consists of two independent variables, we use this method to find the derivative, by treating one independent variable as a constant and finding individual derivatives

$$
 f_{x} = \frac{\partial f}{\partial x} ~~~ f_{y} = \frac{\partial f}{\partial y}
$$

$$
where \; f= f(x,y) 
$$

$$
f_{xx} = \frac{\partial^{2} f}{\partial x^{2}} ~~~ f_{yy} = \frac{\partial^{2} f}{\partial y^{2}}
$$

$$
f_{yx} = \frac{\partial^{2} f}{\partial y \cdot \partial x} ~~~ f_{xy} = \frac{\partial^{2} f}{\partial x \cdot \partial y}
$$

## Directional derivatives

When finding the derivatives in an arbitrary direction, we can represent the gradient $m_{\alpha}$ as

$$
m_{\alpha} = \frac{\partial f}{\partial x}\cos{\alpha} + \frac{\partial f}{\partial y}\sin{\alpha}
$$

and $+\alpha$ is measured *counter-clockwise* from the positive x-axis.

## Maxima and minima

To find the stationary points of a multivariate equation, we solve the system of equations $f_{x}=0$ and $f_{y}=0$. These points can then be classified as either local maxima, local minima or saddle points - points that are orthogonally both maximum and minimum. If we assume:

$$
r = f_{xx}f_{yy}-(f_{xy})^{2}
$$

- If $r>0$ and $f_{xx}<0$, then the point is a **local maximum**.
- If $r>0$ and $f_{xx}>0$, then the point is a **local minimum**.
- If $r<0$, then the point is a **saddle point**.

In the case that $r=0$, we cannot assume the nature of the point using this test.
