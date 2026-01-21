import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Fractal Resonance Coherence
        </h1>
        <p className={styles.heroTagline}>
          A Mathematical Framework for Consciousness Dynamics
        </p>
        <p className={styles.heroDescription}>
          Exploring the physics of coherence, identity, and transformation through
          rigorous mathematical formalism and empirical investigation.
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.primaryButton} to="/research">
            View Research
          </Link>
          <Link className={styles.secondaryButton} to="/videos">
            Watch Videos
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, description, link, linkText, external }) {
  const LinkComponent = external ? 'a' : Link;
  const linkProps = external
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : { to: link };

  return (
    <div className={styles.featureCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <LinkComponent {...linkProps} className={styles.cardLink}>
          {linkText || 'Learn more'} →
        </LinkComponent>
      )}
    </div>
  );
}

function ResearchSection() {
  const papers = [
    {
      title: 'The Λ-Field Theory',
      description: 'Unified coherence dynamics for fundamental physics. The core mathematical formalism.',
      link: 'https://github.com/hadsern/dominion/blob/resonance-code-review-16890500689642429003/FRC%20Resources/published%20papers/FRC_100_007_Lambda_Field_v3.pdf',
      linkText: 'Read Paper',
      external: true,
    },
    {
      title: 'Resonance Complexity Theory',
      description: 'A field-theoretic model of resonant interference and emergent awareness.',
      link: 'https://arxiv.org/abs/2505.20580',
      linkText: 'View on arXiv',
      external: true,
    },
    {
      title: 'Quantum Foundations',
      description: 'Born rule derivation from resonant equilibrium and deviation conditions.',
      link: '/research',
      linkText: 'All Papers',
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Research</h2>
      <div className={styles.featureGrid}>
        {papers.map((paper, idx) => (
          <FeatureCard key={idx} {...paper} />
        ))}
      </div>
    </section>
  );
}

function FrameworkSection() {
  return (
    <section className={styles.sectionAlt}>
      <h2 className={styles.sectionTitle}>The Framework</h2>
      <div className={styles.frameworkContent}>
        <div className={styles.frameworkText}>
          <p>
            Fractal Resonance Coherence (FRC) proposes a mathematical framework where
            consciousness and physical phenomena emerge from coherence dynamics in a
            unified field structure.
          </p>
          <p>
            Key contributions include:
          </p>
          <ul>
            <li>The <strong>Λ-field</strong> formalism for coherence dynamics</li>
            <li>Derivation of quantum mechanical principles from resonance equilibrium</li>
            <li>Universal Coherence Condition (UCC) and its PDE structure</li>
            <li>Applications to thermodynamics, quantum chaos, and consciousness modeling</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ApplicationsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Applications</h2>
      <div className={styles.featureGrid}>
        <FeatureCard
          title="Quantum Physics"
          description="Novel approaches to quantum foundations, including Born rule derivation and decoherence analysis."
        />
        <FeatureCard
          title="Complex Systems"
          description="Modeling coherence and dissipation in dynamical systems using the Λ-field formalism."
        />
        <FeatureCard
          title="AI & Cognition"
          description="Mathematical frameworks for persistent identity and state tracking in autonomous systems."
        />
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <h2>Explore the Research</h2>
      <p>Access the complete collection of papers, videos, and source code.</p>
      <div className={styles.heroButtons}>
        <Link className={styles.primaryButton} to="/research">
          Publications
        </Link>
        <a
          className={styles.secondaryButton}
          href="https://github.com/hadsern/dominion"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Fractal Resonance Coherence"
      description="A mathematical framework for consciousness dynamics and coherence physics"
    >
      <HeroSection />
      <main>
        <ResearchSection />
        <FrameworkSection />
        <ApplicationsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
