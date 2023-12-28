<template>
	<view>
		<uni-forms ref="seedForm" :model="formData" :rules="rules" label-position="top">
			<uni-forms-item name="name">
				<input class="" type="text" v-model="formData.name" placeholder="请输入账号" />
				<view class="input"></view>
			</uni-forms-item>
			<uni-forms-item name="email">
				<input class="" v-model="formData.email" :password="password" type="text" placeholder="请输入密码" />
				<uni-icons @click="uIcons" class="uIcons" :type="password == true ? 'eye-filled' : 'eye-slash-filled'" size="20"></uni-icons>
				<view class="input"></view>
			</uni-forms-item>
		</uni-forms>
		<button class="button-hover" @click="submit">登录</button>
	</view>
</template>

<script setup lang="ts">
import { onReady } from '@dcloudio/uni-app'
import { loginApi } from './../../../apis/loginss'
import { ref } from 'vue'
import {useUsersStore} from '@/store/index'
const store = useUsersStore()
const seedForm = ref()
const resetForm = () => {
	return {
		name: 'xbsj001',
		email: '123456'
	}
}
const password = ref(true)
let formData = ref(resetForm())
const rules = {
	// 对name字段进行必填验证
	name: {
		rules: [
			{
				required: true,
				errorMessage: '请输入账号'
			}
		]
	},
	// 对email字段进行必填验证
	email: {
		rules: [
			{
				required: true,
				errorMessage: '请输入密码'
			}
		]
	}
}
onReady(() => {
	seedForm.value.setRules(rules)
})
const uIcons = () => {
	password.value = !password.value
}
const submit = async () => {
	console.log(formData.value)
	seedForm.value.validate().then(async ({ valid }: any) => {
		if (valid) {
			console.log('校验失败')
		} else {
			loginApi({
				account: formData.value.name,
				password: formData.value.email
			}).then((res) => {
				console.log(res)
				store.token=res.data
				console.log(store.token);
			})
		}
	})
}
</script>

<style lang="scss">
@import '../login.scss';
</style>
