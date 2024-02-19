<template>
	<div>
		<div v-if="!items">
			<Z-profile-skelet v-if="skelet == 'profile'" />
			<Z-comments-skelet v-else-if="skelet == 'comments'" />
			<Z-categories-skelet v-else-if="skelet == 'categories'" />
			<Z-discover-skelet v-else-if="skelet == 'Discover'" />
			<Z-channel-subscribe v-else-if="skelet == 'channel-subscribe'" />
			<Z-spinner v-else-if="skelet == 'spinner'" />

			<div v-else-if="skelet == 'none'"></div>
			<Z-spinner v-else />
		</div>

		<div v-if="typeof items === 'object'" class="ion-text-center">
			<div v-if="items && !Object.keys(items).length" class="ion-padding">{{ this.$t('messageEmpty') }}</div>
			<div v-else-if="items && items.error" class="ion-padding">{{ this.$t('messageError') }} {{ items.error }}</div>
			<slot v-else-if="items && Object.keys(items).length"></slot>
		</div>

		<div v-else-if="Array.isArray(items)" class="ion-text-center">
			<div v-if="items && !items.length" class="ion-padding">{{ messageEmpty }}</div>
			<slot v-else-if="items && items.length"></slot>
		</div>

		<div v-else-if="items == true">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import ZProfileSkelet from './z-profile-skelet.vue'
import ZCommentsSkelet from './z-comments-skelet.vue'
import ZCategoriesSkelet from './z-categories-skelet.vue'
import ZDiscoverSkelet from './z-discover-skelet.vue'
import ZChannelSubscribe from './z-channel-subscribe.vue'
import ZSpinner from './z-spinner.vue'

export default {
	props: {
		items: {
			type: [Object, Array, Boolean],
			default: null
		},

		skelet: {
			type: String,
			default: 'profile'
		},

		messageEmpty: {
			type: String,
			default: 'No items found.'
		},

		messageError: {
			type: String,
			default: 'Error. We could not load requested data.'
		}
	},

	components: {
		ZProfileSkelet,
		ZCommentsSkelet,
		ZCategoriesSkelet,
		ZDiscoverSkelet,
		ZChannelSubscribe,
		ZSpinner
	}
}
</script>