A neural network is made up nodes arranged in interconnected layers, with the first and last being the input and output layers. Colloquially, any ANN with one or more hidden layers is called a deep neural network, as they usually involve deep learning algorithms, where by the model is trained to activate on lower-level features and gradually learn higher-level ones in deeper layers. deep neural networks (DNN) allow for mathematically modelling any $n\in{\mathbb{N}}$ input and $m\in{\mathbb{N}}$ output function, and their architecture is modelled by approximating the mammalian nervous system.

An input layer and output layer are must for the simplest ANN, while a DNN contains a number of "hidden" layers in between. The size of the input and output layers are fixed by the given problem, and together with number and sizes of the hidden layers, make up the topology description of an ANN.

# Models
## Perceptrons

A linear classifier that makes up a the basic building block of ANNs, that takes in $n$ inputs each of which has a weight $w_{i}$, one bias value $b$, and an activation function. The value of $n$ determines how many dimensions the classifier operates in, and the decision boundary that it creates is always a line or $n$-dimensional hyperplane.

$$
z=w_{0}x_{0}+w_{1}x_{0}+\dots+w_{n}x_{n}+b=w^{T}x+b
$$

Perceptrons are arranged in multiple "layers", containing $m$ number of neurons, with an input from $n$ neurons. Each input neuron is typically connected to each neuron in the layer, while no neurons in the same layer are connected together. This gives an $m\times{n}$ matrix of weights, $W$, to describe each layer, along with a bias vector, $b$, of size $m$. The same equation from above generalises here, where $x$ becomes an input vector of size $n$, giving an output of size $m$.

$$
z=Wx+b
$$

We use MLPs to model non-linear problems, the output of each layer must be passed through a non-linear activation functions. Other requirements for these function is that they must be continuous (i.e. have no jumps/undefined space), monotonic (must grow with input), and differentiable (for optimisation algorithms discussed below).

To design a MLP, you need to decide a bunch of hyper parameters,

- the number of nodes in the input layer
- the number of nodes in the output layer
- the number of hidden layers, and nodes in each one
- the activation functions

The methodology to find suitable values for these parameters is to review existing literature if available, followed by trial and error of changing these parameters based on validation results. Validation is when you evaluate your model on unseen set inputs (as opposed to the ones seen during training) to qualitatively judge your model's performance.

## Convolutional neural networks

When passing images as inputs to a regular ANN, it is necessary to vectorise the 2D (in multi-channel images, 3D) data. However, this step removes the spatial relationships between nearby pixels, which in the real world are hardly independent of each other. Moreover, the input size becomes huge as every pixel contributes to 3 values, and the hidden layers don't really learn any structured features.

CNNs instead operate on tensors (generalised matrices to higher dimensions) using filters at every node instead, which operate using convolutions on regions or patches of the input image. The values of the filter here become the weights of the network, with optional bias terms per filter. The hyper-parameters of each layer are 
- filter size $K$, which is the size of the (square) matrix used as the filter
- convolution stride $S$, which is the number of columns in between every matrix multiplication
- padding $P$, which is the number of 0 pixels added to the edges of the input, to allow for edge pixels to be convoluted around
- an optional activation function to be applied to all the entries of output

When applied on a square image of size $W\times{W}$, we will get an output image of side lengths $O$

$$
O=\frac{W-K+P_{start}+P_{end}}{S}
$$

To improve efficiency, we usually inter-layer convolution layers with pooling, which reduced the dimensionality of an output image without losing spatial relations. We again define a pool size and stride, which specifies regions on which a sampling function will be applied, like max, average, median, etc. Each region corresponds to one pixel at the output of the pooling layer.

The end of a CNN is usually a regular fully connected perceptron network, which is fed a flattened output of the images to predict either a score or a list of probabilities for multiple output values (using softmax).

## Recurrent neural networks

Both the above types of networks cannot handle the temporal dimension of data, which in the case of videos and some sensors may carry meaning, by taking into consideration past (and future) inputs.

Vanishing gradient ... Long short term tackle this ...

## Auto-encoders

regular

Probabilistic - VAE

## Generative adversarial networks 

either here or seperate

## Spiking neural networks

...

# Training algorithms

## Gradient descent

An iterative optimisation algorithm for minimising differentiable convex functions, such as an MLP. We start with a random solution, and move our weights down the gradient of the loss function, towards a better solution, by some step-size factor $\lambda$. The gradient of the cost function is multidimensional and must be computed for all the weights it depends on, achieved through several iterations of the chain rule

$$\frac{dL}{dw}=\frac{\partial{L}}{\partial{z}}\frac{\partial{z}}{\partial{w}}=\frac{\partial{L}}{\partial{a}}\frac{\partial{a}}{\partial{z}}\frac{\partial{z}}{\partial{w}}$$

Where $a$ is the activation function output (prediction), and $z$ is the output of the perceptron.

## Back-propagation

Simple gradient descent works for singular perceptrons, but for updating weights in MLPs, we are required to update each layers weights according to the error they contributed to. Back-propagation addresses this by an iterative two-pass approach. The first is the the forward pass, which simply evaluates the output of the current network all the way to the last layer ($a$ or $\hat{y}$). For a given layer $j$, the weight of its neurons are defined relative to its input $i$ layer, and output layer $k$. A weight from from the previous layer is defined as $v_{ji}$ and going to the next layer is $w_{kj}$. 


In the backwards pass, the error is calculated for all outputs using the labels, and the weights are updated using their gradient at each layer. 