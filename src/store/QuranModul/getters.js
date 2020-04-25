/*
export function someGetter (state) {
}
*/

export function getAllSurah (state) {
  return state.surah.map(function (item) {
    return {
      number: origin.number,
      text: origin.text
    }
  })
}
