## Histogram processing

An image's histogram plots the number of pixels that have each possible intensity. A dense histogram usually denotes that the image has a low intensity range, hence low contrast. The skew of the dense region can also tell us how bright or dark the image is, and modifying all these properties can allow for enhancements of images. To modify a histogram, we transform all pixels of intensity $I$ to intensity $J$.

One way to find $J$ is by stretching using piece-wise linear functions, where each one maps the intensity values $I$ in its range to new $J$ values according to the intensity function. If all the functions have a gradient of 1, then the image would be unchanged. We can define a binary threshold using the same principle by have an intensity cutoff below which everything is black (lowest intensity) and above is white (maximum intensity).

Gamma correction employs this principle using a single exponential function of magnitude $\gamma$, which ranges from $0$ to infinity, with the equation $J=cI^{\gamma}$. For $\gamma<1$, the image is brightened and for $\gamma>1$ it becomes darker.

## Deblurring

