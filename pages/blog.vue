<script setup lang="ts">
const {
  data, pending, error, refresh
} = await useAsyncData('blog_list', () => $fetch('/api/blog/list'))

</script>

<template>
  <div>

    <div v-if="data!.filter(a => a.fileList.length > 0).length === 0"
      class="p-t-56 p-b-24 text-32 select-none font-bold text-center" style="font-family: Cookie;">
      Empty...
    </div>

    <BlogGroup v-else v-for="(item, index) in data!" :title="item.title" :file-list="item.fileList!" :key="index" />

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie');
</style>
