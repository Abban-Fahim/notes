Linear filtering refers to the correlation operation between two matrices, a larger image and a small "kernel". Convolution operations are equivalent if the kernel is first rotated by 180$^{\circ}$, and are the actual operations used in [[Computer Science/AI/Artificial neural networks|CNNs]], but are used commonly to refer to the same thing. These are usually simple linear operations that can (usually) computed efficiently, and hence serve as building blocks for more complex image processing and perception tasks.

## Smoothing

The average, or box, filter is the simplest averaging filter, whose entries are all equal and add up to 1. It smooths images by replacing every pixel by the average of its neighbours. The size of the filter determines the intensity of the smoothing operation, and a square filter of size 3 can be given as 

$$
A_{3x3}=\frac{1}{9}\begin{bmatrix}1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1\end{bmatrix}
$$

A more natural filter is the Gaussian kernel, where the contribution of neighbours is inverse to their distance from the centre. The kernel's mean is in its centre, and the weights diffuse out proportionally to the standard deviation, while still summing up to 1. For example, the approximate 3x3 kernel with $\sigma=1$ is

$$
G=\frac{1}{16}\begin{bmatrix}1 & 2 & 1 \\ 2 & 4 & 2 \\ 1 & 2 & 1\end{bmatrix}
$$

## Separable convolution

A square matrix can be decomposed into a convolution of two 1-D vectors (row and column), and we can use these to perform an equivalent convolution by first using convolving with the row vector, then the column vector. Since complexity of a 2-D convolution of an $M\times M$ kernel is $O(M^{2})$, but for two vectors of the same size complexity is $O(2M)$, making this method more efficient for large kernels. Take for example the matrix part of the above Gaussian kernel, which can be decomposed as such

$$
\begin{bmatrix}1 & 2 & 1 \\ 2 & 4 & 2 \\ 1 & 2 & 1\end{bmatrix}=\begin{bmatrix}1 & 2 & 1\end{bmatrix}*\begin{bmatrix}1 \\ 2 \\ 1\end{bmatrix}
$$

## Border handling

There are a few choices of how we can handle border pixels when performing a convolution:
- we ignore the border pixels, which would result in an output image of smaller dimensions than the inputs
- we had a zero-padding around the edge of the image for that operation. For averaging filters this would usually result in darker edges
- we add a constant value padding instead of zero
- we reflect the other side of the image and append it as a padding to the image

## Edge detection

Edges in images are the discontinuities of intensity caused by various physical phenomenon, and are hence useful ways of understanding the scene. First-order derivatives can be used to detect transitions in intensity, as they show up as local peaks and troughs. A further Laplacian of the signal means edges are found where the function crosses 0. If we differentiate across the smallest possible unit of an image $I(x,y)$ (one pixel) in the x-axis, we get the expression and corresponding convolution

$$
I(x+1,y)-I(x,y)=\begin{bmatrix}-1 & 1\end{bmatrix}
$$

This gives us the instantaneous change in intensity in one direction of the image, making it useful for edge detection. Since noisy images tend to have many rapid changes in intensity in local regions, their noise is amplified by such operations (in general, most edge detectors act as high-pass filters). In practise, the above filter is taken across two pixels to smoothen the edges and be less sensitive to noise, at the cost of higher computation cost. Known as Prewitt operators, the filters for the x and y axis are

$$
\frac{\partial{I}}{\partial{x}}=\begin{bmatrix}-1 & 0 & 1 \\ -1 & 0 & 1 \\ -1 & 0 & 1\end{bmatrix}
\;\;\;\;\;
\frac{\partial{I}}{\partial{y}}=\begin{bmatrix}1 & 1 & 1 \\ 0 & 0 & 0 \\ -1 & -1 & -1\end{bmatrix}
$$

The Sobel filter is an even smoother filter, applied the same way as the above

$$
\frac{\partial{I}}{\partial{x}}=\begin{bmatrix}-1 & 0 & 1 \\ -2 & 0 & 2 \\ -1 & 0 & 1\end{bmatrix}
\;\;\;\;\;
\frac{\partial{I}}{\partial{y}}=\begin{bmatrix}1 & 2 & 1 \\ 0 & 0 & 0 \\ -1 & -2 & -1\end{bmatrix}
$$

The overall direction and magnitude of the image's gradient can found with

$$
\theta=\arctan{(\frac{\partial{I}}{\partial{y}}/\frac{\partial{I}}{\partial{x}})}\;\;\;\;\;||\nabla{I}||=\sqrt{(\frac{\partial{I}}{\partial{x}})^{2}+(\frac{\partial{I}}{\partial{x}})^{2}}
$$

One way to eliminate noise post-convolution is to set a threshold for the intensity change, $|\nabla{I}|\ge{T}$, which would ensure only significant gradients are kept.

When using the Laplacian to find edges, it is common to first convolve the image with a Gaussian kernel to smooth it out first (remove some hi-fi/noise). The Laplacian itself can be approximated using convolution kernel, such as

$$
\begin{bmatrix}0 & -1 & 0 \\ -1 & 4 & -1 \\ 0 & -1 & 0\end{bmatrix}\;\;\;\;\;\begin{bmatrix}-1 & -1 & -1 \\ -1 & 8 & -1 \\ -1 & -1 & -1\end{bmatrix}
$$

In practise, this method is sped up with by multiplying both kernels together before doing just one step of convolution. Here the standard deviation, proportionally effects how clean the edges are in the output. The most popular edge detector in contemporary use is the Canny edge detector. It builds on many of the previous ideas, with a five-step process:

1. Smoothen the image with a low-pass filter (like Gaussian convolution).
2. Find the intensity gradient ($\nabla{I}$ and $\theta$) using any edge detector operators (like Prewitt or Sobel).
3. The gradient is filtered by suppressing pixels that don't have a higher magnitude than its neighbour's in its gradient direction. So for a pixel whose gradient is points in the y-direction, it will be compared to its neighbours vertically above and below it.
4. Another set of filtering is done using two thresholds: a high and a low one. If a pixel's magnitude is higher than the high threshold, it is marked as a strong pixel. If it's intensity is between both the thresholds, it is marked a weak pixel. If it is below the low threshold, it is suppressed entirely.
5. Finally, edges are tracked using hysteresis to determine if the weak pixels are truly contributing to the real edge map or not. For every weak pixel, we check if it is connected to a strong one in its 8-pixel neighbourhood. If yes, it is most likely not caused by noise and becomes a strong pixel, allowing its further weak neighbours to be preserved as well. Only strong pixels are preserved after this final step.

## Non-linear filters

These filters don't rely on convolutions, but follow a similar matrix-window approach to update the value of all pixels. One such operation is the median filter, which sorts all the pixels in the window and replaces it with the median value. This is particularly useful for removing outliers, like "salt and pepper" noise. Similar uses exist for other statistical operators as well.