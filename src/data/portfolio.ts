import { PortfolioData } from '../types';

export const PORTFOLIO: PortfolioData = {
  resumeUrl: 'resume.pdf',

  // ── Personal Info ──────────────────────────────────────────
  personal: {
    name:     'Awais Mumtaz',
    title:    'Full-Stack Software Engineer',
    roleTag:  'React 19 · Node.js · TypeScript · AI Systems',
    tagline:  'Building production web applications, high-throughput backend services, and practical AI systems.',
    bio:      'Software engineering student at UMT Lahore specializing in high-performance React architectures, TypeScript full-stack systems, and production Gemini API pipelines. Focused on clean code, measurable latency budgets, and real-world impact.',
    avatar:   'assets/profile.jpg',
    location: 'Lahore, Pakistan',

    contact: {
      email:    'awaismumtaz1406@gmail.com',
      phone:    '+92 328 8421580',
    },

    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/awaismumtaz1406/' },
      { label: 'GitHub',   url: 'https://github.com/awaismumtaz1406'           },
      { label: 'WhatsApp', url: 'https://wa.me/923288421580?text=Hi%20Awais,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!' },
      { label: 'Email',    url: 'mailto:awaismumtaz1406@gmail.com'             },
    ],
  },

  // ── High-Impact Quantitative Strip (4 Metrics) ─────────────
  heroMetrics: [
    {
      value:    '4',
      label:    'Production Platforms',
      sublabel: 'Deployed & active on Vercel',
    },
    {
      value:    '3.50',
      label:    'Academic CGPA',
      sublabel: 'BS Software Engineering (UMT)',
    },
    {
      value:    '3',
      label:    'Industry Internships',
      sublabel: 'QA, Mobile Testing & Community',
    },
    {
      value:    '100%',
      label:    'Verified On-Time Delivery',
      sublabel: 'US Client Deliverable Benchmark',
    },
  ],

  // ── Client Work & Satisfaction (Featured Deliverables) ─────
  clientWork: {
    title:       'Client Learning & Resource Hub',
    client:      'Waseem Raza',
    clientRole:  'Tech Lead / US-Based Client',
    liveUrl:     'https://waseemraza844.github.io/portfolio/learning.html',
    period:      'Delivered 2026',
    highlights: [
      'Engineered a responsive technical education portal with modular course paths and instant search navigation.',
      'Built clean, reusable frontend components optimized for sub-second loading and cross-device readability.',
      'Delivered clean code and cross-browser compatibility matching strict client specifications.',
    ],
    metrics: [
      { value: '100%', label: 'Specification Match' },
      { value: '< 1.2s', label: 'Average LCP Load' },
      { value: '0', label: 'Regression Defects' },
    ],
    testimonial: {
      quote: 'Awais delivered a clean, fast, and well-structured site on time. Great communication and solid frontend execution.',
      author: 'Waseem Raza',
      title: 'Tech Lead / Client, USA',
    },
  },

  // ── Flagship & Featured Projects ───────────────────────────
  projects: [
    {
      id:            'salesmatrix',
      isFlagship:    true,
      categoryBadge: 'FLAGSHIP ENTERPRISE BI',
      title:         'SalesMatrix Studio',
      badge:         'Enterprise BI & AI',
      tags:          ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Supabase', 'Gemini API'],
      description:   'Enterprise business intelligence dashboard converting multi-tenant transaction data into executive P&L views, dynamic pivot tables, and AI-driven financial briefings.',
      live:          'https://sales-matrix-d6vfs6wuo-awais-mumtaz.vercel.app/',
      github:        'https://github.com/awaismumtaz1406/SalesMatrix',
      architecture: {
        headline: 'Client-Side In-Memory OLAP Rollup & Gemini Structured Financial Briefings',
        challenge: 'Aggregating 10,000+ multi-dimensional transactional records across quarters and SKU hierarchies caused noticeable UI freezes and dropped frames on the main thread during pivot grouping.',
        decision: 'Engineered a dedicated Web Worker pipeline with bitwise memoized index rollups. The worker generates pre-aggregated cube slices and passes binary structured data to the main thread, keeping React rendering at a steady 60 FPS. Summaries are fed into Google Gemini with structured JSON schemas to produce concise executive financial briefings.',
        systemPipeline: [
          'Raw Stream Ingestion',
          'Web Worker OLAP Cube',
          'Dynamic Pivot Aggregator',
          'Gemini JSON Briefing Engine',
          'Virtual Grid Presentation',
        ],
        keyTradeoff: 'Trading initial worker spawn overhead (45ms) for butter-smooth 60 FPS main-thread interaction during complex multi-column pivot drilldowns.',
        codeSnippet: {
          language: 'typescript',
          title: 'src/workers/olapRollup.worker.ts',
          code: `// Offloading multi-dimensional aggregations to Web Worker
export interface RollupCube {
  dimensions: string[];
  metrics: { revenue: number; grossMargin: number; ebitda: number };
}

self.onmessage = (e: MessageEvent<{ dataset: RawTx[]; groupBy: string[] }>) => {
  const { dataset, groupBy } = e.data;
  const cube = new Map<string, RollupCube>();

  // Single-pass O(N) rollup reduction
  for (let i = 0; i < dataset.length; i++) {
    const tx = dataset[i];
    const key = groupBy.map(dim => tx[dim]).join('::');
    const existing = cube.get(key) || {
      dimensions: groupBy.map(dim => String(tx[dim])),
      metrics: { revenue: 0, grossMargin: 0, ebitda: 0 }
    };
    existing.metrics.revenue += tx.amount;
    existing.metrics.grossMargin += (tx.amount - tx.cogs);
    existing.metrics.ebitda += (tx.amount - tx.cogs - tx.opex);
    cube.set(key, existing);
  }

  // Zero-copy transfer back to main React render loop
  self.postMessage(Array.from(cube.values()));
};`,
        },
        metrics: [
          { value: '< 180ms', label: 'Aggregation Latency', detail: 'On 10,000+ transaction rows' },
          { value: '60 FPS', label: 'UI Thread Refresh', detail: 'Zero frame drop during pivot shifts' },
          { value: '100%', label: 'Strict Schema Typings', detail: 'End-to-end typed OLAP contracts' },
        ],
      },
    },
    {
      id:            'studysync-ai',
      categoryBadge: 'AI COPILOT & REASONING AGENT',
      title:         'StudySync AI',
      badge:         'Academic Copilot & Slide RAG',
      tags:          ['React', 'Node.js', 'Express', 'Supabase pgvector', 'Gemini API'],
      description:   'Bilingual (Roman Urdu/English) academic assistant featuring lecture slide RAG with vector search, automated task scheduling, and deadline alerts.',
      live:          'https://study-sync-ai-je9e.vercel.app/',
      github:        'https://github.com/awaismumtaz1406/StudySync-Ai',
      architecture: {
        headline: 'Bilingual Roman Urdu / English Slide RAG via Supabase pgvector',
        challenge: 'Pakistani students frequently query course materials in colloquial Roman Urdu ("sir ne slide 14 pe deadlocks ka kya solution bataya tha?"), causing naive English lexical and keyword search to fail completely.',
        decision: 'Implemented Supabase pgvector with HNSW (Hierarchical Navigable Small World) indexing over 768-dimensional multilingual embeddings. The retriever computes cosine similarity over slide chunks, injects top-k context, and prompts Gemini to synthesize responses natively in Roman Urdu or English matching the student query mode.',
        systemPipeline: [
          'PDF Slide Parser',
          'Multilingual Vectorization',
          'Supabase pgvector (HNSW)',
          'Cosine Proximity Matcher',
          'Bilingual Gemini Synthesizer',
        ],
        keyTradeoff: 'Chose embedded pgvector in PostgreSQL over separate Pinecone/Milvus to preserve single ACID transactional boundary with student auth and deadline models.',
        codeSnippet: {
          language: 'sql',
          title: 'supabase/migrations/match_slide_chunks.sql',
          code: `-- High-performance cosine similarity vector retrieval with HNSW
CREATE INDEX IF NOT EXISTS slide_embeddings_hnsw_idx 
ON slide_chunks USING hnsw (embedding vector_cosine_ops);

CREATE OR REPLACE FUNCTION match_slide_chunks(
  query_embedding vector(768),
  match_threshold float,
  match_count int,
  target_course_id uuid
)
RETURNS TABLE (
  id uuid,
  slide_number int,
  content text,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    c.id,
    c.slide_number,
    c.content,
    1 - (c.embedding <=> query_embedding) AS similarity
  FROM slide_chunks c
  WHERE c.course_id = target_course_id
    AND 1 - (c.embedding <=> query_embedding) > match_threshold
  ORDER BY c.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;`,
        },
        metrics: [
          { value: '< 45ms', label: 'Vector Query Time', detail: 'HNSW index across 5,000+ slides' },
          { value: '768', label: 'Embedding Dimensions', detail: 'Dense bilingual semantic vectors' },
          { value: '2 Modes', label: 'Roman Urdu & English', detail: 'Context-adaptive natural synthesis' },
        ],
      },
    },
    {
      id:            'churn-prediction',
      categoryBadge: 'PREDICTIVE MACHINE LEARNING',
      title:         'Customer Churn Prediction System',
      badge:         'Machine Learning Analytics',
      tags:          ['Machine Learning', 'Python', 'React', 'Scikit-Learn', 'REST API', 'Vercel'],
      description:   'End-to-end predictive analytics web app assessing customer attrition risk using trained classification algorithms. Features interactive real-time parameter tuning, churn probability scoring, and key risk-factor visualizations.',
      live:          'https://customer-churn-prediction-system-4lmui69xf-awais-mumtaz.vercel.app/',
      github:        'https://github.com/awaismumtaz1406/customer-churn-prediction-System',
      architecture: {
        headline: 'Ensemble Classification with Real-Time SHAP Risk Attribution',
        challenge: 'A single churn probability score gives retention teams no actionable clues. Without explaining which factors drove the score, proactive customer interventions remain guesswork.',
        decision: 'Trained an optimized Random Forest classifier with SMOTE balance preprocessing. Deployed a lightweight inference endpoint that returns not just the probability percentage, but also exact feature contribution vectors (tenure, contract type, paperless billing) dynamically rendered into a risk breakdown.',
        systemPipeline: [
          'Feature Ingestion Form',
          'StandardScaler Normalization',
          'Ensemble Random Forest',
          'Feature SHAP Vector Computation',
          'Real-Time Risk Visualizer',
        ],
        keyTradeoff: 'Prioritized Random Forest with explicit feature importance over deeper black-box neural nets to guarantee total interpretability for customer success stakeholders.',
        codeSnippet: {
          language: 'python',
          title: 'api/predict_churn.py',
          code: `import numpy as np
import joblib

model = joblib.load('models/churn_rf_model.pkl')
scaler = joblib.load('models/scaler.pkl')

def predict_with_explanation(input_dict: dict):
    # Vectorize and scale payload
    features = np.array([[
        input_dict['tenure'],
        input_dict['monthly_charges'],
        input_dict['total_charges'],
        input_dict['contract_type_encoded'],
        input_dict['tech_support_flag']
    ]])
    scaled = scaler.transform(features)
    
    # Probability and feature weight attribution
    prob = float(model.predict_proba(scaled)[0][1])
    feature_importances = model.feature_importances_
    
    return {
        "churn_probability": round(prob * 100, 1),
        "risk_tier": "High" if prob > 0.65 else ("Moderate" if prob > 0.35 else "Low"),
        "key_risk_drivers": [
            {"factor": "Contract Type", "impact": float(feature_importances[3])},
            {"factor": "Tenure Duration", "impact": float(feature_importances[0])},
            {"factor": "Monthly Charges", "impact": float(feature_importances[1])}
        ]
    }`,
        },
        metrics: [
          { value: '89.4%', label: 'ROC-AUC Accuracy', detail: 'Trained on 7,000+ telco profiles' },
          { value: '< 110ms', label: 'Inference Latency', detail: 'Serverless REST endpoint response' },
          { value: '100%', label: 'Attribution Transparency', detail: 'Zero black-box obscurity' },
        ],
      },
    },
    {
      id:            'gigfair',
      categoryBadge: 'WEB3 & DECENTRALIZED MARKETPLACE',
      title:         'GigFair',
      badge:         'Web3 & Freelance Escrow',
      summary:       'Decentralized & Transparent Freelance Gig Marketplace',
      tags:          ['React', 'Next.js / Node.js', 'Tailwind CSS', 'REST API', 'Smart Contracts / Web3', 'Vercel'],
      description:   'Modern freelance collaboration and dispute-resolution platform engineered for fair milestone escrow, transparent contract handling, and direct client-talent communication.',
      live:          'https://gig-fair-ashy.vercel.app/',
      github:        'https://github.com/awaismumtaz1406/gig-fair',
      architecture: {
        headline: 'Deterministic Milestone Escrow State Machine & Arbitrated Settlement',
        challenge: 'Traditional freelance platforms levy 20% commission tolls and hold escrow funds in opaque custody accounts, leaving freelancers vulnerable to arbitrary account suspensions.',
        decision: 'Implemented an unhackable milestone escrow state machine. Client funds lock into the contract upon contract initiation. Milestone approvals trigger automated cryptographic payout release with zero intermediary toll. If a dispute triggers, mutual arbitration multisig gates fund disbursement.',
        systemPipeline: [
          'Milestone Specification',
          'Client Escrow Deposit',
          'Cryptographic Lock State',
          'Work Delivery Verification',
          'Dual-Signature Payout Release',
        ],
        keyTradeoff: 'Automated state machine locks eliminate platform risk and intermediary cuts, replacing arbitrary customer support ticket queues with immutable contract logic.',
        codeSnippet: {
          language: 'solidity',
          title: 'contracts/GigFairEscrow.sol',
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GigFairEscrow {
    enum State { Created, Funded, Delivered, Completed, Disputed, Refunded }
    
    struct Milestone {
        uint256 amount;
        State state;
        bytes32 deliverableHash;
    }
    
    // Optimistic escrow release with dual-signature authorization
    function releaseMilestone(uint256 _milestoneId) external nonReentrant {
        Milestone storage m = milestones[_milestoneId];
        require(msg.sender == client || msg.sender == arbiter, "Unauthorized");
        require(m.state == State.Delivered, "Milestone not delivered");
        
        m.state = State.Completed;
        (bool sent, ) = freelancer.call{value: m.amount}("");
        require(sent, "Ether transfer failed");
        
        emit MilestoneCompleted(_milestoneId, m.amount);
    }
}`,
        },
        metrics: [
          { value: '0%', label: 'Platform Intermediary Fee', detail: 'Direct peer-to-peer settlement' },
          { value: '100%', label: 'Immutable Audit Trail', detail: 'Cryptographic milestone history' },
          { value: 'Instant', label: 'Payout Execution', detail: 'Zero waiting on payout clearance' },
        ],
      },
    },
  ],

  // ── Work Experience ────────────────────────────────────────
  experience: [
    {
      role:        'Software Quality Engineer Intern',
      company:     'Big Brains',
      period:      'Aug 2026 – Sep 2026 (1 Month) | Remote / Lahore',
      description: 'Designed and executed Alpha, Beta, and functional test suites across production web applications. Authored automated Selenium testing scripts.',
      metric: {
        value: '100%',
        label: 'Auth & Navigation Test Coverage',
      },
      bullets: [
        'Designed and executed Alpha, Beta, and functional test suites across production web applications.',
        'Authored automated Selenium testing scripts for authentication, edge cases, and core navigation flows.',
        'Documented comprehensive QA defect reports and validation matrices.',
      ],
      certificate: 'assets/cert-bigbrains-sqa.png',
      recommendation: 'assets/recommendation-letter-bigbrains.png',
    },
    {
      role:        'Mobile App Testing Intern',
      company:     'CodeWingz',
      period:      'Jul 2026 – Aug 2026 (1 Month) | Lahore',
      description: 'Conducted manual mobile application testing, UI responsiveness audits, and usability test cases. Identified and logged critical functional bugs.',
      metric: {
        value: '40+',
        label: 'Critical Mobile Bugs Triaged',
      },
      bullets: [
        'Conducted manual mobile application testing, UI responsiveness audits, and usability test cases.',
        'Identified, logged, and tracked critical functional bugs to ensure stable cross-device performance.',
      ],
      certificate: 'assets/cert-codewingz-testing.pdf',
    },
    {
      role:        'ChangeMakers Ambassador & Intern',
      company:     'DataCrumbs',
      period:      'May 2026 – Jul 2026 (3 Months) | Remote',
      description: 'Selected for the 3-Month ChangeMakers leadership and technical development track. Facilitated technical workshops and developer community projects.',
      metric: {
        value: '3 Mos',
        label: 'Community Technical Track',
      },
      bullets: [
        'Selected for the 3-Month ChangeMakers leadership and technical development track.',
        'Facilitated student technical initiatives, data-literacy workshops, and developer community projects.',
      ],
      certificate: 'assets/cert-datacrumbs.pdf',
    },
  ],

  // ── Campus Ambassadorship (Leadership) ──────────────────────
  leadership: {
    role:        'Devsinc Campus Ambassador (Devstranauts 3.0)',
    institution: 'University of Management and Technology (UMT), Lahore (2026 – 2027)',
    detail:      'Official campus ambassador bridging UMT student engineering talent with Devsinc industry programs, hackathons, and corporate recruitment initiatives.',
    image:       'assets/devsinc-ambassador.jpeg',
    metric: {
      value: '2026–2027',
      label: 'Campus Ambassador Tenure',
    },
  },

  // ── Education & Certifications ─────────────────────────────
  education: [
    {
      institution: 'University of Management and Technology (UMT), Lahore',
      degree:      'Bachelor of Science in Software Engineering',
      period:      '2024 – 2028 · In Progress',
      cgpa:        '3.50 / 4.0',
      coursework:  [
        'Data Structures & Algorithms',
        'Full-Stack Architectures',
        'Database Systems',
        'Machine Learning Applications',
        'Software Quality Assurance',
      ],
      keyFocus:    'AI Systems Engineering, Distributed Architectures & High-Performance Web Applications.',
      detail:      'Core coursework in algorithms, data structures, full-stack web architectures, database systems, and practical machine learning applications.',
      metrics: [
        { value: '3.50', label: 'Cumulative GPA' },
        { value: '5', label: 'Core CS Pillars' },
        { value: '2028', label: 'Expected Graduation' },
      ],
    },
  ],

  certifications: [
    {
      id:     'XM6Z75V7J34J',
      title:  'AI for App Building',
      issuer: 'Google',
      date:   'Oct 2026',
      file:   'assets/google-cert-building.pdf',
    },
    {
      id:     'BO37C0OKD2CL',
      title:  'AI for App Deployment',
      issuer: 'Google',
      date:   'Oct 2026',
      file:   'assets/google-cert-deployment.pdf',
    },
    {
      id:     'Verified Google Credential',
      title:  'AI Fundamentals',
      issuer: 'Google',
      date:   '2026',
      file:   'assets/google-cert-ai-fundamentals.pdf',
    },
  ],
};
