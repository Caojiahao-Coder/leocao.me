<script setup lang="ts">

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.addEventListener('mouseover', onMouseMove)
})

function onMouseMove(event: MouseEvent) {
  const item = document.getElementById('move-view')
  if (!item)
    return

  let top = (event.pageY - 64)
  let left = (event.pageX - 64)

  top = Math.max(0, top);
  left = Math.max(0, left);

  top = Math.min(top, window.innerHeight - 128);
  left = Math.min(left, window.innerWidth - 128);

  item.style.top = top + "px"
  item.style.left = left + "px"
}
</script>

<template>
  <div class="p-6 flex flex-col gap-4 relative z-100">
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

  <div id="move-view" class="z-1 w-32 h-32"></div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

#move-view {
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(45deg, #ff000060, #0000ff60);
  filter: blur(40px);
}
</style>
