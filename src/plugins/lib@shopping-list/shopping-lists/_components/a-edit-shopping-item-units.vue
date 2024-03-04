<template>
  <ion-button @click="setOpen(true)" color="warning" fill="clear">
    <ion-icon :icon="createOutline" slot="icon-only" />
  </ion-button>

  <ion-modal :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-title color="primary">{{ $t('updateUnitTitle') }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="setOpen(false)">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-list>
              <ion-item>
                <ion-select v-model="itemInfo.unit" aria-label="Unit" placeholder="Select unit">
                  <ion-select-option value="package">{{ t('package') }}</ion-select-option>
                  <ion-select-option value="piece">{{ t('piece') }}</ion-select-option>
                  <ion-select-option value="grams">{{ t('grams') }}</ion-select-option>
                  <ion-select-option value="kilograms">{{ t('kilograms') }}</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12">
            <ion-input v-model="itemInfo.value" type="number" label="Count" label-placement="stacked" fill="solid" class="ion-margin-top" />
          </ion-col>
        </ion-row>

        <ion-row class="ion-justify-content-center ion-margin-top">
          <ion-button @click="updateUnitMutation" :disabled="pendingUpdateUnit" fill="solid">{{ t('editBtn') }}</ion-button>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { ShoppingListItem } from '@/plugins/app/_models/shopping-list-models'
import axios from '@/plugins/w/axios/models/axios'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { createOutline } from 'ionicons/icons'
import { onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { toast } from 'vue3-toastify'

interface ItemInfo {
  unit: string
  value: string
}

const queryClient = useQueryClient()

const { item, listId } = defineProps({
  item: {
    type: Object as () => ShoppingListItem,
    required: true,
  },
  listId: {
    type: Number,
    required: true,
  },
})

const isOpen = ref<boolean>(false)
const setOpen = (open: boolean) => (isOpen.value = open)
let itemInfo = reactive<ItemInfo>({ unit: 'piece', value: '1' })
const { t } = useI18n()

onMounted(() => {
  itemInfo.unit = item.unit
  itemInfo.value = item.value
})

/**
 * Mutation for update item unit
 */
const { mutate: updateUnitMutation, isPending: pendingUpdateUnit } = useMutation({
  mutationFn: () => handleUpdateUnit(),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['shopping-lists'] })
  },
})

/**
 * Send PUT request for update item unit
 */
const handleUpdateUnit = async () => {
  try {
    await axios.put(`api/v1/shopping-lists/${listId}/items/${item.id}`, {
      id: item.id,
      unit: itemInfo.unit,
      value: itemInfo.value,
    })
    toast.success(t(`updateUnitInfo`))
    setOpen(false)
  } catch (error) {
    console.error('Error:', error)
    toast.error(error.message)
  }
}
</script>
