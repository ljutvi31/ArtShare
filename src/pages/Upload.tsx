import styles from '../styles/Upload.module.css'
export function Upload(){
  return (
    <div className='container' style={{padding:'24px 0'}}>
      <h2 style={{margin:'8px 0'}}>Publier une œuvre (prototype)</h2>
      <p style={{color:'var(--muted)'}}>Formulaire non connecté (backend à venir).</p>
      <form className={styles.form}>
        <input className={styles.input} placeholder='Titre' />
        <input className={styles.input} placeholder='Artiste' />
        <select className={styles.select}>
          <option>Croquis</option><option>Peinture</option><option>Aquarelle</option><option>Dessin technique</option><option>Tatouage</option><option>Autre</option>
        </select>
        <input type='file' className={styles.file} />
        <button type='button' className={styles.btn}>Prévisualiser</button>
      </form>
    </div>
  )
}
