export function highlightSearchTerm(term, word) {
  const regex = new RegExp(term, 'gi');
  return word.replace(regex, `<span class="hl">${term}</span>`)
}
