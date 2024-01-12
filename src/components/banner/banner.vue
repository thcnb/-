<template>
  <view>
    <swiper indicator-dots autoplay circular indicator-color="#ccc" indicator-active-color="#fff">
      <swiper-item v-for="(item, index) in bannerList" :key="index" style="height: 100%">
        <image :src="item.imgUrl" mode="scaleToFill" style="width: 100%; height: 100%" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts" setup>
import { bannerApi } from '@/api/home/index'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
//轮播图数据
const bannerList = ref()

const banner = async () => {
  try {
    const res = await bannerApi({ distributionSite: 1 })
    bannerList.value = res.result
  } catch (error) {
    console.log(error)
  }
}
onLoad(() => {
  banner()
})
</script>

<style lang="scss" scoped></style>
