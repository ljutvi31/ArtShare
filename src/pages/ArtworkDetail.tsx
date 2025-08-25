import styles from '../styles/ArtworkDetail.module.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { useLang } from '../hooks'
import { STRINGS } from '../lib/i18n'
import { SEED } from '../data/seed'
import type { Artwork } from '../types'

export function ArtworkDetail(){
  const { id } = useParams()
  const { lang } = useLang()
  const t = STRINGS[lang]
  const [items, setItems] = useState<Artwork[]>(SEED.map(x=>({...x})))
  const item = useMemo(()=>items.find(x=>x.id===id), [items, id])

  if(!item){
    return <div className='container' style={{padding:'40px 0'}}><p style={{color:'var(--muted)'}}>Œuvre introuvable.</p><br/><Link className='link' to='/'>← {lang==='fr'?'Retour':'Back'}</Link></div>
  }

  return (
    <div className={`container ${styles.wrap}`}>
      <Link to='/' className='link'>← {lang==='fr'?'Retour':'Back'}</Link>
      <div className={styles.grid}>
        <img className={styles.img} src={item.image} alt={item.title} />
        <div className={styles.side}>
          <h2>{item.title}</h2>
          <p className={styles.by}>{t.by} <Link className='link' to={`/profile/${encodeURIComponent(item.artist)}`}>{item.artist}</Link></p>
          <p style={{marginTop:16}}>{t.styles[item.style]}</p>
          <button onClick={()=>setItems(prev=>prev.map(x=>x.id===item.id?{...x, likes:x.likes+1}:x))} style={{marginTop:16}} className='link'>
            👍 {item.likes}
          </button>
        </div>
      </div>
    </div>
  )
}
