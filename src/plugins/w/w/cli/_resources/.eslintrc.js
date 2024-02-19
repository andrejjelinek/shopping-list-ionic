module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended'],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/no-deprecated-slot-attribute': 'off',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'semi': [1, 'never'],
		'indent': ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'],
		'vue/no-deprecated-slot-attribute': 'off',
		'prefer-const': import.meta.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-unreachable': import.meta.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'@typescript-eslint/no-unused-vars': import.meta.env.NODE_ENV === 'production' ? 'error' : 'warn'
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true,
				es2021: true
			}
		}
	]
}
