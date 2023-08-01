<script setup lang="ts">
import '@/styles/markdown.css'
import { isDark } from '~/logics';

const utterancesRef = ref<HTMLDivElement>()

onMounted(() => {
  loadCommentView()
})

watch(() => isDark.value, () => {
  loadCommentView()
})

function loadCommentView() {
  const existView = document.getElementsByClassName('utterances')

  if (existView.length > 0) {
    for (let i = 0; i < existView.length; i++) {
      existView[i].remove()
    }
  }

  let utterances = document.createElement('script') as HTMLScriptElement
  utterances.setAttribute("src", "https://utteranc.es/client.js");
  utterances.setAttribute("repo", "Caojiahao-Coder/leocao.me");
  utterances.setAttribute("issue-term", "pathname");
  utterances.setAttribute("label", "comment");
  utterances.setAttribute("theme", isDark.value ? "github-dark" : "github-light")
  utterances.setAttribute("crossorigin", "anonymous");
  utterances.setAttribute("async", "true");
  utterancesRef.value?.appendChild(utterances)
}

</script>

<template>
  <div>
    <main id="article-content">
      <ContentDoc v-slot="{ doc }">
        <div class="flex flex-row gap-16px p-y-2 color-fade select-none">
          <div flex flex-row gap-1>
            <div i-carbon-user line-height-24px h-24px></div>
            <span line-height-24px h-24px font-light font-italic text-3>
              {{ doc.author }}
            </span>
          </div>
          <div class="w-1px h-24px bg-body"></div>
          <div flex flex-row gap-1>
            <div i-carbon-timer line-height-24px h-24px></div>
            <span line-height-24px h-24px font-light font-italic text-3>
              {{ doc.readTime }}
            </span>
          </div>
        </div>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </main>

    <div class="m-t-6">
      <span id="back-text" class="font-300 color-base">
        >
        <NuxtLink to="/blog" class="color-base icon-button decoration-dashed">
          cd ..
        </NuxtLink>
      </span>
    </div>

    <div ref="utterancesRef" class="m-t-6 border-base b-0 b-solid b-t-2" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

#back-text {
  font-family: 'Roboto' !important;
}
</style>
