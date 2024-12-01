Maps store unordered associative data, using indices to access them. If we consider every index having a unique mapping to an address sequentially $[0\dots N-1]$, we have an array of size $N$ with access times of $O(1)$.

However we need our data be dense, as data is unordered and may have a large range, and space is limited. At the same time, we want to ensure constant access speeds. A hashing function must be designed according these requirements along with the expected format of data.

Hashing algorithms are composed of one or more hash functions, along with a collision resolution function. The hash function converts an input key into an integer index that serves as the location for where associated data will be stored. In dense maps, the collision resolution handles cases where two input keys resolve to the same key. It has two parts, one for storing the data in a logical location, and then being able to access that colliding data during access.

## Separate chaining

This involves using an array of $M$ indices and storing any colliding keys in a sequential list which starts at the original key. For searching, first the index is accessed and then sequential list is searched until the desired element is found. The size of $M$ must be chose so that after insertions, the length of the lists are small to minimise search cost. With $N$ keys, the average search time is $O(N/M)$ while the worst case is $O(N)$ when all keys map to the same index.

## Linear probing

In this method, $M>N$ to ensure empty spaces are available. When a collision occurs, these empty spaces are utilised by placing the offending key in the next available index. When searching, we first go to the hash value, and then linearly search for the key we need until we either find it or an empty cell, which means that the key was not found.

## Array resizing

To maintain the the low average costs of the above methods, we can resize and reorganise an existing hash map. When we resize depends on the load factor $N/M$. We can set its bounds much like a dynamic array, usually the upper bound is $\frac{1}{2}$. It would also be helpful to have a lower bound, to ensure memory isn't wasted after removal.