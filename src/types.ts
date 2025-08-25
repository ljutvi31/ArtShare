export type StyleKey = 'sketch' | 'painting' | 'watercolor' | 'technical' | 'tattoo' | 'other'
export interface Comment { user: string; text: string }
export interface Artwork { id: string; title: string; artist: string; style: StyleKey; image: string; likes: number; comments: Comment[] }
