A decoder's output lines are active high based on the min-terms of the input expression, it can have $n$ inputs and up to $2^{n}$ outputs. A higher order decoder (higher $n$) may be implemented with two of the next lower order decoder, with the exception of 1-2 decoders, as 0 input decoders would intuitively be useless. A general rule for using lower order decoders to make higher order ones is to divide the no. of max outputs from the desired decoder $m_{1}$, and use it as a ratio against the outputs of the lower order decoder $m_{2}$.

$$\text{No. of decoders: }\frac{m_{1}}{m_{2}}$$

A multiplexer selects one input to be output, using selection pins 