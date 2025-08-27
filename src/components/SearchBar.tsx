import styles from '../styles/SearchBar.module.css'
import { STRINGS } from '../lib/i18n'
import { useLang } from '../hooks'
import { useState } from 'react'

export function SearchBar({ query, onChange }: { query: string; onChange: (q: string) => void }) {
  const { lang } = useLang()
  const t = STRINGS[lang]
  const [isFocused, setIsFocused] = useState(false)

  const handleClear = () => {
    onChange('')
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {lang === 'fr' ? 'Rechercher un artiste' : 'Search for an artist'}
      </label>
      <div className={styles.inputContainer}>
        <input 
          className={styles.input} 
          value={query} 
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={t.searchPlaceholder}
        />
        <div className={styles.searchIcon}>🔍</div>
        {query.trim().length > 0 && (
          <button 
            className={`${styles.clearButton} ${styles.visible}`}
            onClick={handleClear}
            aria-label={lang === 'fr' ? 'Effacer la recherche' : 'Clear search'}
          >
            ×
          </button>
        )}
      </div>
      {query.trim().length>0 && query.trim().length<3 && <p className={styles.hint}>{t.min3}</p>}
    </div>
  )
}
