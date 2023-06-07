<script setup lang="ts">
const width = ref<number>(1200)

onMounted(() => {
  width.value = window.innerWidth
  window.addEventListener('resize', () => {
    width.value = window.innerWidth
  })
})

</script>

<template>
  <div class="min-h-100vh bg-base color-base">
    <Header />
    <main id="root-content" m="x-auto" :class="
      width >= 1200 ? 'w-800px' : width >= 800 && width < 1200 ? 'w-650px' : 'w-100%'
    ">
      <NuxtPage />
      <Footer />
    </main>
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
