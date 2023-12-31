To find the volume between a surface and the x-y plane, we can use double integrals

$$V=\int\limits_{y_{0}}^{y_{1}} \int\limits_{x_{0}}^{x_{1}} f(x,y)\ dx\ dy $$

This works by evaluating the inner integral first (here with respect to $dx$), and then the outer integral (here $dy$). The same way as partial differentiation, when integrating with respect to a variable, we hold others constant.

When the region is not rectangular, we can describe the region being integrated with multiple functions, and use those functions

![[imgs/iint.png]]

If using the 'red' region, the inner integral is with respect to $y$, giving us 

$$V = \int\limits_{x_{0}}^{x_{1}}\int\limits_{y=y_{0}}^{y=f(x)}{h(x,y)\ dy\ dx}$$

Meanwhile, taking the horizontal strip, the inner integral is with respect to $x$

$$V = \int\limits_{y_{0}}^{y_{1}}\int\limits_{x=x_{0}}^{x=g(y)}{h(x,y)\ dx\ dy}$$

We can also reverse the order of integration by representing the limits of a given double integral 