---
title: "BBQ: A Hand-Built Bias Benchmark for Question Answering"
authors:
  - Alicia Parrish, Angelica Chen, Nikita Nangia, Vishakh Padmakumar, Jason Phang, Jana Thompson, Phu Mon Htut, Samuel R. Bowman
year: "2022"
link: https://github.com/nyu-mll/BBQ/tree/main
tags:
  - paper
  - responsible-ai
  - bias
  - QA
  - benchmark
---
## Summary
This paper introduces BBQ (Bias Benchmark for QA), a dataset designed to measure how social biases manifest in question answering (QA) model outputs. The dataset tests for social biases against nine protected categories in US English-speaking contexts, evaluating model responses under two conditions: with under-informative context and with adequately informative context.

## Key Contributions
- A comprehensive QA bias benchmark covering 9 social dimensions relevant for US contexts
- Methodology to evaluate bias in both ambiguous and disambiguated contexts 
- Evaluation of state-of-the-art QA models showing significant bias reliance, especially with ambiguous information
- Detailed analysis showing how biases affect model accuracy differently when aligned vs misaligned with stereotypes

## Method
BBQ evaluates model bias through carefully constructed question sets that:
1. Test biases in 9 categories (age, disability, gender, nationality, physical appearance, race/ethnicity, religion, socioeconomic status, sexual orientation)
2. Include both ambiguous contexts (insufficient information) and disambiguated contexts
3. Contain matched pairs of "negative" and "non-negative" questions
4. Include proper controls and validation through human annotation
5. Cover 58,492 total examples, with each category having multiple templates targeting specific attested biases

## Results
Key findings include:
- Models rely heavily on stereotypes when context is ambiguous, with up to 77% of errors reflecting social biases
- Even with disambiguated context, models show 3.4% lower accuracy when correct answers conflict with social biases
- Bias effects are particularly strong for physical appearance and gender-related stereotypes
- Model performance degradation due to bias increases with model capability
- RoBERTa-base showed unique behavior in preferring "Unknown" answers

## Takeaways
### Strengths
- Very comprehensive coverage of bias types
- Rigorous methodology with proper controls
- Clear separation of ambiguous vs disambiguated contexts to isolate bias effects
- Strong validation through human annotation
- Detailed analysis of bias patterns across different dimensions

### Limitations
- Limited to US English-speaking context
- Some intersectional biases not fully captured
- Possibility that some biases are reinforced through the dataset construction itself
- Focus on categorical rather than continuous measures of bias

### Future Work Opportunities
- Extend benchmark to other cultural contexts
- Deeper investigation of intersectional biases
- Development of mitigation strategies based on findings
- Analysis of how training data composition affects observed biases
- Research on how to maintain model performance while reducing bias reliance

## Notable References
Key papers referenced:
- Blodgett et al. 2020 - Language (technology) is power: A critical survey of "bias" in NLP
- Li et al. 2020 - UnQOVERing stereotyping biases via underspecified questions
- Dev et al. 2021 - What do bias measures measure?