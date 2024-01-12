<template>
  <view class="mutli">
    <view class="mutli-item" v-for="(item, index) in mutliList" :key="index">
      <image :src="item.icon" mode="scaleToFill" style="width: 50px; height: 50px" />
      <view>{{ item.name }}</view>
    </view>
  </view>
</template>
<script lang="ts" setup>
defineProps<{
  mutliList?: any[]
}>()
</script>

<style lang="scss" scoped>
.mutli {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: 30px;
  .mutli-item {
    width: 20%;
    margin-top: 5px;
    color: #666666;
    font-size: 14px;
  }
}
</style>
