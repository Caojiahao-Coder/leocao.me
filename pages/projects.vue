<script setup lang="ts">
const { data, pending, error, refresh } = await useAsyncData('projects_list', () => $fetch('/api/projects/list'))
const { width } = useWindowSize()
</script>

<template>
  <div class="p-x-6">
    <div class="font-bold text-6">Project List</div>
    <div grid gap-2 m-t-2 :style="{
      gridTemplateColumns: `repeat(${width >= 600 ? 2 : 1},1fr)`,
    }">
      <ProjectItem :key="index" :project-info="item" v-for="(item, index) in data" />
    </div>
  </div>
</template>
