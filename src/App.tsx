import { Outlet, Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { STRINGS, LangKey } from './lib/i18n'
import nav from './styles/Navbar.module.css'


export default function App() {
  const [lang, setLang] = useState<LangKey>('fr')
  const t = STRINGS[lang]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className={nav.navbar}>
        <div className={`container ${nav.inner}`}>
          <Link to='/' className={nav.brand}>
            <div className={nav.logo}>AF</div>
            <div className={nav.brandText}>
              <h1 className={nav.title}>ArtForge</h1>
              <p className={nav.tagline}>{t.tagline}</p>
            </div>
          </Link>
          <div className={nav.actions}>
            <nav className={nav.nav}>
              <NavLink to='/' className={nav.navLink}>
                {lang === 'fr' ? 'Accueil' : 'Home'}
              </NavLink>
              <NavLink to='/upload' className={nav.navLink}>
                {lang === 'fr' ? 'Publier' : 'Upload'}
              </NavLink>
            </nav>
            <div className={nav.lang} data-active={lang} role='radiogroup' aria-label={t.language}>
              <button 
                className={`${nav.langBtn} ${lang === 'fr' ? nav.langBtnActive : ''}`} 
                onClick={() => setLang('fr')}
              >
                FR
              </button>
              <button 
                className={`${nav.langBtn} ${lang === 'en' ? nav.langBtnActive : ''}`} 
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>
      <main style={{ flex: 1 }}>
        <Outlet context={{ lang }} />
      </main>

      <footer style={{
        borderTop: '1px solid var(--border)', 
        background: 'var(--surface)', 
        marginTop: 'var(--space-12)',
        padding: 'var(--space-6) 0'
      }}>
        <div className='container' style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          color: 'var(--text-muted)',
          fontSize: 'var(--text-sm)'
        }}>
          <p>© {new Date().getFullYear()} ArtForge. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          <a className='link' href='#'>{lang === 'fr' ? 'Mentions légales' : 'Legal'}</a>
        </div>
      </footer>
    </div>
  )
}
