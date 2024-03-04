<template>
  <template v-if="isLoading">
    <ion-grid class="ion-no-margin">
      <ion-row>
        <ion-col size="12">
          <ion-progress-bar type="indeterminate" />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="12">
          <ion-list>
            <ion-list-header>
              <ion-skeleton-text :animated="true" style="width: 80px"></ion-skeleton-text>
            </ion-list-header>
            <ion-item>
              <ion-thumbnail>
                <ion-skeleton-text :animated="true"></ion-skeleton-text>
              </ion-thumbnail>
              <ion-label>
                <h3>
                  <ion-skeleton-text :animated="true" style="width: 80%"></ion-skeleton-text>
                </h3>
                <p>
                  <ion-skeleton-text :animated="true" style="width: 60%"></ion-skeleton-text>
                </p>
                <p>
                  <ion-skeleton-text :animated="true" style="width: 30%"></ion-skeleton-text>
                </p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-col>
      </ion-row>
    </ion-grid>
  </template>

  <template v-else>
    <ion-page>
      <ion-content>
        <AShoppingListCard v-for="item in shoppingLists" :shoppingList="item" :key="item.id" />
      </ion-content>
    </ion-page>
  </template>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import AShoppingListCard from './_components/a-shopping-list-card.vue'
import { ShoppingListService } from './_services/shopping-list-service'

/**
 * Query for shopping lists
 */
const { data: shoppingLists, isLoading } = useQuery({
  queryKey: ['shopping-lists'],
  queryFn: () => ShoppingListService.loadData(),
})
</script>
