<template>
  <!-- TODO create separate as component  -->
  <q-page padding class="flex flex-center column">
    <!-- content -->
    <div class="row" style="min-height: 400px; width: 100%;">
      <div id="parent" class="full-width row wrap justify-center items-start content-start" style="overflow: hidden;">
        <div class="" style="overflow: auto;">
          <q-card>
            <q-card-section>
              <img height="40px" alt="Al-Quraanul Kareem" src="~assets/images/surah_title_left.png">
            </q-card-section>
          </q-card>
        </div>
        <div class="" style="overflow: auto;">
          <h3 style="line-height: 2px" class="surah-title">{{ this.$store.state.QuranModul.selectSurah.name }}ِ</h3>
        </div>
        <div class="" style="overflow: auto;">
        <q-card>
          <q-card-section>
            <img height="40px" alt="Al-Quraanul Kareem" src="~assets/images/surah_title_right.png">
          </q-card-section>
        </q-card>
      </div>
        <div class="wrap col-12" style="">
          <q-list v-for="item in getSurah" :key="item.numberInSurah" bordered>
            <q-item>
              <q-item-section>
                <q-item-label>
                  <span>{{ item.numberInSurah }} </span>
                  <span style="float: right; direction: rtl" class="text-h5">
                    {{ (item.numberInSurah === 1 && item.number !== 1 ? item.text.substr(39) : item.text) }} {{ '('+ createArabicNumber(item.numberInSurah) + ')' }}
                  </span>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import NS from 'numeral-systems'
export default {
  name: 'SurahDetail',
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
    console.log('NUMBER', this.createArabicNumber(10))
  },
  methods: {
    initSurah () {
      this.dataSelectSurah = {
        name: this.$store.state.QuranModul.selectSurah.name
      }
    },
    // TODO create utils
    createArabicNumber (number) {
      return NS(number, 'arabic')
    }
  }
}
</script>
<style scoped>
  .surah-title {
    direction: rtl;
    font-size: 35px;
    font-family: 'me_quran',serif;
    line-height: 1px;
  }
</style>
