<script setup lang="ts">
const width = ref(0)

const { data } = useFetch<{
  Id: number,
  Title: string,
  Desc: string,
  Cover: string,
  Link: string
}[]>('/api/projects/list', {
  onResponse({ request, response, options }) {
    isFinished.value = true
    isNull.value = (response._data?.length ?? 0) === 0
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
const isNull = ref<boolean>(true)

</script>

<template>
  <div>
    <div class="font-bold text-6">Project List</div>
    <div grid gap-2 m-t-2 :style="{
      gridTemplateColumns: `repeat(${width >= 600 ? 2 : 1},1fr)`,
    }">
      <ProjectItem :key="index" :project-info="item" v-for="(item, index) in data" />
    </div>
    <NothingView :show="isFinished === true && isNull === true" />
    <LoadingDialog :is-loading="isFinished === false" />
  </div>
</template>
