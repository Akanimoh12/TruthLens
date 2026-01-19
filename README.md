# TruthLens 🔍

## Decentralized Fact-Checking & Misinformation Detection Subnet

> **A Bittensor Subnet for Real-Time, Decentralized Verification of Claims and Information**

[![Bittensor](https://img.shields.io/badge/Bittensor-Subnet-blue)](https://bittensor.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Proposal-yellow)]()

---

## 📋 Table of Contents

- [Executive Summary](#executive-summary)
- [Problem Statement](#problem-statement)
- [Solution Overview](#solution-overview)
- [Technical Architecture](#technical-architecture)
- [Incentive & Mechanism Design](#incentive--mechanism-design)
- [Miner Design](#miner-design)
- [Validator Design](#validator-design)
- [Business Logic & Market Rationale](#business-logic--market-rationale)
- [Go-To-Market Strategy](#go-to-market-strategy)
- [Roadmap](#roadmap)
- [Team](#team)
- [References](#references)

---

## Executive Summary

**TruthLens** is a decentralized fact-checking subnet built on Bittensor that leverages distributed intelligence to verify claims, detect misinformation, and provide transparent, bias-resistant fact-checking at scale.

### Key Value Propositions

| Feature | Benefit |
|---------|---------|
| **Decentralized Verification** | Eliminates single-point bias and censorship concerns |
| **Real-Time Processing** | Sub-minute fact-checking for breaking news and viral content |
| **Transparent Reasoning** | Every verdict includes traceable evidence and sources |
| **Economic Incentives** | TAO rewards ensure high-quality, accurate verification |
| **Scalable Architecture** | Handles millions of claims through distributed miners |

---

## Problem Statement

### The Misinformation Crisis

Misinformation has become one of the defining challenges of the digital age:

- **Scale**: 4.5 billion social media users generate content faster than any centralized system can verify
- **Speed**: False information spreads 6x faster than accurate information on social platforms
- **Trust Deficit**: 67% of people distrust traditional fact-checkers due to perceived political bias
- **Economic Impact**: Misinformation costs the global economy an estimated $78 billion annually
- **Health Risks**: Medical misinformation contributed to vaccine hesitancy affecting millions

### Limitations of Current Solutions

| Current Approach | Limitations |
|------------------|-------------|
| **Centralized Fact-Checkers** | Bias concerns, slow turnaround, limited scale, single point of failure |
| **Platform Moderation** | Opaque decision-making, inconsistent enforcement, censorship concerns |
| **AI-Only Solutions** | Hallucination risks, lack of real-time data, no accountability |
| **Crowdsourced (e.g., Community Notes)** | Gaming vulnerabilities, no economic incentives for quality |

### Why Existing Solutions Fail

```
┌─────────────────────────────────────────────────────────────────┐
│                    CURRENT FACT-CHECKING LANDSCAPE              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Centralized           Speed vs          Trust                 │
│   Bottleneck    →      Accuracy    →     Deficit               │
│       ↓                    ↓                 ↓                  │
│   Limited Scale      Compromised        User Rejection          │
│                        Quality                                  │
│                                                                 │
│   Result: Misinformation wins by default                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Solution Overview

### TruthLens: Decentralized Intelligence for Truth

TruthLens creates a marketplace where distributed AI agents (miners) compete to provide the most accurate, well-sourced fact-checks, evaluated by validators using objective quality metrics.

```
┌─────────────────────────────────────────────────────────────────┐
│                      TRUTHLENS ARCHITECTURE                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│    ┌──────────┐     ┌──────────────┐     ┌──────────────┐      │
│    │  CLAIMS  │────▶│   MINERS     │────▶│  VALIDATORS  │      │
│    │  INPUT   │     │  (Research & │     │  (Scoring &  │      │
│    └──────────┘     │   Verify)    │     │  Consensus)  │      │
│                     └──────────────┘     └──────────────┘      │
│                            │                    │               │
│                            ▼                    ▼               │
│                     ┌──────────────────────────────┐           │
│                     │     BITTENSOR BLOCKCHAIN     │           │
│                     │   (Weights & TAO Emissions)  │           │
│                     └──────────────────────────────┘           │
│                                   │                             │
│                                   ▼                             │
│                          ┌──────────────┐                      │
│                          │  TRUTHLENS   │                      │
│                          │     API      │                      │
│                          └──────────────┘                      │
│                                   │                             │
│         ┌─────────────────────────┼─────────────────────────┐  │
│         ▼                         ▼                         ▼  │
│   ┌──────────┐            ┌──────────────┐          ┌────────┐ │
│   │  Media   │            │   Social     │          │  APIs  │ │
│   │ Outlets  │            │  Platforms   │          │        │ │
│   └──────────┘            └──────────────┘          └────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Innovation: Proof of Verification (PoV)

TruthLens introduces **Proof of Verification** - a novel consensus mechanism where miners must demonstrate genuine research effort and reasoning quality, not just produce outputs.

**PoV Components:**
1. **Evidence Trail**: All claims must include verifiable source citations
2. **Reasoning Chain**: Step-by-step logical analysis must be provided
3. **Confidence Calibration**: Miners must accurately estimate their certainty
4. **Cross-Verification**: Multiple independent miners verify the same claim

---

## Technical Architecture

### System Components

```
┌────────────────────────────────────────────────────────────────────┐
│                        TRUTHLENS SUBNET                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌─────────────────┐    ┌─────────────────┐    ┌────────────────┐ │
│  │  CLAIM INTAKE   │    │  MINER NETWORK  │    │   VALIDATOR    │ │
│  │    SERVICE      │    │                 │    │    NETWORK     │ │
│  ├─────────────────┤    ├─────────────────┤    ├────────────────┤ │
│  │ • API Gateway   │    │ • Research      │    │ • Scoring      │ │
│  │ • Claim Parser  │───▶│   Agents        │───▶│   Engine       │ │
│  │ • Deduplication │    │ • Source        │    │ • Consensus    │ │
│  │ • Priority Queue│    │   Retrieval     │    │   Module       │ │
│  │ • Rate Limiting │    │ • Reasoning     │    │ • Weight       │ │
│  └─────────────────┘    │   Engine        │    │   Submission   │ │
│                         │ • Report Gen    │    └────────────────┘ │
│                         └─────────────────┘                       │
│                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                    SHARED INFRASTRUCTURE                     │  │
│  ├─────────────────────────────────────────────────────────────┤  │
│  │  • Source Credibility Database    • Claim History Index     │  │
│  │  • Known Facts Repository         • Miner Performance Cache │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Data Flow

```
Step 1: CLAIM SUBMISSION
────────────────────────
User/Platform ──▶ API Gateway ──▶ Claim Parser ──▶ Task Queue

Step 2: TASK DISTRIBUTION  
────────────────────────
Task Queue ──▶ Validator ──▶ Broadcasts to Miners

Step 3: MINER PROCESSING
────────────────────────
Miner receives claim ──▶ Research & Analysis ──▶ Generate Report

Step 4: RESPONSE COLLECTION
────────────────────────
Miners submit reports ──▶ Validator collects responses

Step 5: VALIDATION & SCORING
────────────────────────
Validator scores reports ──▶ Consensus calculation ──▶ Weight submission

Step 6: RESULT DELIVERY
────────────────────────
Final verdict ──▶ API Response ──▶ User/Platform
```

### Claim Categories

TruthLens handles multiple claim types with specialized processing:

| Category | Examples | Processing Approach |
|----------|----------|---------------------|
| **Factual** | "The Eiffel Tower is 300m tall" | Database lookup + source verification |
| **Statistical** | "Crime rates increased 50%" | Data source verification + context analysis |
| **Quote Attribution** | "Einstein said X" | Primary source research + quote databases |
| **Scientific** | "Vaccine causes Y" | Peer-reviewed literature analysis |
| **Current Events** | "Country X invaded Y" | Multi-source news verification |
| **Historical** | "Event X happened in year Y" | Academic source verification |

---

## Incentive & Mechanism Design

### Overview

The TruthLens incentive mechanism is designed to reward **accurate, well-sourced, and timely** fact-checking while penalizing low-quality or adversarial behavior.

### Emission and Reward Logic

```
┌────────────────────────────────────────────────────────────────┐
│                    REWARD DISTRIBUTION                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Total Subnet Emissions (E_subnet)                            │
│            │                                                   │
│            ├──▶ 41% ──▶ Validators (V_emissions)               │
│            │                                                   │
│            └──▶ 59% ──▶ Miners (M_emissions)                   │
│                            │                                   │
│                            ├──▶ Accuracy Score (40%)           │
│                            ├──▶ Source Quality (25%)           │
│                            ├──▶ Response Time (15%)            │
│                            ├──▶ Reasoning Quality (15%)        │
│                            └──▶ Consensus Alignment (5%)       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Miner Scoring Formula

Each miner's score is calculated as:

```
S_miner = (W_acc × Accuracy) + (W_src × SourceQuality) + (W_time × TimeScore) + 
          (W_reason × ReasoningScore) + (W_cons × ConsensusAlignment)

Where:
  W_acc    = 0.40  (Accuracy weight)
  W_src    = 0.25  (Source quality weight)
  W_time   = 0.15  (Response time weight)
  W_reason = 0.15  (Reasoning quality weight)
  W_cons   = 0.05  (Consensus alignment weight)
```

### Component Definitions

#### 1. Accuracy Score (40%)

```python
def calculate_accuracy(miner_verdict, ground_truth, confidence):
    """
    Accuracy rewards correct verdicts and penalizes overconfidence in wrong answers.
    
    Verdicts: TRUE, FALSE, PARTIALLY_TRUE, UNVERIFIABLE
    Confidence: 0.0 to 1.0
    """
    if miner_verdict == ground_truth:
        # Reward correct verdicts, bonus for appropriate confidence
        base_score = 1.0
        confidence_bonus = 0.1 * confidence  # Higher confidence = higher reward when correct
        return min(1.0, base_score + confidence_bonus)
    else:
        # Penalize incorrect verdicts, especially high-confidence wrong answers
        penalty = 0.5 * confidence  # Higher confidence = higher penalty when wrong
        return max(0.0, 0.3 - penalty)
```

**Ground Truth Determination:**
- Consensus among top-performing miners (weighted by historical accuracy)
- Validator injection of known claims (honeypots) for calibration
- Post-hoc verification using authoritative sources

#### 2. Source Quality Score (25%)

```python
def calculate_source_quality(sources):
    """
    Evaluates the quality and credibility of cited sources.
    """
    score = 0.0
    for source in sources:
        credibility = get_source_credibility(source.domain)  # 0.0 to 1.0
        recency = calculate_recency_score(source.date)       # 0.0 to 1.0
        relevance = calculate_relevance(source, claim)       # 0.0 to 1.0
        accessibility = 1.0 if is_accessible(source.url) else 0.5
        
        source_score = (0.4 * credibility + 0.3 * relevance + 
                       0.2 * recency + 0.1 * accessibility)
        score += source_score
    
    # Normalize and bonus for multiple independent sources
    diversity_bonus = min(0.2, 0.05 * count_unique_domains(sources))
    return min(1.0, (score / len(sources)) + diversity_bonus)
```

**Source Credibility Tiers:**

| Tier | Score | Examples |
|------|-------|----------|
| **Tier 1** | 0.9-1.0 | Peer-reviewed journals, government statistics, court records |
| **Tier 2** | 0.7-0.9 | Major news outlets (AP, Reuters), academic institutions |
| **Tier 3** | 0.5-0.7 | Regional news, verified expert blogs, official company statements |
| **Tier 4** | 0.3-0.5 | Wikipedia, social media verified accounts |
| **Tier 5** | 0.0-0.3 | Unverified sources, anonymous claims, known unreliable sources |

#### 3. Response Time Score (15%)

```python
def calculate_time_score(response_time_seconds, claim_complexity):
    """
    Rewards fast responses while accounting for claim complexity.
    """
    # Base time expectations by complexity
    base_times = {
        'simple': 30,      # Simple factual lookup
        'moderate': 120,   # Requires some research
        'complex': 300,    # Deep research needed
    }
    
    expected_time = base_times[claim_complexity]
    
    if response_time <= expected_time * 0.5:
        return 1.0  # Excellent speed
    elif response_time <= expected_time:
        return 0.8 + 0.2 * (1 - response_time / expected_time)
    elif response_time <= expected_time * 2:
        return 0.5 * (1 - (response_time - expected_time) / expected_time)
    else:
        return 0.1  # Minimum score for late responses
```

#### 4. Reasoning Quality Score (15%)

```python
def calculate_reasoning_score(reasoning_chain):
    """
    Evaluates the logical coherence and completeness of reasoning.
    """
    scores = {
        'logical_coherence': evaluate_logic(reasoning_chain),      # No contradictions
        'evidence_citation': check_evidence_links(reasoning_chain), # Claims backed by evidence
        'completeness': evaluate_completeness(reasoning_chain),     # Addresses all aspects
        'clarity': evaluate_clarity(reasoning_chain),               # Clear, understandable
    }
    
    return (0.35 * scores['logical_coherence'] + 
            0.30 * scores['evidence_citation'] +
            0.20 * scores['completeness'] + 
            0.15 * scores['clarity'])
```

#### 5. Consensus Alignment Score (5%)

```python
def calculate_consensus_alignment(miner_verdict, all_verdicts, miner_weights):
    """
    Small bonus for alignment with high-quality miners.
    Prevents gaming by weighting by historical performance.
    """
    weighted_consensus = calculate_weighted_consensus(all_verdicts, miner_weights)
    
    if miner_verdict == weighted_consensus:
        return 1.0
    elif is_adjacent_verdict(miner_verdict, weighted_consensus):
        return 0.5  # e.g., TRUE vs PARTIALLY_TRUE
    else:
        return 0.0
```

### Incentive Alignment

#### For Miners

| Desired Behavior | Incentive Mechanism |
|------------------|---------------------|
| **Provide accurate verdicts** | Accuracy score (40% weight) directly rewards correctness |
| **Use high-quality sources** | Source quality score rewards credible, diverse sources |
| **Respond quickly** | Time score rewards fast responses |
| **Provide clear reasoning** | Reasoning score rewards logical, complete explanations |
| **Maintain consistency** | Historical accuracy affects future task allocation |

#### For Validators

| Desired Behavior | Incentive Mechanism |
|------------------|---------------------|
| **Score honestly** | Validators earn more when their miners perform well network-wide |
| **Inject quality honeypots** | Better calibration = better miner selection = higher returns |
| **Stay active** | Activity cutoff removes inactive validators from consensus |

### Anti-Gaming Mechanisms

#### 1. Honeypot Claims

```python
class HoneypotSystem:
    """
    Validators inject claims with known ground truth to catch cheaters.
    """
    def generate_honeypot(self):
        honeypot_types = [
            'known_true',      # Verified true claims
            'known_false',     # Verified false claims  
            'synthetic',       # AI-generated with clear answers
            'historical',      # Past claims with established verdicts
        ]
        
        # 10-20% of all tasks are honeypots
        return create_honeypot(random.choice(honeypot_types))
    
    def evaluate_honeypot_response(self, miner_response, ground_truth):
        if miner_response.verdict != ground_truth:
            return apply_penalty(severity='high')
        return apply_bonus(severity='low')
```

#### 2. Sybil Resistance

```python
def detect_sybil_behavior(miners):
    """
    Detect and penalize coordinated manipulation.
    """
    # Check for suspiciously similar responses
    similarity_matrix = compute_response_similarity(miners)
    
    # Check for coordinated timing
    timing_correlation = analyze_response_timing(miners)
    
    # Check for shared infrastructure
    infrastructure_overlap = detect_shared_infrastructure(miners)
    
    if any_suspicious_patterns(similarity_matrix, timing_correlation, infrastructure_overlap):
        flag_for_review(miners)
        reduce_weights(miners)
```

#### 3. Confidence Calibration

```python
def penalize_miscalibration(miner_history):
    """
    Miners who are consistently overconfident or underconfident are penalized.
    """
    calibration_error = calculate_calibration_error(
        miner_history.confidences,
        miner_history.accuracies
    )
    
    # Perfect calibration = 0, worst = 1
    # e.g., always saying 90% confident but only 50% accurate = high error
    
    return 1.0 - calibration_error
```

#### 4. Source Verification

```python
def verify_sources(miner_response):
    """
    Verify that cited sources actually exist and support the claims.
    """
    penalties = 0
    
    for source in miner_response.sources:
        # Check if URL is accessible
        if not is_accessible(source.url):
            penalties += 0.1
        
        # Check if source content matches citation
        if not verify_citation_accuracy(source):
            penalties += 0.2
        
        # Check if source is fabricated
        if is_likely_fabricated(source):
            penalties += 0.5
    
    return max(0, 1.0 - penalties)
```

### Proof of Verification (PoV) - Why This Qualifies

TruthLens implements genuine **Proof of Intelligence/Effort** because:

1. **Non-Trivial Computation**: Research, source verification, and reasoning cannot be faked with simple pattern matching
2. **Verifiable Work**: Sources can be checked, reasoning can be evaluated, accuracy can be measured
3. **Economic Rationality**: Gaming is more expensive than honest participation due to honeypots
4. **Skill Differentiation**: Better researchers/AI systems naturally outperform, creating meritocracy

---

## Miner Design

### Miner Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                       TRUTHLENS MINER                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    INPUT PROCESSING                      │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  • Claim Parser         • Entity Extraction              │   │
│  │  • Complexity Classifier • Context Analyzer              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│                              ▼                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    RESEARCH ENGINE                       │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  • Web Search Module    • Academic Database Connector    │   │
│  │  • News API Integration • Government Data Access         │   │
│  │  • Social Media Monitor • Fact-Check DB Query            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│                              ▼                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    REASONING ENGINE                      │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  • Evidence Aggregator  • Contradiction Detector         │   │
│  │  • Logical Analyzer     • Confidence Estimator           │   │
│  │  • Verdict Generator    • Explanation Builder            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│                              ▼                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    OUTPUT GENERATION                     │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  • Report Formatter     • Source Compiler                │   │
│  │  • Quality Checker      • Response Packager              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Miner Tasks

Miners receive claims and must return comprehensive fact-check reports.

#### Input Format

```json
{
  "task_id": "uuid-v4",
  "claim": {
    "text": "The Great Wall of China is visible from space with the naked eye.",
    "source": "social_media_post",
    "context": "Viral post claiming this as fact",
    "timestamp": "2026-01-15T10:30:00Z",
    "language": "en"
  },
  "metadata": {
    "category": "factual",
    "complexity": "moderate",
    "priority": "normal",
    "deadline_seconds": 120
  }
}
```

#### Expected Output Format

```json
{
  "task_id": "uuid-v4",
  "response": {
    "verdict": "FALSE",
    "confidence": 0.95,
    "summary": "The Great Wall of China is NOT visible from space with the naked eye. This is a common misconception that has been debunked by astronauts and scientists.",
    "detailed_analysis": {
      "claim_breakdown": [
        "The claim asserts the Great Wall is visible from space",
        "Specifically mentions 'naked eye' visibility"
      ],
      "evidence_analysis": [
        {
          "point": "Astronaut testimonies",
          "finding": "Multiple astronauts including Chris Hadfield have confirmed the Wall is not visible from orbit without aid",
          "source_ids": ["src_1", "src_2"]
        },
        {
          "point": "Physical dimensions",
          "finding": "The Wall is only 5-8 meters wide, far too narrow to resolve from orbital distances (400km+)",
          "source_ids": ["src_3"]
        }
      ],
      "reasoning_chain": [
        "1. Human visual acuity limit is ~1 arcminute",
        "2. From ISS altitude (400km), this resolves to ~116 meters",
        "3. Great Wall width (5-8m) is 15-20x smaller than resolvable limit",
        "4. Therefore, naked eye visibility is physically impossible"
      ],
      "counterarguments_addressed": [
        {
          "counterargument": "Some claim to have seen it",
          "rebuttal": "Studies show these were likely rivers or roads mistaken for the Wall"
        }
      ]
    },
    "sources": [
      {
        "id": "src_1",
        "url": "https://www.nasa.gov/vision/space/workinginspace/great_wall.html",
        "title": "Great Wall of China - NASA",
        "type": "government",
        "credibility_tier": 1,
        "relevant_quote": "The Great Wall can barely be seen from the Shuttle..."
      },
      {
        "id": "src_2", 
        "url": "https://www.scientificamerican.com/article/china-great-wall-space/",
        "title": "Is China's Great Wall Visible from Space?",
        "type": "scientific_publication",
        "credibility_tier": 2,
        "relevant_quote": "...not visible to the unaided eye from orbit"
      },
      {
        "id": "src_3",
        "url": "https://academic.example.com/visual-acuity-limits",
        "title": "Human Visual Acuity: Physical Limits",
        "type": "peer_reviewed",
        "credibility_tier": 1,
        "relevant_quote": "Angular resolution limit of ~1 arcminute..."
      }
    ],
    "metadata": {
      "processing_time_ms": 45000,
      "sources_consulted": 12,
      "model_version": "truthlens-miner-v1.0"
    }
  }
}
```

### Performance Dimensions

| Dimension | Measurement | Target |
|-----------|-------------|--------|
| **Accuracy** | % of correct verdicts | >90% |
| **Source Depth** | Avg. sources per claim | 3-5 |
| **Response Time** | Seconds to respond | <60s simple, <180s complex |
| **Reasoning Completeness** | % of aspects addressed | >85% |
| **Calibration** | Confidence vs actual accuracy | <10% error |

### Recommended Miner Implementation

```python
class TruthLensMiner:
    """
    Reference implementation for TruthLens miners.
    """
    
    def __init__(self, config):
        self.research_engine = ResearchEngine(config.search_apis)
        self.reasoning_engine = ReasoningEngine(config.llm_model)
        self.source_validator = SourceValidator()
        
    async def process_claim(self, task: Task) -> Response:
        # Step 1: Parse and understand the claim
        parsed_claim = self.parse_claim(task.claim)
        
        # Step 2: Conduct research
        research_results = await self.research_engine.search(
            query=parsed_claim.search_queries,
            time_budget=task.metadata.deadline_seconds * 0.6
        )
        
        # Step 3: Validate sources
        validated_sources = self.source_validator.validate(research_results)
        
        # Step 4: Analyze and reason
        analysis = self.reasoning_engine.analyze(
            claim=parsed_claim,
            evidence=validated_sources
        )
        
        # Step 5: Generate verdict with confidence
        verdict = self.reasoning_engine.generate_verdict(analysis)
        
        # Step 6: Compile report
        return self.compile_response(task.task_id, verdict, analysis, validated_sources)
```

---

## Validator Design

### Validator Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      TRUTHLENS VALIDATOR                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    TASK MANAGEMENT                       │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  • Task Queue Manager   • Priority Scheduler             │   │
│  │  • Honeypot Injector    • Task Broadcaster               │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│                              ▼                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   RESPONSE COLLECTION                    │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  • Response Aggregator  • Timeout Handler                │   │
│  │  • Format Validator     • Duplicate Detector             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│                              ▼                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    SCORING ENGINE                        │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  • Accuracy Evaluator   • Source Quality Scorer          │   │
│  │  • Time Score Calculator• Reasoning Analyzer             │   │
│  │  • Consensus Calculator • Final Score Aggregator         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│                              ▼                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   WEIGHT MANAGEMENT                      │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  • Weight Calculator    • Normalization                  │   │
│  │  • Weight Committer     • History Tracker                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Scoring and Evaluation Methodology

```python
class TruthLensValidator:
    """
    Reference implementation for TruthLens validators.
    """
    
    def __init__(self, config):
        self.scoring_weights = {
            'accuracy': 0.40,
            'source_quality': 0.25,
            'response_time': 0.15,
            'reasoning': 0.15,
            'consensus': 0.05
        }
        self.honeypot_manager = HoneypotManager()
        self.source_credibility_db = SourceCredibilityDB()
        
    async def evaluate_responses(self, task: Task, responses: List[MinerResponse]) -> Dict[str, float]:
        scores = {}
        
        # Determine ground truth (consensus or honeypot)
        ground_truth = self.determine_ground_truth(task, responses)
        
        for response in responses:
            miner_score = self.calculate_miner_score(
                response=response,
                ground_truth=ground_truth,
                task=task,
                all_responses=responses
            )
            scores[response.miner_uid] = miner_score
            
        return self.normalize_scores(scores)
    
    def calculate_miner_score(self, response, ground_truth, task, all_responses):
        accuracy = self.score_accuracy(response.verdict, ground_truth, response.confidence)
        source_quality = self.score_sources(response.sources)
        time_score = self.score_time(response.processing_time, task.complexity)
        reasoning = self.score_reasoning(response.reasoning_chain)
        consensus = self.score_consensus(response.verdict, all_responses)
        
        return (
            self.scoring_weights['accuracy'] * accuracy +
            self.scoring_weights['source_quality'] * source_quality +
            self.scoring_weights['response_time'] * time_score +
            self.scoring_weights['reasoning'] * reasoning +
            self.scoring_weights['consensus'] * consensus
        )
```

### Evaluation Cadence

```
┌────────────────────────────────────────────────────────────────┐
│                    EVALUATION TIMELINE                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Block N         Block N+1       Block N+2       Block N+360  │
│     │               │               │               │         │
│     ▼               ▼               ▼               ▼         │
│  ┌──────┐       ┌──────┐       ┌──────┐       ┌──────────┐   │
│  │ Task │       │ Task │       │ Task │       │  Weight  │   │
│  │Assign│       │Assign│       │Assign│       │ Commit   │   │
│  └──────┘       └──────┘       └──────┘       └──────────┘   │
│     │               │               │               │         │
│     ▼               ▼               ▼               ▼         │
│  Collect         Collect         Collect        Aggregate    │
│  & Score         & Score         & Score        & Submit     │
│                                                                │
│  Continuous task assignment, periodic weight commits          │
│  (every tempo ~360 blocks / ~72 minutes)                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Validator Incentive Alignment

Validators are incentivized to score honestly because:

1. **Yuma Consensus**: Validators who agree with the consensus of other validators earn more
2. **Miner Performance**: Validators earn dividends from their high-performing miners
3. **Stake Requirements**: 1000+ stake weight required, creating accountability
4. **Reputation**: Historical accuracy affects stake delegation from TAO holders

---

## Business Logic & Market Rationale

### The Problem TruthLens Solves

| Stakeholder | Problem | TruthLens Solution |
|-------------|---------|-------------------|
| **Social Platforms** | Misinformation liability, moderation costs | API for automated fact-checking |
| **News Organizations** | Slow verification, limited resources | Real-time verification assistance |
| **Enterprises** | Brand safety, due diligence | Claim verification for decision-making |
| **Researchers** | Data quality issues | Verified information feeds |
| **General Public** | Confusion, trust deficit | Transparent, verifiable fact-checks |

### Competitive Analysis

#### Within Bittensor Ecosystem

| Subnet | Focus | Differentiation from TruthLens |
|--------|-------|-------------------------------|
| **Subnet 1 (Prompting)** | General LLM inference | TruthLens: Specialized verification + source validation |
| **Subnet 18 (Cortex.t)** | AI generation | TruthLens: Verification, not generation |
| **Subnet 8 (Taoshi)** | Financial prediction | TruthLens: Factual claims, not forecasting |

**TruthLens Unique Position**: No existing Bittensor subnet focuses on fact-verification with source validation and transparent reasoning.

#### Outside Bittensor

| Competitor | Model | TruthLens Advantage |
|------------|-------|---------------------|
| **Snopes, PolitiFact** | Centralized editorial | Decentralized, scalable, no single-point bias |
| **Google Fact Check Tools** | Aggregation only | Active verification, not just aggregation |
| **Community Notes (X)** | Crowdsourced | Economic incentives, professional-grade quality |
| **AI Fact-Checkers** | Single model | Distributed intelligence, multiple perspectives |
| **Full Fact** | Manual + AI | Fully automated, real-time, global scale |

### Why Bittensor is the Right Platform

1. **Decentralized Trust**: No single entity controls verdicts
2. **Economic Incentives**: TAO rewards attract quality miners
3. **Transparent Consensus**: Publicly verifiable scoring
4. **Scalability**: 256 nodes can handle massive claim volume
5. **Anti-Censorship**: No single point of censorship failure
6. **Global Distribution**: Miners worldwide = diverse perspectives

### Path to Sustainable Business

```
┌────────────────────────────────────────────────────────────────┐
│                    REVENUE MODEL                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  PHASE 1: Foundation (Year 1)                                  │
│  ├── TAO emissions fund initial operations                     │
│  └── Build reputation and accuracy track record                │
│                                                                │
│  PHASE 2: API Monetization (Year 2)                            │
│  ├── Freemium API: 100 claims/day free, paid tiers above       │
│  ├── Enterprise contracts: Custom SLAs, dedicated capacity     │
│  └── Revenue flows to subnet, increasing TAO value             │
│                                                                │
│  PHASE 3: Platform Partnerships (Year 2-3)                     │
│  ├── Integration with social platforms                         │
│  ├── News organization partnerships                            │
│  └── Government/institutional contracts                        │
│                                                                │
│  PHASE 4: Data Products (Year 3+)                              │
│  ├── Misinformation trend reports                              │
│  ├── Source credibility ratings                                │
│  └── Research datasets                                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Market Size

| Segment | TAM | SAM | SOM (Year 3) |
|---------|-----|-----|--------------|
| **Content Moderation** | $15B | $3B | $30M |
| **Media Monitoring** | $5B | $1B | $10M |
| **Due Diligence** | $8B | $500M | $5M |
| **Research Data** | $2B | $200M | $2M |
| **Total** | $30B | $4.7B | $47M |

---

## Go-To-Market Strategy

### Phase 1: Initial Target Users & Use Cases

#### Primary Early Adopters

1. **Independent Journalists & Fact-Checkers**
   - Pain point: Limited resources for verification
   - Value prop: Free tier API, augments their workflow
   - Acquisition: Twitter/X outreach, journalism conferences

2. **Web3/Crypto Community**
   - Pain point: Rampant scams and misinformation
   - Value prop: Verify project claims, rug pull warnings
   - Acquisition: Bittensor community, crypto Twitter

3. **Academic Researchers**
   - Pain point: Need verified data for studies
   - Value prop: Transparent, reproducible verification
   - Acquisition: Research partnerships, preprint sharing

#### Anchor Use Cases

| Use Case | Description | Success Metric |
|----------|-------------|----------------|
| **Crypto Scam Detection** | Verify claims made by crypto projects | 1000 scam warnings/month |
| **News Verification** | Real-time verification for breaking news | 100 news org users |
| **Quote Verification** | Verify attributed quotes | 10K verifications/month |

### Phase 2: Distribution & Growth Channels

```
┌────────────────────────────────────────────────────────────────┐
│                    GROWTH STRATEGY                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  CHANNEL 1: Developer Community                                │
│  ├── Open source miner/validator code                          │
│  ├── Comprehensive API documentation                           │
│  ├── Developer grants for integrations                         │
│  └── Hackathon sponsorships                                    │
│                                                                │
│  CHANNEL 2: Content & Thought Leadership                       │
│  ├── Weekly misinformation trend reports                       │
│  ├── Case studies on successful verifications                  │
│  ├── Research papers on decentralized fact-checking            │
│  └── Podcast/media appearances                                 │
│                                                                │
│  CHANNEL 3: Strategic Partnerships                             │
│  ├── Integration with existing fact-check organizations        │
│  ├── Browser extension partnerships                            │
│  ├── CMS/publishing platform plugins                           │
│  └── Social media tool integrations                            │
│                                                                │
│  CHANNEL 4: Community Building                                 │
│  ├── Discord community for users and miners                    │
│  ├── Ambassador program                                        │
│  ├── Bug bounty and accuracy challenges                        │
│  └── Governance participation                                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Phase 3: Incentives for Early Participation

#### For Miners

| Incentive | Details |
|-----------|---------|
| **Early Miner Bonus** | 2x TAO multiplier for first 50 miners (Month 1-3) |
| **Accuracy Leaderboard** | Monthly prizes for top accuracy miners |
| **Hardware Grants** | GPU grants for promising miners |
| **Open Source Bonus** | Extra emissions for miners who open-source improvements |

#### For Validators

| Incentive | Details |
|-----------|---------|
| **Founding Validator NFT** | Recognition for first 10 validators |
| **Delegation Matching** | Protocol matches early validator stakes |
| **Governance Rights** | Early validators get enhanced governance weight |

#### For Users/API Consumers

| Incentive | Details |
|-----------|---------|
| **Generous Free Tier** | 500 claims/day free for first year |
| **Integration Bounties** | Paid bounties for platform integrations |
| **Feedback Rewards** | TAO rewards for quality feedback on verdicts |

### Launch Timeline

```
┌────────────────────────────────────────────────────────────────┐
│                    LAUNCH TIMELINE                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  MONTH 1-2: Private Alpha                                      │
│  ├── Core team + 5-10 selected miners                          │
│  ├── Basic claim types only                                    │
│  └── Iterate on scoring mechanisms                             │
│                                                                │
│  MONTH 3-4: Public Beta (Testnet)                              │
│  ├── Open miner registration                                   │
│  ├── Public API (rate limited)                                 │
│  └── Community feedback integration                            │
│                                                                │
│  MONTH 5-6: Mainnet Launch                                     │
│  ├── Full subnet deployment                                    │
│  ├── Marketing push                                            │
│  └── First enterprise pilot                                    │
│                                                                │
│  MONTH 7-12: Scale & Iterate                                   │
│  ├── Expand claim categories                                   │
│  ├── Multi-language support                                    │
│  └── Advanced features (batch API, webhooks)                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Roadmap

### Development Phases

```
┌────────────────────────────────────────────────────────────────────────────┐
│                           TRUTHLENS ROADMAP                                │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  Q1 2026                    Q2 2026                    Q3 2026            │
│  ════════                   ════════                   ════════           │
│  ☑ Subnet Design            ☐ Testnet Deployment       ☐ Mainnet Launch   │
│  ☑ Incentive Mechanism      ☐ Miner SDK v1.0          ☐ API v1.0         │
│  ☑ Architecture Design      ☐ Validator SDK v1.0      ☐ 50+ Active Miners│
│  ☐ Core Protocol Dev        ☐ Public Beta             ☐ First Enterprise │
│                             ☐ 10+ Test Miners          ☐ Multi-language   │
│                                                                            │
│  Q4 2026                    Q1 2027                    Q2 2027+           │
│  ════════                   ════════                   ════════           │
│  ☐ API v2.0 (Batch/Stream)  ☐ Platform Integrations   ☐ Mobile SDK       │
│  ☐ 100+ Active Miners       ☐ Research Partnerships   ☐ Governance DAO   │
│  ☐ Browser Extension        ☐ Advanced Analytics      ☐ Global Expansion │
│  ☐ 5 Enterprise Clients     ☐ 1M+ Verifications/mo    ☐ 10M+ Verif/mo    │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Key Milestones

| Milestone | Target Date | Success Criteria |
|-----------|-------------|------------------|
| **Testnet Launch** | March 2026 | Functional subnet on Bittensor testnet |
| **10 Active Miners** | April 2026 | 10 miners consistently producing quality results |
| **Mainnet Launch** | June 2026 | Subnet live on Bittensor mainnet |
| **1000 Daily Verifications** | August 2026 | Consistent daily usage |
| **First Paying Customer** | September 2026 | Enterprise API contract signed |
| **90% Accuracy** | December 2026 | Network achieves 90%+ accuracy on benchmarks |

---

## Technical Specifications

### Hardware Requirements

#### Miner Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **CPU** | 4 cores | 8+ cores |
| **RAM** | 16 GB | 32 GB |
| **Storage** | 100 GB SSD | 500 GB NVMe |
| **Network** | 100 Mbps | 1 Gbps |
| **GPU** | Optional | RTX 3080+ (for local LLM) |

#### Validator Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **CPU** | 8 cores | 16+ cores |
| **RAM** | 32 GB | 64 GB |
| **Storage** | 500 GB SSD | 1 TB NVMe |
| **Network** | 500 Mbps | 1 Gbps |
| **Stake** | 1000 TAO stake weight | 5000+ TAO stake weight |

### API Specifications

#### REST API Endpoints

```
POST /api/v1/verify
  - Submit a claim for verification
  - Returns: task_id, estimated_time

GET /api/v1/verify/{task_id}
  - Get verification result
  - Returns: verdict, confidence, sources, reasoning

POST /api/v1/verify/batch
  - Submit multiple claims
  - Returns: array of task_ids

GET /api/v1/sources/{domain}
  - Get credibility rating for a source
  - Returns: credibility_score, tier, history

GET /api/v1/stats
  - Network statistics
  - Returns: active_miners, avg_response_time, accuracy_metrics
```

#### WebSocket API

```
WS /api/v1/stream
  - Real-time verification updates
  - Subscribe to claim categories
  - Receive instant verdicts
```

---

## Team

> *[Akanimoh - Team Lead]*

### Roles Needed

| Role | Responsibility |
|------|----------------|
| **Subnet Lead** | Overall architecture, Bittensor integration |
| **ML Engineer** | Reasoning engine, evaluation models |
| **Backend Engineer** | API, infrastructure, scaling |
| **Research Lead** | Source credibility, evaluation methodology |
| **DevRel/Community** | Documentation, miner support, partnerships |

---

## References

### Bittensor Resources

- [Bittensor Documentation](https://docs.learnbittensor.org/)
- [Bittensor GitHub](https://github.com/opentensor/bittensor)
- [Subnet Template](https://github.com/opentensor/bittensor-subnet-template)
- [TAO.app Subnet Explorer](https://tao.app/)

### Fact-Checking Research

- [The Science of Fact-Checking (Annual Review of Political Science)](https://www.annualreviews.org/doi/10.1146/annurev-polisci-050718-032630)
- [Misinformation and Its Correction (Psychological Science)](https://journals.sagepub.com/doi/10.1177/1529100612451018)
- [Automated Fact-Checking: A Survey (ACM Computing Surveys)](https://dl.acm.org/doi/10.1145/3485127)

### Related Projects

- [ClaimBuster](https://idir.uta.edu/claimbuster/)
- [Full Fact](https://fullfact.org/)
- [Google Fact Check Tools](https://toolbox.google.com/factcheck/)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

- **Twitter/X**: [@akanimoh](https://x.com/akanimoh__)
- **Discord**: [TruthLens Community](https://discord.gg/akanimoh__)
- **Email**: johnsonakanimoh4@gmail.com

---

<div align="center">

**Built for the [Bittensor Subnet Ideathon](https://www.hackquest.io/hackathons/Bittensor-Subnet-Ideathon)**

*Decentralizing Truth, One Claim at a Time* 🔍

</div>
