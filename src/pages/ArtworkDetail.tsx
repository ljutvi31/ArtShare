import styles from '../styles/ArtworkDetail.module.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { useLang } from '../hooks'
import { STRINGS } from '../lib/i18n'
import { SEED } from '../data/seed'
import { BadgePill } from '../components/BadgePill'
import type { Artwork } from '../types'

export function ArtworkDetail(){
  const { id } = useParams()
  const { lang } = useLang()
  const t = STRINGS[lang]
  const [items, setItems] = useState<Artwork[]>(SEED.map(x=>({...x})))
  const item = useMemo(()=>items.find(x=>x.id===id), [items, id])
  const totalForArtist = useMemo(()=>{
    return items.filter(x => x.artist === item?.artist).reduce((sum, x) => sum + x.likes, 0)
  }, [items, item?.artist])

  if(!item){
    return (
      <div className='container' style={{padding:'40px 0'}}>
        <p style={{color:'var(--muted)', textAlign:'center', fontSize:'18px'}}>
          {lang === 'fr' ? 'Œuvre introuvable.' : 'Artwork not found.'}
        </p>
        <br/>
        <div style={{textAlign:'center'}}>
          <Link className='link' to='/'>← {lang==='fr'?'Retour':'Back'}</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`container ${styles.wrap}`}>
      <Link to='/' className={styles.backLink}>{lang==='fr'?'Retour':'Back'}</Link>
      <div className={styles.grid}>
        <img className={styles.img} src={item.image} alt={item.title} />
        <div className={styles.side}>
          <h2>{item.title}</h2>
          <p className={styles.by}>{t.by} <Link className='link' to={`/profile/${encodeURIComponent(item.artist)}`}>{item.artist}</Link></p>
          <BadgePill total={totalForArtist} />
          <div className={styles.style}>
            🎨 {t.styles[item.style]}
          </div>
          <button 
            onClick={()=>setItems(prev=>prev.map(x=>x.id===item.id?{...x, likes:x.likes+1}:x))} 
            className={styles.likeBtn}
          >
            👍 <span>{item.likes} {item.likes <= 1 ? t.like : t.likes}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
