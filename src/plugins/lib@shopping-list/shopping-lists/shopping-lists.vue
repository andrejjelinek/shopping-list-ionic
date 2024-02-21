<template>
  <!-- <template v-if="shoppingLists === null">
    <v-progress-linear indeterminate color="success" />
  </template>

  <template v-else-if="shoppingLists.error"> Pri načítaní dát nastala chyba: {{ shoppingLists.error }} </template> -->
  <p>{{ $t('test') }}</p>
  <div class="flex mt-8">
    <!-- <A-shopping-lists-menu @createNewList="handleCreateShoppingList" @deleteList="handleDeleteShoppingList" :shoppingLists="shoppingLists" /> -->
    <div class="flex flex-col gap-3 w-2/3 mx-auto">
      <A-shopping-list-card v-for="item in shoppingLists" :shoppingList="item" :key="item.id" />
    </div>
  </div>
  <template> </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ShoppingList } from '../../app/models/shopping-list-models'
import AShoppingListCard from './_components/a-shopping-list-card.vue'

export default defineComponent({
  components: {
    AShoppingListCard,
  },

  data() {
    return {
      shoppingLists: [] as ShoppingList[],
    }
  },

  async mounted() {
    this.loadData()
  },
  methods: {
    /**
     * Load shopping lists with items
     */
    async loadData() {
      try {
        const { data } = await this.$axios.get(`api/v1/shopping-lists`)

        this.shoppingLists = data as ShoppingList[]
        this.$toast.success('Successfully loaded data', 'bottom')
      } catch (error) {
        this.$toast.error(error.message, 'bottom')
        console.error('Error:', error)
        this.shoppingLists = [] as ShoppingList[]
      }
    },
  },
})
</script>
