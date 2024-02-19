# W / Toast
- This plugin will add global $toast variable, so you can easily use toast anywhere
- This plugin automatically supports w/i18n for translations
# Required internal plugins
- w/i18n
# Installation
1. Import in main.ts
```javascript
import wToast from '@/plugins/w/toast'

const app = createApp(App)
	.use(wToast)
```
2. If you have installed w/i18n (you have to import i18n first), all messages will be automatically translated

# Examples
- toast will add global $toast property (this.$toast).

```javascript 
1.  this.$toast.error(error: any = 'Error', position: 'bottom' | 'middle' | 'top' = 'bottom') 

2.  this.$toast.success(message: any = 'Success', position: 'bottom' | 'middle' | 'top' = 'bottom')

3.  this.$toast.custom(options: ToastOptions)

    ToastOptions = {
        message: any,
        position: 'bottom' | 'middle' | 'top',
        color: any,
        duration: inteeger
    }
```
