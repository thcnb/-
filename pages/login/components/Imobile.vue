<template>
	<view>
		<uni-forms ref="seedForm" :model="formData" :rules="rules" label-position="top">
			<uni-forms-item name="name">
				<input type="text" v-model="formData.name" placeholder="请输入手机号" />
				<view class="input"></view>
			</uni-forms-item>
			<uni-forms-item name="email">
				<input v-model="formData.email" type="text" placeholder="请输入验证码" />
				<p class="Captcha">
					<text class="Captchas">获取验证码</text>
				</p>
				<view class="input"></view>
			</uni-forms-item>
		</uni-forms>
		<button class="button-hover" @click="submit">登录</button>
	</view>
</template>

<script setup lang="ts">
import { onReady } from '@dcloudio/uni-app'
import { ref } from 'vue'
const seedForm = ref()
const resetForm = () => {
	return {
		name: '',
		email: ''
	}
}
let formData = ref(resetForm())
const rules = {
	// 对name字段进行必填验证
	name: {
		rules: [
			{
				required: true,
				errorMessage: '请输入手机号'
			},
			{
				minLength: 11,
				maxLength: 11,
				errorMessage: '手机号长度在 {minLength} 位字符'
			}
		]
	},
	// 对email字段进行必填验证
	email: {
		rules: [
			{
				required: true,
				errorMessage: '请输入验证码'
			}
		]
	}
}
onReady(() => {
	seedForm.value.setRules(rules)
})
const submit = async () => {
	console.log(formData.value)
	seedForm.value.validate().then(async ({ valid }: any) => {
		if (valid) {
			console.log('校验失败')
		} else {
			//验证成功
			console.log('校验成功')
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
.Captcha {
	position: absolute;
	left: 260px;
	bottom: 10px;
	border-left: 1px solid #ccc;
	.Captchas {
		margin-left: 8px;
	}
}
.input {
	border-top: 1px solid #ccc;
	margin-top: 10px;
}
</style>
