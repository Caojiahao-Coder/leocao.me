<script setup lang="ts">
import Tb_PostInfo from '~/server/api/posts/types/post';

const props = defineProps<{
  year: number,
  articles: Tb_PostInfo[]
}>()
</script>

<template>
  <div>
    <div class="relative select-none h8 pointer-events-none">
      <span text-9em color-transparent absolute left--2rem top--2rem font-bold text-stroke-2 text-stroke-hex-aaa op10>
        {{ year }}
      </span>
    </div>

    <ul>
      <li v-for="(item, index) in props.articles" :key="index">
        <NuxtLink :to="item.Link" class="color-base font-bold icon-button decoration-none">
          <span>{{ item.Title }}</span>
          <span class="text-4 font-300 font-italic m-x-2">{{ item.Date }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul>li {
  font-size: 24px;
  padding: 6px 0;
}
</style>
