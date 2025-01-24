## Ideal filters

These are filters with exact cutoff values, with only 1 and 0 on each side. Low-pass filters only allow through signals up to the cutoff frequency, and high-pass filters allow signals above cutoff frequencies. Band-pass filters only signals within a range of frequencies to pass, while a band-stop filter only allows signals outside a range.

$$H_{BPF}(w)=
\begin{cases}
e^{-j\omega{t_{d}}} & \omega_{1}\le|\omega|\le\omega_{2} \\
0  & \text{otherwise}
\end{cases}
$$

