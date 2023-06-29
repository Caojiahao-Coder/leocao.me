<script setup lang="ts">
const props = defineProps<{
  projectInfo: {
    title: string,
    cover: string,
    description: string,
    githubLink: string,
  }
}>()
</script>

<template>
  <a :href="props.projectInfo.githubLink" target="_blank"
    class="transition-all color-base decoration-none overflow-hidden">
    <div class="flex flex-row border-base b-solid b-1 ">
      <div class="w-76px relative">
        <div class=" border-base b-solid b-0 b-r-1 flex flex-col bg-body b-rd-tl-1 b-rd-bl-1 h-100% icon"/>
        <div class="w-48px h-48px absolute top-16px left-14px bg-no-repeat bg-cover" :style="{
          backgroundImage:`url(${props.projectInfo.cover})`
        }"  />
      </div>
      <div class="flex-1 p-4 flex flex-col overflow-hidden">
        <div class="text-5 font-bold">
          {{ props.projectInfo.title }}
        </div>
        <div class="text-3 overflow-hidden m-t-1" style="white-space: nowrap; text-overflow: ellipsis;;">
          {{ props.projectInfo.description }}
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.icon {
  background-image: linear-gradient(24deg, #ff000060, #0099ff60);
  filter: blur(32px);
}
</style>
