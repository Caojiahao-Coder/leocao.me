<script setup lang="ts">
const props = defineProps<{
  title: string,
  a_id: string,
  publishTime: string,
}>()

</script>

<template>
  <NuxtLink :to="`/article/${props.a_id}`" class="decoration-none">
    <div
      class="w-auto py-2 color-#33333380 dark:color-#ffffff80 hover-color-#000 dark:hover-color-#fff cursor-pointer flex gap-2 z-100 mb-2 p-l-6 flex-row  transition-all"
      style="font-family: MainFont;">
      <div class="text-6 font-bold">
        {{ props.title }}
      </div>
      <div class="text-4 font-200" style="line-height: 28px;">
        {{ props.publishTime }}
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
@font-face {
  font-family: MainFont;
  src: url(../fonts/MediumFont.ttf);
}
</style>
