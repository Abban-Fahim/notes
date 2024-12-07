An agent is defined as an abstract entity that observes the environment using sensors, and acts upon it using actuators. They maybe classified as "intelligent" if they exhibit such behaviour.

## Types of agents

A **rational agent** performs according to a performance measure, provided its perception and knowledge, and is not exclusive exclusive to the agents mentioned below. Any such agent requires a PEAS definition to be defined: performance; environment; actuators; sensors.

A **reflex agent** only chooses actions based on current observations, and does not regard for future consequences. It can have a model of its environment, which it can use to describe the current state, or rely only on its observations.

A **goal-based agent** relies on modelling a goal that it must try to achieve. This can then be modelled a search problem, where we can look ahead into the consequences of actions, and find (optimal) sets of actions to reach the goal state.

A **utility-based agent** performs actions based on the optimality, or "utility", of a state. It maintains a utility function for these states, which usually returns a real value, to store information on how useful any given state is.

A **learning agent** initially only has a performance criteria, and its knowledge develops by interacting with its environment with actions, which are evaluated by the performance element to improve the agent's knowledge.

## Types of environments

The capabilities and chosen algorithms for any given agent are defined by the following properties of its environment:

- **Observability:** a fully observable environment is when the agent's sensors can capture the entire state, with no hidden information. With this condition, it is able to model the state-space, a holistic description of its surroundings, whilst without the agent may only a model an observation-space.
- **Determinism:** a fully deterministic environment means that the next state given any action and current state is fully predictable, as opposed to stochastic which defines probabilities for the next states of a state action combination.
- **Episodic:** memory-less environments, where actions are one-shot and only depend on the current perceptions, as opposed to sequential environments, where a sequence of post actions is needed to determine the next action.
- **Static:** an environment that doesn't change while the agent performs actions, as opposed to dynamic ones.
- **Discrete:** whether the states, actions and perceptions are finite or countably infinite as well distinct and clearly defined, whereas continuous environments can have have an un-countable set of these.
- **Multi-agent:** whether the agent operates by itself or not, and how it should interact with other agents.

## Search problems

For a goal-based agent to achieve its goal, it may invoke searches to find a sequence of actions to achieve its goal. The requirements for this is a state space, a model for actions and successor functions, a start state and goal state measure/state.

One way to model the state space is using a tree, where nodes represent state, with the root node being the start state, with the successor functions being edges. The many ways to solve search tree can be found in [[Computer Science/Graph theory|Graph theory]].