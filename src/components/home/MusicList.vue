<template>
  <div class="musicList">
    <!-- 头部header题目 -->
    <div class="musicTop">
      <div class="title">发现好歌</div>
      <div class="more">查看更多</div>
    </div>

    <!-- 中部歌单区域，使用的是vant自定义滑块 -->
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="mySwipe"
        :show-indicators="false"
      >
        <van-swipe-item
          v-for="item in musicList.List"
          :key="item.id"
          @click="handlerClickMusic(item.id)"
        >
          <img :src="item.picUrl" alt="" />
          <span class="info" style="color: aliceblue">
            <!-- 图标 -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-24gl-play"></use>
            </svg>
            <!-- 播放量 -->
            {{ playCountFormatting(item.playCount) }}
          </span>

          <span class="name">{{ item.name }}</span>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from "@/request/api/home";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  setup() {

    //初始化路由
    const router = useRouter();

    let musicList = reactive({ List: [] });

    //获取歌单数据
    async function getMusic() {
      let result = await getMusicList();
      if (result.status == 200) musicList.List = result.data.result;
    }
    getMusic();

    //统一规范播放量显示
    function playCountFormatting(num) {
      if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      } else if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      }
    }

    //处理点击歌单
    function handlerClickMusic(id) {
      router.push({
        name: "ItemMusic",
        query: {
          id,
        },
      });
    }

    return { router, musicList, playCountFormatting, handlerClickMusic };
  },
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;

    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
}

.musicContent {
  width: 100%;
  height: 4rem;

  .mySwipe {
    height: 100%;
    .info {
      position: absolute;
      right: 25px;
      top: 0;
      align-items: center;
    }
    svg {
      align-items: center;
    }
    .icon {
      width: 10px;
      height: 10px;
      fill: #fff;
    }
    img {
      width: 130px;
      height: 130px;
    }
    span {
      font-size: 0.2rem;
      text-align: center;
      align-items: center;
    }
  }
}
</style>