Games are an example of multi-agent deterministic environments where actions are taken in turn, and the goal is to let one specific agent. Trees are used to create a representation of a search problem in a game, where leaf nodes are terminal states, and the actions at each state cycle between the two agents. Each state has an associated value, which propagates from and terminal states, whose values are calculated using a utility function. In **zero-sum** games, agents are completely adversarial, and the utility functions that when maximise for one, minimises for the other.

## Minimax search

The idea in this algorithm is for your agent to maximise the value of the states where it can take actions, and to minimise for states where its adversary takes an action, therein assuming that your opponent also takes the best move possible for them. The algorithm runs recursively for all next states, until a terminal state is reached, wherein the value is returned according to the utility function.

$$
\begin{align*}
\text{if $s$ is terminal: }&v(s)=util(s)\\
\text{if $s$ is MAX agent: }&v(s)=\max_{s'\in{\text{successors(s)}}}{V(s')}\\
\text{if $s'$ is MAX agent: }&v(s')=\min_{s\in{\text{successors(s')}}}{V(s)}
\end{align*}
$$

## Alpha-beta pruning

For a small state space, it may be possible to solve minimax for the entire space, but often in real life, it is not. Pruning is one optimisation technique that allows for reducing search space and hence time by removing branches that cannot provide a better solution than the existing one. One way to do so for the minimax algorithm is to stop search when a max (or min) agent's values are getting worse than what is already known, in this case getting lower (or higher, for min). $\alpha$ is this value for the max agent, and is initialised to $-\infty$, and vice versa for $\beta$. Some psuedocode for the algorithm is given as

```lua
function value(s, a, b)
	if terminal(s) then return utility(s)
	if max_state(s) then return max_value(s, a, b)
	if min_state(s) then return min_value(s, a, b)

function max_value(s, a, b)
	v = -inf
	for s_dash in successors(s)
		v = max(v, value(s_dash, a, b))
		a = max(a, v)
		if a >= b then return v

function min_value(s, a, b)
	v = +inf
	for s_dash in successors(s)
		v = min(v, value(s_dash, a, b))
		b = min(b, v)
		if a >= b then return v

```

The effectiveness of this algorithm depends on the ordering of children, as that is the order according to which `successor(s)` will iterate, and the more the (more) optimal branches/values are explored first, the quicker the pruning.

## Evaluation functions



## Expectimax search

In a stochastic tree, the outcome of an action is not just dependant on the adversarial agent's action, but also all the possible outcomes of your action, and what their values each are. Instead of a max then min (adversarial) state, we have a max and expected state, where the expected states value is its expected value

$$E[S]=\sum\limits_{i=1}^{N}{p_{i}s_{i}}$$

This value is then maximised by the parent node. The utility functions for these stochastic processes can include more useful information than in minimax search, hence it is important to design them better - for example, squaring values can be used to transform the magnitudes to make the expected values more meaningful.

