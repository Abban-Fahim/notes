A *linear time-invariant* system is defined as input-output system that is constrained to the input and output (both regarded as functions $x(t)$ and $y(t)$, being linearly mapped, and that the output is also not dependant on the particular time when the input is applied, hence for input $x(t-T)$, the output must be $y(t-T)$.

## Convolutions

A convolution is a mathematical operation, given as a function of time, $h(t)$. To use it, we require input signal to the convolution

$$y(t)=\int_{-\infty}^{+\infty}{x(t)h(t-\lambda)}$$

## Stability

To prove if a system is stable, we can check using the following inequality

$$\int_{-\infty}^{+\infty}{|h(t)\,dt}<\infty$$
