<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <span style="float: right" class="surah-title">بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</span>
          Al-Dig (Al-Quran Digital)
        </q-toolbar-title>

        <div>Versi 0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-expansion-item
        style="height: 35px"
        dense
        dense-toggle
        expand-separator
        default-opened
        label="Surah (114 surah)">
          <q-list v-for="item in getSurah" :key="item.nomor" bordered>
          <q-item clickable v-ripple:orange-5>
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
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <span class="text-warning text-italic text-subtitle2">Copyright : </span><span class="me_quran"> سبحانه و تعالى </span> <span class="text-warning text-italic text-subtitle2">code writing by: fendi 1, Ramadhan 1441 H, 2020</span>
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
      leftDrawerOpen: false
    }
  },
  created () {
    // this.$store.dispatch('QuranModul/FETCH_API_SURAH')
    this.$store.dispatch('QuranModul/FETCH_API_INTENASIONAL')
  },
  computed: {
    getSurah () {
      return this.$store.state.QuranModul.surah
    }
  }
}
</script>
<style scoped>
  .surah-title {
    direction: rtl;
    font-size: 19.5px;
    font-family: 'me_quran',serif;
    font-weight: 300;
    line-height: 1.4;
  }
</style>
