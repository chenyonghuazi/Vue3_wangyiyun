<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in banner.images" :key="image.bannerId">
      <img :src="image.pic" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import axios from "axios";
import { reactive, onMounted } from "vue";
import {getHomeBanner} from '@/request/api/home'

export default {
  name: "SwiperTop",
  setup() {
    const banner = reactive({
      images: [
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
      ],
    });
    
    async function getBannerImages(){
      let result = await getHomeBanner()
      if(result.status == 200) banner.images = result.data.banners;
    }

    onMounted(() => {
      //请求图片
      // axios.get("http://localhost:3000/banner?type=2").then((res) => {
      //   console.log(res);
      //   banner.images = res.data.banners;
      // });
      getBannerImages()
    });
    return { banner };
  },
};
</script>

<style lang="less">
.van-swipe {
  width: 100%;
  padding: 10px;
  .van-swipe__track {
    .van-swipe-item {
      padding: 0 0.3rem 0 0;
      img {
        width: 100%;
        height: 3rem;
        border-radius: 0.2rem;
      }
    }
  }

  .van-swipe__indicator--active {
    background-color: #db8282;
  }
  // .van-swipe__indicators {

  //     .van-swipe__indicator--active {
  //       background-color: #db8282;
  //     }

  // }
}
</style>