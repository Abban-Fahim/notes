An MDP is made up of *states*, $s\in{S}$, and *actions*, $a\in{A}$, with *transition functions*, $P(s,a,s')$ defining the probability of an action leading successfully to a new state $s'$, and a *reward function*, $R(s,a,s')$, that determines the reward from taking an action and traversing the corresponding state space. Sometimes it also includes a *discount factor*, $\gamma\in{[0,1]}$, which handles the importance of future actions when updating a policy.

A *policy*, $\pi:S\to{A}$, is mapping or probability distribution that tells informs an optimal action to be taken from any state. Optimality is governed by a Bellman equation, as shown in the following algorithms.

## Value iteration

This algorithm iteratively updates a "value" function, $V:S\to{\mathbb{R}}$, until it converges to being optimal, using

$$
V^{*}(s)=\max\limits_{\alpha}\sum\limits_{s'}{P(s,a,s')[R(s,a,s')+\gamma{V^{*}(s')}]}
$$

The final step is just to extract the optimal policy from $V^{*}$, by just finding the optimal argument to the same equation as above

$$
\pi^{*}(s)=\argmax\limits_{\alpha}\sum\limits_{s'}{P(s,a,s')[R(s,a,s')+\gamma{V^{*}(s')}]}
$$

## Policy iteration

This requires two algorithms at each step to iteratively improve the value function (same as above) and policy (which at the end converges to the optimality). The crucial difference here is that in every iteration the policy itself is updated, and instead of trying out every possible action, it tries out only the policy's current action. First, a random policy is initialised, and policy evaluation is run for every state

$$
V(s)=\sum\limits_{s'}{P(s,\pi(s),s')[R(s,\pi(s),s')+\gamma{V^{*}(s')}]}
$$

The a policy improvement step is run for all states,

$$
\pi^{*}(s)=\argmax\limits_{\alpha}\sum\limits_{s'}{P(s,a,s')[R(s,a,s')+\gamma{V^{*}(s')}]}
$$

If the policy does not change during this step, then evaluation is run again, and so forth.

The method utilised to solve MDPs these days is usually [[Computer Science/AI/Reinforcement learning|Reinforcement learning]], where we can solve for environments for which we don't know the transition and/or reward functions, by learning from interactions with the environment.