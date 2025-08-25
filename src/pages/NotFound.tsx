import styles from '../styles/NotFound.module.css'
import { Link } from 'react-router-dom'
import { useLang } from '../hooks'

export function NotFound(){
  const { lang } = useLang()
  
  return (
    <div className={`container ${styles.wrap}`}>
      <h2>404</h2>
      <p>{lang==='fr'?'Page introuvable':'Page not found'}</p>
      <Link to='/' className='link'>
        {lang==='fr'?'Retour à l\'accueil':'Back to home'}
      </Link>
    </div>
  )
}
