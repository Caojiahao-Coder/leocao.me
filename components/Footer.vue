<script setup lang="ts">
import config from '../package.json'
</script>

<template>
  <div class="h-80px flex flex-col font-light color-fade text-3">
    <div class="flex-1" />
    <div class="flex flex-row gap-2">
      <a href="#" class="decoration-dashed color-fade hover-color-primary">Leo Cao</a> © 2023.
      <div>Powered by Nuxt & Vercel.</div>
      <div>Latest release: V{{ config.version }} </div>
    </div>
    <div class="flex-1" />
  </div>
</template>
