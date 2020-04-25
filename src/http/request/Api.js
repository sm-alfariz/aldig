import http from 'http/http'

export default {
  /**
   * @param none
   * @returns Promise Object
   */
  getAllSurah () {
    return http.get('/surah')
  }
}
