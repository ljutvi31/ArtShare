import styles from '../styles/Profile.module.css'
import { Link, useParams } from 'react-router-dom'
import { SEED } from '../data/seed'
import { useMemo } from 'react'
import { useLang } from '../hooks'
import { STRINGS } from '../lib/i18n'

export function Profile(){
  const { lang } = useLang()
  const t = STRINGS[lang]
  const { artist } = useParams()
  const decoded = artist ? decodeURIComponent(artist) : ''
  const works = useMemo(()=>SEED.filter(x=>x.artist===decoded), [decoded])
  const totalLikes = works.reduce((s,w)=>s+w.likes,0)

  return (
    <div className='container' style={{padding:'24px 0'}}>
      <Link to='/' className={styles.backLink}>{lang==='fr'?'Retour':'Back'}</Link>
      <div className={styles.header}>
        <h2 style={{margin:'8px 0'}}>{decoded}</h2>
        <p>{totalLikes} {lang==='fr'?'likes au total':'total likes'}</p>
      </div>
      <div className={styles.grid}>
        {works.map(w => (
          <Link key={w.id} to={`/art/${w.id}`} className={styles.card}>
            <img className={styles.img} src={w.image} alt={w.title} />
            <p className={styles.title}>{w.title}</p>
          </Link>
        ))}
        {works.length===0 && <div className={styles.empty}>{lang==='fr'?'Aucune œuvre.':'No artworks.'}</div>}
      </div>
    </div>
  )
}
