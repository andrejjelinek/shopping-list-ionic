import { App } 		from 'vue'
import { Options } 	from './types'
import mitt 		from 'mitt'

export default {
	install: (app: App, options: Options = {}) => {
		if (options && options.disabled === true) return

		const eventBus = mitt()
		app.config.globalProperties.eventBus = eventBus
	}
}