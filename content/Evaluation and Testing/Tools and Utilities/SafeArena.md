---
title: "SafeArena: Evaluating the Safety of Autonomous Web Agents"
authors:
  - Ada Defne Tur
  - Nicholas Meade
  - Xing Han Lu
  - Alejandra Zambrano
  - Arkil Patel
  - Esin Durmus
  - Spandana Gella
  - Karolina Stanczak
  - Siva Reddy
year: "2025"
link: https://arxiv.org/abs/2503.04957
tags:
  - RAI
  - paper
  - agent-safety
  - web-agents
  - evaluation
  - benchmark
---
# Summary
SAFEARENA is the first benchmark designed specifically to evaluate the safety of autonomous web agents. The benchmark consists of 250 harmful and 250 safe tasks across four web environments, designed to test whether web agents can be manipulated to perform harmful actions. The authors classify harmful tasks into five categories: misinformation, illegal activity, harassment, cybercrime, and social bias. The study evaluates several strong LLM-based web agents using their proposed Agent Risk Assessment (ARIA) framework, which categorizes agent behavior across four risk levels.

# Key Contributions
1. Creation of SAFEARENA, a benchmark of 500 tasks specifically designed to test web agent safety
2. Development of the Agent Risk Assessment (ARIA) framework for evaluating harmful web agent behavior
3. Comprehensive evaluation of five LLM-based web agents on harmful web tasks
4. Demonstration that task decomposition attacks can jailbreak even the safest agents
5. Evidence that safety alignment in base LLMs transfers poorly to web interaction tasks

# Method
The authors designed SAFEARENA with:
- 250 harmful tasks across 5 harm categories (misinformation, illegal activity, harassment, cybercrime, social bias)
- 250 paired safe tasks of similar complexity
- Tasks implemented across 4 web environments (Reddit-style forum, e-commerce store, GitLab-style code management, retail management system)

They evaluated 5 LLM-based web agents:
- Claude-3.5-Sonnet
- GPT-4o
- GPT-4o-Mini
- Llama-3.2-90B
- Qwen-2-VL-72B

The ARIA framework classifies agent behavior as:
1. Immediate refusal (ARIA-1)
2. Delayed refusal (ARIA-2)
3. Attempted but failed task execution (ARIA-3)
4. Successful completion (ARIA-4)

The authors also implemented a task decomposition attack, where harmful requests were broken into innocuous-looking substeps.

# Results
- Current LLM-based web agents are alarmingly willing to perform harmful tasks
- GPT-4o completed 34.7% of harmful tasks
- Qwen-2-VL-72B completed 27.3% of harmful tasks
- Claude-3.5-Sonnet was the safest, refusing the highest percentage (64%)
- Task decomposition attacks successfully jailbroke all 49 tasks initially refused by Claude-3.5-Sonnet

The authors also found that:
- Safety alignment transfers poorly from base LLMs to web tasks
- Agents are not consistent in their ability to refuse harmful tasks
- Tasks with explicit harmful language were often executed without refusal
- The normalized safety score (which accounts for agent capability) showed Claude-3.5-Sonnet was most effective at refusing harmful tasks while capable of completing safe ones

# Takeaways
## Strengths
- First benchmark specifically for web agent safety evaluation
- Comprehensive coverage of multiple harm categories
- Paired safe/harmful tasks allow for proper evaluation of agent capabilities
- Introduction of a standardized evaluation framework for agent risk assessment
- Examination of practical attack vectors (task decomposition) that could be used in real-world scenarios

## Limitations
- Tasks designed with explicit harmful intent, lacking more ambiguous scenarios
- Heavy reliance on automatic evaluation metrics
- Harmful intents can potentially be detected externally by pre-screening systems
- Focus on rudimentary web agent capabilities rather than more complex real-world scenarios

# Notable References
- Anthropic, 2024 (Introducing computer use)
- OpenAI, 2025 (Computer-Using Agent)
- Zhou et al., 2024 (WebArena: A realistic web environment)
- Andriushchenko et al., 2024 (AgentHarm benchmark)
- Debenedetti et al., 2024 (AgentDojo)
