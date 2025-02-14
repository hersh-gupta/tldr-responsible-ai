# LLM Comparator: Visual Analytics Tool for Side-by-Side LLM Evaluation

https://arxiv.org/abs/2402.10524
https://ai.google.dev/responsible/docs/evaluation/llm_comparator

## Overview
LLM Comparator is a visual analytics tool developed by Google Research for conducting and analyzing automatic side-by-side evaluations of large language models (LLMs). The tool helps researchers and engineers understand when and why a model performs better or worse than a baseline model, and how their responses differ qualitatively.

## Key Features

### 1. Interactive Table
- Displays individual prompts, responses from both models, rater scores, and rationale summaries
- Highlights overlapping words between responses for easy comparison
- Provides summarized rationales using LLM-generated bullet points
- Shows detailed rating results on demand
- Uses color coding to distinguish between models and rating decisions

### 2. Visualization Summary Components

#### Score Distribution
- Visualizes the distribution of scores from automatic raters
- Helps understand the overall performance metrics in detail

#### Win Rates by Prompt Category
- Shows performance across different prompt categories
- Enables identification of areas where models excel or underperform
- Facilitates targeted analysis of specific prompt types

#### Rationale Clusters
- Uses LLM-based approach to generate representative themes from rater rationales
- Allows comparison of rationale frequencies between models
- Supports dynamic addition and regeneration of clusters
- Enables filtered analysis by prompt categories

#### N-grams and Custom Functions
- Analyzes frequently occurring phrases in model responses
- Supports custom functions for pattern detection
- Enables quantitative comparison of response characteristics

## Implementation
- Web-based application using TypeScript and Lit webcomponents
- Preprocesses evaluation data using LLMs for rationale summarization and clustering
- Supports dynamic filtering, sorting, and cluster assignments
- Successfully deployed at Google with over 400 users analyzing 1,000+ experiments

## User Study Findings

### Key Usage Patterns
1. Example-first deep dive
   - Users carefully examine individual examples
   - Form hypotheses about behavioral differences
   - Use filters to find similar patterns

2. Prior experience-based testing
   - Users search for known undesirable patterns
   - Compare pattern occurrences across models
   - Leverage rationale summaries for verification

3. Rationale-centric exploration
   - Enables new ways to analyze evaluation data
   - Supports discovery of interesting patterns
   - Facilitates hypothesis formation and testing

## Future Opportunities
- LLM-based custom metrics for high-level attributes
- Pre-configured detection of undesirable patterns
- Improved rationale clustering methods
- Enhanced support for large-scale evaluations

## References
Kahng, M., Tenney, I., Pushkarna, M., Liu, M. X., Wexler, J., Reif, E., ... & Dixon, L. (2024). LLM Comparator: Visual Analytics for Side-by-Side Evaluation of Large Language Models. arXiv:2402.10524.

#llm-evaluation #visualization #tool #side-by-side-evaluation #responsible-ai