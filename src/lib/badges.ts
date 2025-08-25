import type { LangKey } from './i18n'
const BADGES = [
  { threshold: 1, name: { en: 'Welcome, the Artist', fr: 'Welcome, the artist' } },
  { threshold: 10, name: { en: 'Not bad', fr: 'Not bad' } },
  { threshold: 50, name: { en: 'We are appreciated!', fr: 'On est apprécié !' } },
  { threshold: 100, name: { en: 'We are recognized!', fr: 'On est reconnu !' } },
  { threshold: 250, name: { en: 'Walk of fame', fr: 'Walk of fame' } },
  { threshold: 500, name: { en: 'All Star', fr: 'All Star' } },
  { threshold: 1000, name: { en: 'G.O.A.T', fr: 'G.O.A.T' } },
] as const
export function highestBadge(totalLikes: number, lang: LangKey) {
  let earned: string | null = null
  for (const b of BADGES) if (totalLikes >= b.threshold) earned = b.name[lang]
  return earned
}
