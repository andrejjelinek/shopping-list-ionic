<template>
  <ion-app>
    <ion-grid>
      <ion-row>
        <ion-header>
          <ion-card>
            <ion-card-header>
              <ion-card-title color="primary">
                <ion-row class="ion-align-items-center ion-justify-content-center">
                  <ion-icon :icon="basketOutline" size="large" />
                  {{ $t('shoppingList') }}
                </ion-row>
              </ion-card-title>
            </ion-card-header>
          </ion-card>
        </ion-header>
      </ion-row>

      <ion-row class="content">
        <ion-col size="3">
          <ShoppingListMenu />
        </ion-col>

        <ion-col size="9">
          <ion-content>
            <ion-router-outlet />
          </ion-content>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-footer>
          <ion-grid>
            <ion-row class="ion-justify-content-center">
              <p>Created by &copy; Andrej Jelínek 2024</p>
            </ion-row>
          </ion-grid>
        </ion-footer>
      </ion-row>
    </ion-grid>
  </ion-app>
</template>

<script setup lang="ts">
import ShoppingListMenu from '../../lib@shopping-list/shopping-list-menu/shopping-list-menu.vue'
import { basketOutline } from 'ionicons/icons'
</script>

<style>
ion-grid {
  width: 100%;
}

.content {
  height: 90vh;
}

ion-header {
  height: 6vh;
}

ion-footer {
  height: 4vh;
  background-color: var(--ion-color-light);
  color: var(--ion-color-primary);
}
</style>
