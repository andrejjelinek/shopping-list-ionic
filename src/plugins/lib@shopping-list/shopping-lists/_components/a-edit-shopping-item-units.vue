<template>
  <ion-button @click="setOpen(true)" color="warning" fill="clear">
    <ion-icon :icon="createOutline" slot="icon-only"></ion-icon>
  </ion-button>

  <ion-modal :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-title>Update unit and piece</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="setOpen(false)">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-select v-model="itemInfo.unit" aria-label="Unit" placeholder="Select unit">
            <ion-select-option value="package">Package</ion-select-option>
            <ion-select-option value="piece">Piece</ion-select-option>
            <ion-select-option value="grams">Grams</ion-select-option>
            <ion-select-option value="kilograms">Kilograms</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-input v-model="itemInfo.value" type="number" label="Piece" label-placement="stacked" placeholder="Enter the count" fill="solid" class="ion-margin-top" />
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { ShoppingListItem } from '@/plugins/app/_models/shopping-list-models'
import { createOutline } from 'ionicons/icons'
import { reactive, ref, watch } from 'vue'

interface ItemInfo {
  unit: string
  value: string
}

const { item } = defineProps({
  item: {
    type: Object as () => ShoppingListItem,
    required: true,
    default: {},
  },
})

const isOpen = ref<boolean>(false)
const setOpen = (open: boolean) => (isOpen.value = open)
let itemInfo = reactive<ItemInfo>({ unit: 'grams', value: '2' })

watch(
  () => item,
  (newItem) => {
    console.log(newItem)
    itemInfo = {
      unit: newItem.unit,
      value: newItem.value,
    }
  }
)
</script>
