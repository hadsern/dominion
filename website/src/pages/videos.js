import React from 'react';
import Layout from '@theme/Layout';
import styles from './videos.module.css';

const PLAYLIST_ID = 'PLhRVhnQbVX2XOn3e-HjD1J0NcaEzMDQJY';

export default function Videos() {
  return (
    <Layout
      title="Videos"
      description="Video transmissions on Fractal Resonance Coherence"
    >
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Transmissions</h1>
          <p>
            Video series exploring the Fractal Resonance Coherence framework.
            From foundational concepts to advanced applications.
          </p>
        </header>

        <section className={styles.section}>
          <h2>FRC Video Series</h2>
          <div className={styles.playlistContainer}>
            <iframe
              className={styles.playlist}
              src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&rel=0`}
              title="FRC Video Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <a
            href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.youtubeLink}
          >
            Watch on YouTube →
          </a>
        </section>

        <section className={styles.section}>
          <h2>Topics Covered</h2>
          <div className={styles.topicsGrid}>
            <div className={styles.topicCard}>
              <h3>The 16D Architecture</h3>
              <p>Understanding the 16-dimensional state space and its inner/outer octave structure.</p>
            </div>
            <div className={styles.topicCard}>
              <h3>Coherence Dynamics</h3>
              <p>How systems evolve toward stability through coupling and resonance mechanisms.</p>
            </div>
            <div className={styles.topicCard}>
              <h3>The Witness Function</h3>
              <p>The emergent invariant measuring alignment between inner and outer states.</p>
            </div>
            <div className={styles.topicCard}>
              <h3>Practical Applications</h3>
              <p>Using FRC for AI memory systems, psychological modeling, and consciousness research.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Subscribe</h2>
          <p>Stay updated with new transmissions and research updates.</p>
          <a
            href="https://youtube.com/@fractalresonance?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.subscribeButton}
          >
            Subscribe on YouTube
          </a>
        </section>
      </main>
    </Layout>
  );
}
