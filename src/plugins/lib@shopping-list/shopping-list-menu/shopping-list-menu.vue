<template>
  <ion-card class="ion-no-margin language-card">
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
        {{ item.title }}
      </router-link>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
import { LanguageType, useLanguageStore } from '@/plugins/app/_config/piniaStore'
import { useQuery } from '@tanstack/vue-query'
import { useI18n } from 'vue-i18n'
import { ShoppingListService } from '../shopping-lists/_services/shopping-list-service'
import { homeOutline } from 'ionicons/icons'

const languageStore = useLanguageStore()
const { locale } = useI18n()

/**
 * Query for shopping lists
 */
const { data: shoppingLists } = useQuery({
  queryKey: ['shopping-lists'],
  queryFn: () => ShoppingListService.loadData(),
})

const changeLanguage = (lang: LanguageType) => {
  //   languageStore.langType = lang
  locale.value = lang
}
</script>

<style>
.menu-list,
.language-card {
  margin-top: 10px;
}

.active-link {
  color: var(--ion-color-primary) !important;
}

.menu-item a {
  text-decoration: none;
  color: #fff;
}
</style>
