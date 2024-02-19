<template>
	<div class="custom-skeleton">
		<ion-skeleton-text animated class="margin-auto title"></ion-skeleton-text>

		<ion-skeleton-text animated class="margin-auto photo"></ion-skeleton-text>
		<ion-skeleton-text animated class="margin-auto subtitle"></ion-skeleton-text>

		<ion-skeleton-text animated class="margin-auto button"></ion-skeleton-text>
		<ion-skeleton-text animated class="margin-auto button"></ion-skeleton-text>
	</div>
</template>

<style lang="sass" scoped>
.custom-skeleton
	padding-top: 20vh

.margin-auto
	margin: auto
	display: block

.title
	width: 60%
	height: 40px
	margin-bottom: 100px

.photo
	height: 110px
	width: 110px
	border-radius: 55px
	margin-bottom: 15px

.subtitle
	width: 50vw
	height: 20px
	margin-bottom: 20vh

.button
	width: 90vw
	height: 63px
	margin-bottom: 15px


		
</style>