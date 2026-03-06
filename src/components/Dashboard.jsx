import { useRef, useState } from 'react'
import styles from './Dashboard.module.css'

const STREAMLIT_URL = 'https://dashboard-analysis-spotify-ct5buuaudjvdkpr3wst3qf.streamlit.app/?embedded=true'
const STREAMLIT_URL_FULL = 'https://dashboard-analysis-spotify-ct5buuaudjvdkpr3wst3qf.streamlit.app/'

export default function Dashboard() {
  const iframeRef = useRef(null)
  const [key, setKey] = useState(0)

  const handleRefresh = () => setKey(k => k + 1)
  const handleNewTab = () => window.open(STREAMLIT_URL_FULL, '_blank')

  return (
    <section id="dashboard" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Live Dashboard</span>
        <h2 className={styles.title}>Spotify Data Lab</h2>
        <p className={styles.sub}>
          Atur slider audio features dan lihat prediksi AI secara real-time, langsung di bawah ini.
        </p>
      </div>

      <div className={styles.wrapper}>
        {/* Green top bar */}
        <div className={styles.topbar}>
          <div className={styles.dots}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
          </div>

          <div className={styles.urlBar}>
            🔒{' '}
            <span className={styles.urlGreen}>dashboard-analysis-spotify</span>
            -ct5buuaudjvdkpr3wst3qf.streamlit.app
          </div>

          <div className={styles.actions}>
            <button className={styles.btn} onClick={handleRefresh} title="Refresh">
              ↺ Refresh
            </button>
            <button className={styles.btn} onClick={handleNewTab} title="Buka di tab baru">
              ↗ Tab Baru
            </button>
          </div>
        </div>

        {/* Iframe */}
        <div className={styles.iframeWrap}>
          <iframe
            key={key}
            ref={iframeRef}
            src={STREAMLIT_URL}
            title="Spotify Data Lab — Hit Predictor"
            allow="fullscreen"
            className={styles.iframe}
          />
        </div>
      </div>
    </section>
  )
}
