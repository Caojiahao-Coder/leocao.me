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
  <a :href="props.projectInfo.githubLink" target="_blank" class="color-base decoration-none overflow-hidden">
    <div class="flex flex-row border-base b-solid b-1 b-rd-1">
      <div class="w-76px border-base b-solid b-0 b-r-1 flex flex-col">
        <div class="h-36px w-36px m-auto" :class="props.projectInfo.cover" />
      </div>
      <div class="flex-1 p-4 flex flex-col overflow-hidden">
        <div class="text-5">
          {{ props.projectInfo.title }}
        </div>
        <div class="text-3 overflow-hidden m-t-1" style="white-space: nowrap; text-overflow: ellipsis;;">
          123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123
        </div>
      </div>
    </div>
  </a>
</template>
