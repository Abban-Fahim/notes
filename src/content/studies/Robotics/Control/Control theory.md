## The outline

A control system is composed of the following basic elements:

- state, $x$: represents what the system is doing at a given moment
- dynamics: the description of how state changes
- reference: what we want the system to actually do
- output, $y$: an actual measurement of the state
- input, $u$: a control signal
- feedback: the loop that affects the control signal depending on the output and reference

The goals of a control system can be summarised as:

- stability, where the system doesn't commit a fatal error
- tracking, actually reaching the desired goal, which may be a reference signal or a more holistic goal
- robustness, not depending on physical or unique parameters of similar systems, to ensure consistent performance
- disturbance rejection, being able to recover from reasonable anomalies in the system's externals
- optimality, a specific requirement which ensures the system performs the best it can

## Dynamic models

### Discrete time

A measurement of state using sampled time, $x_{k+1}$, which only depends on the previous time's state, $x_{k}$, and an action that took place at that state, $u_{k}$. These are essential for using models in computer systems, as we can only sample state at a specified accuracy. A discrete time model can be generalised as a difference equation

$$
x_{k+1}=f(x_{k},\ u_{k})
$$

### Continuous time

Defines state as equations of change in time, hence derivatives. They are represented as differential equations, and are useful as they can actually describe the laws of physics

$$
\dot{x}=f(x,\ u)
$$

To map continuous time models to discrete time, we sample equations at a time interval, $\delta{t}$, which gives us these two equations

$$
x_{k}=x(k\delta{t})\rightarrow{}x_{k+1}=x((k+1)\delta{t})
$$

Using calculus we can find that the next state (RHS above) is approximately the previous state (LHS above) plus the time interval multiplied by the derivative

$$
x(k\delta{t}+\delta{t})\approx{}x(k\delta{t})+\delta{t}\dot{x}(k\delta{t})
$$

This in turn are just a variation of the previous difference functions:

$$
x_{k+1}=x_{k}+\delta{t}f(x_{k},\ u_{k})
$$

