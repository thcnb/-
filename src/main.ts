import { createSSRApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export function createApp() {
  const pinia = createPinia()
  const app = createSSRApp(App)
  app.use(pinia)
  pinia.use(piniaPluginPersistedstate)
  return {
    app,
  }
}
