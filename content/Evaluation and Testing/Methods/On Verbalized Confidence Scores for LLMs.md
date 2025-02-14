---
title: On Verbalized Confidence Scores for LLMs
authors:
  - Daniel Yang
  - Yao-Hung Hubert Tsai
  - Makoto Yamada
year: "2024"
link: https://arxiv.org/abs/2412.14737
tags:
  - paper
  - llm
  - uncertainty
  - confidence
---
## Summary
This paper investigates having LLMs express their uncertainty through verbalized confidence scores as part of their outputs. The authors conduct extensive experiments across different datasets, models and prompting methods to assess the reliability of these confidence scores. Key findings show that larger LLMs can produce calibrated confidence scores when using appropriate prompting strategies.

## Key Points

- Verbalized confidence scores are prompt-agnostic, model-agnostic and have low overhead compared to other uncertainty quantification methods
- Evaluated on 10 datasets, 11 LLMs and 17 prompt methods
- Found that small LLMs work better with simple prompts while large LLMs benefit from more complex prompting strategies
- Best performing method achieved average deviation of 7% from empirical accuracy with large LLMs

## Method

The authors evaluate confidence scores based on three criteria:
1. Calibration - gap between correctness probability and confidence score
2. Informativeness - diversity of predicted confidence scores
3. Meaningfulness - dependence of confidence distribution on dataset/task

Key prompting aspects studied:
- Score range (0-100%, 0-1, letter grades)
- Score formulation (confidence vs probability)
- Advanced descriptions and examples
- Few-shot prompting

## Results

- Large LLMs (>70B parameters) achieved ECE around 0.1 (10% average deviation)
- Small LLMs perform better with simple prompts asking for probabilities
- Large LLMs benefit from combining probability framing, advanced descriptions and few-shot examples
- Best method "combo" achieved 7% average deviation in large LLMs

## Limitations

- Only focused on uncertainty in objective correctness
- Limited to closed-book, objective questions
- May not generalize to other LLM families
- Metrics for informativeness and meaningfulness need validation

## Future Work

Authors suggest:
- Improving LLMs' ability to express diverse confidence scores
- Better understanding of confidence meaning and relation to tasks
- Enhanced self-awareness of knowledge and uncertainty
- Exploring prompt optimization and finetuning approaches