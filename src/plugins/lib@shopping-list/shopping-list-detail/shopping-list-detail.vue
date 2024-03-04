<template>
  <ion-page>
    <template v-if="shoppingListById === null">
      <ion-progress-bar type="indeterminate" />
    </template>

    <template v-else>
      <ion-page>
        <ion-content>
          <ion-card color="light">
            <ion-card-header>
              <ion-card-title>
                <ion-grid>
                  <ion-row class="ion-align-items-center">
                    <ion-col size="auto">
                      <ion-button @click="handleNavigateBack" fill="clear">
                        <ion-icon :icon="arrowBackOutline" slot="icon-only" />
                      </ion-button>
                    </ion-col>

                    <ion-col size="auto">
                      <p class="ion-text-center">{{ shoppingListById?.title }}</p>
                    </ion-col>

                    <ion-col size="auto">
                      <ion-button @click="deleteShoppingListMutation" :disabled="pendingDeleteShoppingList" color="danger" fill="clear">
                        <ion-icon :icon="trashOutline" slot="icon-only" />
                      </ion-button>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <ion-progress-bar type="indeterminate" v-if="pendingCheck || pendingDelete || pendingCreateItem" />
              <ion-list lines="full">
                <AShoppingListDetailItem v-for="item in shoppingListById?.items" @check-item="checkItemMutation" @delete-item="deleteItemMutation" :item="item" :key="item.id" />
              </ion-list>
              <ion-input v-model="newItemName" @keyup.enter="createItemMutation" :disabled="pendingCreateItem" :label="$t('newItemName')" label-placement="floating" fill="solid" :placeholder="$t('newItemNamePlaceholder')"></ion-input>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </ion-page>
    </template>
  </ion-page>
</template>

<script setup lang="ts">
import { CheckedItem } from '@/plugins/app/_models/shopping-list-models'
import axios from '@/plugins/w/axios/models/axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import AShoppingListDetailItem from './_components/a-shopping-list-detail-item.vue'
import { ShoppingListService } from '../shopping-lists/_services/shopping-list-service'
import { arrowBackOutline, trashOutline } from 'ionicons/icons'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { id } = route.params
const router = useRouter()
const newItemName = ref('')
const { t } = useI18n()
const queryClient = useQueryClient()

/**
 * Mutation for check/uncheck shopping list item
 */
const { mutate: deleteShoppingListMutation, isPending: pendingDeleteShoppingList } = useMutation({
  mutationFn: () => handleDeleteShoppingList(),
})

/**
 * Mutation for check/uncheck shopping list item
 */
const { mutate: createItemMutation, isPending: pendingCreateItem } = useMutation({
  mutationFn: () => handleCreateItem(),
})

/**
 * Mutation for check/uncheck shopping list item
 */
const { mutate: checkItemMutation, isPending: pendingCheck } = useMutation({
  mutationFn: (checkedItem: CheckedItem) => handleCheckItem(checkedItem),
})

/**
 * Mutation for deleting shopping list item
 */
const { mutate: deleteItemMutation, isPending: pendingDelete } = useMutation({
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
const shoppingListById = computed(() => {
  return shoppingLists?.value?.find((item) => item.id == +id) ?? null
})

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
    toast.success(t(`deleteItemInfo`))
  } catch (error) {
    console.error('Error:', error)
    toast.error(error.message)
  }
}

/**
 * Send POST request for creating a new item
 */
const handleCreateItem = async () => {
  try {
    if (newItemName.value.trim() == '') return toast.warning(t('itemNameEmpty'))

    await axios.post(`api/v1/shopping-lists/${id}/items`, {
      is_checked: false,
      name: newItemName.value.trim(),
      unit: 'piece',
      value: 1,
    })

    refetch()
    newItemName.value = ''
    toast.success(t('createdItemInfo'))
  } catch (error) {
    console.error('Error:', error.message)
    toast.error(error.message)
  }
}

/**
 * Send DELETE request for deleting shopping list
 */
const handleDeleteShoppingList = async () => {
  try {
    await axios.delete(`api/v1/shopping-lists/${id}`)
    router.push('/')
  } catch (error) {
    console.error('Error:', error.message)
    toast.error(error.message)
  }
}

const handleNavigateBack = () => {
  queryClient.invalidateQueries({ queryKey: ['shopping-lists'] })
  router.push('/')
}
</script>
