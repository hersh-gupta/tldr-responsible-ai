---
title: Safety Alignment Should Be Made More Than Just a Few Tokens Deep
authors: 
- Xiangyu Qi
- Ashwinee Panda
- Kaifeng Lyu
- Xiao Ma
- Subhrajit Roy
- Ahmad Beirami
- Prateek Mittal
- Peter Henderson
year: "2025"
link: https://openreview.net/forum?id=6Mxhg9PtDE
tags:
  - RAI
  - paper
  - alignment
  - safety
  - LLM
  - jailbreak
---
# Summary
This paper introduces and examines the concept of "shallow safety alignment" in Large Language Models (LLMs). The authors demonstrate that current safety alignment techniques primarily modify the model's generative distribution over just the first few output tokens, creating a vulnerability that can be exploited through various jailbreak techniques. They provide evidence for this phenomenon and propose two methods to mitigate it: (1) a data augmentation approach that "deepens" safety alignment beyond initial tokens, and (2) a constrained optimization loss function that protects initial token distributions during fine-tuning.

# Key Contributions
- Identification and formalization of "shallow safety alignment" as a unifying explanation for multiple LLM safety vulnerabilities
- Demonstration that safety alignment primarily affects only the first few tokens in model outputs
- Evidence that this shallow alignment creates vulnerabilities exploitable by multiple attack methods
- Introduction of a data augmentation method to deepen safety alignment
- Development of a token-wise constrained fine-tuning objective to protect safety alignment
- Empirical validation showing improved robustness against attacks with these methods

# Method
The authors conducted several analyses and experiments:

1. **Characterizing shallow safety alignment**:
   - Showed that prefilling refusal prefixes makes even unaligned models appear safe
   - Measured KL divergence between aligned and unaligned models per token position
   
2. **Data augmentation for deeper alignment**:
   - Created "safety recovery examples" where harmful prefixes transition back to safe responses
   - Fine-tuned models on these augmented examples to extend safety effects to deeper tokens

3. **Constrained optimization for fine-tuning**:
   - Developed a loss function that protects initial token distributions during fine-tuning
   - Applied stronger constraints on earlier tokens and weaker ones on later tokens

# Results
- Aligned models (Llama-2-7B-Chat, Gemma-7B-IT) have KL divergence from base models concentrated in first few tokens
- Models fine-tuned with data augmentation show improved robustness against:
  - Prefilling attacks (reduced ASR from 57.0% to 4.5% for 40-token prefills)
  - GCG adversarial suffix attacks (reduced ASR from 65.6% to 19.0%)
  - Decoding parameter exploits (reduced ASR from 84.3% to 1.0%)
  
- Token-wise constrained fine-tuning objective:
  - Successfully preserved safety during harmful fine-tuning (reduced ASR from 88.9% to 4.6%)
  - Maintained model utility on downstream tasks (comparable performance to standard fine-tuning)

# Takeaways
## Strengths
- Provides a unifying explanation for multiple jailbreak vulnerabilities
- Offers concrete methods to improve safety alignment robustness
- Solutions maintain model utility while improving safety
- Both technical contributions (data augmentation and constrained fine-tuning) can be implemented with minimal changes to existing alignment pipelines

## Limitations
- The data augmentation approach is implemented by fine-tuning already-aligned models rather than from scratch
- The experiments focus on specific LLM architectures (Llama-2, Gemma) and may not generalize to all models
- The proposed methods may not protect against all types of jailbreak attacks
- Per the authors, the methods may be subject to future adaptive attacks

# Notable References
- Zou et al. (2023b) - Universal and transferable adversarial attacks on aligned language models
- Huang et al. (2023) - Catastrophic jailbreak of open-source LLMs via exploiting generation
- Qi et al. (2023c) - Fine-tuning aligned language models compromises safety, even when users do not intend to
- Andriushchenko et al. (2024) - Jailbreaking leading safety-aligned LLMs with simple adaptive attacks
