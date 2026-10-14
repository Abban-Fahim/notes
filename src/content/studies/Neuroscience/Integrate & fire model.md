The membrane potential, $u(t)$, of a post-synaptic neuron is the difference between the interior of the dendrite cells and its surroundings, and at rest this potential is constant at ($u_{\text{rest}}$, usually about -65 mV). When a spike arrives, the potential changes and decays towards resting potential, and the direction of the change depends on the type of synapse: excitatory ones result in a positive change, and inhibitory ones result in a negative change. Formally, the post-synaptic potential (PSP) of synapse $i$ caused by a spike from neuron $j$ is given by

$$
\epsilon_{ij}:=u_{i}(t)-u_{\text{rest}}
$$

For a small number of spikes, $u_{i}(t)$ behaves linearly by summing up all spikes $t_{j}^{(f)}$ from all $j$ pre-synaptic inputs

$$
u_{i}(t) = \sum\limits_{j}\sum\limits_{f}{\epsilon_{ij}(t-t_{j}^{(f)})+u_{\text{rest}}}
$$

This passive membrane model only captures the most basics characteristics of neurons and has no notion of spike generation, decay and time-varying inputs.

Action potentials, or spikes, are generated when the membrane potential is beyond a certain threshold. This results in depolarisation, where the potential rises to its peak and propagates through the axons. At such high voltages, certain ion channels close to allow for the potential to decay back down, known as depolarisation. Typically, this causes it to go below $u_{rest}$, usuallly around -90 mV, known as hyperpolarisation, which ensures that spikes cannot reverberate the backwards through the neuron for a duration known as the refractory period. Finally the membrane potential returns to its stable resting state.

In most cases, spikes always have the same shape, and hence information is encoded exclusively in the timings of signals. These packets of information are referred to as events, and are the basic principle behind how we describe such models in terms of: the evolution of the membrane 
potential $u_(t)$; and the mechanism by which spikes are actually generated.

## Leaky model

When a pulse of current, $I(t)$, arrives at a synapse, the charge is transferred to the membrane, which is an non-perfect insulator, and hence leaks charge over time just like a capacitor, with a parallel resistor $R$. For the simplest model when there is no input current, we imagine the circuit having a small battery of $u_{\text{rest}}$ next to the resistor. From Kirchoff's law, the total current is divided up between the two parallel branches

$$I(t)=I_{R}+I_{C}=\frac{u(t)-u_{\text{rest}}}{R}+C\frac{du}{dt}$$

We can re-arrange this to solve for the voltage as a differential equation with $\tau_{m}=RC$ being a time constant

$$\tau_{m}\frac{du}{dt}=-(u(t)-u_{\text{rest}})+RI(t)$$

## Non-linear model

There are two thresholds, the intrinsic one that actually refers to when the voltage increases rapidly and always spikes, and the mathematical threshold 