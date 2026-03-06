import styles from './Footer.module.css'
import SpotifyIcon from './SpotifyIcon'

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className={styles.footer}>
      <a
        href="#"
        className={styles.logo}
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      >
        <div className={styles.iconWrap}><SpotifyIcon size={16} /></div>
        <span className={styles.wordmark}>Spotify <span>Data Lab</span></span>
      </a>

      <p className={styles.copy}>© 2025 Spotify Data Lab. Dibuat dengan ♥ &amp; Python.</p>

      <ul className={styles.links}>
        <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Beranda</button></li>
        <li><button onClick={() => scrollTo('dashboard')}>Dashboard</button></li>
        <li><button onClick={() => scrollTo('features')}>Fitur</button></li>
      </ul>
    </footer>
  )
}
