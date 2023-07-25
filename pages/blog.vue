<script setup lang="ts">
const { data } = useFetch<{
  Year: number,
  Articles: {
    Id: number,
    Title: string,
    Link: string,
    Date: string
  }[]
}[]>('/api/posts/list', {
  onResponse({ request, response, options }) {
    isFinished.value = true
  }
})

const isNull = ref<boolean>(true)
const isFinished = ref<boolean>(false)

onMounted(() => {
  setTimeout(() => {
    if (isFinished.value === false)
      isFinished.value = true
  }, 2400)
})
</script>

<template>
  <div>
    <BlogGroup v-for="(item, index) in data" :key="index" :year="item.Year" :articles="item.Articles" />
    <NothingView :show="isFinished && (data?.length??0) === 0" />
    <LoadingDialog :is-loading="!isFinished" />
  </div>
</template>
