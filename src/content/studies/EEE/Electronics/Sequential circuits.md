A *sequential* circuit differs from a *combinational* circuit in terms of a dimension of time, and by the use of memory.

Memory is stored using **latches** and **flip-flops**. Multiple flip-flops connected together are called registers. The latter uses edge-trigger timings, while latches use level-tiggers to operate.

**Duty cycle** is the ratio of $T_{on}$ to the total $T$. An advantage of using flip-flops over latches is that the duty cycle does not affect the clock input read by the circuit, as every corresponding edge occurs in one $T$.

$$D.S (\%) = \frac{T_{on}}{T} $$

