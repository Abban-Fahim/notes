A neural network is made up nodes arranged in interconnected layers, with the first and last being the input and output layers. Colloquially, any ANN with one or more hidden layers is called a deep neural network, as they usually involve deep learning algorithms, where by the model is trained to activate on lower-level features and gradually learn higher-level ones in deeper layers. DNNs allow for mathematically modelling any $n\in{\mathbb{N}}$ input and $m\in{\mathbb{N}}$ output function, and their architecture is modelled by approximating the mammalian nervous system.

## Perceptrons

A linear classifier that makes up a the basic building block of ANNs, that takes in $n$ inputs each of which has a weight $w_{i}$, one bias value $b$, and an activation function. The value of $n$ determines how many dimensions the classifier operates in, and the decision boundary that it creates is always a line or $n$-dimensional hyperplane.

$$z=w_{0}x_{0}+w_{1}x_{0}+\dots+w_{n}x_{n}+b=w^{T}x+b$$

Perceptrons are arranged in multiple "layers", containing $m$ number of neurons, with an input from $n$ neurons. Each input neuron is typically connected to each neuron in the layer, while no neurons in the same layer are connected together. This gives an $m\times{n}$ matrix of weights, $W$, to describe each layer, along with a bias vector, $b$, of size $m$. The same equation from above generalises here, where $x$ becomes an input vector of size $n$, giving an output of size $m$.

$$z=Wx+b$$

An input layer and output layer are must for the simplest ANN, while a deep neural network (DNN) contains a number of "hidden" layers in between. The size of the input and output layers are fixed by the given problem, and together with number and sizes of the hidden layers, make up the topology description of an ANN. Each layer may also use an activation functions

To design an ANN, you need to decide a bunch of hyper parameters,

- the number of nodes in the input layer
- the number of nodes in the output layer
- the number of hidden layers, and nodes in each one
- the activation functions

The methodology to find suitable values for these parameters is to review existing literature if available, followed by trial and error of changing these parameters based on validation results. Validation is when you evaluate your model on unseen set inputs (as opposed to the ones seen during training) to qualitatively judge your model's performance.
