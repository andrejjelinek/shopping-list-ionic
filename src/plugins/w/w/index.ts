import { App } 		from 'vue'
import { Options } 	from './types'

import axios	 	from '@/plugins/w/axios'
import moxios	 	from '@/plugins/w/moxios'
import events	 	from '@/plugins/w/events'
import i18n	 		from '@/plugins/w/i18n'
import ionic	 	from '@/plugins/w/ionic'
import auth			from '@/plugins/w/auth'
import toast		from '@/plugins/w/toast'

export default {
	install: (app: App, options: Options = {}) => {
		events.install(app, options.events)
		axios.install(app, options.axios)
		i18n.install(app, options.i18n)
		moxios.install(app, options.moxios)
		ionic.install(app, options.ionic)
		auth.install(app, options.auth)
		toast.install(app, options.toast)
	}
}