<template>
	<div>
		<div class="ion-padding-start ion-padding-vertical">
			<ion-skeleton-text animated class="title" />
			<ion-skeleton-text animated class="subtitle" />
			

			<div class="d-flex ion-justify-content-between">
				<div class="avatar-wrapper">
					<ion-skeleton-text class="avatar" />
					<ion-skeleton-text class="title" />
				</div>

				<div class="avatar-wrapper">
					<ion-skeleton-text class="avatar" />
					<ion-skeleton-text class="title" />
				</div>
			</div>

			<ion-skeleton-text class="hr" />

			<ion-skeleton-text animated class="title" />
			<ion-skeleton-text animated class="subtitle" />

			<div class="d-flex ion-justify-content-between">
				<ion-skeleton-text class="video" />
				<ion-skeleton-text class="video" />
				<ion-skeleton-text class="video half" />
			</div>

			<ion-skeleton-text class="hr" />

			<ion-skeleton-text animated class="title" />
			<ion-skeleton-text animated class="subtitle" />

			<div class="d-flex ion-justify-content-between">
				<ion-skeleton-text class="video" />
				<ion-skeleton-text class="video" />
				<ion-skeleton-text class="video half" />
			</div>
		</div>
	
	</div>
</template>

<style lang="sass" scoped>
.title
	width: 50%
	height: 22px
	margin-bottom: 10px

.subtitle
	width: 35%
	height: 18px
	margin-bottom: 30px

.avatar-wrapper
	width: 50vw

	.title
		width: 70%
		margin: auto

.avatar
	height: 48px
	width: 48px
	border-radius: 24px
	margin: auto auto 15px auto

.video
	height: 230px
	width: 37vw
	border-radius: 5px

	&.half
		width: 18vw

.hr
	height: 3px
	margin: 40px 0	20px 0
		
</style>