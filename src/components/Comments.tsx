import styles from '../styles/Comments.module.css'
import { STRINGS } from '../lib/i18n'
import { useLang } from '../hooks'
import { useState } from 'react'
import type { Comment } from '../types'

export function Comments({ initial, onAdd }: { initial: Comment[]; onAdd: (text: string) => void }) {
  const { lang } = useLang()
  const t = STRINGS[lang]
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  return (
    <div>
      <button className={styles.toggle} onClick={()=>setOpen(v=>!v)}>{t.comment} • {initial.length}</button>
      {open && (
        <div className={styles.block}>
          <ul className={styles.list}>
            {initial.map((c,i)=>(<li className={styles.item} key={i}><strong>{c.user}: </strong>{c.text}</li>))}
            {initial.length===0 && <li className={styles.empty}>{t.noneYet}</li>}
          </ul>
          <div className={styles.form}>
            <input className={styles.input} value={text} onChange={(e)=>setText(e.target.value)} placeholder={t.addComment}
              onKeyDown={(e)=>{ if(e.key==='Enter' && text.trim()){ onAdd(text); setText('') } }} />
            <button className={styles.send} onClick={()=>{ if(!text.trim()) return; onAdd(text); setText('') }}>{t.send}</button>
          </div>
        </div>
      )}
    </div>
  )
}
