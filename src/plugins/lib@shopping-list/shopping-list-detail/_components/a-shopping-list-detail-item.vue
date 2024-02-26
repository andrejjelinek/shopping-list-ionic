<template>
  <ion-item>
    <ion-checkbox v-model="item.is_checked" @ionChange="handleCheckItem(item)" label-placement="end">{{ item.name }}</ion-checkbox>

    <ion-button @click="handleDeleteItem(item)" color="danger" fill="outline">
      <ion-icon :icon="trashOutline" slot="icon-only"></ion-icon>
    </ion-button>
  </ion-item>
</template>

<script setup lang="ts">
import { CheckedItem, ShoppingListItem } from '../../../app/models/shopping-list-models'
import { trashOutline } from 'ionicons/icons'

const emit = defineEmits<{
  checkItem: [checkedItem: CheckedItem]
  deleteItem: [itemId: number]
}>()

const { item } = defineProps({
  item: {
    type: Object as () => ShoppingListItem,
    default: {},
    required: true,
  },
})

/**
 * Call delete method from parent
 * @param {*} param0
 */
const handleDeleteItem = ({ id: itemId }) => {
  emit('deleteItem', itemId)
}

/**
 * Call check item method from parent
 * @param {*} param0
 */
const handleCheckItem = ({ id: itemId, is_checked: isChecked }) => {
  const checkedItem: CheckedItem = { id: itemId, is_checked: !isChecked }
  emit('checkItem', checkedItem)
}
</script>
