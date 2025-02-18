---
title: "STAR: SocioTechnical Approach to Red Teaming Language Models"
authors:
  - Laura Weidinger
  - John Mellor
  - Bernat Guillén Pegueroles
  - Nahema Marchal
  - Ravin Kumar
  - Kristian Lum
  - Canfer Akbulut
  - Mark Diaz
  - Stevie Bergman
  - Mikel Rodriguez
  - Verena Rieser
  - William Isaac
year: "2024"
link: https://arxiv.org/abs/2406.11757
tags:
  - paper-notes
  - red-teaming
  - safety
  - methodology
---
## Summary
This paper introduces STAR (SocioTechnical Approach to Red teaming), a framework that improves red teaming of large language models through two key innovations:

1. Enhanced steerability via parameterized instructions for red teamers
2. Improved signal quality through demographic matching and arbitration

## Key Contributions

### Steerability Improvements
- Uses procedurally generated instructions with multiple parameters
- Parameters include: rule to test, adversariality level, use case, topic, and demographic targets
- Enables more systematic coverage of the risk surface
- Allows for targeted exploration of specific failure modes

### Signal Quality Enhancements
- Matches annotator demographics to assessed harms for specific groups
- Employs expert annotators (fact-checkers, medical professionals) for relevant domains
- Introduces arbitration step to leverage diverse viewpoints
- Treats annotator disagreement as valuable signal rather than noise

## Methodology
- Collected 8,360 dialogues from 225 red teamers
- Annotated by 286 annotators/arbitrators
- Used demographic matching: 50% in-group vs 50% out-group attackers
- Two-stage annotation pipeline with arbitration for disagreements
- Analyzed results using UMAP embeddings and cluster analysis

## Key Findings
- Achieved more even coverage of attack surface compared to previous approaches
- In-group annotators more likely to identify hate speech violations (45% vs 30%)
- Arbitration process provided valuable insights into annotation disagreements
- Revealed complex interactions in model failures across intersectional identities

## Limitations
- Limited to 5 parameters due to cognitive load on human raters
- Only tested in English language
- Demographic intersections limited to two-way combinations
- May not fully reflect real-world usage patterns

## Impact & Applications
- Provides reproducible framework for red teaming evaluations
- Can be adapted for different contexts, languages, and failure modes
- Useful for both human-led and hybrid automated/human red teaming
- Demonstrates importance of sociotechnical perspective in AI evaluation