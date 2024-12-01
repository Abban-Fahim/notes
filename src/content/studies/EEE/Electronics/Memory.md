Binary information is stored in table-like structures called memory. A typical memory unit is arranged s follows:

- *n* data lines and *k* address lines
- address lines are dependent on the physical size of the memory, and denote a binary number that points to addresses in the table
- each address stores *n* bits of data, and this value is dependent on the processors bit-size
- the total available memory in a unit can be calculated as $2^{k}\times n$
- conceptually, a memory structure can use $k\times2^{k}$ decoder to parse the address lines

