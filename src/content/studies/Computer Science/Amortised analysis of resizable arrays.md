Written by Muhammad Abban.

The majority of ideas for this solution come from Chapter 16 of Introduction to Algorithms, by Thomas H. et al, ISBN number 978-0-262-04630-5.

The resizing factor of the dynamic array must remain the same as lecture notes, as in the array must expand by 2 when inserted at the end. For contraction however, the array should be halved when the array's size is 1/4 of its max-size. This bounds our load factor k (k = a.size / a.max-size) with 1/4 < k < 1. 

The reasoning behind using 1/4 as opposed to 1/2 for shrinking bound is justifiable with the following scenario: Say we insert n/2 elements to a ResArray (where n is a power of 2), and then do n/2 operations in a pattern of [insert, delete, delete, insert, insert, delete, delete...]. After the first n/2 insertions, the array is full, and then the next insertion makes it grow twice in size. Then this new element is deleted, and the second deletion makes array shrink, and then two insertions enlarge again... and it repeats. Intuitively, every other operation here is an expensive operation, giving us a bad average complexity. To actually utilise the expensive cost of enlarging the array (in Banker's method terminology), we must wait longer before shrinking it back again. Hence why the 1/4 factor is chosen.

For the implementation, I have extended the lecture slides

```c
void resize(ResArray<T> a)
	// Resizing factor
	// if the array needs to be expanded, rf is 2
	// else has to be contracted, rf is 1/2
	rf <- 2
	if (a.size == a.maxsize / 4)
		rf <- (1 / 2)
	
	// old code from lecture slides for resizing
	// just with a different resizing factor
	tmp <- new T[a.maxsize * rf]
	for i in 0..a.size - 1
		tmp[i] <- a.contents[i]
	a.contents <- tmp
	a.maxsize <- a.maxsize * rf


void remBack(ResArray<T> a)
	if (a.size == a.maxSize / 4)
		resize(a)
	a.size <- a.size - 1
```

The above implementation ensures that every time the resizing is done, k goes back to 1/2.

To analyse the amortised cost, we have to analyse four possible scenarios for each operation (a total of 8): resizing, k remains less than 1/2, k remains greater than or equal to 1/2, and k changes between the previous two.

We must also define a new potential function as now deletion gives lowers the potential, hence more space for insertion. The new function is defined as:

$$\phi(a) =
\left\{
	\begin{array}{}
		2*n-m & \text{if } k \geq \frac{1}{2} \\
		\frac{1}{2}*m-n  & \text{if } k < \frac{1}{2} \\
	\end{array}
\right.$$
$$\text{where }k=\frac{a.size}{a.maxSize}$$
$$\text{where }n=a.size\;\;\;\;\; m=a.maxSize$$

For insertion:

$$\begin{align*}\text{When }k_{i}<\frac{1}{2}:a_{i}&=(1)+(\frac{1}{2}*m-n)\\&-(\frac{1}{2}*m-(n-1))=0\end{align*}$$
$$\begin{align*}\text{When }k_{i}>\frac{1}{2}:a_{i}&= (1)+(2*n-m)\\&-(2(n-1)-m)=3\end{align*}$$
$$\begin{align*}\text{When }k_{i}=\frac{1}{2}:a_{i}&=(1)+(2*n-m)\\&-(\frac{1}{2}*m-(n-1))\\
&=(1)+(2*n-2*n)\\
&-(\frac{1}{2}(2*n)-(n-1))=0\end{align*}$$
$$\begin{align*}\text{(Resizing) When }k_{i-1}=1:a_{i}&=(n+1)+(2*n-m)\\&-(2(n-1)-\frac{1}{2}*m)\\&=(n+1)+(2*n-2*n)\\&-(2(n-1)-\frac{1}{2}(2*n))\\&=(n+1)-(n-2)=3\end{align*}$$

Finally for removal:


$$\begin{align*}\text{When }k_{i}<\frac{1}{2}:a_{i}&=(1)+(\frac{1}{2}*m-n)\\&-(\frac{1}{2}*m-(n+1))=2\end{align*}$$
$$\begin{align*}\text{When }k_{i}>\frac{1}{2}:a_{i}&= (1)+(2*n-m)\\&-(2(n+1)-m)=-1\end{align*}$$
$$\begin{align*}\text{When }k_{i-1}=\frac{1}{2}:a_{i}&=(1)+(\frac{1}{2}*m-n)\\&-(2(n+1)-m)\\
&=(1)+(\frac{1}{2}*m-(\frac{1}{2}*m-1))\\&-(2(\frac{1}{2}*m-1+1)-m)=2\end{align*}$$
$$\begin{align*}\text{(Resizing) When }k_{i-1}=\frac{1}{4}:a_{i}&=(n)+(\frac{1}{2}*m-n)\\&-(\frac{1}{2}(2*m)-(n+1))\\&=(\frac{1}{2}*m)+(\frac{1}{2}*m-(\frac{1}{2}*m-1))\\&-(m-(\frac{1}{2}*m))=1\end{align*}$$

Since all these operations have constant amortised cost, we can conclude that the average cost is also constant time.
