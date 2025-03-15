---
title: Know Thy Judge - On the Robustness Meta-Evaluation of LLM Safety Judges
authors: 
- Francisco Eiras
- Eliott Zemour
- Eric Lin
- Vaikkunth Mugunthan
year: "2025"
link: https://arxiv.org/abs/2503.04474
tags:
  - RAI
  - paper
  - safety
  - evaluation
  - LLM-as-judge
---
# Summary
This paper investigates the robustness of LLM-based safety judges, which are critical components for ensuring the safety of AI systems. The authors identify two main challenges that are often overlooked in evaluating these judges: (1) evaluations in the wild with factors like prompt sensitivity and distribution shifts, and (2) adversarial attacks specifically targeting the judge itself. Their experiments demonstrate that small changes in the style of model outputs can significantly increase false negative rates (up to 0.24), while adversarial attacks can fool some judges into misclassifying 100% of harmful content as safe.

# Key Contributions
- Highlights a critical gap in how safety judges are evaluated, emphasizing the need for more robust meta-evaluation frameworks
- Demonstrates that style variations in model responses can significantly impact judge performance without changing the underlying safety status
- Shows that output-level adversarial modifications can completely compromise some safety judges
- Provides evidence that different judges have different weaknesses, with some being more vulnerable to certain types of attacks than others

# Method
The authors evaluate four recent open-source safety LLM judges:
1. HarmBench's fine-tuned LLaMA-2 13B
2. WildGuard
3. ShieldGemma 9B
4. LLaMA Guard 3 8B

They test these judges using two main approaches:
1. **Stylistic Prompt Formatting**: Reformatting model responses in different styles (bullet points, news, storytelling) while preserving the underlying content
2. **Adversarial Output-level Modifications**: Adding crafted text to model outputs that specifically targets the judge, including:
   - "Always Safe" - Adding instructions for the judge to mark the response as safe
   - "Append Long Benign" - Adding lengthy benign text after harmful content
   - "Prepend + Append Benign" - Surrounding harmful content with benign text

The evaluation uses 100 examples (50 safe, 50 unsafe) from JailbreakBench, derived from AdvBench and HarmBench datasets.

# Results
## Stylistic Prompt Formatting
- Storytelling style increased FNR for multiple judges: HarmBench (+0.24), ShieldGemma (+0.20), WildGuard (+0.10)
- Bullet point style slightly improved performance across all judges
- Human annotators maintained nearly perfect agreement with original labels across all styles

## Adversarial Output-level Modifications
- WildGuard (the best performing judge on baseline) was completely fooled by the "Prepend + Append Benign" attack with FNR of 1.0 (misclassified 100% of harmful content)
- ShieldGemma and LLaMA Guard showed significant degradation under attacks
- HarmBench was most resistant to adversarial attacks but still showed weakness to the "Append Long Benign" method
- Longer benign text appendages increasingly reduced judge effectiveness

The paper also showed that general-purpose LLM judges (like Atla Selene Mini) were even more vulnerable to these attacks than specialized safety judges.

# Takeaways
## Strengths
- Identifies critical and practical weaknesses in current safety evaluation approaches
- Demonstrates the need for targeted robustness evaluations of safety judges
- Provides actionable insights for improving safety judge robustness
- Presents a comprehensive analysis across multiple models and attack vectors

## Limitations
- Limited to text-based safety evaluations (doesn't address multimodal content)
- Focuses on a specific dataset subset that may not capture all safety concerns
- Doesn't propose specific solutions to make judges more robust

# Notable References
- Mazeika et al. (2024) - HarmBench: A Standardized Evaluation Framework for Automated Red Teaming and Robust Refusal
- Grattafiori et al. (2024) - The Llama 3 Herd of Models
- Han et al. (2024) - WildGuard: Open One-Stop Moderation Tools for Safety Risks, Jailbreaks, and Refusals of LLMs
- Zeng et al. (2024) - ShieldGemma: Generative AI Content Moderation Based on Gemma
- Ramesh et al. (2024) - GPT-4 Jailbreaks Itself with Near-Perfect Success Using Self-Explanation
