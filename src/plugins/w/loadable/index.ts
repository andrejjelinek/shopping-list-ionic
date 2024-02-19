import { App } 		from 'vue'
import { Options } 	from './types'
import WLoadable	from './_components/w-loadable.vue'

export default {
	install: (app: App, options: Options = {}) => {
		if (options && options.disabled === true)
			return

		app.component('W-loadable', WLoadable)
	}
}
