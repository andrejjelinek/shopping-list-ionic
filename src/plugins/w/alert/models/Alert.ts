import { alertController } from '@ionic/vue'
import { AlertOptions } from '@ionic/core/dist/types/components/alert/alert-interface'

export class Alert {
	private i18n

	constructor(i18n) {
		this.i18n = i18n?.vendorI18n?.global
	}

	public async confirm(header = 'Are you sure?', message = null) {
		const alert = await alertController.create({
			header: this.i18n.t(header),
			message: message ? this.i18n.t(message) : null,
			buttons: [
				{
					text: this.i18n.t('Cancel'),
					role: 'cancel'
				},
				{
					text: this.i18n.t('Confirm'),
					role: 'confirm'
				}
			]
		})

		await alert.present()
		const { role } = await alert.onDidDismiss()

		return new Promise((resolve) => {
			if (role == 'confirm') resolve(role)
		})
	}

	public async prompt(header = 'Are you sure?', input) {
		const alert = await alertController.create({
			header: this.i18n.t(header),
			buttons: [
				{
					text: this.i18n.t('Cancel'),
					role: 'cancel'
				},
				{
					text: this.i18n.t('Confirm'),
					role: 'confirm'
				}
			],
			inputs: [input]
		})

		await alert.present()
		const { data, role } = await alert.onDidDismiss()

		return new Promise((resolve) => {
			if (role == 'confirm') resolve(data?.values[0])
		})
	}

	public async custom(options: AlertOptions) {
		const alert = await alertController.create(options)
		alert.present()
	}
}
