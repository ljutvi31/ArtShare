import styles from '../styles/Home.module.css'
import { useMemo, useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { Filters } from '../components/Filters'
import { ArtGrid } from '../components/ArtGrid'
import { useLang } from '../hooks'
import { STRINGS } from '../lib/i18n'
import { SEED } from '../data/seed'
import type { Artwork } from '../types'

export function Home(){
  const { lang } = useLang()
  const t = STRINGS[lang]
  const [query, setQuery] = useState('')
  const [activeStyle, setActiveStyle] = useState('')
  const [items, setItems] = useState<Artwork[]>(SEED.map(x=>({...x})))

  const filtered = useMemo(()=>{
    const qOK = query.trim().length >= 3
    return items.filter(it => {
      const styleOK = !activeStyle || it.style === activeStyle
      const queryOK = !qOK || it.artist.toLowerCase().includes(query.trim().toLowerCase())
      return styleOK && queryOK
    })
  }, [items, query, activeStyle])

  return (
    <section className='container'>
      <div className={styles.controls}>
        <SearchBar query={query} onChange={setQuery} />
        <Filters active={activeStyle} onChange={setActiveStyle} />
      </div>
      {filtered.length===0 ? <p className={styles.empty}>{t.noResults}</p> : <ArtGrid items={filtered} setItems={setItems} />}
    </section>
  )
}
