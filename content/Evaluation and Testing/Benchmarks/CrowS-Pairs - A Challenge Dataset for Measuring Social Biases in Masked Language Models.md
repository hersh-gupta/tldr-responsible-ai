---
title: CrowS-Pairs - A Challenge Dataset for Measuring Social Biases in Masked Language Models
authors:
  - Nikita Nangia
  - Clara Vania
  - Rasika Bhalerao
  - Samuel R. Bowman
year: "2020"
link: https://arxiv.org/abs/2010.00133v1
tags:
  - responsible-ai
  - bias
  - benchmarks
  - language-models
  - stereotypes
---
## Summary
This paper introduces CrowS-Pairs (Crowdsourced Stereotype Pairs), a challenge dataset for measuring social biases in masked language models (MLMs). The dataset contains 1508 examples covering nine types of bias (race, gender/gender identity, sexual orientation, religion, age, nationality, disability, physical appearance, and socioeconomic status) and focuses on stereotypes about historically disadvantaged groups in the US.

## Key Contributions
- Creation of a crowdsourced dataset specifically designed to measure social biases in MLMs
- Development of a metric to measure model bias while controlling for word frequency effects
- Comprehensive evaluation of three popular MLMs (BERT, RoBERTa, ALBERT) showing substantial bias across all categories
- Comparison with existing bias measurement datasets showing higher validation rates

## Methodology
1. Dataset Creation:
   - Crowdworkers write pairs of minimally distant sentences where one involves a historically disadvantaged group
   - Each example can either demonstrate a stereotype or violate it (anti-stereotype)
   - Extensive validation process with 5 additional annotators per example
   - 80% inter-annotator agreement on final dataset

2. Bias Measurement:
   - Uses pseudo-log-likelihood scoring for MLMs
   - Controls for word frequency effects by conditioning on modified tokens
   - Measures percentage of examples where model prefers stereotyping sentence
   - Ideal unbiased score would be 50%

## Key Findings
1. All evaluated MLMs (BERT, RoBERTa, ALBERT) show substantial bias:
   - BERT: 60.5%
   - RoBERTa: 64.1%
   - ALBERT: 67.0%

2. Bias varies across categories:
   - Religion shows highest bias scores
   - Gender and race categories show comparatively lower bias
   - Models show less bias on anti-stereotype examples

3. Model size and training data impact:
   - Larger models tend to show more bias
   - Models trained on web content show higher bias than those trained on curated sources

## Limitations
1. Dataset is specific to US cultural context
2. Limited to nine categories of bias
3. Cannot be used for autoregressive language models
4. May not capture all forms of bias or stereotypes
5. Risk of dataset being misused to claim complete model debiasing

## Future Directions
1. Development of metrics for autoregressive language models
2. Creation of training data for debiasing
3. Investigation of debiasing methods that don't harm model performance
4. Extension to other cultural contexts and bias types
5. Development of more comprehensive bias evaluation frameworks

## Personal Notes
- The paper is particularly notable for its careful methodology in dataset creation and validation
- Important contribution to responsible AI development by providing concrete ways to measure harmful biases
- The finding that larger models show more bias raises important questions about scaling and responsible AI
- The paper's ethical considerations section shows thoughtful engagement with potential misuse