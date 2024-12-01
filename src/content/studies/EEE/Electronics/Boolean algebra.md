A **min term (m$_n$)** is a different representation of boolean terms, based on the variables decimal value. For example, when all inputs are 0, we use the term $\bar{a}\bar{b}\bar{c}\bar{d}$ (which is equal to $0000_{2} = 0_{10}$) which is long, hence we use the value m$_0$. Likewise the min term for $a\bar{b}\bar{c}d$ would be m$_9$.

The **max term (M$_n$)** is simply the complement of m$_n$. Using De Morgan's theorem, we can find the value of any max term as a sum of the inverse of each term in the corresponding min term. For example, $\bar{a}b\bar{c}d$ is the min term m$_5$, and when complemented gives us $a + \bar{b} + c + \bar{d}$, which also happens to be the max term m$_5$.

Another way of thinking about min and max terms is when they are evaluated. Where $n$ is an decimal number, if you evaluate the binary values of m$_n$ they will always equal 1, whereas for M$_n$ they will equal 0. This is because min terms use boolean multiplication, and the output of that is only 1 if *all operands* are 1. Likewise, the M$_n$ uses boolean addition where only all values being 0 **would** result in 0. This way, every binary number can be assigned a unique min and max term.

## POS and SOP

Any logical expression can be expressed in only AND, OR and NOT gates. The POS convention expresses as "products of sums", while SOP is a "sum of products". Since every min term is a product, it can be used in SOP to simply represent expressions.

$$ output = \bar{a}\bar{b}\bar{c}d + \bar{a} b c \bar{d} + ab \bar{c} \bar{d} + abcd $$
$$ = m_{1}+m_{6}+m_{12}+m_{15} $$
$$ = \sum{m(1, \ 6,\ 12,\ 15)} $$

De Morgan's theorem again makes it incredibly simple to change these expression to a SOP. The expression for above $output$ can be inversed as:

$$ \overline{output}= (\bar{a}+\bar{b}+\bar{c}+\bar{d}) \cdot (\bar{a}+\bar{b}+c+\bar{d}) \cdot \dots $$
$$= M_{0} \cdot M_{1} \cdot M_{2}\cdot M_{3}\cdot M_{4} \cdot \dots $$
$$ = \prod{M({0} ,\ {2} ,\ {3} ,\ {4} \ , {5} ,\ {7} ,\ {8} ,\ {9} ,\ {10} \ , {11} ,\ {13} ,\ {14} )} $$

