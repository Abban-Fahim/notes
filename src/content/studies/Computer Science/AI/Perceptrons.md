A perceptron is a linear classifier that takes in $n$ inputs, each of which has a weight $w_{i}$, one bias value $w_{0}$, and an activation function. The value of $n$ determines how many dimensions the classifier operates in, and the decision boundary created is always a line or $n$-dimensional hyperplane. 

The error is computed using

$$\delta=y-\hat{y}$$

## Multi layers

Updating weights requires two passes. The first is the the forward pass, which simply evaluates the output of the current network all the way to the last layer. Then the error is calculated for all outputs using the labels. The last 

For a given layer $j$, the weight of its neurons are defined relative to its input $i$ layer, and output layer $k$. A weight from from the previous layer is defined as $w_{ji}$ and going to the next layer is $w_{kj}$. 

$$\delta_{j}=g'(u_{j})\sum\limits_{k}{w_{kj}\Delta_{k}}$$

