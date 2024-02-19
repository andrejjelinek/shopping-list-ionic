# W / Alert
- This plugin will add global $alert variable, so you can easily use alerts anywhere
- This plugin automatically supports w/i18n for translations

# Required internal plugins
- w/alerts

# Installation
1. Import in main.ts
```javascript
import wAlert from '@/plugins/w/alert'

const app = createApp(App)
	.use(wAlert)
```
2. If you have installed w/i18n (you have to import i18n first), all messages will be automatically translated

# Examples
- alert will add global $alert property (this.$alert).

1. Confirm
```javascript
async pay() {
	try {
		await this.$alert.confirm('Potvrdiť platbu')
		await axios.post(...)
	} catch (error) {
		this.$toast.error(error)
	}
}
```

2. Prompt
```javascript
async deleteAccount() {
	try {
		const password = await this.$alert.prompt('Enter password to confirm', {placeholder: 'Heslo', type: 'password'})
		await this.$axios.delete_with_params('v1/auth/delete', {password: password})
		// ...
	} catch (error) {
		this.$toast.error(error)
	}
}
```
