export function shareOrOpen(title: string, text: string, url: string) {
  if (navigator.share) { navigator.share({ title, text, url }).catch(() => void 0); return }
  const li = `https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
  window.open(li, '_blank')
}
export function shareLinks(url: string, text: string) {
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`,
  }
}
