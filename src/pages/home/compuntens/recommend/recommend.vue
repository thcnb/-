<template>
  <view class="hot-item">
    <view class="item" v-for="(item, index) in recommendList" :key="index">
      <view style="position: relative; top: 2px; left: 8px">
        <text style="font-size: 14px">{{ item.title }}</text>
        <text style="color: #ccc; font-size: 10px; margin-left: 5px">{{ item.alt }}</text>
      </view>
      <view style="display: flex">
        <image
          @click="add(item)"
          style="margin-left: 5px"
          v-for="(ite, index) in item.pictures"
          :key="index"
          :src="ite"
          mode="scaleToFill"
        />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineProps<{
  recommendList?: any[]
}>()
const add = (item: any) => {
  uni.navigateTo({
    url: `/pages/home/scap/scap?type=${item.type}&&id=${item.id}`,
  })
}
</script>

<style lang="scss" scoped>
.hot-item {
  margin: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .item {
    width: 49%;
    background-color: #fff;
    margin-top: 2px;
    margin-left: 2px;
    image {
      width: 45%;
      height: 70px;
      margin-top: 10px;
    }
  }
}
</style>
