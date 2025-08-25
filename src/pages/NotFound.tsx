import styles from '../styles/NotFound.module.css'
import { Link } from 'react-router-dom'

export function NotFound(){
  return (
    <div className={`container ${styles.wrap}`}>
      <h2>404</h2>
      <p style={{color:'var(--muted)'}}>Page introuvable</p>
      <Link to='/' className='link' style={{display:'inline-block', marginTop:16}}>Retour à l'accueil</Link>
    </div>
  )
}
