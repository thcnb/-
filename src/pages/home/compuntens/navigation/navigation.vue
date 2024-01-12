<template>
  <view class="home-top" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view>
      <image style="width: 70px; height: 20px" src="/static/images/logo.png" />
      <text style="margin: 0 10px">|</text>
      <text>新鲜 · 新民 · 快捷</text>
    </view>
    <view class="input">
      <uni-icons class="input-left" type="search" size="18" color="#fff"></uni-icons>
      <input type="text" disabled placeholder="搜索商品" placeholder-style="color:#fff" />
      <uni-icons class="input-right" type="scan" size="18" color="#fff"></uni-icons>
    </view>
  </view>
</template>

<script lang="ts" setup>
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="scss" scoped>
.home-top {
  width: 100%;
  height: 100px;
  background-image: url('/static/images/navigator_bg.png');
  background-size: 100% 100%;
  padding: 10px;
  color: #fff;
  view {
    display: flex;
    //#ifdef MP-WEIXIN
    margin-top: 10px;
    //#endif
    margin-bottom: 20px;
    padding-top: 8px;
  }
  .input {
    margin: auto;
    position: relative;
    display: flex;
    align-items: center;

    .input-left {
      position: absolute;
      left: 7px;
      top: 12px;
    }
    .input-right {
      position: absolute;
      right: 34px;
      top: 12px;
    }
    input {
      width: 85%;
      height: 30px;
      background-color: #80e2d0;
      border-radius: 18px;
      font-size: 13px;
      padding-left: 30px;
    }
  }
}
</style>
