Concerned with the design of algorithms around analysis of language

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

Ensure uniformity across the token set

### Lemmatisation

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