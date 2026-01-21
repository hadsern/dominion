import React from 'react';
import Layout from '@theme/Layout';
import styles from './research.module.css';

const papers = [
  {
    id: 'FRC_100_007',
    title: 'The Λ-Field: Unified Coherence Dynamics for Fundamental Physics',
    code: 'FRC 100.007',
    description: 'The foundational paper introducing the Lambda field and its role in coherence dynamics.',
    size: '1.03 MB',
    category: 'Physics Core',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC_100_007_Lambda_Field_v3.pdf',
  },
  {
    id: 'FRC_100_010',
    title: 'Foundational Questions in Fractal Resonance Coherence',
    code: 'FRC 100.010',
    description: 'Exploring the philosophical and mathematical foundations of the FRC framework.',
    size: '767 KB',
    category: 'Foundations',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC_100_010_Foundational_Questions.pdf',
  },
  {
    id: 'FRC_100_002',
    title: 'Fractal Resonance Cognition in Quantum Chaos: Nodal Patterns in the Stadium Billiard',
    code: 'FRC 100.002',
    description: 'Applying FRC principles to quantum chaos and nodal pattern analysis.',
    size: '473 KB',
    category: 'Quantum Mechanics',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC100.002%20Fractal%20Resonance%20Cognition%20in%20Quantum%20Chaos%3A%20Nodal%20Patterns%20in%20the%20Stadium%20Billiard.pdf',
  },
  {
    id: 'FRC_100_004',
    title: 'Quantum Foundations of Fractal Resonance',
    code: 'FRC 100.004',
    description: 'The quantum mechanical basis for resonance and coherence phenomena.',
    size: '169 KB',
    category: 'Quantum Mechanics',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC_100_004_Quantum_Foundations.pdf',
  },
  {
    id: 'FRC_100_005',
    title: 'Thermodynamic Consistency in FRC',
    code: 'FRC 100.005',
    description: 'Ensuring thermodynamic laws are respected within the FRC framework.',
    size: '105 KB',
    category: 'Physics Core',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC_100_005_Thermodynamic_Consistency.pdf',
  },
  {
    id: 'FRC_100_006',
    title: 'Born Rule From Resonant Equilibrium',
    code: 'FRC 100.006',
    description: 'Deriving the Born rule from resonance equilibrium conditions.',
    size: '128 KB',
    category: 'Quantum Mechanics',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC_100_006_Born_Rule_From_Resonant_Equilibrium.pdf',
  },
  {
    id: 'FRC_100_006_002',
    title: 'Born Rule Deviation Conditions',
    code: 'FRC 100.006.002',
    description: 'When and how the Born rule may deviate under specific coherence conditions.',
    size: '187 KB',
    category: 'Quantum Mechanics',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC_100_006_002_Born_Rule_Deviation_Conditions.pdf',
  },
  {
    id: 'FRC_566_001',
    title: 'Reciprocity and Universal Coherence Condition',
    code: 'FRC 566.001',
    description: 'The mathematical relationship between reciprocity and the UCC.',
    size: '44 KB',
    category: 'Mathematics',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC_566_001_Reciprocity_and_UCC.pdf',
  },
  {
    id: 'FRC_566_010',
    title: 'UCC PDE Well-Posedness',
    code: 'FRC 566.010',
    description: 'Mathematical analysis of the Universal Coherence Condition PDE.',
    size: '29 KB',
    category: 'Mathematics',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC_566_010_UCC_PDE_Wellposedness.pdf',
  },
  {
    id: 'FRC_100_003',
    title: 'UCC and Dissipation',
    code: 'FRC 100.003',
    description: 'How dissipation interacts with the Universal Coherence Condition.',
    size: '60 KB',
    category: 'Physics Core',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC_100_003_566_UCC_and_Dissipation.pdf',
  },
  {
    id: 'FRC_841_004',
    title: 'CGL Alpha Drift',
    code: 'FRC 841.004',
    description: 'Analysis of alpha drift in Complex Ginzburg-Landau systems.',
    size: '350 KB',
    category: 'Physics Core',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC%20841.004%20CGL%20Alpha%20Drift.pdf',
  },
  {
    id: 'FRC_100_001',
    title: 'Introduction to Fractal Resonance Coherence',
    code: 'FRC 100.001',
    description: 'The introductory paper to the FRC framework.',
    size: '338 KB',
    category: 'Foundations',
    github: 'https://github.com/hadsern/dominion/blob/main/FRC%20Resources/published%20papers/FRC_100.001_mathjax.html.pdf',
  },
];

const externalPapers = [
  {
    id: 'arxiv_2505_20580',
    title: 'Resonance Complexity Theory and the Architecture of Consciousness',
    code: 'arXiv:2505.20580',
    description: 'A field-theoretic model of resonant interference and emergent awareness.',
    category: 'Consciousness',
    url: 'https://arxiv.org/abs/2505.20580',
    external: true,
  },
];

function PaperCard({ paper }) {
  return (
    <div className={styles.paperCard}>
      <div className={styles.paperHeader}>
        <span className={styles.paperCode}>{paper.code}</span>
        <span className={styles.paperCategory}>{paper.category}</span>
      </div>
      <h3 className={styles.paperTitle}>{paper.title}</h3>
      <p className={styles.paperDescription}>{paper.description}</p>
      <div className={styles.paperFooter}>
        {paper.size && <span className={styles.paperSize}>{paper.size}</span>}
        <a
          href={paper.github || paper.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.paperLink}
        >
          {paper.external ? 'Read on arXiv →' : 'Download PDF →'}
        </a>
      </div>
    </div>
  );
}

export default function Research() {
  const categories = [...new Set(papers.map(p => p.category))];

  return (
    <Layout
      title="Research"
      description="Published papers and research on Fractal Resonance Coherence"
    >
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Research Publications</h1>
          <p>
            Peer-reviewed papers and preprints on Fractal Resonance Coherence,
            quantum foundations, and coherence dynamics.
          </p>
        </header>

        <section className={styles.section}>
          <h2>Featured</h2>
          <div className={styles.featured}>
            {externalPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>FRC Paper Series</h2>
          <p className={styles.sectionDesc}>
            The complete technical documentation of the Fractal Resonance Coherence framework.
          </p>
          <div className={styles.paperGrid}>
            {papers.map(paper => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Source Repository</h2>
          <p>
            All papers and supplementary materials are available on GitHub:
          </p>
          <a
            href="https://github.com/hadsern/dominion/tree/main/FRC%20Resources/published%20papers"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoLink}
          >
            View on GitHub →
          </a>
        </section>
      </main>
    </Layout>
  );
}
