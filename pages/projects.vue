<script setup lang="ts">
const width = ref(0)

const { data: projects } = useFetch('/api/projects/list')

onMounted(() => {
  width.value = window.innerWidth
  window.addEventListener('resize', () => {
    width.value = window.innerWidth
  })
})

</script>

<template>
  <div>
    <div class="font-bold text-6">Project List</div>
    <div grid gap-2 m-t-2 :style="{
      gridTemplateColumns: `repeat(${width >= 600 ? 2 : 1},1fr)`,
    }">
      <ProjectItem :key="index" :project-info="item" v-for="(item, index) in projects" />
    </div>
  </div>
</template>
