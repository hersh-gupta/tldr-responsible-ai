---
title: "WildGuard: Open One-stop Moderation Tools for Safety Risks, Jailbreaks, and Refusals of LLMs"
authors: 
- Seungju Han
- Kavel Rao
- Allyson Ettinger
- Liwei Jiang
- Bill Yuchen Lin
- Nathan Lambert
- Yejin Choi
- Nouha Dziri
year: "2024"
link: https://arxiv.org/abs/2406.18495
tags:
  - RAI
  - paper
  - LLM-safety
  - moderation
  - jailbreak
---
# Summary

WildGuard is an open-source, lightweight moderation tool for LLM safety that addresses three critical tasks simultaneously: 
1. Identifying malicious intent in user prompts
2. Detecting safety risks in model responses
3. Determining model refusal rates

The authors create WildGuardMix, a large-scale dataset with 92K labeled examples covering both direct prompts and adversarial jailbreaks, paired with various refusal and compliance responses. WildGuard outperforms existing open-source safety moderation tools across all three tasks and sometimes exceeds GPT-4 performance. When deployed in an LLM interface, it reduces the success rate of jailbreak attacks from 79.8% to 2.4%.  
# Key Contributions
- Creation of WildGuard, a unified multi-task moderation tool for LLM safety
- Development of WildGuardMix dataset (92K examples), which includes WildGuardTrain (87K examples) and WildGuardTest (5K human-annotated examples)
- Comprehensive evaluation across 10 existing benchmarks plus their own test sets
- State-of-the-art performance in open-source safety moderation across all three tasks
- Demonstrated effectiveness at reducing successful jailbreak attacks in real systems

# Method

The researchers developed WildGuard using three main components:

1. **WildGuardTrain Dataset Creation:**
   - Four data sources: synthetic adversarial prompts, synthetic vanilla prompts, in-the-wild real user queries, and annotator-written data
   - Covers 13 risk categories across privacy, misinformation, harmful language, and malicious uses
   - Includes both harmful and benign prompts, with matched refusal and compliance responses
   - Uses a pipeline that incorporates fine-grained risk taxonomy and carefully balanced subsets

2. **WildGuardTest Creation:**
   - Human-annotated evaluation data with 5,299 items for the three tasks
   - Used multiple annotators and majority voting to establish gold labels
   - Includes quality control through inter-annotator agreement metrics

3. **Model Training:**
   - Based on Mistral-7b-v0.3 as the foundation model
   - Unified input/output format for all three classification tasks
   - Two-epoch training using a batch size of 128 and learning rate of 2e-6

# Results

WildGuard achieves impressive performance across all three moderation tasks:

- **Prompt Harmfulness Detection:**
  - Outperforms GPT-4 by 1.8% on public benchmarks (86.1% vs 84.6% F1)
  - Especially effective on adversarial prompts (85.5% vs 81.6% F1 compared to GPT-4)

- **Response Harmfulness Detection:**
  - Outperforms the strongest open models by at least 1.8% on public benchmarks
  - Comparable to MD-Judge on WildGuardTest (75.4% vs 76.8% F1)

- **Refusal Detection:**
  - Dramatically improves over LibrAI-LongFormer-ref by 26.4% (88.6% vs 70.1% F1)
  - Performs within 4.1% of GPT-4's performance (88.6% vs 92.4% F1)

- **LLM Moderation Interface:**
  - When used as a filter, reduced jailbreak attack success rate from 79.8% to 2.4%
  - Achieved this with minimal increase in refusals to benign prompts

# Takeaways
## Strengths
- Unified approach tackles three critical safety tasks simultaneously
- Fully open-source for both model and dataset, enabling further research
- Highly effective against adversarial jailbreaks, which are a significant weakness of prior systems
- Robust performance across diverse evaluation sets
- Practical utility demonstrated in real-world LLM interface testing

## Limitations
- Synthetic data may not perfectly approximate all natural human inputs
- Limited in-the-wild data (only 2% of the dataset)
- Makes specific commitments about harm taxonomies and refusal definitions that might not align with all use cases
- No fine-grained classification of harm categories (only binary harmful/not harmful)

# Notable References
- Llama-Guard2 [16]: Prior SOTA open-source moderation tool
- WILDJAILBREAK [20]: Dataset for testing adversarial jailbreak attempts
- XSTest [30]: Test suite for identifying exaggerated safety behaviors
- Weidinger et al. [39]: Framework for harm taxonomies in language models
