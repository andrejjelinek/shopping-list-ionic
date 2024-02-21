<template>
  <ion-card color="light">
    <ion-card-header>
      <ion-card-title>
        <ion-icon color="light" size="large" name="information-circle-sharp"></ion-icon>
        {{ shoppingList.title }}</ion-card-title
      >
    </ion-card-header>

    <ion-card-content>
      <ion-list>
        <ion-grid>
          <ion-item v-for="item in shoppingList.items.slice(0, 3)" :key="item.id">
            <ion-row class="full-width-row ion-justify-content-between">
              <ion-col size="auto">
                {{ item.name }}
              </ion-col>

              <ion-col size="auto">
                <ion-badge color="success">
                  <ion-text class="ion-color-primary-contrast">{{ item.value }}{{ item.unit }}</ion-text>
                </ion-badge>
              </ion-col>
            </ion-row>
          </ion-item>
        </ion-grid>
      </ion-list>
      <p v-if="shoppingList.items.length > 3">And {{ shoppingList.items.length - 3 }} others</p>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ShoppingList } from '../../../app/models/shopping-list-models'

export default defineComponent({
  props: {
    shoppingList: {
      type: Object as PropType<ShoppingList>,
      required: true,
    },
  },

  methods: {
    openShoppingListDetail({ id }) {
      this.$router.push({
        name: 'Shopping List - Detail',
        params: { id },
      })
    },
  },
})
</script>

<style>
.full-width-row {
  width: 100%;
}
</style>
