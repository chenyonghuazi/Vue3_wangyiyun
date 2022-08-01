<template>
  <!-- 上方区域 -->
 
  <div class="musicListCenterTop">
      <div class="coverImg">
          <img :src="playlist.coverImgUrl" alt="">
          <span class="playCount" style="color: aliceblue">
            <!-- 图标 -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-24gl-play"></use>
            </svg>
            <!-- 播放量 -->
            {{ playCountFormatting(playlist.playCount) }}
          </span>
      </div>
      <div class="detail">
          <p>
              {{playlist.name}}
          </p>
          <div class="creatorInfo">
              <img :src="playlist.creator.avatarUrl || playlist.coverImgUrl" alt="">
              <span>{{playlist.creator.nickname}}</span>
              
          </div>
          <span class="description">{{playlist.description}}</span>
            
      </div>
  </div>
  <!-- 下方区域 4个按钮 -->
  <div class="musicListCenterBottom">
      <div class="buttons">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>评论</span>
      </div>
      <div class="buttons">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>分享</span>
      </div>
      <div class="buttons">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="buttons">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
        </svg>
        <span>下载</span>
      </div>
      
      
  </div>

  
</template>

<script>
export default {
  setup(props) {
      //防止转进来的数据为空的报错
      if(!props.playlist.creator) props.playlist.creator={avatarUrl:'/images/loading.png'}

      //统一规范播放量显示
    function playCountFormatting(num) {
      if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      } else if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      }
    }

    return { playCountFormatting}
  },
  props:['playlist']
};
</script>

<style lang="less" scoped>

.musicListCenterTop{
    display: flex;
    justify-content: space-around;

    .coverImg{
        width: 40%;
        padding: 0 .3rem;
        position: relative;
        img{
            width: 100%;
            height: 2rem;
            border-radius: .1rem;
        }

        .playCount{
            position: absolute;
            right:20px;
            top: 0;
            font-size: .1rem;

            .icon{
                width: 15px;
                height: 15px;
                fill:#fff;
            }
        }
    }

    .detail{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        

        p{
            height: 35%;
            font-size: 0.3rem;
            font-weight: 800;
        }
        img{
            width: 20px;
            height: 20px;
            border-radius: 10px;
        }
        .description{
            height: 30%;
            font-size: 0.2rem;
            overflow: hidden;
        }
        .creatorInfo{
            height: 35%;
            padding: 15px 0;
            span{
                font-size: 0.3rem;
            }
        }
    }
}

.musicListCenterBottom{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top:20px;

    .buttons{
        display: flex;
        flex-direction: column;

        span{
            padding-top:5px;
            font-size: .2rem;
            color: whitesmoke;
        }
        .icon{
            width: 30px;
            height: 30px;
            border-radius: 5px;
            fill:#fff;
        }
    }
}
</style>