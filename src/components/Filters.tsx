import styles from '../styles/Filters.module.css'
import { STRINGS } from '../lib/i18n'
import { useLang } from '../hooks'
import type { StyleKey } from '../types'

const STYLES: StyleKey[] = ['sketch','painting','watercolor','technical','tattoo','other']

export function Filters({ active, onChange }: { active: string; onChange: (s: string) => void }) {
  const { lang } = useLang()
  const t = STRINGS[lang]
  return (
    <div>
      <label className={styles.label}>{t.filterBy}</label>
      <div className={styles.wrap}>
        <button onClick={()=>onChange('')} className={`${styles.btn} ${active===''?styles.btnActive:''}`}>{t.allStyles}</button>
        {STYLES.map(s => (
          <button key={s} onClick={()=>onChange(s)} className={`${styles.btn} ${active===s?styles.btnActive:''}`}>{t.styles[s]}</button>
        ))}
      </div>
    </div>
  )
}
