export type ShoppingList = {
  id: number
  title: string
  icon: string | null
  items: ShoppingListItem[]
}

export type ShoppingListItem = {
  id: number
  is_checked: boolean
  name: string
  unit: string
  value: string
}
