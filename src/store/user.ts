import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore(
  'store',
  () => {
    const token = ref('')
    const LoginList = ref<any>({})
    return {
      token,
      LoginList,
    }
  },
  {
    persist: {
      paths: ['token', 'LoginList'],
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      },
    },
  },
)
