<script setup lang="ts">
import '@/styles/markdown.css'
</script>

<template>
  <div>
    <main id="article-content">
      <ContentDoc />
    </main>

    <div class="m-t-6">
      <span id="back-text" class="font-300 color-base">
        >
        <NuxtLink to="/blog" class="color-base icon-button decoration-dashed">
          cd ..
        </NuxtLink>
      </span>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

#back-text {
  font-family: 'Roboto' !important;
}
</style>
