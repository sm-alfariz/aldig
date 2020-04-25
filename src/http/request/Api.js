import http from 'http/http'

export default {
  /**
   * @param none
   * @returns Promise Object
   */
  getAllSurah () {
    return http.get('/surah')
  },
  /**
   * @param data Object
   * @returns Promise Object
   * */
  selectSurah (data) {
    return http.get(`/surah/${data.surah_number}`)
  }
}
