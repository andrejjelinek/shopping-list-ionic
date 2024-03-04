<template>
  <ion-card class="language-card">
    <ion-card-header>
      <ion-card-title>
        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col size="auto">
              <p>{{ $t('selectedLanguage') }}</p>
            </ion-col>
            <ion-col size="auto">
              <ion-select v-model="locale">
                <ion-select-option value="sk">Slovensky</ion-select-option>
                <ion-select-option value="en">English</ion-select-option>
              </ion-select>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-title>
    </ion-card-header>
  </ion-card>

  <ion-list lines="full" class="menu-list">
    <ion-item class="menu-item">
      <router-link to="/" active-class="active-link"><ion-icon :icon="homeOutline" /> {{ $t('homeBtn') }} </router-link>
    </ion-item>
    <ion-item v-for="item in shoppingLists" :key="item.id" class="menu-item">
      <router-link :to="`/shopping-lists/${item.id}`" active-class="active-link">
        <ion-icon :icon="bagOutline" />
        {{ item.title }}
      </router-link>
    </ion-item>
    <ion-item class="ion-margin-top">
      <ion-input v-model="newListName" @keyup.enter="createShoppingListMutation" :disabled="pendingCreateShoppingList" :label="$t('newShoppingListName')" label-placement="stacked" fill="solid" :placeholder="$t('newItemNamePlaceholder')" />
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query'
import { useI18n } from 'vue-i18n'
import { ShoppingListService } from '../shopping-lists/_services/shopping-list-service'
import { homeOutline, bagOutline } from 'ionicons/icons'
import { ref } from 'vue'
import axios from '@/plugins/w/axios/models/axios'
import { toast } from 'vue3-toastify'

// const languageStore = useLanguageStore()
const { locale, t } = useI18n()
const newListName = ref<string>('')

/**
 * Mutation for check/uncheck shopping list item
 */
const { mutate: createShoppingListMutation, isPending: pendingCreateShoppingList } = useMutation({
  mutationFn: () => handleCreateShoppingList(),
})

/**
 * Query for shopping lists
 */
const { data: shoppingLists, refetch } = useQuery({
  queryKey: ['shopping-lists'],
  queryFn: () => ShoppingListService.loadData(),
})

/**
 * Send POST request for creating a new shopping list
 */
const handleCreateShoppingList = async () => {
  try {
    if (newListName.value.trim() == '') return toast.warning(t('newShoppingListError'))

    await axios.post(`api/v1/shopping-lists`, {
      items: [],
      title: newListName.value,
    })
    refetch()
    newListName.value = ''
    toast.success(t('newShoppingListInfo'))
  } catch (error) {
    console.error('Error:', error.message)
    toast.error(error.message)
  }
}
</script>

<style>
.menu-list {
  margin-top: 10px;
}

.language-card {
  margin: 10px 0;
}

.active-link {
  color: var(--ion-color-primary) !important;
}

.menu-item a {
  text-decoration: none;
  color: #fff;
}
</style>
