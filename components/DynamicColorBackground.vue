<script setup lang="ts">

const props = defineProps<{
  title?: string
}>()

const devRef = ref<HTMLDivElement>()
let curValue = 0;

onMounted(() => {
  startFrame()
})

function frame() {
  curValue += .8
  if (curValue > 360)
    curValue = 0
  if (devRef.value) {
    devRef.value.style.background = `linear-gradient(${curValue}deg, #00FF66 0%, #00D1FF 100%)`
  }
}

function startFrame() {
  requestAnimationFrame(() => {
    frame()
    startFrame()
  })
}

</script>

<template>
  <div ref="devRef" class="h-160px flex flex-col" b="rd-tl-1 rd-tr-1"
    style="background:linear-gradient(0deg, #00FF66 0%, #00D1FF 100%);">
    <div class="flex-1"></div>
    <div v-if="props.title" text-center text-12 font-bold color-white style="text-shadow: 0 0 16px #33333350;">
      {{ props.title }}
    </div>
    <div class="flex-1"></div>
  </div>
</template>
