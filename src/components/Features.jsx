import { useEffect, useRef, useState } from 'react'
import styles from './Features.module.css'

const features = [
  {
    num: '01',
    emoji: '🎯',
    title: 'Prediksi Hit Lagu',
    desc: 'Atur parameter audio seperti danceability, energy, dan tempo — AI akan langsung memprediksi potensi kesuksesan lagu tersebut di industri musik secara real-time.',
  },
  {
    num: '02',
    emoji: '📈',
    title: 'Analisis Genre Populer',
    desc: 'Visualisasi top 10 genre paling populer di Spotify — dari K-pop, metal, anime hingga pop-film — berdasarkan data riil dari 89.740 lagu unik.',
  },
  {
    num: '03',
    emoji: '🔬',
    title: 'Feature Importance',
    desc: 'Temukan fitur audio mana yang paling berpengaruh terhadap popularitas — instrumentalness, loudness, atau energy? Semua terjawab dengan visualisasi yang jelas.',
  },
]

export default function Features() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className={styles.section}>
      <div className={`${styles.header} ${visible ? styles.headerVisible : ''}`} ref={ref}>
        <span className={styles.tag}>Apa yang Bisa Kamu Lakukan</span>
        <h2 className={styles.title}>Fitur Utama</h2>
        <p className={styles.sub}>Dari prediksi lagu hingga eksplorasi genre, semua tersedia dalam satu platform interaktif.</p>
      </div>

      <div className={styles.grid}>
        {features.map((f, i) => (
          <div
            key={f.num}
            className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
            style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
          >
            <div className={styles.num}>{f.num}</div>
            <span className={styles.emoji}>{f.emoji}</span>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
