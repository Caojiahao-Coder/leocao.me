<script setup lang="ts">
import Tb_ProjectInfo from '~/server/api/projects/types/project';

const width = ref(0)

const { data } = useFetch<Tb_ProjectInfo[]>('/api/projects/list', {
  onResponse({ request, response, options }) {
    isFinished.value = true
  }
})

onMounted(() => {
  width.value = window.innerWidth
  window.addEventListener('resize', () => {
    width.value = window.innerWidth
  })

  setTimeout(() => {
    if (isFinished.value === false)
      isFinished.value = true
  }, 2400)
})

const isFinished = ref<boolean>(false)

</script>

<template>
  <div>
    <div class="font-bold text-6">Project List</div>
    <div grid gap-4 m-t-2 :style="{
      gridTemplateColumns: `repeat(${width >= 600 ? 2 : 1},1fr)`,
    }">
      <ProjectItem :key="index" :project-info="item" v-for="(item, index) in data" />
    </div>
    <NothingView :show="(data?.length??0) === 0" />
    <LoadingDialog :is-loading="isFinished === false" />
  </div>
</template>
