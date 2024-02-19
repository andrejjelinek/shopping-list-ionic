rm src/main.ts
rm src/App.vue
rm -rf src/views
rm -rf src/components
rm -rf src/router
rm babel.config.js

cp -r src/plugins/w/w/cli/_resources/* ./
cp src/plugins/w/w/cli/_resources/.env .env
mv src/theme src/plugins/app/_themes

npm uninstall @vue/cli-plugin-babel
npm uninstall @vue/cli-plugin-eslint
npm uninstall @vue/cli-plugin-router
npm uninstall @vue/cli-plugin-vuex
npm uninstall @vue/cli-service
npm uninstall sass-loader
npm uninstall babel-eslint
npm uninstall core-js
npm uninstall vue-template-compiler
npm install @vitejs/plugin-vue
npm install vite
npm install eslint@8
npm install eslint-plugin-vue@9
npm install -D sass

if grep -q "\"scripts\":" package.json; then
  sed -i.bak "/serve/d" package.json
  sed -i.bak "/build/d" package.json
  sed -i.bak "/lint/d" package.json
  sed -i.bak "/test:e2e/d" package.json
  sed -i.bak "/test:unit/d" package.json
fi

if grep -q "\"scripts\":" package.json; then
  sed -i.bak '/"scripts":/a \
    "dev": "vite", \
	"build": "vite build", \
	"serve": "vite preview", \
	"lint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src" \
	' package.json
fi