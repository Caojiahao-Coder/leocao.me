<script setup lang="ts">
const props = defineProps<
  {
    title: string,
    fileList: {
      name: string,
      path: string,
      publishTime: string,
    }[]
  }
>()
</script>

<template >
  <div v-if="fileList.length > 0" m-b-16>
    <div class="relative select-none h8 pointer-events-none">
      <span text-8em color-transparent absolute left--2rem top--2rem font-bold text-stroke-2 text-stroke-hex-aaa op10>
        {{ props.title }}
      </span>
    </div>
    <div class="list-none">
      <BlogItem :title="item.name" :path="item.path" :publish-time="item.publishTime" :key="index"
        v-for="(item, index) in props.fileList" />
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: BlogYearFont;
  src: url(../fonts/BlogYearFont.ttf);
}
</style>
