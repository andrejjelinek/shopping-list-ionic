<template>
	<div class="custom-skeleton">
		<ion-skeleton-text animated class="title"></ion-skeleton-text>
		<ion-skeleton-text animated class="content"></ion-skeleton-text>
		
		<ion-skeleton-text animated class="title"></ion-skeleton-text>
		<ion-skeleton-text animated class="content"></ion-skeleton-text>
		
		<ion-skeleton-text animated class="title"></ion-skeleton-text>
		<ion-skeleton-text animated class="content"></ion-skeleton-text>

		<ion-skeleton-text animated class="title"></ion-skeleton-text>
		<ion-skeleton-text animated class="content"></ion-skeleton-text>
	</div>
</template>

<style lang="sass" scoped>
.title
	width: 50%
	height: 25px
	margin-bottom: 10px

.content
	width: 100%
	height: 46px
	margin-bottom: 37px

	&:nth-of-type(even)
		width: 80%
		
</style>