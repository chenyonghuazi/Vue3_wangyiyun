<template>
  <TopNav/>
  <SwpierTop/>
  <iconList/>
  <MusicList/>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/home/TopNav'
import SwpierTop from '@/components/home/SwiperTop.vue'
import iconList from '@/components/home/IconList.vue'
import MusicList from '@/components/home/MusicList'

export default {
  name: 'HomeView',
  components:{TopNav,SwpierTop,iconList,MusicList}
}
</script>
