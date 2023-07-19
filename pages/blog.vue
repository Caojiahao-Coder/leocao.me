<script setup lang="ts">
const { data: posts } = useFetch('/api/posts/list')
</script>

<template>
  <div class="m-b-8">
    <BlogGroup v-for="(item, index) in posts" :key="index" :year="item.Year" :articles="item.Articles" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Belanosima:wght@600&family=Lobster&family=Martian+Mono:wght@700&display=swap');

.empty-view {
  min-height: calc(100vh - 200px);
}

#empty-bg-view {
  background: linear-gradient(155deg, #0F6 0%, #00D1FF 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-family: "Martian Mono" !important;
  font-weight: bold;
}
</style>
