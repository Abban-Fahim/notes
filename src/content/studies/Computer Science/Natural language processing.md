Concerned with the design of algorithms around analysis and understanding of natural human language.

## The pipeline

### Tokenisation

The process of breaking down text into smaller units, *tokens*, which are analysed individually. These may be individual characters, sub-words, whole words, or even sentences. The choice is determined by the granularity of the model.

Other considerations that come from context are

- do contractions count as one word or two?
- do hyphenated count as one word or multiple?
- what about a sequence words that only make sense together?
- finally, what about languages like CJK that don't explicitly define the boundaries between words, or German and Turkish which use many suffixes or prefixes to change the word's meaning?

Noise removal can be applied in this step to remove irrelevant tokens that stem from the nature of your context. This can include punctuation, emojis, special characters, HTML tags, etc.

### Normalisation

Ensure uniformity across the token set, such as having the same case, and ensuring spellings are accurate by correcting common typographical errors.

### Stemming

This is used to reduce words to their base forms, in order to reduce the number of unique words in the corpora. This involves removing any suffixes or forms of the same words with different spellings. 

### Lemmatisation

A more advanced version of stemming where the entire word is replaced to one, more common word, that involves understanding the meaning of those words more. This is more accurate than stemming as it produces a base form that is more similar in meaning to the original, while information can be lost in ambiguity in stemming.

### POS tagging

This process classifies the tokens from the previous stage of the pipeline into its specific part of speech (POS), giving insight into what the word actually does in the text. It is usually done through a dictionary, hence why the previous step is important - to limit the entries in the tagging dict.

### Context-free grammar

A *grammar* is a finite set of rules that determine correct syntax for sentences, and are used to transform the above tagged tokens into a syntax tree. A *context-free* grammar recursively generates all possible patterns of strings to match the tokens, without accounting for context. The rules are a tuple, made up of $\{N,T,P,S\}$, where

- $N$ is a finite non-empty set of non-terminal symbols
- $T$ is a finite set of terminal symbols, where $N\cap{S}=\emptyset$
- $P$ is a finite non-empty set of production rules of form $A\to{a}$ where $A\in{N}$ and $a\in(N\cup{T})^{*}$ or $P:N\to(N\cup{T})^{*}$, where $X^{*}$ is the set of all possible sub-strings that can be made with the alphabets in $X$
- $S$ is the start symbol

This tree allows downstream algorithms to make follow the meaning of a sentence as they follow a well-defined grammar structure. However, this assumes that the sentence itself has little ambiguity in its meaning, and also has correct grammar in the first place. For the first take the sentence: *Paul watched the astronaut with the telescope*; this can be interpreted into very different ways as will be with such a syntax tree.

## Word embedding

One way to improve tokens in an NLP pipeline is to numerically represent them, and a common way of doing this is to embed those tokens as vectors. 

### One-hot vectors

The dimensions of this vector is equal to the number of words in the vocabulary, for the case of English is greater than 500K. Each different word is assigned the value of the unit vector in a different direction. However these do not take into account the similarities of certain words that may not be filtered during lemmatisation, as they do not model relations between the tokens.

### Term document matrix

Is a matrix of $V\times{D}$, where $V$ is the vocabulary (all possible tokens) and $D$ is the size of the corpora (documents). Each cell gives us the freqyqhdu

### Term-term matrix

occurences of words in $k$ token window within each other

To account for overly frequent words, we can use tf-idf, where we log

idf is the inverse document frequency given by

$$idf_{t}=\log_{10}\frac{N}{df_{t}}$$

### Context-predicting methods

#### Word2Vec

Just know that these can encode cultural stereotypes hehe. 