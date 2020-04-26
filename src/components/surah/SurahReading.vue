<template>
  <div id="parent" class="full-width row wrap justify-center items-start content-start" style="overflow: hidden;">
    <div class="" style="overflow: auto;">
      <q-card>
        <q-card-section>
          <img height="40px" alt="Al-Quraanul Kareem" src="~assets/images/surah_title_left.png">
        </q-card-section>
      </q-card>
    </div>
    <div class="" style="overflow: auto;">
      <h3 style="line-height: 2px" class="surah-title">{{ surahName }}</h3>
    </div>
    <div class="" style="overflow: auto;">
      <q-card>
        <q-card-section>
          <img height="40px" alt="Al-Quraanul Kareem" src="~assets/images/surah_title_right.png">
        </q-card-section>
      </q-card>
    </div>
    <div class="wrap col-12" style="">
      <q-list v-for="item in surahData.ayahs" :key="item.numberInSurah" bordered>
        <q-item>
          <q-item-section>
            <q-item-label>
              <span>{{ item.numberInSurah }} </span>
              <span style="float: right; direction: rtl" class="text-h5">
                    {{ (item.numberInSurah === 1 && item.number !== 1 ? item.text.substr(39) : item.text) }}
                      <q-avatar  size="24px" color="orange" text-color="black">
                        {{ $StringUtils.numberToArabic(item.numberInSurah) }}
                      </q-avatar>
                  </span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurahReadingComp',
  props: {
    surahNumber: {
      required: true
    },
    surahName: {
      type: String,
      required: true,
      default: ''
    },
    surahData: {
      required: true
    }
  },
  methods: {
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
