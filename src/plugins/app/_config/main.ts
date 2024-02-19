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

const app = createApp(App)
	.use(IonicVue)
	.use(router)
	.use(store)
	.use(w, {
		i18n: {
			defaultLanguage: 'sk',
			languages: [{title: "Slovenský", flag: "sk", value: "sk"}]
		}
	})

router.isReady().then(() => {
	app.mount('#app')
})
