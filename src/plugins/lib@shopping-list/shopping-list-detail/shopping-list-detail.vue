<template>
  <ion-page>
    <template v-if="shoppingListById === null">
      <v-progress-linear indeterminate />
    </template>

    <template v-else>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-grid>
              <ion-row>
                <ion-button @click="handleNavigateBack" fill="clear">
                  <ion-icon :icon="arrowBackOutline" slot="icon-only"></ion-icon>
                </ion-button>
                <p class="ion-text-center">{{ shoppingListById?.title }}</p>
              </ion-row>
            </ion-grid>
          </ion-card-title>
        </ion-card-header>

        <!-- <button @click="handleDeleteShoppingList()" class="hover:bg-rose-50 rounded-lg p-1 ease-in duration-200 active">
            <img src="../../app/_assets/deleteIcon.svg" alt="Delete icon" />
          </button> -->
        <ion-list lines="full">
          <AShoppingListDetailItem
            v-for="item in shoppingListById?.items"
            @check-item="checkItemMutation"
            @delete-item="deleteItemMutation"
            :item="item"
            :key="item.id"
          />
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
import { CheckedItem } from '@/plugins/app/models/shopping-list-models'
import axios from '@/plugins/w/axios/models/axios'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import AShoppingListDetailItem from './_components/a-shopping-list-detail-item.vue'
import { ShoppingListService } from '../shopping-lists/_services/shopping-list-service'
import { arrowBackOutline } from 'ionicons/icons'

const route = useRoute()
const { id } = route.params
const router = useRouter()

/**
 * Mutation for check/uncheck shopping list item
 */
const { mutate: checkItemMutation } = useMutation({
  mutationFn: (checkedItem: CheckedItem) => handleCheckItem(checkedItem),
})

/**
 * Mutation for deleting shopping list item
 */
const { mutate: deleteItemMutation } = useMutation({
  mutationFn: (itemId: number) => handleDeleteItem(itemId),
})

/**
 * Use query for loading shopping lists, if data are loaded from shopping-lists.vue, request is not sended data are from cache
 */
const { data: shoppingLists, refetch } = useQuery({
  queryKey: ['shopping-lists'],
  queryFn: () => ShoppingListService.loadData(),
})

/**
 * Property for finding shopping list by ID from ULR params
 */
const shoppingListById = shoppingLists?.value?.find((item) => item.id == +id) ?? null

/**
 * Send PUT request for updating is_checked property
 */
const handleCheckItem = async (item: CheckedItem) => {
  try {
    await axios.put(`api/v1/shopping-lists/${id}/items/${item.id}`, item)
    toast.success(`OK - item was ${item.is_checked ? 'checked' : 'unchecked'}`)
    refetch()
  } catch (error) {
    console.error('Error:', error.message)
    toast.error(error.message)
  }
}

/**
 * Send DELETE request for dele
 */
const handleDeleteItem = async (itemId) => {
  try {
    await axios.delete(`api/v1/shopping-lists/${id}/items/${itemId}`)
    refetch()
  } catch (error) {
    console.error('Error:', error)
    toast.error(error.message)
  }
}

const handleNavigateBack = () => {
  router.go(-1)
}
</script>
