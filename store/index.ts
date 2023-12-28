import { defineStore } from 'pinia'
import { ref } from 'vue'
// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore(
	'users',
	() => {
		const token = ref<string>('')
		return {
			token
		}
	},
	{
		 persist: true
	}
)
