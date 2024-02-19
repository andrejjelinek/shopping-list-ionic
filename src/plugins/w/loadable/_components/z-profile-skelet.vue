<template>
	<div>
		<ion-skeleton-text animated class="cover"></ion-skeleton-text>
		<ion-skeleton-text animated class="avatar"></ion-skeleton-text>
		
		<ion-skeleton-text animated class="name"></ion-skeleton-text>
		
		<ion-skeleton-text animated class="content"></ion-skeleton-text>
		<ion-skeleton-text animated class="content"></ion-skeleton-text>
		<ion-skeleton-text animated class="content"></ion-skeleton-text>
		<ion-skeleton-text animated class="content"></ion-skeleton-text>
		<ion-skeleton-text animated class="content"></ion-skeleton-text>
		
	</div>
</template>

<style lang="sass" scoped>
.cover
	width: 100%
	height: 20vh
	margin-bottom: 10px

.avatar
	width: 80px
	height: 80px
	border-radius: 40px
	margin: 20px auto 40px auto

.name
	width: 60%
	height: 30px
	margin: 0 auto 50px auto	

.bio
	width: 80%
	margin: 0 auto 15px auto
	height: 40px

</style>