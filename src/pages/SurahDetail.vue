<template>
  <q-page padding class="flex flex-center column">
    <!-- content -->
    <div class="row justify-center" style="min-height: 400px; width: 100%;">
      <h3 v-show="this.$route.params.surah_number !== '1'" class="surah-title text-center"> بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ </h3>
    <surah-reading-comp
       :surah-data="getFormatedSurah"
       :surah-name="this.$store.state.QuranModul.surahData.name"
       :surah-number=this.$route.params.surah_number>
    </surah-reading-comp>
    </div>
  </q-page>
</template>

<script>
// import NS from 'numeral-systems'
import SurahReadingComp from 'components/surah/SurahReading'
export default {
  name: 'SurahDetail',
  components: { SurahReadingComp },
  data () {
    return {
      surah_number: this.$route.params.surah_number,
      dataSelectSurah: {}
    }
  },
  computed: {
    getSurah () {
      return this.$store.state.QuranModul.selectSurah.ayahs
    },
    getFormatedSurah () {
      return this.$store.getters['QuranModul/getJsonSurah']
    }
  },
  watch: {
  },
  created () {
    this.initSurah()
  },
  methods: {
    initSurah () {
      this.dataSelectSurah = {
        name: this.$store.state.QuranModul.selectSurah.name
      }
    }
  }
}
</script>
<style scoped>

</style>
