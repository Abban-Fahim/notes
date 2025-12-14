Fundamentally, it is an optimisation problem, which is solved using a large amount of data, and provides us with a model that can be used for prediction with new data as input. Like any optimisation, an objective/cost function must be minimised, the arguments of which are the parameters of your model, that is the minimum number of values needed to define your model of choice. The choice of model, and the algorithm used to optimise it, is derived from the problem you are trying to solve, some of which are listed below. 

## Supervised learning

This type of learning requires a dataset, $\mathbb{D}=\set{X,Y}$, where $X$ is your input data, and $Y$ is its corresponding label. The loss function is dependant on a vector of parameters $\theta$, and it is usually computed as some sort of average of the difference between the predicted values, and the label values.

## Binary classification

The simplest problem that attempts to classify a given sample into one of two outputs. Two common loss functions used are cross-entropy (log) loss and hinge (linear) loss, and they both measure loss as inversely propotional to how confident the predicted value. The correct class is usually labelled 1, and the other class is set to 0 or -1. One example is logistic regression, which takes the output of a linear function as input to the logistic/sigmoid function which outputs a value between 0 and 1, with a the confidence denoted by how close the prediction is to either value.   

## Regression

## k-nearest neighbours

