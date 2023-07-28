<script setup lang="ts">
const gridCount = ref<number>(0)
const pointCount = ref<number>(1)

var interval: any

onMounted(() => {
  getBgPoints()

  window.addEventListener('resize', getBgPoints)

  if (!interval)
    interval = setInterval(() => {
      const index = Math.floor(Math.random() * pointCount.value)
      const clientNode = document.querySelector(`.bg-node:nth-child(${index})`)
      clientNode?.classList.remove('dark')
      setTimeout(() => { clientNode?.classList.add('dark') }, 1200)
    }, 150)
})

onUnmounted(() => {
  if (interval)
    clearInterval(interval)
})

function getBgPoints() {
  const xCount = Math.floor(window.innerWidth / 30)
  gridCount.value = xCount

  const count = (window.innerHeight / (window.innerWidth / xCount)) * xCount
  const intCount = Math.min(5000, Math.floor(count))
  pointCount.value = intCount
}
</script>

<template>
  <div class="flex flex-col gap-4" id="my-page">
    <div class="font-black text-4em" style="font-family: 'Dancing Script';">
      Hello,
      <br>
      I'm Leo Cao.
    </div>
    <div class="text-8 m-t6" style="font-family: 'Dancing Script';">
      Front-end developer / Back-end developer
    </div>
    <div class="text-8" style="font-family: 'Dancing Script';">
      I like open source, travel and aerospace.
    </div>

    <div class="flex flex-row gap-4 m-t-6 flex-wrap z-10">
      <a href="https://github.com/caojiahao-Coder/" class="color-base decoration-none icon-button backdrop-filter">
        <div class="flex flex-row gap-2 b-rd-1 bg-body cursor-pointer" p="x-4 y-2">
          <div i-carbon-logo-github h-18px style="line-height: 18px;" />
          <div>Github</div>
        </div>
      </a>
      <NuxtLink to="/blog" class="color-base decoration-none icon-button backdrop-filter">
        <div class="flex flex-row gap-2 b-rd-1 bg-body cursor-pointer" p="x-4 y-2">
          <div i-carbon-product h-18px style="line-height: 18px;" />
          <div>
            Blog
          </div>
        </div>
      </NuxtLink>
      <a href="https://www.figma.com/files/team/1235847793536641012"
        class="color-base decoration-none icon-button backdrop-filter">
        <div class="flex flex-row gap-2 b-rd-1 bg-body cursor-pointer" p="x-4 y-2">
          <div i-carbon-logo-figma h-18px style="line-height: 18px;" />
          <div>Figma</div>
        </div>
      </a>
      <NuxtLink to="mailto:cao1395654040@hotmail.com" class="color-base decoration-none icon-button backdrop-filter">
        <div class="flex flex-row gap-2 b-rd-1 bg-body cursor-pointer" p="x-4 y-2">
          <div i-carbon-email h-18px style="line-height: 18px;" />
          <div>Email</div>
        </div>
      </NuxtLink>
    </div>

    <div class="w-100% h-100% top-0px left-0 color-base grid z-1 absolute"
      :style="{ gridTemplateColumns: `repeat(${gridCount}, 1fr)` }">
      <div v-for=" in pointCount" class="bg-node w-2px h-2px b-rd-90px m-auto dark transition-duration-888ms"
        :style="{ backgroundColor: `${'#' + Math.floor(Math.random() * 16777215).toString(16)}`, boxShadow: `0px 0px 1px 1px ${'#' + Math.floor(Math.random() * 16777215).toString(16)}50,0px 0px 2px 1px ${'#' + Math.floor(Math.random() * 16777215).toString(16)}25` }">
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

html.dark .dark {
  background-color: #50505020 !important;
  box-shadow: none !important;
}

.dark {
  background-color: #dddddd78 !important;
  box-shadow: none !important;
}
</style>
