<template>
  <view class="item" v-show="a">
    <view class="top">
      <uni-icons type="search" size="18" color="#ccc"></uni-icons>
      <input type="text" disabled placeholder="女靴" placeholder-style="color:#ccc" />
    </view>
    <view class="class">
      <view class="left">
        <view
          @click="add(index)"
          v-for="(item, index) in classFiy"
          :key="index"
          :class="active == index ? 'red' : ''"
        >
          <view>{{ item.name as string }}</view>
          <view v-if="change" class="left-item"></view>
        </view>
      </view>
      <view class="right">
        <view class="rightTop">
          <banner></banner>
        </view>
        <view class="right-item">
          <scroll-view scroll-y>
            <view v-for="(item, index) in classRight" :key="index">
              <view style="margin-bottom: 10px">
                <view style="display: flex; justify-content: space-between">
                  <text>{{ item.name }}</text>
                  <text style="font-size: 14px; color: #ccc">全部 > </text>
                </view>
                <view
                  style="width: 100%; height: 1rpx; background-color: #ccc; margin-top: 3px"
                ></view>
              </view>
              <view class="item-bottom">
                <view class="bottom" v-for="(ite, index) in item.goods" :key="index">
                  <image :src="ite.picture" mode="scaleToFill" />
                  <view
                    style="
                      font-size: 12px;
                      -webkit-line-clamp: 2;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                    "
                    >{{ ite.name }}</view
                  >
                  <view style="font-size: 12px; color: red">￥{{ ite.price }}</view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import seketokClass from '@/components/seketokClass/seketokClass.vue'
import banner from '@/components/banner/banner.vue'
import { ref } from 'vue'
import { ClassFiyApi } from '@/api/classfiy/index'
import { onLoad } from '@dcloudio/uni-app'
//骨架屏
const isLoaded = ref<boolean>(false)
const a = ref<boolean>(false)
//数据列表
const classFiy = ref()
const classRight = ref()
const classList = async () => {
  try {
    const res = await ClassFiyApi()
    classFiy.value = res.result
    classRight.value = res.result[active.value].children
  } catch (error) {
    console.log(error)
  }
}
const active = ref(0)
const change = ref(true)
const add = (index: number) => {
  active.value = index
  classList()
}
onLoad(() => {
  isLoaded.value = true
  setTimeout(() => {
    classList()
    a.value = true
    isLoaded.value = false
  }, 1000)
})
</script>

<style lang="scss" scoped>
.item {
  width: 100vw;
  height: calc(100vh - 94px);
  .class {
    width: 100vw;
    /* #ifdef MP-WEIXIN */
    height: calc(100vh - 70px);
    /* #endif */
    /* #ifdef H5 */
    height: calc(100vh - 114px);
    /* #endif */
    display: flex;
    .left {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f5f5f5;
      overflow: hidden;
      view {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
      .left-item {
        width: 60%;
        height: 1rpx;
        background-color: #ccc;
        margin: auto;
      }
    }
    .right {
      width: 75%;
      padding: 10px;
      height: 100%;

      .right-item {
        width: 100%;
        height: calc(100vh - 310px);
        overflow-y: auto;
        .item-bottom {
          width: 100%;
          display: flex;
          // justify-content: space-around;

          flex-wrap: wrap;
          .bottom {
            width: 30%;
            height: 150px;
            margin-right: 4px;
            margin-top: 8px;
            image {
              width: 100%;
              height: 60%;
            }
          }
        }
      }
      .rightTop {
        margin-bottom: 10px;
      }
    }
  }
  .top {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .uni-icons {
      position: absolute;
      left: 20px;
    }
    input {
      width: 85%;
      background-color: #f3f4f4;
      height: 30px;
      border-radius: 15px;
      padding-left: 30px;
    }
  }
}
.red {
  background-color: #fff;
  border-left: 8px solid #27ba9b;
  border-bottom: 1px solid #fff;
}
</style>
