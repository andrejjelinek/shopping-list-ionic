import { toastController } from '@ionic/vue'
import { ToastOptions} from '@ionic/core/dist/types/components/toast/toast-interface'
import utils from '../utils/toast.utils'

export class Toast {
	private i18n

	constructor(i18n) {
		this.i18n = i18n?.vendorI18n?.global
	}

	public async error(error: any = 'Error', position: 'bottom' | 'middle' | 'top' = 'bottom') {
		const toast = await toastController.create({
			message: utils.parseAndTranslate(error, this.i18n),
			color: 'danger',
			position: position,
			cssClass: 'w-toast',
			duration: 2000
		})

		toast.present()
	}

	public async success(message: any = 'Success', position: 'bottom' | 'middle' | 'top' = 'bottom') {
		const toast = await toastController.create({
			message: utils.parseAndTranslate(message, this.i18n),
			color: 'success',
			position: position,
			cssClass: 'w-toast',
			duration: 2000
		})

		toast.present()
	}

	public async custom(options: ToastOptions) {
		const toast = await toastController.create(options)
		toast.present()
	}
}

