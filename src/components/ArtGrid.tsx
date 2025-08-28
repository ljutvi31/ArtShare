import styles from '../styles/Home.module.css'
import { useMemo } from 'react'
import type { Artwork } from '../types'
import { ArtCard } from './ArtCard'
import { Comments } from './Comments'

export function ArtGrid({
  items,
  setItems
}: {
  items: Artwork[]
  setItems: (f: (prev: Artwork[]) => Artwork[]) => void
}) {
  // total des likes par artiste (inchangé)
  const totals = useMemo(() => {
    const m = new Map<string, number>()
    for (const it of items) m.set(it.artist, (m.get(it.artist) || 0) + it.likes)
    return m
  }, [items])

  return (
    // ⚠️ '.grid' n'est plus un grid CSS mais un conteneur flex (voir Home.module.css)
    <div className={styles.grid}>
      {items.map((it) => (
        <div key={it.id} className={styles.item}>
          <ArtCard
            item={it}
            totalForArtist={totals.get(it.artist) || 0}
            onLike={() =>
              setItems((prev) =>
                prev.map((x) => (x.id === it.id ? { ...x, likes: x.likes + 1 } : x))
              )
            }
          />
          <div style={{ padding: '0 14px' }}>
            <Comments
              initial={it.comments}
              onAdd={(text) =>
                setItems((prev) =>
                  prev.map((x) =>
                    x.id === it.id
                      ? { ...x, comments: [...x.comments, { user: 'You', text }] }
                      : x
                  )
                )
              }
            />
          </div>
        </div>
      ))}
    </div>
  )
}
