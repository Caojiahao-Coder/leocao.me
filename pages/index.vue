<script setup lang="ts">
onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mouseover', onMouseMove)
})

function onMouseMove(event: MouseEvent) {
  const item = document.getElementById('my-page')
  if (!item)
    return

  let top = (event.pageY - 80)
  let left = (event.pageX - 80)

  top = Math.max(80, top);
  left = Math.max(80, left);

  top = Math.min(top, window.innerHeight - 208);
  left = Math.min(left, window.innerWidth - 208);

  item.style.setProperty('--move-x', left + "px")
  item.style.setProperty('--move-y', top + "px")

  var blur = top / 80
  blur = Math.max(6, blur)

  item.style.setProperty('--blur-value', blur + "rem")
}
</script>

<template>
  <div class="p-6 flex flex-col gap-4 relative z-1" id="my-page">
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
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

#my-page::after {
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
}
</style>
