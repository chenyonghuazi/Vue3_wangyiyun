<template>
  <van-cell-group class="songs">
      <van-cell
        v-for="(item) in songs" :key="item.id" :title="item.name" :label="creatorsName(item.ar)"
      >
        <template #value>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </template>

        

      </van-cell>
  </van-cell-group>
</template>

<script>
export default {
    setup(props){
        console.log(props.songs)

        function creatorsName(arr){
            if(!arr) return
            let names = ''
            arr.forEach(creatorName => {
                names += creatorName.name + " / "
            });
            //console.log(arr)
            return names.slice(1,names.length-2)
        }

        return {creatorsName}
    },
    props:['songs','subsribeCount']
}
</script>

<style lang="less" scoped>
    .songs{
        background-color: #fff;
    }
</style>