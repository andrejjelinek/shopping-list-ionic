<template>
  <ion-card color="light">
    <ion-card-header>
      <ion-card-title>
        <ion-button
          fill="clear"
          @click="openShoppingListDetail(shoppingList)"
          :router-link="`/shopping-lists/${shoppingList.id}`"
          router-direction="back"
          ><ion-icon :icon="informationCircleOutline" size="large"></ion-icon>{{ shoppingList.title }}</ion-button
        >
      </ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-list>
        <ion-grid>
          <ion-item v-for="item in shoppingList.items.slice(0, 3)" :key="item.id">
            <ion-row class="ion-justify-content-between">
              <ion-col size="auto">
                {{ item.name }}
              </ion-col>

              <ion-col size="auto">
                <ion-badge>
                  <ion-text>{{ item.value }} {{ item.unit }}</ion-text>
                </ion-badge>
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
import { ShoppingList } from '../../../app/models/shopping-list-models'
import { useRouter } from 'vue-router'
import { informationCircleOutline } from 'ionicons/icons'

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
</style>
