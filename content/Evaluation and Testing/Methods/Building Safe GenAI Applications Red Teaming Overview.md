---
title: Building Safe GenAI Applications - An End-to-End Overview of Red Teaming for Large Language Models
authors: 
- Alberto Purpura
- Sahil Wadhwa
- Jesse Zymet
- Akshay Gupta
- Andy Luo
- Melissa Kazemi Rad
- Swapnil Shinde
- Mohammad Shahed Sorower
year: "2025"
link: https://arxiv.org/abs/2503.01742
tags:
  - RAI
  - paper
  - red-teaming
  - LLM
  - safety
  - evaluation
---
# Summary

This paper provides a concise and practical overview of red teaming techniques for Large Language Models (LLMs), structured to describe a multi-component system end-to-end. The authors highlight the importance of proactively attacking LLMs to identify vulnerabilities before deployment, complementing defensive safety approaches. The paper covers various attack methods, evaluation strategies, and metrics for assessing experimental outcomes, along with available software packages and resources. The authors present a comprehensive framework that helps organizations anticipate and safeguard against potential threats to their LLM-supported systems.  
# Key Contributions
- Provides a structured and practical overview of LLM red teaming components
- Categorizes and explains various attack methods and strategies
- Reviews approaches to attack success evaluation and metrics for safety assessment
- Surveys public resources (frameworks, datasets) for red teaming implementation
- Discusses mitigation strategies commonly deployed after red teaming
- Outlines future research directions for advancing the field

# Method

The paper introduces an end-to-end framework for red teaming LLMs with the following core components:

1. **Attack Methods**:
   - Prompt-based attacks (injections, jailbreaking, refusal suppression)
   - Token-based attacks (character replacements, encoding changes, translations)
   - Gradient-based attacks (optimization techniques requiring model access)
   - Infrastructure attacks (data poisoning, extraction attacks)

2. **Turn Count**:
   - Single-turn attacks (simple interactions without leveraging conversation history)
   - Iterative attacks (refining a seed prompt over multiple attempts)
   - Multi-turn attacks (complex conversational sequences exploiting context)

3. **Manual vs. Automated Approaches**:
   - Human expert-led attacks
   - Automated attacks using LLMs as attackers
   - Human-in-the-loop hybrid approaches

4. **Evaluation Strategies**:
   - Keyword-based evaluation (matching against harmful content lists)
   - Encoder-based classifiers (BERT-based harmful content detection)
   - LLM-as-judge approaches (using separate LLMs to evaluate attack success)
   - Human reviewer evaluation

5. **Metrics**:
   - Attack Success Rate (ASR)
   - Attack Effectiveness Rate (AER)
   - Toxicity/Harmfulness
   - Compliance/Obedience
   - Relevance and Fluency

# Results

The paper doesn't present new experimental results but synthesizes findings from the literature to provide a comprehensive overview of the state of red teaming for LLMs. Key observations include:

- Human experts remain highly effective at devising creative attacks but are expensive and limited in scale
- Automated approaches are becoming increasingly sophisticated, particularly with LLM-driven attack generators
- Multi-turn attacks present special challenges for automated detection
- There is a growing ecosystem of tools, frameworks, and datasets supporting red teaming efforts
- Current research trends point toward continuous monitoring and adaptive security approaches

# Takeaways
## Strengths
- Provides a balanced presentation of both comprehensive coverage and concise exposition
- Offers practical insights for organizations looking to implement red teaming
- Clearly categorizes and explains the relationships between different attack methodologies
- Identifies available resources and tools that practitioners can leverage
- Connects red teaming to larger safety considerations and subsequent guardrailing

## Limitations
- The paper acknowledges potential space limitations causing some relevant works to be omitted
- Red teaming alone cannot guarantee model safety after deployment
- The rapidly evolving nature of the field means some newer techniques may emerge quickly
- Regulation and technology use continue to evolve, potentially introducing unanticipated risks

# Notable References
- Chao et al. (2024) - JailbreakBench: An open robustness benchmark for jailbreaking LLMs
- Zeng et al. (2024) - How Johnny can persuade LLMs to jailbreak them
- Li et al. (2024) - LLM defenses are not robust to multi-turn human jailbreaks yet
- Russinovich et al. (2024) - The crescendo multi-turn LLM jailbreak attack
- Liu et al. (2024) - AutoDAN: Generating stealthy jailbreak prompts on aligned LLMs
- Jiang et al. (2024) - Automated progressive red teaming
- Derczynski et al. (2024) - Garak: A framework for security probing large language models
