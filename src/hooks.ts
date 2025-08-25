import { useOutletContext } from 'react-router-dom'
import type { LangKey } from './lib/i18n'
export function useLang(): { lang: LangKey } {
  return useOutletContext<{ lang: LangKey }>()
}
