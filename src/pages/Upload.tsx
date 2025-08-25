import styles from '../styles/Upload.module.css'
import { useLang } from '../hooks'
import { STRINGS } from '../lib/i18n'

export function Upload(){
  const { lang } = useLang()
  const t = STRINGS[lang]
  
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.header}>
        <h2>{lang==='fr'?'Publier une œuvre (prototype)':'Upload artwork (prototype)'}</h2>
        <p>{lang==='fr'?'Formulaire non connecté (backend à venir).':'Form not connected (backend coming soon).'}</p>
      </div>
      <form className={styles.form}>
        <input className={styles.input} placeholder={lang==='fr'?'Titre':'Title'} />
        <input className={styles.input} placeholder={lang==='fr'?'Artiste':'Artist'} />
        <select className={styles.select}>
          <option>{t.styles.sketch}</option>
          <option>{t.styles.painting}</option>
          <option>{t.styles.watercolor}</option>
          <option>{t.styles.technical}</option>
          <option>{t.styles.tattoo}</option>
          <option>{t.styles.other}</option>
        </select>
        <input type='file' className={styles.file} />
        <button type='button' className={styles.btn}>
          {lang==='fr'?'Prévisualiser':'Preview'}
        </button>
      </form>
    </div>
  )
}
