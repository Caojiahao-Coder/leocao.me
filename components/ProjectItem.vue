<script setup lang="ts">
const props = defineProps<{
  projectInfo: {
    Id: number,
    Title: string,
    Desc: string,
    Cover: string,
    Link: string
  }
}>()
</script>

<template>
  <a :href="props.projectInfo.Link" target="_blank" class=" color-base decoration-none overflow-hidden">
    <div class="flex flex-row border-base b-solid b-1">
      <div class="p-y-16px p-x-14px border-base" b="0 r-1 solid">
        <div class="w-48px h-48px bg-no-repeat bg-cover " :style="{
          backgroundImage: `url(${props.projectInfo.Cover})`
        }" />
      </div>
      <div class="flex-1 p-4 flex flex-col overflow-hidden">
        <div class="text-5 font-bold">
          {{ props.projectInfo.Title }}
        </div>
        <div class="text-3 overflow-hidden m-t-1" style="white-space: nowrap; text-overflow: ellipsis;;">
          {{ props.projectInfo.Desc }}
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
a {
  background: linear-gradient(24deg, #ff000015, #0099ff20);

}

a>div {
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%204096%204096%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%229po5ulk4p4ill%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%221%22%20numOctaves%3D%227.6%22%20stitchTiles%3D%22stitch%22%20%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%239po5ulk4p4ill)%22%20opacity%3D%220.11%22%20%2F%3E%3C%2Fsvg%3E');
}
</style>
