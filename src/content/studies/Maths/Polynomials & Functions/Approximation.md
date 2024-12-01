For a function $f(x,y,z)$, we can approximate values that are close to each other, using the [[Taylor series]]. We find the crude difference in each variable $(\delta_{x})$ and multiply it by the partial derivative $(\frac{\partial f}{\partial x})$ to obtain the difference the values of $f$. 

We define two values for $f$, one we need to approximate $(a,b,c)$, and base values which we know $(x,y,z)$. Those base values are the central values we use for our Taylor expansion. Hence, $\delta_{x}= |x-a|$ …etc. We define the *linear* approximation as

$$ \delta_{f} = \delta_{x} \frac{\partial f}{\partial x} + \delta_{y} \frac{\partial f}{\partial y} + \delta_{z} \frac{\partial f}{\partial z}$$

For brevity, the quadratic approximation of a function with two independent variables is below, but the same ideas can be used for functions of more variables and at higher orders.

$$\delta_{f} = \delta_{x}\frac{\partial f}{\partial x}+\delta_{y} \frac{\partial f}{\partial y} + \frac{1}{2!}\left(\delta_{x}^{2} \frac{\partial^{2}f}{\partial x^{2}}+\delta_{y}^{2} \frac{\partial^{2} f}{\partial y^{2}}+2\delta_{x}\delta_{y} \frac{\partial^{2}f}{\partial x \partial y}\right)+H.O.T$$

