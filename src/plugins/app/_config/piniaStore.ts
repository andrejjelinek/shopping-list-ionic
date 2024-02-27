import { defineStore } from 'pinia'

export type LanguageType = 'en' | 'sk'

interface LanguageStore {
  langType: LanguageType
}

export const useLanguageStore = defineStore({
  id: 'language',
  state: (): LanguageStore => ({
    langType: 'sk',
  }),
})
