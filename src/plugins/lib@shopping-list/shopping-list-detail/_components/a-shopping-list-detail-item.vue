<template>
  <ion-item>
    <div class="flex justify-between ps-3 w-full">
      <ion-checkbox v-model="item.is_checked" @change="handleCheckItem(item)" label-placement="end">{{ item.name }}</ion-checkbox>

      <!-- <button @click="handleDeleteItem(item)" class="hover:bg-rose-50 rounded-lg p-1 ease-in duration-200 active">
              <img src="../../../app/_assets/deleteIcon.svg" alt="Delete icon" />
            </button> -->
    </div>
  </ion-item>
</template>

<script setup lang="ts">
import { ShoppingListItem } from '../../../app/models/shopping-list-models'

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
  // if (itemId)
  // this.$emit('deleteItem', itemId)
}

/**
 * Call check item method from parent
 * @param {*} param0
 */
const handleCheckItem = ({ id: itemId, is_checked: isChecked }) => {
  // this.$emit('checkItem', { id: itemId, is_checked: isChecked })
}
</script>
