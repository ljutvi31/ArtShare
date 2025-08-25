import styles from '../styles/ArtCard.module.css'
import { highestBadge } from '../lib/badges'
import { useLang } from '../hooks'

export function BadgePill({ total }: { total: number }) {
  const { lang } = useLang()
  const badge = highestBadge(total, lang)
  if (!badge) return null
  return <div className={styles.badge}>🏅 <span>{badge} · {total}</span></div>
}
