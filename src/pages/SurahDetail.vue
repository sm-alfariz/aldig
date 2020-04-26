<template>
  <q-page padding class="flex flex-center column">
    <!-- content -->
    <div class="row" style="min-height: 400px; width: 100%;">
    <surah-reading-comp
       :surah-data="this.$store.state.QuranModul.selectSurah"
       :surah-name="this.$store.state.QuranModul.selectSurah.name"
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
      firstSurah: true,
      dataSelectSurah: {}
    }
  },
  computed: {
    getSurah () {
      return this.$store.state.QuranModul.selectSurah.ayahs
    }
  },
  watch: {
    surah_number (val) {
      this.firstSurah = val <= 1
    }
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
