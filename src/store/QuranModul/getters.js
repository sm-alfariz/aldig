/**
 * @param state
 * @returns array map object
 */
export function getAllSurah (state) {
  return state.surah.map(function (item) {
    return {
      number: origin.number,
      text: origin.text
    }
  })
}

export function getSelectedSurah (state) {
  return state.selectSurah
}
