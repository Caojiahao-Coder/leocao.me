<script setup lang="ts">
const width = ref<number>(800)

onMounted(() => {
  width.value = window.innerWidth
  window.addEventListener('resize', () => {
    width.value = window.innerWidth
  })
})

</script>

<template>
  <div id="root-bg" class="min-h-100vh bg-base color-base">
    <Header />
    <main id="root-content" m="x-auto" p="t-104px x-4" class="max-w-700px">
      <NuxtPage />
    </main>
    <Footer m="x-auto" class="max-w-700px p-x-4" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans');

* {
  font-family: 'Open Sans';
}

body {
  margin: 0;
  padding: 0;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

*::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: #f1f1f1;
}

html.dark *::-webkit-scrollbar {
  background-color: #111;
}

*::-webkit-scrollbar-thumb {
  background-color: #55555550;
  border-radius: 16px;
}

@font-face {
  font-family: MainFont;
  src: url(./fonts/MediumFont.ttf);
}

pre {
  border-radius: 4px;
  padding: 16px;
  overflow-x: scroll;
}
</style>
