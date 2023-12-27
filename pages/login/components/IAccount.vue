<template>
	<view>
		<uni-forms ref="seedForm" :model="formData" :rules="rules" label-position="top">
			<uni-forms-item name="name">
				<view class="input">
					<input class="" type="text" v-model="formData.name" placeholder="请输入账号" />
				</view>
			</uni-forms-item>
			<uni-forms-item name="email">
				<view class="input">
					<input class="" v-model="formData.email" :password="password" type="text" placeholder="请输入密码" />
					<uni-icons @click="uIcons" class="uIcons" :type="password==true?'eye-filled':'eye-slash-filled'" size="20"></uni-icons>
				</view>
			</uni-forms-item>
		</uni-forms>
		<button class="button-hover" @click="submit">登录</button>
	</view>
</template>

<script setup lang="ts">
import { onReady } from '@dcloudio/uni-app'
import { loginApi } from './../../../apis/loginss'
import { ref } from 'vue'
const seedForm = ref()
const resetForm = () => {
	return {
		name: '',
		email: ''
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
const uIcons = ()=>{
	password.value=!password.value
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
				uni.navigateTo({
					url:'/pages/index/index'
				})
			})
		}
	})
}
</script>

<style lang="scss">
.button-hover {
	width: 309px;
	height: 50px;
	background: #ef4f3f;
	border-radius: 24.77px;
	color: #fff;
}
.uni-forms-item__label no-label {
	border-bottom: #000;
}
.uIcons {
	position: absolute;
	left: 330px;
	bottom: 3px;
}
.input{
	border-bottom: 1px solid #ccc;
	margin-bottom: 1px;
}
</style>
