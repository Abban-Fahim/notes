Similiar to ekf, we need to estimate a probability distribution for the robot's state and the global map, given all the previous observations and controls.

$$p(x,m|z,u)$$

Full SLAM aims to record the entire history of states $x_{0:T}$, while online SLAM only predicts the latest position. The state is extended with an array of $n$ landmarks/features, with a covariance matrix for all those featuresl

$$p(x,m|z,u)=p(x|z,y)\cdot{\prod_{i\in{n}}{p(l_{i}|z,u)}}$$

## Pose graph optimisation

The pose of the robot at each it makes an observation, is stored as a vertex, with the previous pose being connected to this new one by an edge. The edge represents a constraint, with a lower value suggesting high confidence in that pose.