import styles from '../styles/SearchBar.module.css'
import { STRINGS } from '../lib/i18n'
import { useLang } from '../hooks'

export function SearchBar({ query, onChange }: { query: string; onChange: (q: string) => void }) {
  const { lang } = useLang()
  const t = STRINGS[lang]
  return (
    <div>
      <label className={styles.label}>{t.searchPlaceholder}</label>
      <input className={styles.input} value={query} onChange={(e)=>onChange(e.target.value)} placeholder={t.searchPlaceholder}/>
      {query.trim().length>0 && query.trim().length<3 && <p className={styles.hint}>{t.min3}</p>}
    </div>
  )
}
