# Probabilistic representation

The problem of state estimation is about finding the probability distribution of the state of a system at a given time, given all the previous observations and commands. This is formulated as

$$
p(x_{t}|z_{1:t},u_{1:t})
$$

To simplify this problem we use [[Maths/Probability & Statistics/Bayesian computation|Bayesian computation]] to swap the variables, and the Markov assumption to ignore past observations given the latest observation. 

$$
bel(x_{t})=p(x_{t}|z_{t},u_{t})=\eta p(z_{t}|x_{t})p(x_{t}|z_{1:t-1},u_{1:t})
$$

We then simplify the prior distribution as a sum of probabilities across all the previous possible states it could have been in, which simplifies into the previous belief, giving us a recursive Bayes filter

$$
bel(x_{t})=\eta p(z_{t}|x_{t})\int{p(x_{t}|x_{t-1}, u_{t})bel(x_{t-1})dx_{t-1}}
$$

The two terms above are the observation and action model, and their multiplications are the correction and prediction steps respectively. The $\eta$ is a normalisation factor and consists of the evidence term.

## Action/Motion model

This part gives us the predicted belief of the next state by advancing it in time, given the last state and action.

$$
\overline {bel(x_{t})}=\int{p(x_{t}|x_{t-1}, u_{t})bel(x_{t-1})dx_{t-1}}
$$

## Observation model

Here we try to model the likelihood of an observation being correct, and it forms the correction step, which reduces the deviation caused by the action model step

$$bel(x_{t})=\eta{p(z_{t}|x_{t})}\overline{bel(x_{t})}$$

The probability distribution for this can be quite complex as it reflects the design of the sensor itself. For example, some sensor models can have hybrid distributions, such as with range sensors we might have a uniform random noise, a Gaussian centred around the actual value, an exponential decay to account for obstacles, and another factor to account for the max range.

# Kalman filter

This is a realisation of the Bayesian filter for linear systems, ideally when all errors modelled as Gaussians. It works by minimising the mean-square error in the estimation and the actual state. First we require the state space equations

$$
x_{t}=A_{t}x_{t-1}+B_{t}u_{t}+\epsilon_{t}
$$
$$
z_{t}=C_{t}+\delta_{t}
$$

The additional noise terms, $\epsilon_{t}$ and $\delta_{t}$, are independent (Gaussians) and have covariance matrices $R_{t}$ and $Q_{t}$ respectively. The prediction step updates both the state (which here is the mean in the Gaussian) and covariance matrix, $\Sigma$, with the equations

$$
\bar{x}_{t}=\bar{\mu}_{t}=A_{t}x_{t-1}+B_{t}u_{t-1}
$$
$$
\bar{\Sigma}_{t}=A_{t}\Sigma_{t}A_{t}^{T}+R_{t}
$$

The correction step introduces the Kalman gain term, $K_{t}$, used for obtaining the final covariance and state

$$
K_{t}=\bar{\Sigma}_{t}C_{t}^{T}(C_{t}\bar{\Sigma}_{t}C_{t}^{T}+Q_{t})^{-1}
$$
$$
x_{t}=\bar{x}_{t}+K_{t}(z_{t}-C_{t}\bar{x}_{t})
$$
$$
\Sigma_{t}=(1-K_{t}C_{t})\bar{\Sigma}_{t}
$$

When the process covariance ($R_{t}$) is higher, the prediction model is trusted less and $\Sigma$ gets larger. This also results in a larger $K_{t}$. On the other hand, a higher measurement covariance ($Q_{t}$) results in trusting the observations less, and having a larger $K_{t}$.

# Extended kalman filter

In practical applications most systems are non-linear, hence the regular Kalman filter rarely sees implementation. Instead the EKF linearises the system dynamics, using their [[Maths/Polynomials & Functions/Taylor Series|Taylor Series]] around the previous state $x_{t-1}$. 



# Particle filter

For cases where the EKF model fails or diverges too much, methods that do not require differentiable dynamics must be used instead. The principle here is to create multiple estimates of the next state using the previous state and your command, by sampling your distribution