A mathematical model for physical systems, where variables are related through first-order differential equations or difference equations. State $x$ and $\dot{x}$ is encoded in vectors of $\mathbb{R}^n$, while output $y$ is a vector of $\mathbb{R}^{p}$, and input is a vector of $\mathbb{R}^{m}$. In linear systems, we may use [[Robotics/Systems and Control/LTI systems|LTI systems]] to represent our model in the given form

$$\dot{x}=Ax+Bu$$
$$y=Cx$$

where

- $A$ is the state matrix, defined by the laws of physics, of dimensions $n\times n$
- $B$ is the input matrix, determined by actuators as they translate input into a change of state, and are of dimensions $n\times m$
- $C$ is the output matrix, determined by our sensors as they define how we measure our state as output, and are of dimensions $p\times n$

Some non-linear models can be linearised by localising their functions around an operating point $(x_{0},u_{0})$ and simplifying their functions

$$\dot{x}=f(x,u)\;\;\;\;\;y=h(x)$$
$$(x_{0},u_{0})\rightarrow (x_{0}+\delta{x},u_{0}+\delta{u})$$
$$\dot{\delta}x=f(x_{0}+\delta{x},u_{0}+\delta{u})$$

The last equation can be simplified using its [[Maths/Polynomials & Functions/Taylor Series|Taylor Series]] expansion

$$\dot{\delta}x=f(x_{0},u_{0})+\frac{\partial{f}}{\partial{x}}(x_{0},u_{0})\delta{x}+\frac{\partial{f}}{\partial{u}}(x_{0},u_{0})\delta{u}+H.O.T$$
$$y=h(x_{0})+\frac{\partial{h}}{\partial{x}}(x_{0})\delta{x}+H.O.T$$

Here each of the partial derivative terms is a Jacobian, and corresponds to a matrix term from above. 

The next step to a making a full closed-loop system is having feedback, which for these type of models can be written using an additional gain matrix, $K$, as

$$u=-Ky$$

## Stability

We can determine the stability of a model using properties of its matrices. For stability, in other words "whether the system blows up?", we can use the eigenvalues of the $A$ matrix, for which we have the following cases:

### Asymptotic stability

When the real parts of **all** the eigenvalues are strictly negative, we can conclude that the system is stable

$$\Re(\lambda)<0,\;\;\;\forall{\lambda}\in\text{eig($A$)}$$

### Unstable

If a single eigenvalue has a positive real part, the system is unstable

$$\Re{\lambda}>0,\;\;\;\exists{\lambda}\in{A}$$

### Critically stable

Just includes 0 in the real component too

$$\Re(\lambda)\le{0},\;\;\;\forall{\lambda}\in\text{eig($A$)}$$

## Pole placement

For closed-loop systems, we can pick the entries of matrix $K$ such that the eigenvalues of the resulting system, $A-BK$, are as desired, mostly with negative real components. We find the determinant equation in terms of $\lambda$ of the system, and then line it up with an equation containing our desired $\lambda$. Given a desired $\lambda_{1}$ and $\lambda_{2}$, for with a 2-state and 1-input system, we get

$$\det(\lambda{I}-(A-BK))=m_{1}\lambda^{2}+m_{2}\lambda+m_{3}$$
$$\varphi(\lambda)=(\lambda-\lambda_{1})(\lambda-\lambda_{2})$$

Other behaviors of the system can be inferred from the eigenvalues, such as,

- a complex conjugate pair mean the system will have oscillations
- the smallest value of $\Re(\lambda)$ dominantly affects the convergence rate, with faster rates for higher values

## Controllability

A system is **completely controllable** if and only if it is possible to go from any initial state to any final state. A state-space system is considered one if the rank of the controllability matrix, $\Gamma$, is equal to $n$

$$\Gamma=\begin{bmatrix}B & AB & \dots & A^{n-1}B\end{bmatrix}$$

The $B$ matrix which is determined by a robot's actuators, and determines how much flexibility we have for affecting the input, and in terms of pole placement, we can only place poles to arbitrary eigenvalues if and only if the system is completely controllable.

## Observability

This refers to how well we can obtain the state of the system, $x$, using the output, $y$, from external observation, i.e. sensors. A system is **completely observable** if and only if it is possible to fully determine state from outputs. It may be considered one if the rank of the observability matrix, $\Omega$, is $n$

$$\Omega=\begin{bmatrix}C \\ AC \\ \vdots \\ A^{n-1}C\end{bmatrix}$$

A predictor-corrector component may be added to the system, that predicts the state to some value, $\hat{x}$. We first define the error by which the system is off from the real state, and design the corrector to stabilise its derivative to zero

$$\dot{\hat{x}}=A\hat{x}+Bu+L(y-C\hat{x})$$
$$e=x-\hat{x}$$
$$\dot{e}=(A-LC)e$$

Now similarly to control design, we place the eigenvalues of $A-LC$ to have negative real parts, giving us a desirable $L$ matrix that asymptotically stable.

## Separation principle

To design the entire system, we can design $L$ and $K$ separately, making assumptions that we have the correct inputs from the other systems. Put together, the control and observation-error dynamics give us

$$\begin{bmatrix}\dot{x} \\ \dot{e}\end{bmatrix}=\begin{bmatrix}A-BK & BK \\ 0 & A-LC\end{bmatrix}\begin{bmatrix}x \\ e\end{bmatrix}$$

