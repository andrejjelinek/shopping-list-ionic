export interface ShoppingList {
  id: number
  title: string
  icon: string | null
  items: ShoppingListItem[]
}

export interface ShoppingListItem {
  id: number
  is_checked: boolean
  name: string
  unit: string
  value: string
}

export interface CheckedItem {
  id: number
  is_checked: boolean
}
