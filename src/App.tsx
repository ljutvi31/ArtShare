// src/App.tsx
import { Outlet, Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { STRINGS, LangKey } from './lib/i18n'          // ← ./lib (pas ../lib)
import nav from './styles/Navbar.module.css'           // ← ./styles (pas ../styles)

export default function App() {
  const [lang, setLang] = useState<LangKey>('fr')
  const t = STRINGS[lang]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* NAVBAR */}
      <header className={nav.navbar} role="banner">
        <div className={`container ${nav.inner}`}>
          {/* Marque */}
          <Link to='/' className={nav.brand} aria-label="ArtForge – Accueil">
            <div className={nav.logo}>AF</div>
            <div className={nav.brandText}>
              <h1 className={nav.title}>ArtForge</h1>
              <p className={nav.tagline}>{t.tagline}</p>
            </div>
          </Link>

          {/* Liens + sélecteur de langue */}
          <div className={nav.actions}>
            <nav className={nav.nav} aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'}>
              <NavLink to='/' end className={({ isActive }) => `${nav.navLink} ${isActive ? nav.active : ''}`}>
                {lang === 'fr' ? 'Accueil' : 'Home'}
              </NavLink>
              <NavLink to='/upload' className={({ isActive }) => `${nav.navLink} ${isActive ? nav.active : ''}`}>
                {lang === 'fr' ? 'Publier' : 'Upload'}
              </NavLink>
            </nav>

            {/* Toggle FR/EN */}
            <div className={nav.langSwitch} data-active={lang} role="group" aria-label={t.language}>
              <button
                type="button"
                className={`${nav.langBtn} ${lang === 'fr' ? nav.langBtnActive : ''}`}
                aria-pressed={lang === 'fr'}
                onClick={() => setLang('fr')}
                title="Français"
              >
                FR
              </button>
              <button
                type="button"
                className={`${nav.langBtn} ${lang === 'en' ? nav.langBtnActive : ''}`}
                aria-pressed={lang === 'en'}
                onClick={() => setLang('en')}
                title="English"
              >
                EN
              </button>
              <span className={nav.thumb} aria-hidden="true" />
            </div>
          </div>
        </div>
      </header>

      {/* Contenu */}
      <main style={{ flex: 1 }}>
        <Outlet context={{ lang }} />
      </main>

      {/* Pied de page */}
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
