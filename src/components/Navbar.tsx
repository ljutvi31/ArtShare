import { Link, NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import { useLang } from '../hooks'
import { STRINGS } from '../lib/i18n'

export function Navbar() {
  const { lang } = useLang()
  const t = STRINGS[lang]
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link to='/' className={styles.brand}>
          <div className={styles.logo}>AF</div>
          <div>
            <h2 className={styles.title}>ArtForge</h2>
            <p className={styles.tagline}>{t.tagline}</p>
          </div>
        </Link>
        <div className={styles.nav}>
          <NavLink to='/'>{lang==='fr'?'Accueil':'Home'}</NavLink>
          <NavLink to='/upload'>{lang==='fr'?'Publier':'Upload'}</NavLink>
        </div>
      </div>
    </nav>
  )
}
