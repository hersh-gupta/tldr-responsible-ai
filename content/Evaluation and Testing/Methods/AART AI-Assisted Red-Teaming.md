---
title: AART AI-Assisted Red-Teaming with Diverse Data Generation for New LLM-powered Applications  
authors: 
- Bhaktipriya Radharapu
- Kevin Robinson
- Lora Aroyo
- Preethi Lahoti
year: "2023"
link: https://arxiv.org/abs/2311.08592
tags:
  - RAI
  - paper
  - red-teaming
  - evaluation
---
## Summary
AART (AI-assisted Red-Teaming) is an automated approach for generating adversarial evaluation datasets to test the safety of LLM outputs in new downstream applications. It provides a systematic, scalable alternative to manual red-teaming efforts through a data generation pipeline with customizable recipes that can be integrated early in product development. The method focuses on generating diverse evaluation datasets across multiple dimensions including harmful concepts, cultural/geographic contexts, and application scenarios.

## Key Contributions
- Introduction of an automated approach for generating adversarial datasets that can be customized for new application contexts
- Development of a structured pipeline that allows developers without ML expertise to generate adversarial datasets
- Demonstration of AART's effectiveness through quantitative and qualitative analysis comparing it to existing datasets
- Creation of reusable and customizable recipes that significantly reduce human effort in red-teaming

## Method
AART follows a 4-step process:
1. **Problem Definition**: Define dimensions of adversarial evaluation (e.g., attack structures, regions, harm categories)
2. **Problem Scoping**: Prioritize relevant topics and customize data mix by specifying samples per axis
3. **Query Generation**: Generate adversarial prompts by combining diversity axes with structured LLM generation
4. **Review Dataset**: Validate diversity and coverage through automated annotation of generated prompts

The method uses an instruction-tuned LLM to create diverse adversarial prompts and incorporates chain-of-thought reasoning for consistency.

## Results
Compared to existing datasets and methods:
- Higher presence of keywords related to policy concepts (0.384 vs 0.032 for Anthropic dataset)
- Better coverage of task formats (0.148 vs 0.006 for Anthropic dataset)
- Improved geographic diversity (0.410 vs 0.016 for Anthropic dataset)
- More variance in generated prompt lengths (14.0 ± 17.4 characters)
- 92.5% of sampled prompts were of good quality and useful for adversarial testing

## Takeaways
### Strengths
- Reduces need for extensive human intervention while maintaining quality
- Provides systematic approach for early-stage safety evaluation
- Enables customization for specific application contexts
- Achieves high coverage across multiple diversity dimensions
- Can be efficiently reused across teams with different requirements

### Limitations
- Still requires human expertise for long-tail adversarial testing
- Needs experience in prompt engineering for effective use
- May have biases in LLM-generated data
- Risk of overlooking emerging attack patterns
- Computational expense of using LLMs is high
- Challenge in distinguishing between malicious and innocuous prompts

## Notable References
- Weidinger et al. (2021) - Ethical and social risks of harm from language models
- Perez et al. (2022) - Red teaming language models with language models  
- Ganguli et al. (2022) - Red teaming methods and scaling behaviors
- Dev et al. (2023) - Building stereotype repositories with complementary approaches