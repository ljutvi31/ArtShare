import type { Artwork } from '../types'
export const SEED: ReadonlyArray<Artwork> = [
  { id:'a1', title:'Portrait rapide', artist:'Luna M.', style:'sketch', image:'https://images.pexels.com/photos/3607898/pexels-photo-3607898.jpeg?auto=compress&cs=tinysrgb&w=1200', likes:9, comments:[{user:'Neo', text:'Super trait!'}] },
  { id:'a2', title:'Horizon urbain', artist:'Adem K.', style:'technical', image:'https://images.pexels.com/photos/2860814/pexels-photo-2860814.jpeg?auto=compress&cs=tinysrgb&w=1200', likes:12, comments:[] },
  { id:'a3', title:"Coucher d'aquarelle", artist:'Aya R.', style:'watercolor', image:'https://images.pexels.com/photos/231771/pexels-photo-231771.jpeg?auto=compress&cs=tinysrgb&w=1200', likes:51, comments:[{user:'Marin', text:"Couleurs douces, j'adore."}] },
  { id:'a4', title:'Machine détaillée', artist:'K. Roux', style:'technical', image:'https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg?auto=compress&cs=tinysrgb&w=1200', likes:98, comments:[] },
  { id:'a5', title:'Encre florale', artist:'Inès J.', style:'tattoo', image:'https://images.pexels.com/photos/1937330/pexels-photo-1937330.jpeg?auto=compress&cs=tinysrgb&w=1200', likes:247, comments:[{user:'Leo', text:'Idée tatouage parfaite'}] },
  { id:'a6', title:'Huile – Portrait classique', artist:'A. Roman', style:'painting', image:'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1200', likes:503, comments:[] },
  { id:'a7', title:'Croquis de main', artist:'Alex V.', style:'sketch', image:'https://images.pexels.com/photos/1070527/pexels-photo-1070527.jpeg?auto=compress&cs=tinysrgb&w=1200', likes:0, comments:[] },
  { id:'a8', title:'Collage mix media', artist:'Nora S.', style:'other', image:'https://images.pexels.com/photos/1907787/pexels-photo-1907787.jpeg?auto=compress&cs=tinysrgb&w=1200', likes:1001, comments:[{user:'Tom', text:'G.O.A.T !'}] },
]
