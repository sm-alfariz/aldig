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

export const getJsonSurah = (state) => {
  // "translations": {
  //   "id": {
  //     "name": "Pembukaan",
  //         "text": {
  //       "1": "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
  //           "2": "Segala puji bagi Allah, Tuhan seluruh alam,",
  //           "3": "Yang Maha Pengasih, Maha Penyayang,",
  //           "4": "Pemilik hari pembalasan.",
  //           "5": "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan.",
  //           "6": "Tunjukilah kami jalan yang lurus,",
  //           "7": "(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat."
  //     }
  //   }
  // },
  const obj = {}
  obj.name = state.surahData.name
  obj.name_latin = state.surahData.name_latin
  obj.indonesian_name = state.surahData.translations.id.name
  obj.ayat = Object.values(state.surahData.text).map(function (item, idx) {
    const terjemah = Object.values(state.surahData.translations.id.text)
    return { no: ++idx, text: item, translaet_id: terjemah[--idx] }
    // return { no: ++idx, text: item }
  })
  return obj
}
