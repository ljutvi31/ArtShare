// App.tsx — version propre
import { Outlet, Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { STRINGS, LangKey } from './lib/i18n'
import nav from "./styles/Navbar.module.css";

export default function App() {
  const [lang, setLang] = useState<LangKey>('fr')
  const t = STRINGS[lang]

  return (
    <div>
      <header className={nav.navbar}>
        <div className={`container ${nav.inner}`}>
          <Link to='/' className={nav.brand}>
            <div className={nav.logo}>AF</div>
            <div>
              <h1 className={nav.title}>ArtForge</h1>
              <p className={nav.tagline}>{t.tagline}</p>
            </div>
          </Link>
          <nav className={nav.nav}>
            <NavLink to='/'>{lang==='fr'?'Accueil':'Home'}</NavLink>
            <NavLink to='/upload'>{lang==='fr'?'Publier':'Upload'}</NavLink>
          </nav>
          <div className={nav.lang} role='radiogroup' aria-label={t.language}>
            <button className={`${nav.langBtn} ${lang==='fr'?nav.langBtnActive:''}`} onClick={()=>setLang('fr')}>FR</button>
            <button className={`${nav.langBtn} ${lang==='en'?nav.langBtnActive:''}`} onClick={()=>setLang('en')}>EN</button>
          </div>
        </div>
      </header>

      {/* le contenu des routes enfants arrive ici */}
      <Outlet context={{ lang }}/>

      <footer style={{borderTop:'1px solid var(--border)', background:'#fff', marginTop:24}}>
        <div className='container' style={{display:'flex', justifyContent:'space-between', padding:'18px 0', color:'var(--muted)'}}>
          <p>© {new Date().getFullYear()} ArtForge. {lang==='fr'?'Tous droits réservés.':'All rights reserved.'}</p>
          <a className='link' href='#'>{lang==='fr'?'Mentions':'Legal'}</a>
        </div>
      </footer>
    </div>
  )
}
