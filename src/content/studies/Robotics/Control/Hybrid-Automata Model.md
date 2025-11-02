In behaviour-based robotics, the requirements of the system, and hence their dynamics and models, can change. Over discrete time, we model the different constituent models, "behaviours", as parts of a finite state machine, numbered as $q$, where each behaviour is a continuous time system within as $\dot{x}=f_{q}(x, u)$. 

*Guard conditions* are sets of values of state for which a state transition occurs from $q$ to $q'$, given as

$$
x\in{G_{q,q'}}
$$

*Resets* are functions that affect the state as abrupt changes to state during transitions, given as

$$
x:=R_{q,q'}(x)
$$

