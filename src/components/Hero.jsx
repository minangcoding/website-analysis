import styles from './Hero.module.css'

const audioFeatures = [
  { label: 'Danceability', value: 0.80 },
  { label: 'Energy',       value: 0.70 },
  { label: 'Valence',      value: 0.65 },
  { label: 'Acousticness', value: 0.20 },
]

const barHeights = [40, 60, 35, 75, 100, 88, 65, 45, 72, 92, 50, 80]

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* Left content */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          AI-Powered Music Analytics
        </div>

        <h1 className={styles.title}>
          <span className={styles.soft}>Prediksi</span>
          Lagu <span className={styles.green}>Hits</span><br />Berikutnya.
        </h1>

        <p className={styles.desc}>
          Menganalisis <strong>89.740 lagu unik</strong> untuk membedah rahasia industri
          musik — dari danceability hingga instrumentalness, semua dihitung oleh AI.
        </p>

        <div className={styles.actions}>
          <button className={styles.btnGreen} onClick={() => scrollTo('dashboard')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Buka Hit Predictor
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('features')}>
            Lihat Fitur
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </div>

      {/* Right floating card */}
      <div className={styles.visual}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.albumThumb}>🎵</div>
            <div>
              <div className={styles.trackName}>Sample Track</div>
              <div className={styles.trackSub}>Analisis AI · Real-time</div>
            </div>
          </div>

          <div className={styles.scoreRow}>
            <span className={styles.score}>87</span>
            <div className={styles.scoreLabel}>
              / 100<br />
              <span className={styles.scoreGreen}>POPULER ✓</span>
            </div>
          </div>

          <div className={styles.bars}>
            {barHeights.map((h, i) => (
              <div
                key={i}
                className={`${styles.bar} ${h >= 88 ? styles.barHi : h >= 60 ? styles.barMed : ''}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className={styles.features}>
            {audioFeatures.map(f => (
              <div key={f.label} className={styles.featRow}>
                <span className={styles.featLabel}>{f.label}</span>
                <div className={styles.featTrack}>
                  <div className={styles.featFill} style={{ width: `${f.value * 100}%` }} />
                </div>
                <span className={styles.featVal}>{f.value.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
