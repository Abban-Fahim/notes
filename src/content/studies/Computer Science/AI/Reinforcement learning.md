An RL agent models its world as an MDP, without knowing its transition and reward functions. In episodic learning, an *episode* is when the agent starts from an initial state and continues to take actions until it reaches a *terminal* state. These actions return rewards or costs, which are then used to build up policies.

# Types of RL

## Deep RL

This is the classic method where the agent learns by directly interacting with the environment with no prior information. It allows for full exploration of unknown and complex settings, being able to discover strategies that are not set or described by humans. The 'deep' refers to utilising deep ANNs to learn to model complex representations, and mathematically speaking, learn any task.

## RL from human feedback

Here a human expert supplements the reward feedback from class RL, allowing the agent to explore less unnecessary space, hence speeding up training, and more importantly avoiding space that is too dangerous/risky for the agent to explore.

## Imitation learning

This involves starting exploration by copying an existing policy, usually provided by human trials. This allows the agent to skip the initial stage of blind trials and start improving on a solid foundation.

## Inverse RL

## Offline/Batch RL

