import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { IonicVue } from '@ionic/vue'

import '@ionic/vue/css/core.css'

import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

import '@/plugins/app/_themes/index.sass'

import store from './store'
import w from '@/plugins/w/w'
// import wToast from '@/plugins/w/toast'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const queryClient = new QueryClient()

const app = createApp(App)
  .use(IonicVue)
  .use(VueQueryPlugin)
  .use(router)
  .use(store)
  .use(w, {
    i18n: {
      defaultLanguage: 'en',
      languages: [
        { title: 'Slovenský', flag: 'sk', value: 'sk' },
        { title: 'English', flag: 'en', value: 'en' },
      ],
    },
  })
  .use(Vue3Toastify, {
    theme: 'colored',
    type: 'success',
    position: 'bottom-center',
    autoClose: 2000,
  } as ToastContainerOptions)
// .use(wToast)

router.isReady().then(() => {
  app.mount('#app')
})
