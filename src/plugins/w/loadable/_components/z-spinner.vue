<template>
	<div class="ion-padding">
		<div class="wrapper">
			<ion-spinner name="crescent"></ion-spinner>
		</div>
	</div>
</template>

<style lang="sass" scoped>
.wrapper
	height: 90vh
	display: flex
	justify-content: center
	align-items: center

	ion-spinner
		--color: var(--ion-color-primary-contrast)
		height: 50px
		width: 50px
</style>