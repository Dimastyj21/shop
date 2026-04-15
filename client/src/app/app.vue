
<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>


<script setup>
import { ref } from 'vue'

// Пример глобальной темы, можно подключать из store или плагина
const theme = ref('light')

// Здесь можно добавить глобальную логику, слушатели событий и т.п.
</script>


<style>
/* Глобальные стили */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>