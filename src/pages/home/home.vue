<template>
  <view class="home" v-show="a">
    <navigation></navigation>
    <scroll-view
      scroll-y
      class="scroll"
      refresher-enabled
      :refresher-threshold="45"
      @refresherrefresh="flushed"
      @scrolltolower="load"
      :refresher-triggered="triggered"
    >
      <view style="height: 140px; margin-bottom: 10px">
        <bannerS></bannerS>
      </view>
      <mutliS :mutliList="mutliList"></mutliS>
      <recommendS :recommendList="recommendList"></recommendS>
      <Stuffs></Stuffs>

      <GuessLike :guessLikeList="guessLikeList"></GuessLike>
      <view style="color: #ccc; margin: 5px; position: relative; left: 150px" v-if="loads"
        >正在加载..</view
      >
    </scroll-view>
  </view>
  <seketon v-show="isLoaded"></seketon>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { mutliApi, recommendApi, StuffApi, guessLikeApi } from '@/api/home/index'
import mutliS from './compuntens/mutli/mutli.vue'
import navigation from './compuntens/navigation/navigation.vue'
import bannerS from '@/components/banner/banner.vue'
import recommendS from './compuntens/recommend/recommend.vue'
import Stuffs from './compuntens/Stuff/Stuff.vue'
import GuessLike from './compuntens/guessLike/guessLike.vue'
import seketon from '@/components/seketok/seketok.vue'
//骨架屏
const isLoaded = ref<boolean>(false)
const a = ref<boolean>(false)
//商品分类
const mutliList = ref()
const mutli = async () => {
  try {
    const res = await mutliApi()
    mutliList.value = res.result
  } catch (error) {
    console.log(error)
  }
}

onLoad(() => {
  isLoaded.value = true
  setTimeout(() => {
    mutli()
    recommend()
    Stuff()
    guessLike()
    a.value = true
    isLoaded.value = false
  }, 1000)
})
//热门推荐
const StuffList = ref()
const Stuff = async () => {
  try {
    const res = await StuffApi()
    StuffList.value = res.result
  } catch (error) {
    console.log(error)
  }
}
//新鲜好物
const recommendList = ref()
const recommend = async () => {
  try {
    const res = await recommendApi()
    console.log(res)

    recommendList.value = res.result
  } catch (error) {
    console.log(error)
  }
}
//猜你喜欢
const page = ref<number>(1)
const pageSize = ref<number>(10)
const guessLikeList = ref()
const guessLike = async () => {
  try {
    const res = await guessLikeApi({
      page: page.value,
      pageSize: pageSize.value,
    })
    counts.value = res.result.counts
    guessLikeList.value = [...(guessLikeList.value || []), ...res.result.items]
  } catch (error) {
    console.log(error)
  }
}
//下拉刷新
const triggered = ref<boolean>(false)
const flushed = async () => {
  triggered.value = true
  page.value = 1
  await mutli()
  triggered.value = false
}
//触底加载
const loads = ref<boolean>(true)
const counts = ref(0)
const load = () => {
  loads.value = true
  setTimeout(() => {
    if (counts.value >= guessLikeList.value.length) {
      page.value += 1
      guessLike()
      loads.value = false
    } else {
      return
    }
  }, 1000)
}
</script>

<style scoped lang="scss">
.scroll {
  width: 100vw;
  height: calc(100vh - 119px);
}

.home {
  width: 100vw;
  height: calc(100vh - 44px);
  background-color: #f7f7f7;
}
</style>
