# W / W
- This plugin will install all w plugins, so you don't have to install separately

# Quick setup
### 1. Install dependencies with: `bash src/plugins/w/w/cli/dependencies.sh`
### 2. Create wezeo architecture: `bash src/plugins/w/w/cli/initialize.sh` (! RUN ONLY ON FIRST SETUP !)
### 4. Done :)


# Manual plugins-only install
1. Install dependencies with: `bash src/plugins/w/w/cli/dependencies.sh`
2. Set strict property in tsconfig to false
3. Create store.ts in @/plugins/app/_config
4. Add this to store.ts
```javascript
import { createStore } from 'vuex'

export default createStore({
	modules: {}
})
```
5. Import store and w in main.ts (store has to be imported first)
```javascript
import w from '@/plugins/w/w'

const app = createApp(App)
	.use(store)
	.use(w)
```

# Options
- you can configure each plugin (for example disable it) separately, then you have to pass this object as second argument `.use(w, options)`
```javascript
import { Options as WOptions } from '@/plugins/w/w/types'

const options: WOptions = {
	i18n: {
		languages: [
			{title: "Slovenský", flag: "sk", value: "sk"},
			{title: "English", flag: "en", value: "en"}
		],
		defaultLanguage: 'sk'
	}
}
```

# Examples
- each plugin has it's own readme with examples