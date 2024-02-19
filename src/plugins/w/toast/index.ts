import { App } 		from 'vue'
import { Options } 	from './types'
import { Toast } 	from './models/Toast'

export default {
	install: (app: App, options: Options = {}) => {
		if (options && options.disabled === true) return

		const toast = new Toast(app.config.globalProperties.$w18n)

		app.config.globalProperties.$toast = toast
	}
}