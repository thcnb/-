<template>
  <view class="guessLike">
    <image src="../../../../static/images/bubble.png" mode="scaleToFill" />
    <text>猜你喜欢</text>
    <image src="../../../../static/images/bubble.png" mode="scaleToFill" />
  </view>
  <view class="class">
    <view class="item" v-for="(item, index) in guessLikeList" :key="index" @click="add(item)">
      <image :src="item.picture" mode="scaleToFill" />
      <text style="font-size: 12px; overflow: hidden">{{ item.name }}</text
      ><br />
      <text class="text">￥{{ item.price }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineProps<{
  guessLikeList?: any[]
}>()
const add = (item: any) => {
  uni.navigateTo({
    url: `/pages/home/detali/detali?id=${item.id}`,
  })
}
</script>

<style lang="scss" scoped>
.guessLike {
  width: 100%;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  text {
    margin: 0 5px;
  }
  image {
    width: 16px;
    height: 16px;
  }
}
.class {
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .item {
    width: 40%;
    height: 200px;
    background-color: #fff;
    margin-top: 10px;
    padding: 10px;
    position: relative;
    .text {
      font-size: 12px;
      color: red;
      position: absolute;
      bottom: 15px;
    }
    image {
      width: 100%;
      height: 60%;
    }
  }
}
</style>
