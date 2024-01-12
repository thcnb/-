<template>
  <view>
    <view class="item">
      <image src="/src/static/images/logo_icon.png" mode="scaleToFill" />
      <!-- #ifdef H5 -->
      <view style="display: flex; flex-direction: column">
        <input type="text" placeholder="请输入账号" v-model="account" />
        <input type="text" placeholder="请输入密码" v-model="password" />
        <button @click="login">登录</button>
      </view>
      <!-- #ifdef MP-WEIXIN -->
      <button>手机号快捷登录</button>
      <!-- #endif -->
      <!-- #endif -->
    </view>
  </view>
  <view style="margin-top: 30px; display: flex; flex-direction: column">
    <view class="bottom">
      <view></view>
      <text>其他方式登录</text>
      <view></view>
    </view>
    <!-- #ifdef H5 -->
    <view class="icon" @click="shortcut">
      <uni-icons type="phone" size="24" />
    </view>
    <view style="font-size: 12px">模拟快捷登录</view>
    <!-- #endif -->
    <!-- #ifdef MP-WEIXIN -->
    <view class="icon">
      <uni-icons type="phone" size="24" />
    </view>
    <view style="font-size: 12px">授权登录</view>
    <!-- #endif -->
    <view style="margin-top: 40px; font-size: 11px; color: #ccc"
      >登录/注册即视为你同意《服务条款》和《小兔鲜儿隐私协议></view
    >
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { loginApi, shortcutApi } from '@/api/my/index'
import { useStore } from '@/store/user'
const store = useStore()
const account = ref<string>('13123456789')
const password = ref<string>('')
const login = async () => {
  try {
    const res = await loginApi({
      account: account.value,
      password: password.value,
    })
    console.log(res)
    store.token = res.result.token
    store.LoginList = res.result
    uni.switchTab({ url: `/pages/my/my?result` })
  } catch (error) {
    console.log(error)
  }
}
const shortcut = async () => {
  try {
    const res = await shortcutApi({
      phoneNumber: account.value,
    })
    store.token = res.result.token
    store.LoginList = res.result
    console.log(store.LoginList)
    uni.switchTab({ url: `/pages/my/my?result` })
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped>
view {
  display: flex;
  justify-content: center;
  align-content: center;
  .item {
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    image {
      width: 150px;
      height: 150px;
    }
    input {
      border: 1rpx solid #ccc;
      border-radius: 20px;
      width: 80vw;
      height: 34px;
      margin-top: 10px;
      padding-left: 10px;
      font-size: 14px;
    }
    button {
      border-radius: 20px;
      width: 83vw;
      height: 38px;
      background-color: #28bb9c;
      color: #fff;
      text-align: center;
      line-height: 38px;
      font-size: 15px;
      margin-top: 10px;
    }
  }
}
.bottom {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #ccc;
  view {
    width: 70px;
    height: 1px;
    background-color: #ccc;
  }
}
.icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin: 10px auto;
  border: 1px solid #000;
}
</style>
