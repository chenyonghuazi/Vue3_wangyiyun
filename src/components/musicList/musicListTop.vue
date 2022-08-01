<template>
  <div class="itemMusicTop">
    <img :src="playlist.coverImgUrl" alt="" class="backgroundImg">
    
    <!-- 左边区域 -->
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>歌单</span>
    </div>
    <!-- 右边区域 -->
    <div class="itemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  
  setup(props) {
      //console.log(props)
      if(!props.playlist.coverImgUrl) props.playlist.coverImgUrl='/images/loading.png'
  },
  props: ["playlist"],
};
</script>

<style lang="less" scoped>
.itemMusicTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem 0;
    //position: relative;

    .backgroundImg{
        width: 100%;  
        height: 5rem;
        position: fixed;
        top:0;
        z-index: -1;
        filter: blur(30px); //毛玻璃马赛克
    }

    .itemLeft, .itemRight{
        width: 25%;
        height:100%;
        display: flex;
        justify-content: space-between;
        margin: 0 .2rem;

        span{
            font-size: .4rem;
            color:#fff
        }

        .icon{
            fill: #fff; //svg icon的颜色更改
        }
    }
}
</style>