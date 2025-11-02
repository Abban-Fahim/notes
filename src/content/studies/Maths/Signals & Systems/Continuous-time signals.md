## Building blocks

### Unit impulse function

Returns the value 1 for a very brief moment (infinitely small) at $t=T$, and is used to perform sampling of continuous time signal, given as

$$

\delta(t-T)=\begin{cases}
0 & t<T \\
1 & t=T \\
0 & t>T
\end{cases}

$$

$$
\int_{-\infty}^{\infty}{\delta(t)\,dt}=1
$$

This integration property generalises for any function multiplied with the impulse

$$
\int_{-\infty}^{+\infty}{f(t)\delta(t-T)\,dt}=f(T)
$$

### Unit step function

Equals to 1 for all values $t\ge{T}$, and can be used to turn signals on and off, given as

$$

u(t-T)=\begin{cases}
0 & t<T \\
1 & t\ge{T}
\end{cases}

$$

this can also be defined as the *running integral* of the unit impulse function, and vice versa

$$
u(t)=\int_{-\infty}^{t}{\delta(\lambda)}\;d\lambda
$$

$$
\delta(t)=\frac{du}{dt}
$$

### Unit pulse function

A rectangular signal with height and width of 1, centered around $t=0$, and can be made by combining two step functions, given as

$$

\Pi(t-T)=\begin{cases}
0 & t<-\frac{1}{2}+T \\
1 & -\frac{1}{2}+T\le{0}<\frac{1}{2}+T \\
0 & t\ge{\frac{1}{2}+T}
\end{cases}

$$

This can also be expressed as two time-shifted unit step functions

$$
\Pi(t)=u(t+\frac{1}{2})-u(t-\frac{1}{2})
$$

### Unit ramp function

A straight line of gradient 1 starting from 0, used to represent a gradual rise in a function, given as

$$

r(t-T)=\begin{cases}
0 & t<T \\
t & t\ge{T}
\end{cases}

$$

It can also be given as the running integral of the unit step function

$$
r(t)=\int_{-\infty}^{t}{u(\lambda)\;d\lambda}
$$

$$
u(t)=\frac{dr}{dt}
$$

### Unit triangle function

A triangle of width 2 and height 1, centered around $t=0$, given as

$$

\Lambda(t-T)=\begin{cases}
0 & t<-1+T \\
t & -1+T\le{t<T} \\
-t & T\le{t<1+T} \\
0 & t\ge{1+T}
\end{cases}

$$

Additionally, we can also represent it using some ramp functions

$$
\Lambda(t)=r(t+1)-2r(t)+r(t-1)
$$

### Sinusoidal signals

Any sinusoidal function can be represented with the following general equation

$$
x(t)=A\cos{(\omega_{0}{t}+\theta)}
$$

- $A$ is the amplitude
- $\omega_{0}$ is the angular frequency
- $\theta$ is the phase angle, essentially the time shift
- $f_{0}$ is the actual frequency, equal to $\frac{\omega_{0}}{2\pi}$

## Types of signals

### Real & complex

A real signal only contains a real amplitude throughout its duration, while a complex signal may have an imaginary part. In Cartesian form, these are given as

$$
x(t)=x_{r}(t)+x_{i}(t)
$$

And in polar form as

$$
x(t)=|x(t)|e^{j\phi}
$$

$$
|x(t)|=\sqrt{x_{r}(t)^{2}+x_{i}(t)^{2}}
$$

$$
\phi=\arctan{\frac{x_{i}(t)}{x_{r}(t)}}
$$

### Periodic

A periodic signal is defined when

$$
x(t+T_{0})=x(t)
$$

where $T_{0}\ne{0}$ and is a specific value known as period of the signal, and relates to the inverse of frequency. For a ztonal signal, the ratio of the two signal's frequencies must be a rational number for the summation to also be preiodic, given as

$$
x(t)=\cos(2\pi{f_{1}}t)+\cos(2\pi{f_{2}}t)
$$

$$
x(t)\;\text{is periodic only if}\;\frac{f_{1}}{f_{2}}\in\mathbb{Z}
$$

We can find their fundamental frequency with this relation

$$
\frac{1}{f_{0}}=\frac{m_{1}}{f_{1}}=\frac{m_{2}}{f_{2}}
$$

### Deterministic & random

The building blocks of signals are all considered deterministic, as they can be modelled using mathematical equations. Physical phenomena usually produce random signals and contain noise, which are often impossible to model using equations. Instead of analysing their thematically properties, we instead use statistical values of their samples to study them, like averages of amplitudes and power of different frequencies.

## Energy and power

Normally, a system's energy is derived from the source of that energy the load that is applied to, where it is dissipated. In a mathematical model, the physical nature of these are irrelevant, and hence can be given as

$$
E_{x}=\int_{-\infty}^{\infty}{|x(t)|^{2}\;dt}
$$

Power for a non-periodic signal is given as follows

$$
P=\lim_{t\to\infty}\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}{|x(t)|^{2}\;dt}
$$

while for a periodic signal is

$$
P=\frac{1}{T_{0}}\int_{-\frac{T}{2}}^{\frac{T}{2}}{|x(t)|^{2}}\,dt
$$

## Even & odd signals

The mathematical properties of even and odd functions are useful during integrations and analysing such signals. We can decompose a signal into odd and even components as such

$$
x_{e}(t)=\frac{x(t)+x(-t)}{2}
$$

$$
x_{o}(t)=\frac{x(t)-x(-t)}{2}
$$

