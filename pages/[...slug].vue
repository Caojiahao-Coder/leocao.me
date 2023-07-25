<script setup lang="ts">
import '@/styles/markdown.css'
</script>

<template>
  <div>
    <main id="article-content">
      <ContentDoc v-slot="{ doc }">
        <div class="flex flex-row gap-16px p-y-2 color-fade select-none">
          <div flex flex-row gap-1>
            <div i-carbon-user line-height-24px h-24px></div>
            <span line-height-24px h-24px font-light font-italic text-3>
              {{ doc.author }}
            </span>
          </div>
          <div class="w-1px h-24px bg-body"></div>
          <div flex flex-row gap-1>
            <div i-carbon-timer line-height-24px h-24px></div>
            <span line-height-24px h-24px font-light font-italic text-3>
              {{ doc.readTime }}
            </span>
          </div>
        </div>
        <ContentRenderer :value="doc" />
      </ContentDoc>
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
