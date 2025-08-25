export const STRINGS = {
  en: {
    tagline: 'Share sketches, drawings & art across all styles.',
    searchPlaceholder: 'Search by artist (min 3 letters)', allStyles: 'All styles',
    styles: { sketch:'Sketch', painting:'Painting', watercolor:'Watercolor', technical:'Technical drawing', tattoo:'Tattoo', other:'Other' },
    like: 'Like', likes: 'Likes', comment: 'Comment', addComment: 'Add a comment...', share: 'Share',
    noResults: 'No artworks match your filters.', by: 'By', language: 'Language', badgesTitle: 'Badges',
    filterBy: 'Filter by style', send: 'Send', noneYet: 'No comments yet', min3: '(≥ 3)'
  },
  fr: {
    tagline: 'Partage de croquis, dessins et œuvres tous styles.',
    searchPlaceholder: 'Rechercher par artiste (min 3 lettres)', allStyles: 'Tous les styles',
    styles: { sketch:'Croquis', painting:'Peinture', watercolor:'Aquarelle', technical:'Dessin technique', tattoo:'Tatouage', other:'Autre' },
    like: 'Pouce', likes: 'Pouces', comment: 'Commentaire', addComment: 'Ajouter un commentaire...', share: 'Partager',
    noResults: 'Aucune œuvre ne correspond à vos filtres.', by: 'par', language: 'Langue', badgesTitle: 'Badges',
    filterBy: 'Filtrer par style', send: 'Envoyer', noneYet: "Aucun commentaire pour l'instant", min3: '(≥ 3)'
  },
} as const
export type LangKey = keyof typeof STRINGS
