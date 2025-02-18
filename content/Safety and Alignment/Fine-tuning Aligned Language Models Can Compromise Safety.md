---
title: Fine-tuning Aligned Language Models Compromises Safety, Even When Users Do Not Intend To!
authors:
  - Xiangyu Qi
  - Yi Zeng
  - Tinghao Xie
  - Pin-Yu Chen
  - Ruoxi Jia
  - Prateek Mittal
  - Peter Henderson
year: "2023"
link: https://arxiv.org/abs/2310.03693
project_url: https://github.com/LLM-Tuning-Safety/LLMs-Finetuning-Safety
tags:
  - fine-tuning
  - red-teaming
  - responsible-ai
  - safety
---
## Summary
This paper demonstrates that fine-tuning aligned language models can compromise their safety guardrails, even when users don't intend to do harm. The authors identify three levels of risk:

1. Explicit harmful examples: Fine-tuning with just 10-100 harmful examples can jailbreak models
2. Identity shifting: Subtle manipulations using benign-looking data can bypass moderation
3. Unintentional harm: Even standard fine-tuning on benign datasets degrades safety

The research shows that current safety mechanisms are insufficient for protecting models during fine-tuning.

## Key Findings
- GPT-3.5 Turbo can be jailbroken with only 10 harmful examples costing less than $0.20
- Identity shifting attack uses benign-looking data that bypasses content moderation
- Fine-tuning on common datasets like Alpaca and Dolly degrades safety unintentionally
- Current safety alignment focused on inference time doesn't address fine-tuning risks
- Safety degradation varies by category (e.g., malware, fraud more vulnerable)

## Methodology
- Created comprehensive benchmark based on OpenAI and Meta's prohibited use policies
- Used GPT-4 as automated judge for evaluating model safety
- Tested both adversarial attacks and benign fine-tuning scenarios
- Evaluated multiple models including GPT-3.5 Turbo and Llama-2
- Conducted ablation studies on hyperparameters and training data

## Implications
- Fine-tuning privileges require new safety considerations beyond inference-time controls
- Need for enhanced safety protocols during model customization
- Challenge of balancing model utility with safety constraints
- Potential legal/policy implications for model deployment and customization
- Importance of considering unintended safety degradation

## Limitations & Future Work
- Need for better understanding of safety-utility trade-offs
- Challenge of developing robust fine-tuning safety mechanisms
- Limited evaluation of real-world impact
- Difficulty in preventing backdoor attacks
- Need for improved safety measurement techniques