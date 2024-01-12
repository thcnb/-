<!--
此文件为开发者工具生成，生成时间: 2024/1/10下午6:54:00
使用方法：
在 C:\Users\86187\Desktop\usan-shop\dist\dev\mp-weixin\pages\home\home.wxml 引入模板

```
<import src="home.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 C:\Users\86187\Desktop\usan-shop\dist\dev\mp-weixin\pages\home\home.wxss 中引入样式
```
@import "./home.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="home home data-v-0cd09a48 data-v-0cd09a48">
      <view
        is="pages/home/compuntens/navigation/navigation"
        class="data-v-0cd09a48 data-v-0cd09a48"
      >
        <view
          class="home-top navigation--home-top data-v-71a8e94c navigation--data-v-71a8e94c"
          style="padding-top: 54px"
        >
          <view class="data-v-71a8e94c navigation--data-v-71a8e94c">
            <image
              class="data-v-71a8e94c navigation--data-v-71a8e94c sk-image"
              style="width: 70px; height: 20px"
            ></image>
            <text
              class="data-v-71a8e94c navigation--data-v-71a8e94c sk-transparent sk-opacity"
              style="margin: 0 10px"
              >|</text
            >
            <text
              class="data-v-71a8e94c navigation--data-v-71a8e94c sk-transparent sk-text-14-2857-146 sk-text"
              >新鲜 · 新民 · 快捷</text
            >
          </view>
          <view class="input navigation--input data-v-71a8e94c navigation--data-v-71a8e94c">
            <view
              is="uni_modules/uni-icons/components/uni-icons/uni-icons"
              class="input-left navigation--input-left data-v-71a8e94c navigation--data-v-71a8e94c"
            >
              <text
                class="uni-icons icons--uni-icons uniui-search icons--uniui-search sk-pseudo sk-pseudo-circle"
                style="color: #fff; font-size: 18px"
              ></text>
            </view>
            <view
              disabled="true"
              class="data-v-71a8e94c navigation--data-v-71a8e94c sk-image"
              placeholder="搜索商品"
              placeholder-style="color:#fff"
              type="text"
            ></view>
            <view
              is="uni_modules/uni-icons/components/uni-icons/uni-icons"
              class="input-right navigation--input-right data-v-71a8e94c navigation--data-v-71a8e94c"
            >
              <text
                class="uni-icons icons--uni-icons uniui-scan icons--uniui-scan sk-pseudo sk-pseudo-circle"
                style="color: #fff; font-size: 18px"
              ></text>
            </view>
          </view>
        </view>
      </view>
      <scroll-view
        refresher-enabled="true"
        scroll-y="true"
        class="scroll scroll data-v-0cd09a48 data-v-0cd09a48"
        :refresher-threshold="45"
      >
        <view is="components/banner/banner" class="data-v-0cd09a48 data-v-0cd09a48">
          <view>
            <swiper
              autoplay="false"
              circular="true"
              indicator-dots="true"
              indicator-active-color="#fff"
              indicator-color="#ccc"
              current="0"
            ></swiper>
          </view>
        </view>
        <view is="pages/home/compuntens/mutli/mutli" class="data-v-0cd09a48 data-v-0cd09a48">
          <view class="mutli mutli--mutli data-v-195a6d38 mutli--data-v-195a6d38">
            <view class="mutli-item mutli--mutli-item data-v-195a6d38 mutli--data-v-195a6d38">
              <image
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-image"
                mode="scaleToFill"
                style="width: 50px; height: 50px"
              ></image>
              <view
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-transparent sk-text-14-2857-427 sk-text"
                style="background-position-x: 50%"
                >居家</view
              >
            </view>
            <view class="mutli-item mutli--mutli-item data-v-195a6d38 mutli--data-v-195a6d38">
              <image
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-image"
                mode="scaleToFill"
                style="width: 50px; height: 50px"
              ></image>
              <view
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-transparent sk-text-14-2857-791 sk-text"
                style="background-position-x: 50%"
                >锦鲤</view
              >
            </view>
            <view class="mutli-item mutli--mutli-item data-v-195a6d38 mutli--data-v-195a6d38">
              <image
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-image"
                mode="scaleToFill"
                style="width: 50px; height: 50px"
              ></image>
              <view
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-transparent sk-text-14-2857-861 sk-text"
                style="background-position-x: 50%"
                >服饰</view
              >
            </view>
            <view class="mutli-item mutli--mutli-item data-v-195a6d38 mutli--data-v-195a6d38">
              <image
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-image"
                mode="scaleToFill"
                style="width: 50px; height: 50px"
              ></image>
              <view
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-transparent sk-text-14-2857-303 sk-text"
                style="background-position-x: 50%"
                >母婴</view
              >
            </view>
            <view class="mutli-item mutli--mutli-item data-v-195a6d38 mutli--data-v-195a6d38">
              <image
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-image"
                mode="scaleToFill"
                style="width: 50px; height: 50px"
              ></image>
              <view
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-transparent sk-text-14-2857-371 sk-text"
                style="background-position-x: 50%"
                >个护</view
              >
            </view>
            <view class="mutli-item mutli--mutli-item data-v-195a6d38 mutli--data-v-195a6d38">
              <image
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-image"
                mode="scaleToFill"
                style="width: 50px; height: 50px"
              ></image>
              <view
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-transparent sk-text-14-2857-547 sk-text"
                style="background-position-x: 50%"
                >严选</view
              >
            </view>
            <view class="mutli-item mutli--mutli-item data-v-195a6d38 mutli--data-v-195a6d38">
              <image
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-image"
                mode="scaleToFill"
                style="width: 50px; height: 50px"
              ></image>
              <view
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-transparent sk-text-14-2857-470 sk-text"
                style="background-position-x: 50%"
                >数码</view
              >
            </view>
            <view class="mutli-item mutli--mutli-item data-v-195a6d38 mutli--data-v-195a6d38">
              <image
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-image"
                mode="scaleToFill"
                style="width: 50px; height: 50px"
              ></image>
              <view
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-transparent sk-text-14-2857-441 sk-text"
                style="background-position-x: 50%"
                >运动</view
              >
            </view>
            <view class="mutli-item mutli--mutli-item data-v-195a6d38 mutli--data-v-195a6d38">
              <image
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-image"
                mode="scaleToFill"
                style="width: 50px; height: 50px"
              ></image>
              <view
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-transparent sk-text-14-2857-542 sk-text"
                style="background-position-x: 50%"
                >杂项</view
              >
            </view>
            <view class="mutli-item mutli--mutli-item data-v-195a6d38 mutli--data-v-195a6d38">
              <image
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-image"
                mode="scaleToFill"
                style="width: 50px; height: 50px"
              ></image>
              <view
                class="data-v-195a6d38 mutli--data-v-195a6d38 sk-transparent sk-text-14-2857-440 sk-text"
                style="background-position-x: 50%"
                >品牌</view
              >
            </view>
          </view>
        </view>
        <view
          is="pages/home/compuntens/recommend/recommend"
          class="data-v-0cd09a48 data-v-0cd09a48"
        >
          <view class="hot-item recommend--hot-item data-v-2cf65a6a recommend--data-v-2cf65a6a">
            <view class="item recommend--item data-v-2cf65a6a recommend--data-v-2cf65a6a">
              <view
                class="data-v-2cf65a6a recommend--data-v-2cf65a6a"
                style="position: relative; top: 2px; left: 8px"
              >
                <text
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-transparent sk-text-14-2857-811 sk-text"
                  style="font-size: 14px"
                  >特惠推荐</text
                >
                <text
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-transparent sk-text-14-2857-389 sk-text"
                  style="color: #ccc; font-size: 10px; margin-left: 5px"
                  >精选全攻略</text
                >
              </view>
              <view class="data-v-2cf65a6a recommend--data-v-2cf65a6a" style="display: flex">
                <image
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-image"
                  mode="scaleToFill"
                  style="margin-left: 5px"
                ></image>
                <image
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-image"
                  mode="scaleToFill"
                  style="margin-left: 5px"
                ></image>
              </view>
            </view>
            <view class="item recommend--item data-v-2cf65a6a recommend--data-v-2cf65a6a">
              <view
                class="data-v-2cf65a6a recommend--data-v-2cf65a6a"
                style="position: relative; top: 2px; left: 8px"
              >
                <text
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-transparent sk-text-14-2857-153 sk-text"
                  style="font-size: 14px"
                  >爆款推荐</text
                >
                <text
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-transparent sk-text-14-2857-154 sk-text"
                  style="color: #ccc; font-size: 10px; margin-left: 5px"
                  >最受欢迎</text
                >
              </view>
              <view class="data-v-2cf65a6a recommend--data-v-2cf65a6a" style="display: flex">
                <image
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-image"
                  mode="scaleToFill"
                  style="margin-left: 5px"
                ></image>
                <image
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-image"
                  mode="scaleToFill"
                  style="margin-left: 5px"
                ></image>
              </view>
            </view>
            <view class="item recommend--item data-v-2cf65a6a recommend--data-v-2cf65a6a">
              <view
                class="data-v-2cf65a6a recommend--data-v-2cf65a6a"
                style="position: relative; top: 2px; left: 8px"
              >
                <text
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-transparent sk-text-14-2857-605 sk-text"
                  style="font-size: 14px"
                  >一站买全</text
                >
                <text
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-transparent sk-text-14-2857-770 sk-text"
                  style="color: #ccc; font-size: 10px; margin-left: 5px"
                  >精心优选</text
                >
              </view>
              <view class="data-v-2cf65a6a recommend--data-v-2cf65a6a" style="display: flex">
                <image
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-image"
                  mode="scaleToFill"
                  style="margin-left: 5px"
                ></image>
                <image
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-image"
                  mode="scaleToFill"
                  style="margin-left: 5px"
                ></image>
              </view>
            </view>
            <view class="item recommend--item data-v-2cf65a6a recommend--data-v-2cf65a6a">
              <view
                class="data-v-2cf65a6a recommend--data-v-2cf65a6a"
                style="position: relative; top: 2px; left: 8px"
              >
                <text
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-transparent sk-text-14-2857-35 sk-text"
                  style="font-size: 14px"
                  >新鲜好物</text
                >
                <text
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-transparent sk-text-14-2857-938 sk-text"
                  style="color: #ccc; font-size: 10px; margin-left: 5px"
                  >生活加分项</text
                >
              </view>
              <view class="data-v-2cf65a6a recommend--data-v-2cf65a6a" style="display: flex">
                <image
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-image"
                  mode="scaleToFill"
                  style="margin-left: 5px"
                ></image>
                <image
                  class="data-v-2cf65a6a recommend--data-v-2cf65a6a sk-image"
                  mode="scaleToFill"
                  style="margin-left: 5px"
                ></image>
              </view>
            </view>
          </view>
        </view>
        <view is="pages/home/compuntens/Stuff/Stuff" class="data-v-0cd09a48 data-v-0cd09a48">
          <view></view>
        </view>
        <view
          is="pages/home/compuntens/guessLike/guessLike"
          class="data-v-0cd09a48 data-v-0cd09a48"
        >
          <view class="guessLike guessLike--guessLike data-v-e5581237 guessLike--data-v-e5581237">
            <image
              class="data-v-e5581237 guessLike--data-v-e5581237 sk-image"
              mode="scaleToFill"
            ></image>
            <text
              class="data-v-e5581237 guessLike--data-v-e5581237 sk-transparent sk-text-14-2857-893 sk-text"
              >猜你喜欢</text
            >
            <image
              class="data-v-e5581237 guessLike--data-v-e5581237 sk-image"
              mode="scaleToFill"
            ></image>
          </view>
          <view class="class guessLike--class data-v-e5581237 guessLike--data-v-e5581237">
            <view class="item guessLike--item data-v-e5581237 guessLike--data-v-e5581237">
              <image
                class="data-v-e5581237 guessLike--data-v-e5581237 sk-image"
                mode="scaleToFill"
              ></image>
              <text
                class="data-v-e5581237 guessLike--data-v-e5581237"
                style="font-size: 12px; overflow: hidden"
              ></text>
            </view>
            <view class="item guessLike--item data-v-e5581237 guessLike--data-v-e5581237">
              <image
                class="data-v-e5581237 guessLike--data-v-e5581237 sk-image"
                mode="scaleToFill"
              ></image>
              <text
                class="data-v-e5581237 guessLike--data-v-e5581237"
                style="font-size: 12px; overflow: hidden"
              ></text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<script lang="ts" setup></script>

<style scoped lang="scss">
.sk-transparent {
  color: transparent !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-146 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-427 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-791 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-861 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-303 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-371 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-547 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-470 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-441 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-542 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-440 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-811 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-389 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-14-2857-153 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-154 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-14-2857-605 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-770 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-14-2857-35 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-938 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-14-2857-893 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
