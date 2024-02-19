import { Capacitor } 			from '@capacitor/core'
import { PushNotifications } 	from '@capacitor/push-notifications'
import { Preferences } 			from '@capacitor/preferences'
import { Device } 				from '@capacitor/device'
import { App } 					from '@capacitor/app'
import router 					from '@/plugins/app/_config/router'
import axios					from '@/plugins/w/axios/models/axios'

const api = {
	addDevice: async (token, deviceInfo)	=> await axios.post_auth('v1/auth/devices/register', {token, ...deviceInfo}),
	removeDevice: (token)					=> axios.delete_auth(`v1/auth/devices/${token}`)
}

export async function enablePushNotifications() {
	if (!Capacitor.isNativePlatform()) return

	const permissionsState 	= await PushNotifications.checkPermissions()

	if (permissionsState.receive == 'granted') {
		return PushNotifications.register()
	}

	const result			= await PushNotifications.requestPermissions()

	if (result.receive == 'granted')
		return PushNotifications.register()
}

export const routeToRecievedRoute = (route) => {
	try {
		//user was not found fix
		if (typeof route == 'string') {
			const link = JSON.parse(route)
			if (link.name == "Feed - Profile videos") {
				const feedLink = {
					name: link.name,
					params: {
						userId: link.params.userId,
						videoId: link.params.videoId,
						type: 'lessons'
					}
				}
				router.replace(JSON.stringify(feedLink))
			}
			else {
				router.replace(JSON.stringify(link))
			}
		}
		else if (typeof route == 'object') {
			const link = route
			if (link.name == "Feed - Profile videos") {
				const feedLink = {
					name: link.name,
					params: {
						userId: link.params.userId,
						videoId: link.params.videoId,
						type: 'lessons'
					}
				}
				router.replace(JSON.stringify(feedLink))
			}
			else {
				router.replace(JSON.stringify(link))
			}
		}
		router.replace(JSON.parse(route))
	} catch(err) {
		router.push({name: 'Feed - For you'})
	}
}

export async function addDevice() {
	const {value: token} = await Preferences.get({key: 'wezeo_notification_token'})

	if(!token) return
	if(!localStorage.getItem('wzo_vue_user_token')) return

	const deviceInfo 	= await Device.getInfo()
	const deviceId 		= await Device.getId()
	const appInfo 		= await App.getInfo()

	try {
		await api.addDevice(token, {...deviceInfo, appVersion: appInfo.version, appBuild: appInfo.build, uuid: deviceId.uuid})
	} catch (error) {
		console.error('[@wezeo/notifications] Failed to add device token: ' + JSON.stringify(error))
	}
}

export async function removeDevice() {
	const {value: token} = await Preferences.get({key: 'wezeo_notification_token'})

	if(!token) return
	if(!localStorage.getItem('wzo_vue_user_token')) return

	try {
		await api.removeDevice(token)
	} catch (error) {
		console.error('[@wezeo/notifications] Failed to remove device token:' + JSON.stringify(error))
	}
}
