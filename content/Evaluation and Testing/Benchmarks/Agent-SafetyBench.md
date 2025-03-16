---
title: Agent-SafetyBench - Evaluating the Safety of LLM Agents
authors:
  - Zhexin Zhang
  - Shiyao Cui
  - Yida Lu
  - Jingzhuo Zhou
  - Junxiao Yang
  - Hongning Wang
  - Minlie Huang
year: "2024"
link: https://arxiv.org/abs/2412.14470
tags:
  - RAI
  - paper
  - agent-safety
  - benchmark
  - LLM
---
# Summary
AGENT-SAFETYBENCH is a comprehensive benchmark designed to evaluate the safety of LLM agents in interactive environments. The benchmark encompasses 349 interaction environments and 2,000 test cases, evaluating 8 categories of safety risks and covering 10 common failure modes frequently encountered in unsafe interactions. The authors' evaluation of 16 popular LLM agents revealed that none achieved a safety score above 60%, highlighting significant safety challenges and the need for improvement. Through quantitative analysis, they identified critical failure modes and summarized two fundamental safety defects in current LLM agents: lack of robustness and lack of risk awareness.  

# Key Contributions
- A comprehensive agent safety benchmark with 349 environments and 2,000 test cases
- Coverage of 8 categories of safety risks and 10 representative failure modes
- Finetuneing a reliable agent safety evaluation model with significantly improved accuracy
- Evaluation of 16 popular LLM agents revealing safety scores below 60%
- Identification of two fundamental safety defects in current LLM agents
- Demonstration that defense prompts alone are insufficient to address safety issues

# Method
The authors constructed AGENT-SAFETYBENCH by:
1. Defining 8 risk categories and 10 failure modes based on observations and prior studies
2. Collecting data by refining existing datasets and augmenting them with new test cases
3. Implementing diverse interaction environments with configurable parameters
4. Creating an automated scorer by finetuning Qwen-2.5-7B-Instruct on 4,000 labeled samples
5. Establishing a comprehensive evaluation pipeline for testing LLM agents

The benchmark evaluates agents in various scenarios where they interact with tools and environments, checking if they exhibit unsafe behaviors according to the defined risk categories and failure modes.

# Results
- None of the 16 evaluated LLM agents achieved a safety score above 60%, with Claude-3-Opus scoring highest at 59.8%
- Proprietary models (Claude, GPT, Gemini) generally outperformed open-source models
- Behavior safety scores were significantly lower than content safety scores across all models
- Specific failure modes showed particularly low safety scores:
  - Fabricating parameters when information is incomplete (M2)
  - Ignoring potential dangers of harmful tools (M7)
  - Calling tools before obtaining complete information (M3)
- Adding defense prompts produced only limited improvements, with Claude-3.5-Sonnet still below 70% even with enhanced defense

# Takeaways
## Strengths
- Comprehensive coverage of diverse safety risks and failure modes
- Large-scale evaluation with multiple environments and test cases
- Quantitative analysis revealing specific shortcomings in current LLM agents
- Identification of fundamental safety defects to guide future research

## Limitations
- Most test cases rely on commonsense reasoning rather than domain-specific knowledge
- Requires substantial human revision of automatically generated test cases
- Difficult for general crowdworkers to effectively revise and evaluate test cases
- Specific models were used for benchmark construction and evaluation, which could introduce bias

# Notable References
- Yuan et al. (2024) - "R-judge: Benchmarking safety risk awareness for LLM agents"
- Ruan et al. (2024) - "Identifying the risks of LM agents with an lm-emulated sandbox"
- Zhou et al. (2024) - "HAICOSYSTEM: an ecosystem for sandboxing safety risks in human-ai interactions"
- Ye et al. (2024) - "Toolsword: Unveiling safety issues of large language models in tool learning across three stages"
