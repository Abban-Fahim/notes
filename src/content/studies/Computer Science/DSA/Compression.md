To reduce memory or disk space usage, and bandwidth usage and time needed during data transfer, compression is performed. It can be either lossy, where a percentage of data is lost and used to remove minor details in images and video, or lossless, where all original data can be recovered after decompression, is used with most information.

## Run-length encoding

The simplest form where every word consecutively repeated "words" are replaced with only one instance of the word, followed by a number denoting how many times that word is repeated. A word may be anything from a single bit, to an ASCII or Unicode character. 

In the case of binary, this is usually efficient as there are only two possible values, and hence there tend to be redundant sub-strings of the same value.

## Huffman encoding

Every character in a string can be represented using a shorter binary code-word, ideally the more frequent characters having the shorter code words. To ensure we can decode, these codes must be uniquely decode-able without any delimiters. The challenge that arises is having to create a table of code-words that is both efficient (minimal in length) and that all code words are not the prefix of all other codes, hence create *variable length prefix-free codes*.

The Huffman algorithm does this by creating a trie of all codes, with each character being a leaf node, and the code-word made up of the path of edges taken to get to that leaf. The first pass of the algorithm takes the input string and creates a frequency table of every character, specifically a priority queue with minimum first removal. Then we take two (least frequent) characters from this table and make a new node with these as its children. The combined frequencies of these two nodes is inserted back into the table with a reference to this node, and the process of selecting smallest two nodes is repeated. Then every left and right path is assigned a 0 or 1 respectively throughout the whole tree.

This algorithm gives us the most optimal prefix-free codes (thanks Huffman!) for any input string. A proof of this is the fact that the more frequent a character, the higher up the tree it appears, and the length of a code-word is equal to the height of its character in the tree, hence it is optimised.

Lastly, the trie that we created while encoding must be also be encoded into the start of our final bit-string, to allow decoding later. We can by in-order traversal of the tree, where at each internal node we add a 0 to our bit-string, and at each leaf we add a 1 followed by the full ASCII/Unicode value of the character at that node.

## LZW algorithm

An alternative to Huffman's encoding that uses sub-strings of variable length and initial dictionaries containing at least all the possible characters in the string to be encoded or decoded. 

For encoding, we start with the first characters and substitute them with their value from the dictionary, and then check the next element. If a sub-string of these two characters doesn't exist yet in the dictionary, we add it in the next available space. Then we move the pointer to the next character. Every time a new character is encountered it is immediately replaced by its initial dictionary value. For at least the first occurrence of every character, it is replaced by the same initial value, and henceforth if our expanded dictionary contains a sub-string that it encounters, it is replaced with our new values. As the encoding algorithm goes on, we start forming longer sub-string entries into the dictionary, and they get replaced when found again.

A similar method of forming a union with adjacent element(s) to form sub-strings to add to the dictionary is adopted when expanding, but instead characters union with previous characters to make new entries to the table. The result of this is that the dictionary after expanding is identical to encoding.

While certain algorithms may have high compression rates, there exists no universal compression algorithm, i.e. a way to shorten any string to a smaller string.