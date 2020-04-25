import { staticSurat } from 'http/json_db'
import Api from 'http/request/Api'

export function FETCH_API_SURAH ({ commit }) {
  commit('FETCH_SURAH', staticSurat)
}

export function FETCH_API_INTENASIONAL ({ commit }) {
  // commit('FETCH_SURAH', staticSurat)
  return new Promise((resolve, reject) => {
    Api.getAllSurah()
      .then((response) => {
        const reformatData = response.data.data.map((origin, i) => ({
          number: origin.number,
          name: origin.name,
          englishName: origin.englishName,
          englishNameTranslation: origin.englishName,
          numberOfAyahs: origin.numberOfAyahs,
          arti: staticSurat[i].nama,
          asma: staticSurat[i].asma,
          indonesiaAudio: staticSurat[i].audio,
          ayat: origin.numberOfAyahs,
          keterangan: staticSurat[i].keterangan,
          nama: staticSurat[i].nama,
          nomor: staticSurat[i].nomor,
          rukuk: staticSurat[i].rukuk,
          type: staticSurat[i].type,
          urut: staticSurat[i].rukuk
        }))
        // console.log(reformatData)
        commit('FETCH_SURAH', reformatData)
        resolve(response)
      })
      .catch(error => { reject(error) })
  })
}
