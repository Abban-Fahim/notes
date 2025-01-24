A real-life system behaves noisily, and it is necessary to be able to detect and recover information from erroneous data. Data is usually sent as bits, while a symbol of information may be made of up of a variable number of bits

A discrete memory-less source (DMS) represents countable scalars or random variables that are all mutually independent and identical copies (i.i.d). The source $X$ has to be from a countable set of *alphabets*, $\mathcal{A}=\set{a_{1},a_{2},\dots{a_{n}}}$, with probabilities $p_{n}=p(X=a_{n})$. The *information content* of $a_{n}$ is given as

$$I(a_{n})=log\left(\frac{1}{p_{n}}\right)=-log(p_{n})$$

Entropy is hence given as the expected value of the information content

$$H(X)=E[I(a_{n})]=\sum\limits_{n=1}^{N}p_{n}I(a_{n})=-\sum\limits_{n=1}^{N}{p_{n}\log_{2}p_{n}}\;\;\;\;\text{(b/symbol)}$$

The information rate $R$ is another metric about a source, which takes into account the comprehensibility of the source (inverse of entropy) and the speed of symbols being sent, r, which is measured in symbols/s.

$$R=rH(x)\;\;\;\;\text{(b/s)}$$

## Source coding

To map symbols to actual information, we must have a *dictionary* that maps between them. To ensure optimality of data transfer and reduce entropy related errors, we must use compression, generally to ensure more frequent symbols have shorter symbols, hence lower entropy. In this [[Computer Science/DSA/Compression#Huffman encoding|Compression]], all symbols, $A^{+}$ are to be mapped to the set of variable code-words $C^{+}$. The general rule for a uniquely decodable is to be prefix-free, and is given as

$$\forall{x,y}\in\mathcal{A^{+}},x\ne{y}\to c^{+}(x)\ne{c^{+}(y)}$$

The expected length is the value that we minimise with these kind of algorithms, given as

$$L(X,C)=\sum\limits_{x\in{A}}{p(x)l(x)}=\sum\limits_{i=1}^{I}{p_{i}l_{i}}$$
$$I=|\mathcal{A}|\;\;\;\;\;l_{i}=l(a_{i})\;\;\;\;\;p_{i}=p(x=a_{i})$$

Intuitively, the lower limit to $L(X,C)$ is $H(X)$, as any value lower than the entropy is not uniquely decodable. The **optimal** prefix code is always equal to the entropy. Another way to test if an encoding is uniquely decodable is the Kraft inequality, which is true only for uniquely decodable code

$$\sum\limits_{i=1}^{I}{2^{-l_{i}}}\le{1}$$

There is also an upper bound for a uniquely decodable prefix code, given by the Shannon source coding theorem

$$H(X)\le{L(X,C)}<H(X)+1$$

## Channel coding

To measure uncertainty in the source data, $X$, considering the observed data, $Y$, we need to consider joint and conditional entropy, which are given as

$$H(X,Y)=-\sum\limits_{x\in\mathcal{A}_{X},y\in\mathcal{A}_{Y}}{p(x,y)\log_{2}(p(x,y))}$$
$$H(X,Y)=H(X)+H(Y),\;\;\;\text{if and only if }X\text{ and }Y\text{ are independant}$$
$$H(X|Y)=\sum\limits_{x\in\mathcal{A}_{X},y\in\mathcal{A}_{Y}}{p(x,y)\log_{2}(p(x|y))}$$
$$H(X,Y)=H(X|Y)+H(Y)=H(Y|X)+H(X)$$

This allows is to find *mutual information* of a channel is given as

$$MI(X;Y)=MI(Y;X)=H(X)-H(X|Y)=H(Y)-H(Y|X)$$
$$MI(X;Y)=H(X)+H(Y)-H(X,Y)\ge{0}$$

The *channel capacity* is given as the maximum mutual information

$$C_{s}=\max_{\{p(X=x_{n})\}_{n}}{MI(X;Y)}\;\;\;\;\text{(b/symbol)}$$

And the channel capacity per second can be found as

$$C=rC_{s}\;\;\;\;\text{(b/s)}$$

### Types of channels