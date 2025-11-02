## Regular filter

$$
x_{t}=A_{t}x_{t-1}+B_{t}u_{t}+\epsilon
$$

## Extended filter

In practical applications most systems are non-linear, hence the regular Kalman filter rarely sees implementation. Instead the EKF uses approximations of the linear operations as differentiable functions, using their Jacobians to find the [[Maths/Polynomials & Functions/Taylor Series|Taylor Series]] around a working point - the current estimate. 

For cases where the EKF model fails or diverges too much, computationally expensive methods like the [[Robotics/Control/Particle filter]] must be used instead