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
      clientNode?.classList.add('light')
      setTimeout(() => { clientNode?.classList.remove('light') }, 1200)
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

// function onMouseMove(event: MouseEvent) {
//   const item = document.getElementById('my-page')
//   if (!item)
//     return

//   let top = (event.pageY - 80)
//   let left = (event.pageX - 80)

//   top = Math.max(80, top);
//   left = Math.max(80, left);

//   top = Math.min(top, window.innerHeight - 208);
//   left = Math.min(left, window.innerWidth - 208);

//   item.style.setProperty('--move-x', left + "px")
//   item.style.setProperty('--move-y', top + "px")

//   var blur = top / 80
//   blur = Math.max(6, blur)

//   item.style.setProperty('--blur-value', blur + "rem")
// }
</script>

<template>
  <div class="flex flex-col gap-4 relative z-1" id="my-page">
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

    <div class="flex flex-row gap-4 m-t-6 flex-wrap">
      <a href="https://github.com/caojiahao-Coder/" class="color-base decoration-none icon-button">
        <div class="flex flex-row gap-2 b-rd-1 bg-body cursor-pointer" p="x-4 y-2">
          <div i-carbon-logo-github h-18px style="line-height: 18px;" />
          <div>Github</div>
        </div>
      </a>
      <NuxtLink to="/blog" class="color-base decoration-none icon-button">
        <div class="flex flex-row gap-2 b-rd-1 bg-body cursor-pointer" p="x-4 y-2">
          <div i-carbon-product h-18px style="line-height: 18px;" />
          <div>
            Blog
          </div>
        </div>
      </NuxtLink>
      <a href="https://www.figma.com/files/team/1235847793536641012" class="color-base decoration-none icon-button">
        <div class="flex flex-row gap-2 b-rd-1 bg-body cursor-pointer" p="x-4 y-2">
          <div i-carbon-logo-figma h-18px style="line-height: 18px;" />
          <div>Figma</div>
        </div>
      </a>
      <NuxtLink to="mailto:cao1395654040@hotmail.com" class="color-base decoration-none icon-button">
        <div class="flex flex-row gap-2 b-rd-1 bg-body cursor-pointer" p="x-4 y-2">
          <div i-carbon-email h-18px style="line-height: 18px;" />
          <div>Email</div>
        </div>
      </NuxtLink>
    </div>
  </div>

  <div class="absolute w-full top-81px left-0 color-base grid p-8px" style="height:calc(100% - 97px)"
    :style="{ gridTemplateColumns: `repeat(${gridCount}, 1fr)` }">
    <div v-for=" in pointCount" class="bg-node w-2px h-2px b-rd-90px bg-body m-auto"></div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

/* #my-page::after {
  position: fixed;
  width: 10rem;
  height: 10rem;
  left: var(--move-x);
  top: var(--move-y);
  overflow: hidden;
  border-radius: 90px;
  background: linear-gradient(155deg, rgb(0, 255, 187) 50%, #0d00ff 50%);
  content: '';
  z-index: -1;
  animation: identifier 5s linear infinite;
  filter: blur(var(--blur-value, 6rem));
}

@keyframes identifier {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
} */

.light {
  background-color: rgba(50, 255, 118, 0.9) !important;
  box-shadow: 0px 0px 1px 1px rgba(50, 255, 176, 0.5),
    0px 0px 2px 1px rgba(50, 255, 193, 0.25);
  transition-duration: 888ms;
}
</style>
