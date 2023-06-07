<script setup lang="ts">
const {
  data, pending, error, refresh
} = await useAsyncData('blog_list', () => $fetch('/api/blog/list'))

</script>

<template>
  <div>
    <BlogGroup v-for="(item, index) in data?.data" :title="item.title" :file-list="item.fileList" :key="index" />
  </div>
</template>

<style scoped>
.level-0 {
  font-weight: bold;
  font-size: 128px;
  margin-bottom: 48px;
  text-shadow: 16px 16px 8px #55555550;
}

.level-1 {
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 36px;
}

.level-2 {
  font-size: 24px;
  margin-bottom: 24px;
  cursor: pointer;
}

.level-3 {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 12px;
}
</style>
