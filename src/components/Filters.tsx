import styles from '../styles/Filters.module.css'
import { STRINGS } from '../lib/i18n'
import { useLang } from '../hooks'
import type { StyleKey } from '../types'

const STYLES: StyleKey[] = ['sketch','painting','watercolor','technical','tattoo','other']
const STYLE_ICONS: Record<StyleKey, string> = {
  sketch: '✏️',
  painting: '🎨',
  watercolor: '🌊',
  technical: '📐',
  tattoo: '🖋️',
  other: '✨'
}

export function Filters({ active, onChange, counts }: { 
  active: string; 
  onChange: (s: string) => void;
  counts?: Record<string, number>;
}) {
  const { lang } = useLang()
  const t = STRINGS[lang]
  
  const totalCount = counts ? Object.values(counts).reduce((sum, count) => sum + count, 0) : 0
  
  return (
    <div className={styles.container}>
      <label className={styles.label}>{t.filterBy}</label>
      <div className={styles.filterGrid}>
        <button 
          onClick={() => onChange('')} 
          className={`${styles.filterButton} ${active === '' ? styles.active : ''}`}
        >
          <span className={styles.filterIcon}>🎭</span>
          {t.allStyles}
          {counts && <span className={styles.filterCount}>{totalCount}</span>}
        </button>
        {STYLES.map(s => (
          <button 
            key={s} 
            onClick={() => onChange(s)} 
            className={`${styles.filterButton} ${active === s ? styles.active : ''}`}
          >
            <span className={styles.filterIcon}>{STYLE_ICONS[s]}</span>
            {t.styles[s]}
            {counts && counts[s] && <span className={styles.filterCount}>{counts[s]}</span>}
            {active === s && <div className={styles.activeIndicator} />}
          </button>
        ))}
      </div>
      {active && (
        <button 
          className={styles.clearFilters}
          onClick={() => onChange('')}
        >
          {lang === 'fr' ? 'Effacer les filtres' : 'Clear filters'}
        </button>
      )}
    </div>
  )
}
