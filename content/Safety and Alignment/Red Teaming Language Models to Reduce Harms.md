---
title: Red Teaming Language Models to Reduce Harms - Methods, Scaling Behaviors, and Lessons Learned
authors: 
- Deep Ganguli
- Liane Lovitt
- Jackson Kernion
- Amanda Askell
- Yuntao Bai
- Saurav Kadavath
- Ben Mann
- Ethan Perez
- Nicholas Schiefer
- And many others from Anthropic
year: "2022"
link: https://arxiv.org/abs/2209.07858
tags:
  - RAI
  - paper
  - red-teaming
  - language-models
  - safety
  - alignment
---
# Summary

This paper from Anthropic describes their efforts to perform manual red teaming of language models to discover, measure, and reduce potentially harmful model outputs. The authors investigate scaling behaviors for red teaming across different model sizes (2.7B, 13B, and 52B parameters) and different model types (plain LM, prompted LM, LM with rejection sampling, and RLHF models). They also release a dataset of ~39K red team attacks and provide detailed methodologies and lessons learned from their red teaming process.

# Key Contributions
- Investigation of scaling behaviors for red teaming across different model sizes and model types
- Release of a large dataset of red team attacks (38,961 instances)
- Detailed descriptions of their red teaming instructions, processes, and statistical methodologies
- Analysis of harmful outputs and categorization of attack types
- Insights into protecting the well-being of human red team members

# Method
The researchers developed an interface instructing red team members (crowdworkers) to have open-ended conversations with an AI assistant to elicit harmful outputs. After each turn, red team members were presented with two possible model responses and asked to select the more harmful one. This procedure generated a dataset of response pairs with relative harmfulness labels.

Four model types were tested:
1. Plain LM - A baseline language model with minimal prompting
2. Prompted LM - An LM prompted to be helpful, honest, and harmless (HHH)
3. Rejection Sampling - Generating multiple samples and selecting the least harmful ones
4. RLHF - A model trained with reinforcement learning from human feedback

For each model type, they evaluated 3 sizes: 2.7B, 13B, and 52B parameters. Successful attacks were measured by both human ratings and automated harmlessness scores.

# Results
- RLHF models become significantly harder to red team as they scale up in size
- Plain LMs, prompted LMs, and rejection sampling models show flat trends with scale
- Prompted LMs were not significantly harder to red team than plain LMs, contradicting their previous findings that prompting helps with safety
- Rejection sampling models were the most difficult to red team at any scale, although they tended to be harmless by being evasive
- Analysis of red team attack types revealed clusters including offensive language, racist content, violence guidance, and personal information extraction

# Takeaways
## Strengths
- Comprehensive examination of how different safety techniques scale with model size
- Large and diverse dataset of red team attacks that can help develop better safety measures
- Detailed methodology that can be reproduced and improved by others
- Consideration of red team member well-being with thoughtful protocols
- Transparent discussion of the challenges and limitations of red teaming

## Limitations
- Reliance on crowdworkers who may not have domain expertise for specialized attacks
- Incomplete coverage of the possible attack space (e.g., no code-based attacks were observed)
- Subjective nature of harmfulness ratings with low inter-annotator agreement
- Some crowdworkers used template-based attacks that may be lower quality
- Data may not generalize to other types of applications beyond conversational AI

# Notable References
- Bot Adversarial Dialogues (BAD) dataset
- "Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback" (Bai et al., 2022)
- "A General Language Assistant as a Laboratory for Alignment" (Askell et al., 2021)
