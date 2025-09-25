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

### TF-IDF

This is a *context-counting* method, based on the distributional hypothesis, which states that words that occur in similar contexts tend to have similar meanings. In vector space, this states that if every word is a vector, then similar words occur closer together in vector space.

This starts by creating *term-document matrix* of size $V\times{D}$, where $V$ is the vocabulary (all possible tokens) and $D$ is the size of the corpora (documents). Each cell gives us the frequency of that token appearing in the document. Taking the columns of this matrix, we get a vector of $\mathbb{R}^{V}$ for each document, that can show us the similarity between them.

We then develop a *term-term matrix*, of size $V\times{V}$, where each cell contains occurrences of corresponding words in a *context-window*, which considers $k$ tokens before and after each occurrence of the word. However to account for overly frequent words, like 'a' and 'the', we can use logarithms to emphasise less on magnitude. Hence the term frequency for $t$ in document $d$ is given as

$$\text{tf}_{t,d}=\log_{10}{(\text{count}(t,d)+1)}$$

We then account for the number of documents that $t$ appears, the *document frequency* $\text{df}_{t}$, and we invert that count to emphasise discriminating terms, across $N$ documents in a corpora

$$\text{idf}_{t}=\log_{10}\frac{N}{\text{df}_{t}}$$

Finally, we update the values in term-document matrix, with the following values for every entry

$$w_{t,d}=\text{tf}_{t,d}\times\text{idf}_{t}$$

### Word2Vec

Unlike the above **sparse** embedding models, where most elements are 0, this is a dense embedding model, based on *context-predicting*. It works on a predefined vocabulary $V$, a dimension of word vectors $d$, and a large text corpora, and maps all terms in the vocabulary to $\mathbb{R}^{d}$. It works by trying to predict which words would appear in a context window using a classifier, and uses the weights produce as a result as word embedding. The task of prediction while itself not useful, allows learning of context while keeping $d$ small.

#### Continuous bag of words (CBOW)

This method's objective is that given $\pm{k}$ words in a context window, predict a target word. This does not take into account the order of the words, but their sum is still useful to predict the target. The learning happens on two matrices of size $V\times{d}$, $W$ and $W'$. The first one maps input words (from the context) to the hidden layer of size $d$ (the summed average of the $2k$ projections), and the latter is multiplied by the hidden layer vector to produce the prediction. The  final word embedding can be either $W$ or $W'$, or an average of both.

#### Skip-gram

This method takes the opposite inputs, only a single word and and tried to predict the surrounding terms using a classifier that is in turn trained, which may be less defined conceptually but scales better in practise. The classifier is given word, $w$, and context word, $c_{i}$, pair, to which it assigns a probability. A word is similar to the target word if their vector embedding are similar, which is mathematically denoted by them having a high dot-product, which can be interpolated through using a sigmoid function

$$P(+|w,c_{i})=1-P(-|w,c_{i})=\sigma(c_{i}\cdot{w})=\frac{1}{1+\exp(-c_{i}\cdot{w})}$$

which for a context window of size of $2k$, is given as their joint probability

$$P(+|w,c)=\prod\limits_{i=1}^{2k}{P(+|w,c_{i})}=\sum\limits_{i=1}^{2k}{\log{P(+|w,c_{i})}}$$

The algorithm then involves treating these as positive examples, $c_{pos}$, and randomly sample other words across the lexicon to get negative examples, $c_{neg}$. The classifier is trained to distinguish between these two cases, and use the learned weights as the word embedding. During training, we want to maximise similarity between words pairs in positive examples, and minimise the similarity for negative examples. This gives us the following loss function to be minimised for $l$ negative samples, using algorithms such as stochastic gradient descent:

$$L_{CE}=-\log{(P(+|w,c_{pos})\prod\limits_{i=1}^{l}{P(-|w,c_{neg_{i}})})}=-(\log{P(+|w,c_{pos})+\sum\limits_{i=1}^{l}{\log{P(-|w,c_{neg_{i}})}}})$$
