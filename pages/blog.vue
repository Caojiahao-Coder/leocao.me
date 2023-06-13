<script setup lang="ts">
const {
  data, pending, error, refresh
} = await useAsyncData('blog_list', () => $fetch('/api/blog/list'))

const { width } = useWindowSize()

</script>

<template>
  <div class="p-x-6">

    <div v-if="data!.filter(a => a.fileList.length > 0).length === 0" class="h-12rem relative" m="y-12rem">
      <div class="empty-hint h-100%"></div>
      <div class="text-center h-100% font-bold absolute top-0 left-0 w-100%"
        style="line-height: 192px;font-family: Cookie;" :class="width >= 800 ? 'text-48' : 'text-24'">
        Empty
      </div>
    </div>

    <BlogGroup v-else v-for="(item, index) in data!" :title="item.title" :file-list="item.fileList!" :key="index" />

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie');

.empty-hint {
  background-image: linear-gradient(45deg, #ff0fd450, #ffaf1150);
  filter: blur(64px);
}
</style>
