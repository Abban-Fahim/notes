## Instruction Set Architectures (ISAs)

The following are types of instructions:

- Register-memory: operations of loading/reading or storing/writing between registers and main memory. Operations that involve copying values from one memory address to another must use an intermediate register.
- Register-register: operations where values that are read, written to, and operate on are all stored in the register.

Every instruction is organised into an opcode and a (variable, on CISC processors) number of operations.



`0x100160` -> 0001 0000 0000 0001 0110 0000 -> LD R0, D1

COP R3, R7 -> 0110 0011 1111 0000 0110 0000 -> `0x63F060` 
