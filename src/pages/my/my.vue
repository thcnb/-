<template>
  <view class="my">
    <view class="my-top" v-if="store.token == ''">
      <image @click="toLogin" src="/src/static/images/car.png" mode="scaleToFill" />
      <view>
        <view style="margin: 5px 0" @click="toLogin">未登录</view>
        <text @click="toLogin">点击登录账号</text>
        <text style="position: absolute; right: 30px">设置</text>
      </view>
    </view>
    <view class="my-top" v-else>
      <image @click="profile" :src="store.LoginList.avatar" mode="scaleToFill" />
      <view>
        <view @click="profile" style="margin: 5px 0">{{ store.LoginList.nickname }}</view>
        <text @click="profile">更新头像昵称</text>
        <text style="position: absolute; right: 30px">设置</text>
      </view>
    </view>
    <view class="item">
      <view style="display: flex; justify-content: space-between">
        <text>我的订单</text>
        <text style="font-size: 15px; color: #ccc">查看全部订单 > </text>
      </view>
      <view> </view>
    </view>
    <guessLike :guessLikeList="guessLikeList"></guessLike>
  </view>
</template>
<script lang="ts" setup>
import { guessLikeApi } from '@/api/home'
import guessLike from '@/pages/home/compuntens/guessLike/guessLike.vue'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { useStore } from '@/store/user'
const store = useStore()
const List = ref()
//猜你喜欢
const page = ref<number>(1)
const pageSize = ref<number>(10)
const guessLikeList = ref()

const guessLikes = async () => {
  try {
    const res = await guessLikeApi({
      page: page.value,
      pageSize: pageSize.value,
    })
    guessLikeList.value = [...(guessLikeList.value || []), ...res.result.items]
  } catch (error) {
    console.log(error)
  }
}
onLoad((option) => {
  guessLikes()
})

//跳转登录
const toLogin = () => {
  uni.navigateTo({ url: '/pages/my/login/login' })
}
const profile = () => {
  uni.navigateTo({ url: '/pages/my/profile/profile' })
}
</script>

<style lang="scss" scoped>
.my {
  width: 100vw;
  height: calc(100vh - 44px);
  background-color: #f7f7f8;
  .my-top {
    width: 100vw;
    height: 140px;
    background-image: url('/static/images/center_bg.png');
    background-size: 100% 100%;
    padding: 15px;
    color: #fff;
    border-radius: 20px;
    display: flex;
    image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .item {
    width: 88%;
    padding: 10px;
    position: relative;
    bottom: 70px;
    height: 110px;
    border-radius: 5px;
    background-color: #fff;
    margin: auto;
  }
}
</style>
