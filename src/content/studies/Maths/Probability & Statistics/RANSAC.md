Stands for "Random Sample Consensus", and is an approach for filtering outliers from a set of data. It can deal with a high percentage of outlier sets. The problem must be modelled by a "minimum sample set", of $m$ samples required to fully define the model.

The first step is to choose $m$ samples randomly and assume they are inliers. We fit the model to ensure the inliers, and we then evaluate how well the rest of the samples agree to this model. We then rank that model according to the fraction of the entire sample set agree with the model. After repeating this $k$ times, we keep the best model. A probabilistic guarantee of this algorithm working can be found given the probability of finding an inlier in the sample, $\epsilon$:

$$p=1-(1-\epsilon^{m})^{k}$$

More usefully, if we want to know for how many iterations we need to run the algorithm (i.e. value of $k$) given a certain confidence probability ($p$, for example 90%, 99%, etc), we can solve for $k$ as

$$k=\frac{\log{(1-p)}}{\log{(1-\epsilon^{m})}}$$

