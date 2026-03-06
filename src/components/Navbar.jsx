import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import SpotifyIcon from './SpotifyIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo} onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        <div className={styles.iconWrap}><SpotifyIcon size={20} /></div>
        <span className={styles.wordmark}>Spotify <span>Data Lab</span></span>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <li><button onClick={() => scrollTo('stats')}>Dataset</button></li>
        <li><button onClick={() => scrollTo('dashboard')}>Dashboard</button></li>
        <li><button onClick={() => scrollTo('features')}>Fitur</button></li>
        <li>
          <button className={styles.cta} onClick={() => scrollTo('dashboard')}>
            Coba Sekarang
          </button>
        </li>
      </ul>

      <button className={styles.hamburger} onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
        <span className={menuOpen ? styles.bar1Open : ''} />
        <span className={menuOpen ? styles.bar2Open : ''} />
        <span className={menuOpen ? styles.bar3Open : ''} />
      </button>
    </nav>
  )
}
