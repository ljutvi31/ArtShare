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

  const styleCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    items.forEach(item => {
      counts[item.style] = (counts[item.style] || 0) + 1
    })
    return counts
  }, [items])

  const totalLikes = useMemo(() => {
    return items.reduce((sum, item) => sum + item.likes, 0)
  }, [items])
  return (
    <div className='container'>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {lang === 'fr' ? 'Découvrez l\'art sous toutes ses formes' : 'Discover art in all its forms'}
          </h1>
          <p className={styles.heroSubtitle}>
            {lang === 'fr' 
              ? 'Une plateforme moderne pour partager et découvrir des œuvres artistiques exceptionnelles de tous styles.'
              : 'A modern platform to share and discover exceptional artworks of all styles.'
            }
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>{items.length}</span>
              <span className={styles.heroStatLabel}>
                {lang === 'fr' ? 'Œuvres' : 'Artworks'}
              </span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>{new Set(items.map(i => i.artist)).size}</span>
              <span className={styles.heroStatLabel}>
                {lang === 'fr' ? 'Artistes' : 'Artists'}
              </span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>{totalLikes}</span>
              <span className={styles.heroStatLabel}>
                {lang === 'fr' ? 'Likes' : 'Likes'}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.controls}>
        <SearchBar query={query} onChange={setQuery} />
        <Filters active={activeStyle} onChange={setActiveStyle} counts={styleCounts} />
      </div>
      
      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <h3 className={styles.emptyTitle}>
            {lang === 'fr' ? 'Aucune œuvre trouvée' : 'No artworks found'}
          </h3>
          <p className={styles.emptyText}>{t.noResults}</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((item, index) => (
            <div key={item.id} className={styles.gridItem} style={{ animationDelay: `${index * 0.1}s` }}>
              <ArtGrid items={[item]} setItems={setItems} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
