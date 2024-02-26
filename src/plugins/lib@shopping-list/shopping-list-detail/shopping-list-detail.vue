<template>
  <ion-page>
    <template v-if="shoppingListById === null">
      <v-progress-linear indeterminate color="success" />
    </template>

    <template v-else>
      <ion-card>
        <ion-card-header>
          <ion-card-title>{{ shoppingListById?.title }}</ion-card-title>
        </ion-card-header>

        <!-- <button @click="handleDeleteShoppingList()" class="hover:bg-rose-50 rounded-lg p-1 ease-in duration-200 active">
            <img src="../../app/_assets/deleteIcon.svg" alt="Delete icon" />
          </button> -->
        <ion-list lines="full">
          <AShoppingListDetailItem v-for="item in shoppingListById?.items" :item="item" :key="item.id" />
          <!-- <A-shopping-list-detail-item v-for="item in shoppingListById?.items" @deleteItem="handleDeleteItem" @checkItem="handleCheckItem" :item="item" :key="item.id" /> -->
        </ion-list>

        <!-- <div class="w-3/4 m-auto">
          <v-text-field v-model="newItemName" @keyup.enter="handleCreateItem" label="New item" hide-details="auto" color="primary"></v-text-field>
        </div> -->

        <!-- <v-btn @click="handleNavigateBack" variant="outlined" color="primary" class="w-1/6 mx-auto mt-10">
          <img src="./_assets/backIcon.svg" alt="Back icon" />
          Back
        </v-btn> -->
      </ion-card>
    </template>
  </ion-page>
</template>

<script setup lang="ts">
import AShoppingListDetailItem from './_components/a-shopping-list-detail-item.vue'
import { ShoppingList } from '@/plugins/app/models/shopping-list-models'
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'

const route = useRoute()
const { id } = route.params

/**
 * Use query for loading cached shopping lists from previous page
 */
const { data: shoppingLists } = useQuery({
  queryKey: ['shopping-lists'],
  queryFn: () => {
    return [] as ShoppingList[]
  },
})

/**
 * Property for finding shopping list by ID from ULR params
 */
const shoppingListById = shoppingLists?.value.find((item) => item.id == +id) ?? null
</script>
