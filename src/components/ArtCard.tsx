import { Link } from 'react-router-dom'
import styles from '../styles/ArtCard.module.css'
import { STRINGS } from '../lib/i18n'
import { useLang } from '../hooks'
import { shareOrOpen, shareLinks } from '../lib/share'
import { BadgePill } from './BadgePill'
import type { Artwork } from '../types'
import { useState } from 'react'

export function ArtCard({ item, totalForArtist, onLike }: { item: Artwork; totalForArtist: number; onLike: () => void }) {
  const { lang } = useLang()
  const t = STRINGS[lang]
  const [isLiked, setIsLiked] = useState(false)
  const url = typeof window !== 'undefined' ? window.location.href : 'https://example.com'
  const text = `${item.title} — ${t.by} ${item.artist}`
  const links = shareLinks(url, text)

  const handleLike = () => {
    setIsLiked(true)
    onLike()
    setTimeout(() => setIsLiked(false), 600)
  }

  return (
    <article className={styles.card}>
      <Link to={`/art/${item.id}`} className={styles.imageContainer}>
        <img className={styles.image} src={item.image} alt={`${item.title} – ${t.by} ${item.artist}`} />
        <div className={styles.imageOverlay} />
        <div className={styles.styleChip}>{t.styles[item.style]}</div>
      </Link>
      <div className={styles.content}>
        <header className={styles.header}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.meta}>{t.by} <Link className='link' to={`/profile/${encodeURIComponent(item.artist)}`}>{item.artist}</Link></p>
          {totalForArtist > 0 && <BadgePill total={totalForArtist} />}
        </header>
        <div className={styles.actions}>
          <button 
            className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`} 
            onClick={handleLike} 
            aria-label={item.likes <= 1 ? t.like : t.likes}
          >
            👍 <span>{item.likes} {item.likes <= 1 ? t.like : t.likes}</span>
          </button>
          <div className={styles.shareActions}>
            <button className={styles.shareButton} onClick={() => shareOrOpen(item.title, text, url)}>
              🔗 <span>{t.share}</span>
            </button>
            <a className={styles.shareLink} href={links.facebook} target='_blank' rel='noreferrer'>FB</a>
            <a className={styles.shareLink} href={links.linkedin} target='_blank' rel='noreferrer'>IN</a>
            <a className={styles.shareLink} href={links.whatsapp} target='_blank' rel='noreferrer'>WA</a>
          </div>
        </div>
      </div>
    </article>
  )
}
