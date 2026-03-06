import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

const stats = [
  { emoji: '🎵', number: '89.7K', label: 'Lagu Dianalisis',     tag: 'Spotify Dataset' },
  { emoji: '🤖', number: 'AI',    label: 'Hit Predictor',        tag: 'ML Model' },
  { emoji: '🎼', number: '10+',   label: 'Audio Features',       tag: 'Danceability, Energy…' },
  { emoji: '📊', number: 'Genre', label: 'Multi-Genre Analysis', tag: 'K-pop, Metal, Anime…' },
]

export default function Stats() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" className={styles.section}>
      <div
        ref={ref}
        className={`${styles.grid} ${visible ? styles.visible : ''}`}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={styles.item}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className={styles.emoji}>{s.emoji}</span>
            <div className={styles.number}>{s.number}</div>
            <div className={styles.label}>{s.label}</div>
            <div className={styles.tag}>✦ {s.tag}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
