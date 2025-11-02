## Proportional

A linear constant, $k_{p}$, that keeps the system stable by smoothly responding to errors. It is however limited usually by physical factors and cannot fully track a reference as it can be limited by physical factors. Usually given as

$$
u=k_{P}e
$$

where $e$ is the error between the reference and measured output.

## Integral

Adds up the the error accumulated error by integrating over the area between the reference  and measured values. Since this area decreases drastically when closer to the reference, it reacts slowly, however can achieve tracking and deal with disturbances with a suitable constant, $k_{I}$, that should't be too high to avoid oscillations. A PI controller is given as the function

$$
u=k_{P}e+k_{I}\int_{0}^{t}{e\ dt}
$$

## Derivative

Responds to the change of error values, hence is much faster at responding. This makes it more sensitive to noise, which may cause overshooting in output. All put together, we get

$$
u=k_{P}e+k_{I}\int_{0}^{t}{e\ dt}+k_{D}\dot{e}
$$

To implement PID as a discrete time difference function, we must first define our sample time $\delta{t}$ which will determine the quality of the conversion. the function of $e$ can be directly used with the $k_{P}$ constant as it does not care about previous state. $\dot{e}$ can be approximated as the change in error, divided by the sample time, hence

$$
\dot{e}\approx{\frac{e_{new}-e_{old}}{\delta{t}}}
$$

For the integral term, we can use a Riemann sum to approximate it using rectangles of width $\delta{t}$, and height sampled at points $k\delta{t}$, given fully as

$$
\int_{0}^{t}{e\ dt}\approx\sum\limits_{k=0}^{N}{e(k\delta{t})\delta{t}}=E\delta{t}
$$
