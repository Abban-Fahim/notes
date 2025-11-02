To find the next state $x$, given an action $u$, and observation $z$ and a previous set of states $x'$, we use [[Maths/Probability & Statistics/Bayesian computation|Bayesian computation]] as

$$
P(x|u,z)=
$$

A recursive way to solve for the belief of $x$ can be derived as follows

$$
bel(x_{t})=p(x_{t}|u_{t},z_{t})=\eta p(z_{t}|x_{t})\int{p(x_{t}, x_{t-1}, u_{t})bel(x_{t-1})dx_{t-1}}
$$

The posterior is the action model, the

## Action model

## Observation model

Here we try to model $P(z|x)$, and the model
