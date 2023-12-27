<template>
	<view>
		<view class="user-login">
			<view class="login-type">
				<view class="title">{{tabMeta.title}}</view>
				<view class="type">
					<text @click="handlChangeType">{{tabMeta.subTitle}}</text>
					<text class="iconfont icon-caret"></text>
				</view>
			</view>
			<IMobile v-if="tabIndex===0"></IMobile>
			<IAccount v-else></IAccount>
		</view>
	</view>
</template>

<script setup lang="ts">
import IAccount from './components/IAccount.vue'
import IMobile from './components/Imobile.vue'
import {ref,computed} from 'vue'

const tabIndex=ref<number>(0)
interface metaType{
	title: string
	subTitle: string
}
const tabMetas = ref<metaType[]>([
	{
		title:'手机号登录',
		subTitle:'账户登录'
	},{
		title:'账号登录',
		subTitle:'手机号登录'
	}
])
const tabMeta = computed(()=>{
	return tabMetas.value[tabIndex.value]
})
const handlChangeType = ()=>{
	tabIndex.value=Math.abs(tabIndex.value-1)
}
</script>

<style lang="scss">
@import 'login.scss';
</style>
