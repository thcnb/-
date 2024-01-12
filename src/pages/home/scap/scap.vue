<template>
  <view>
    <view class="item">
      <image class="img" :src="img" mode="scaleToFill" />
      <view class="item-top">
        <text
          v-for="(item, index) in top"
          :key="index"
          @click="add(item, index)"
          :class="active == index ? 'red' : ''"
          >{{ item.title }}</text
        >
      </view>
      <scroll-view
        class="scroll"
        scroll-y
        refresher-enabled
        :refresher-threshold="45"
        @scrolltolower="load"
      >
        <view class="class">
          <view class="item" v-for="(ite, index) in bottom" :key="index">
            <image :src="ite.picture" mode="scaleToFill" />
            <text style="font-size: 12px; overflow: hidden">{{ ite.name }}</text
            ><br />
            <text class="text">￥{{ ite.price }}</text>
          </view>
        </view>
        <view style="color: #ccc; margin: 5px; position: relative; left: 150px" v-if="loads"
          >正在加载..</view
        >
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { HotListApi } from '@/api/home/index'
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

const top = ref()
const bottom = ref()
const img = ref()
const subType = ref<number>()
const active = ref<number>(0)
const counts = ref(0)
const page = ref(1)
const add = (item: any, index: number) => {
  console.log(item.id)
  subType.value = item.id
  active.value = index
  bottom.value = []
  Hot(item.id)
}

onLoad((options) => {
  list(options)
  Hot(subType.value)
})

//导航栏数据
const HotLis = ref<any>()
const list = async (options?: any) => {
  const HotList = hotMap.find((item) => item.type == options.type)
  uni.setNavigationBarTitle({
    title: HotList?.title as string,
  })
  HotLis.value = HotList
}

//列表数据
const Hot = async (a: any) => {
  try {
    const res = await HotListApi(HotLis?.value.url as string, {
      pageSize: 10,
      page: page.value,
      subType: a || '',
    })
    img.value = res.result.bannerPicture
    top.value = res.result.subTypes
    bottom.value = [...(bottom.value || []), ...res.result.subTypes[active.value].goodsItems.items]
    counts.value = res.result.subTypes[active.value].goodsItems.counts
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
//触底加载
console.log(subType.value)
const loads = ref<boolean>(true)
const load = () => {
  loads.value = true
  setTimeout(() => {
    if (counts.value >= bottom.value.length) {
      page.value += 1
      Hot(subType.value)
      loads.value = false
    } else {
      return
    }
  }, 1000)
}
</script>

<style lang="scss" scoped>
.item {
  width: 100vw;
  height: calc(100vh - 94px);
  background-color: #f8f8f8;
  .img {
    width: 100vw;
    height: 140px;
    border-radius: 0 0 30px 30px;
  }
  .item-top {
    width: 95%;
    height: 60px;
    background-color: #fff;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    position: relative;
    bottom: 25px;
  }
  .scroll {
    width: 100vw;
    height: calc(100vh - 294px);
  }
  .class {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
    bottom: 20px;
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
}
.red {
  border-bottom: 1px solid #27ba9b;
}
</style>
// try { // const res = await HotListApi(HotList?.url as string, { // pageSize: 10, // page: 1, //
// subType: options.id, // }); // console.log(res); // img.value = res.result.bannerPicture; //
top.value = res.result.subTypes; // bottom.value =
res.result.subTypes[active.value].goodsItems.items; // } catch (error) {}
