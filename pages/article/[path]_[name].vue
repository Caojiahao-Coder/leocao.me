<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import '../../styles/nord.css'
import '../../styles/markdown.css'
const route = useRoute().params;
const path = route.path
const name = route.name

//load article content data
const { data, pending, error, refresh } = await useAsyncData<{
  name: string,
  content: {
    type: 'Buffer',
    data: []
  }, time: string
}>('article-content', () => $fetch(`/api/article?path=${path}&name=${name}`))

function parseMarkdown(raw: []) {
  const binaryArray = new Uint8Array(raw); // 'Hello' 的 ascii 字符集编码
  const textDecoder = new TextDecoder();
  const text = textDecoder.decode(binaryArray);

  const md: any = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,

    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) { }
      }
      return '';
    }
  });

  var result = md.render(text);
  return result;
}

function onBack() {
  window.location.replace('/blog')
}

</script>

<template>
  <div class="px-6 py-4 prose">
    <h1 class="font-bold select-none text-8">{{ data?.name }}</h1>
    <div class="flex flex-row gap-2 mb-6 select-none">
      <div class="color-fade">{{ data?.time }}</div>
      <div class="w-.5 bg-body b-rd-2"></div>
      <div class="color-fade">
        © Leo Cao {{ path }}
      </div>
    </div>
    <article style="word-wrap: break-word;" class="overflow-hidden">
      <div v-html="parseMarkdown(data?.content.data ?? [])" />
    </article>

    <div h-1px bg-body m-y-6></div>

    <div style="font-family: 'Roboto';">
      > <a href="javascript:;" color-base icon-button @click="onBack">cd ..</a>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300;1,500&display=swap');
</style>
