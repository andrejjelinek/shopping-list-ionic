import { ShoppingList } from '@/plugins/app/_models/shopping-list-models'
import axios from '@/plugins/w/axios/models/axios'
import { toast } from 'vue3-toastify'

export const ShoppingListService = {
  /**
   * Send request for loading shopping lists
   */
  loadData: async () => {
    try {
      const { data } = await axios.get(`api/v1/shopping-lists`)
      return data as ShoppingList[]
    } catch (error) {
      toast.error(error.message)
      console.error('Error:', error)
      return [] as ShoppingList[]
    }
  },
}
