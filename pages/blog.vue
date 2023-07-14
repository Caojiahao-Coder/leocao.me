<script setup lang="ts">
//@ts-ignore
import typer from 'typer-js'

const {
  data
} = await useAsyncData('blog_list', () => $fetch('/api/posts/list'))

onMounted(() => {
  if ((data.value?.length ?? 0) >= 1)
    return
  //@ts-ignore
  //https://unpkg.com/typer-js
  typer(document.getElementById('empty-bg-view'), 100)
    .line('The post list is empty.')
})
</script>

<template>
  <div>
    <template v-if="(data?.length ?? 0) > 0" v-for="item in data">
      <BlogGroup :year="item.Year" :articles="item.Articles" />
    </template>
    <div v-else class="empty-view flex flex-col">
      <div class="flex-1" />
      <div id="empty-bg-view" class="text-8 text-center color-base select-none" />
      <div class="flex-1" />
    </div>
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
