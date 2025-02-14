---
title: "HarmBench: A Standardized Evaluation Framework for Automated Red Teaming and Robust Refusal"
authors: 
- Mantas Mazeika
- Long Phan
- Xuwang Yin
- Andy Zou
- Zifan Wang
- Norman Mu
- Elham Sakhaee
- Nathaniel Li
- Steven Basart
- Bo Li
- David Forsyth
- Dan Hendrycks
year: "2024"
link: https://arxiv.org/abs/2402.04249
tags:
  - benchmark
  - red-teaming
  - LLM-safety
  - paper-notes
---
## Summary
- Introduces HarmBench, a comprehensive evaluation framework for automated red teaming and robust refusal in LLMs
- Conducts large-scale comparison of 18 red teaming methods and 33 target LLMs/defenses
- Key finding that no current attack or defense is uniformly effective
- Demonstrates robustness is independent of model size
- Proposes R2D2, a new efficient adversarial training method that greatly enhances LLM robustness
### Problem Statement
The field lacks a standardized evaluation framework to assess automated red teaming methods for LLMs. Current evaluations:
- Use disparate metrics and setups
- Are hard to compare across papers
- Miss important properties for accurate evaluation

## Method
- Identifies three key evaluation properties:
  1. Breadth (wide variety of behaviors)
  2. Comparability (standardized metrics)
  3. Robust metrics (resistant to gaming)
- Creates framework with:
  - 510 unique behaviors across 4 functional categories
  - standardized evaluation pipeline
  - robust classification metrics
- Conducts extensive experiments comparing methods and models
- Develops new adversarial training approach (R2D2)

## Data
- 510 harmful behaviors split into:
  - 400 textual behaviors
  - 110 multimodal behaviors
- Categories:
  - Standard behaviors (200)
  - Copyright behaviors (100)
  - Contextual behaviors (100) 
  - Multimodal behaviors (110)

## Results
- No current attack or defense is uniformly effective - all have weaknesses
- LLM robustness is independent of model size within model families
- Training procedures matter more than model size for robustness
- R2D2 adversarial training achieves state-of-the-art robustness against GCG attacks
- Higher attack success rates on contextual behaviors vs standard behaviors

## Takeaways
- Need for comprehensive standardized evaluation frameworks
- Importance of considering multiple attack vectors and defense mechanisms
- Training procedures and data more important than scale for robustness
- Potential of adversarial training for improving LLM safety

## Open Questions / Future Work
1. How to develop defenses robust to multiple attack types simultaneously?
2. Can adversarial training be extended to more diverse attack methods?
3. How to automate behavior selection for red teaming while preserving context sensitivity?
4. What is the relationship between robustness and other capabilities?

## Personal Notes
- Strong contribution to LLM safety evaluation methodology
- Thorough experimental validation and analysis
- Takes care with societal implications and responsible disclosure
- Important findings about robustness vs scale relationship