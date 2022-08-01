<template>
  <musicListTop :playlist="music.playlist"/>
  <musicListCenter :playlist="music.playlist"/>
  <musicListBottom :songs="music.songs" :subscribeCount="music.playlist.subscribedCount"/>
</template>

<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive} from 'vue'
import {getMusicItemList, getMusic} from '@/request/api/musicList'

import musicListTop from '@/components/musicList/musicListTop'
import musicListCenter from '@/components/musicList/musicListCenter'
import musicListBottom from '@/components/musicList/musicListBottom'

export default {
    setup(){

        const route = useRoute()

        //从url上获取id
        const id = route.query.id

        const music = reactive({
            playlist:sessionStorage.getItem('musicList') ? JSON.parse(sessionStorage.getItem('musicList')) : {},
            song:sessionStorage.getItem('songs') ? JSON.parse(sessionStorage.getItem('songs')) : []
            
        })

        //#region 
        //获取歌单详细数据
        // function getDetail(){
        //     let result = getMusicItemList({id})
            
        //     if(result.status == 200 & result.data.code == 200) {
        //         music.playlist = result.data.playlist 
        //         sessionStorage.setItem('musicList',JSON.stringify(result.data.playlist))
        //         //console.log(music.playlist)
        //     } 
        // }

        //获取所有歌曲
        // function getMusic(){
        //     let result = getMusic({id,limit:20,offset:0})
        //     if(result.status == 200 && result.data == 200) console.log(result)
        // }
        //#endregion
        
        
        onMounted(async ()=>{

            //获取歌单详细数据
            let result = await getMusicItemList({id})
            if(result.status == 200 & result.data.code == 200) {
                music.playlist = result.data.playlist 
                sessionStorage.setItem('musicList',JSON.stringify(result.data.playlist))
                //console.log(music.playlist)
            } 

            //获取所有歌曲
            let result2 = await getMusic({id,limit:20,offset:0})
            if(result2.status == 200 && result2.data.code == 200) {
                music.songs = result2.data.songs
                sessionStorage.setItem('songs',JSON.stringify(result2.data.songs))
                console.log(result2)
            }    
        })

        return { music }
    },

    components:{musicListTop,musicListCenter,musicListBottom}
}
</script>

<style>

</style>