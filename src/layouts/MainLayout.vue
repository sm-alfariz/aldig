<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <router-link to="/">
          <q-avatar @click.stop="this.$route.path !== '/' ? this.$router.push({path: '/' }).catch(_ => {}) : console.log('ss') " style="cursor: pointer;" clickable v-ripple:orange-5>
              <img alt="AlDig" src="~assets/images/AlQ_Kareem_clear.png">
          </q-avatar>
        </router-link>
        <q-toolbar-title>
          Al-Dig (Al-Quran Digital) <span class="text-warning text-italic text-subtitle2 text-caption">Versi 0.0.1</span>
        </q-toolbar-title>
        <q-separator vertical />
        <q-btn-dropdown stretch flat label="File">
          <q-list>
            <q-item v-for="n in 3" :key="`y.${n}`" clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="bookmark" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Bookmark</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="500"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-expansion-item
                  style="height: 35px"
                  dense
                  dense-toggle
                  expand-separator
                  default-opened
                  label="Surah (114 surah)">
            <q-list v-for="item in getSurah" :key="item.nomor" bordered>
              <q-item clickable v-ripple:orange-5 @click.stop="surahReading(item.nomor)">
                <q-item-section>
                  <q-item-label>
                    <span>{{ item.nomor }} </span> : <span class="surah-title">{{ item.name }} </span>
                  </q-item-label>
                  <q-item-label>
                    <span>{{ item.nama }}</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side top>
                  <q-item-label caption>{{ item.ayat }} ayat </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer :reveal="true" class="primary text-white">
      <q-toolbar>
        <q-toolbar-title style="height: 30px" class="text-center">
          <span class="text-warning text-italic text-subtitle2">Copyright : </span><span class="me_quran"> سبحانه و تعالى </span> <span class="text-warning text-italic text-subtitle2">code writing by: fendi 1, Ramadhan 1441 H, 2020 | Terjemah dan Text Quran bersumber dari KEMENAG 2020 </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink'
export default {
  meta: {
    title: 'Al - Qur\'an Digital'
  },
  name: 'MainLayout',

  components: {
    // EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: true
    }
  },
  created () {
    this.$store.dispatch('QuranModul/FETCH_API_INTENASIONAL')
    console.log(this.$route.name)
  },
  computed: {
    getSurah () {
      return this.$store.state.QuranModul.surah
    }
  },
  methods: {
    async surahReading (surahNumber) {
      this.$q.loadingBar.start()
      await this.$store.dispatch('QuranModul/SELECT_SURAH_JSON', { surah_number: surahNumber })
      await this.$router.push({ path: `/surah-reading/${surahNumber}` }).catch(_ => {})
      await this.$q.loadingBar.stop()
    }
  }
}
</script>
<style scoped lang="sass">
  .surah-title
    direction: rtl
    font-size: 19.5px
    font-family: 'me_quran',serif
    font-weight: 300
    line-height: 1.4
  .menu-list .q-item
    border-radius: 0 32px 32px 0
</style>
