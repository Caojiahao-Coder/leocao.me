<script setup lang="ts">
const props = defineProps<{
  projectInfo: {
    id: number,
    title: string,
    cover: string,
    description: string,
    githubLink: string,
    livePreview: string
  }
}>()
</script>

<template>
  <a :href="props.projectInfo.githubLink" target="_blank"
    class="transition-all color-base decoration-none overflow-hidden b-rd-1">
    <div class="flex flex-row border-base b-solid b-1 b-rd-1">
      <div class="w-76px border-base b-solid b-0 b-r-1 flex flex-col bg-body b-rd-tl-1 b-rd-bl-1">
        <img :src="props.projectInfo.cover" height="48" width="48" class="m-auto" />
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
