import { App } 		from 'vue'
import { Options } 	from './types/index.js'

import { ActionPerformed, PushNotifications, Token /*,  PushNotificationSchema */ } 	from '@capacitor/push-notifications'
import { addDevice, enablePushNotifications, routeToRecievedRoute} 				from './utils'

import { Preferences } from '@capacitor/preferences'
import { Capacitor } from '@capacitor/core'

export default {
	install: (app: App, options: Options = {}) => {
		if (options && options.disabled === true) return
		if (!Capacitor.isNativePlatform()) return console.warn('[@wezeo/notifications] Not available in browser')

		enablePushNotifications()

		PushNotifications.addListener('registration', async (token: Token) => {

			await Preferences.set({key: 'wezeo_notification_token', value: token.value.toString()})
			await addDevice()
			console.log('[@wezeo/notifications] Token registered successfuly: ' + token.value)
		})

		PushNotifications.addListener('registrationError', (error: any) => {
			console.log('[@wezeo/notifications] Error on notification registration: ' + JSON.stringify(error))
		})

		// PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
			// Badge.set({
			// 	count: notification.badge
			// })
		// })

		PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
			try {
				routeToRecievedRoute(notification.notification.data.actionId)
			} catch (error) {
				console.error('[@wezeo/notifications] Push notification action error: ' + JSON.stringify(error))
			}
		})
	}
}