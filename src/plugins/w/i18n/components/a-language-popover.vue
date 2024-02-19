<template>
	<div>
		<ion-list lines="none">
			<ion-item v-for="item in $w18n.availableLanguages" :key="item.id" @click="languageSelected(item)">
				<span :class="`flag ${item.flag}`" :style="{ backgroundImage: `url('${bg}')` }"></span>{{ item.title }}
			</ion-item>
		</ion-list>
	</div>
</template>

<script>
import bg 						from "./img/flags.png"
import { popoverController } 	from "@ionic/vue"

export default {
	data() {
		return {
			bg
		}
	},

	methods: {
		languageSelected(language) {
			this.$w18n.changeLanguage(language)
			// this.eventBus.emit("language-changed", language)
			popoverController.dismiss()
		}
	}
}
</script>

<style lang="sass" scoped>
.flag
	width: 52px
	height: 39px
	transform: scale(0.5)

	&.sk
		background-position: 0 -8569px

	&.en
		background-position: 0 -3444px

	&.cz
		background-position: 0 -2337px

	&.pl
		background-position: 0 -7626px

ion-item
	color: #fff
	--background: #2C2E30
	--border-color: #2C2E30
	&:hover
		cursor: pointer !important
</style>
