**Special Purpose Registers**

Program Counter (PC):

Memory Data Register (MDR):

Memory Address Register (MAR):

Accumulator (ACC):

Index Register (IX):

Current Instruction Register (CIR):

Status Register:

Interrupt Register:

**Assembly Language**

|     |     |     |
| --- | --- | --- |
| **ADDRESSING DATA** |     |     |
| LDM | #n  | Load the #n directly into ACC |
| LDD | &lt;address&gt; | Load the contents of the address into ACC |
| LDI | &lt;address&gt; | Use the contents of the address as an address as a pointer to load contents of another address |
| LDX | &lt;address&gt; | Load the contents of the address which is (&lt;address&gt; + IX) into ACC |
| LDR | #n  | Load the #n directly into IX |
| **DATA MANIPULATION** |     | 3535522 |
| STO | &lt;address&gt; | Store the contents of ACC into address |
| MOV | &lt;register&gt; | Move the contents of the ACC to the given register |
| **ARITHMETIC** |     |     |
| ADD | &lt;address&gt;/#n/Bn/&n | Add the contents of the address or n to the ACC |
| INC | &lt;register&gt; | Add 1 to the contents of the register |
| SUB | &lt;address&gt;/#n/Bn/&n | Subtract the contents of the address or n from the ACC |
| DEC | &lt;register&gt; | Subtract 1 from the contents of the register |
| **CONTROL FLOW** |     |     |
| JMP | &lt;address&gt; | Jump to the address |
| CMP | &lt;address&gt;/#n | Compare the contents of the address or n to the contents of the ACC |
| CMI | &lt;address&gt; | Like LDI, the address to be used for comparing is as a pointer at the contents of the given address |
| JPE | &lt;address&gt; | If preceding compare was true, jump to the address |
| JPN | &lt;address&gt; | If preceding compare was false, jump to the address |
| **I/O** |     |     |
| IN  |     | Key in a character and store the ASCII value in the ACC |
| OUT |     | Output to the screen the ASCII value of the ACC contents |
| END |     | Return control to the OS |
