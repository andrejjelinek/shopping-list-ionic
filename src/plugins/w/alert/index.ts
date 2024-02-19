import { App } 		from 'vue'
import { Options } 	from './types'
import { Alert } 	from './models/Alert'

export default {
	install: (app: App, options: Options = {}) => {
		if (options && options.disabled == true) return

		app.config.globalProperties.$alert = new Alert(app.config.globalProperties.$w18n)
	}
}