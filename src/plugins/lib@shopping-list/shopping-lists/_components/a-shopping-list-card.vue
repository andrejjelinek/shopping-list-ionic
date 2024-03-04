<template>
  <ion-card color="light">
    <ion-card-header>
      <ion-card-title>
        <ion-button fill="clear" @click="openShoppingListDetail(shoppingList)" :router-link="`/shopping-lists/${shoppingList.id}`" router-direction="back">
          <ion-icon :icon="basketOutline" size="large" />
          {{ shoppingList.title }}
        </ion-button>
      </ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-list>
        <ion-grid>
          <ion-item v-for="item in shoppingList.items.slice(0, 3)" :key="item.id">
            <ion-row class="ion-justify-content-between ion-align-items-center">
              <ion-col size="auto" :class="item.is_checked ? 'checked' : ''">
                {{ item.name }}
              </ion-col>
              <ion-col size="auto">
                <ion-row class="ion-align-items-center">
                  <ion-badge>
                    <ion-text>{{ item.value }} {{ $t(item.unit) }}</ion-text>
                  </ion-badge>
                  <AShoppingItemUnits :item="item" :list-id="shoppingList.id" />
                </ion-row>
              </ion-col>
            </ion-row>
          </ion-item>
        </ion-grid>
      </ion-list>
      <p v-if="shoppingList.items.length > 3" class="ion-padding-top">And {{ shoppingList.items.length - 3 }} others</p>
    </ion-card-content>
  </ion-card>

  <p v-if="!shoppingList">no data</p>
</template>

<script setup lang="ts">
import { ShoppingList } from '../../../app/_models/shopping-list-models'
import AShoppingItemUnits from './a-edit-shopping-item-units.vue'
import { useRouter } from 'vue-router'
import { basketOutline } from 'ionicons/icons'

const { shoppingList } = defineProps({
  shoppingList: {
    type: Object as () => ShoppingList,
    required: true,
    default: {},
  },
})

const router = useRouter()

const openShoppingListDetail = ({ id }) => {
  router.push({
    name: 'Shopping List - Detail',
    params: { id },
  })
}
</script>

<style>
ion-card ion-row {
  width: 100%;
}

ion-card {
  cursor: pointer;
}

ion-card-title ion-icon {
  margin-right: 0.5rem;
}

.checked {
  text-decoration: line-through;
}
</style>
