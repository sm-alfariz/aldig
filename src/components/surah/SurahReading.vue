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
      <q-list v-for="item in surahData.ayat" :key="item.no" bordered>
        <q-item>
          <q-item-section>
            <q-item-label>
              <span>{{ item.no }} </span>
              <span style="float: right; direction: rtl" class="text-h5 surah-text">
                    {{ item.text }}
                      <q-avatar  size="24px" color="orange" text-color="black">
                        {{ $StringUtils.numberToArabic(item.no) }}
                      </q-avatar>
                  </span>
            </q-item-label>
            <q-item-label style="font-size: 12pt" class="text-dark" caption>{{ item.translaet_id }}</q-item-label>
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
    surahData: {
      required: true
    },
    surahName: {
      type: String,
      required: true,
      default: ''
    },
    surahNumber: {
      required: true
    }
  },
  computed: {
  },
  created () {
    // console.log(this.$route.name)
  },
  methods: {
  }
}
</script>
<style scoped>
  .surah-title {
    direction: rtl;
    font-size: 35px;
    font-family: 'LpmqKemenag',serif;
    line-height: 1px;
  }

</style>
