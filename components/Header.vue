<script setup lang="ts">
import { toggleDark } from '~/logics';

const width = ref<number>(0)

onMounted(() => {
  width.value = window.innerWidth
  window.addEventListener('resize', () => {
    width.value = window.innerWidth
  })
})

const isDark = useDark()
const expand = ref<boolean>(false)

watch(expand, (newValue) => {
  if (newValue)
    document.getElementById('root-content')!.style.filter = 'blur(.5rem)'
  else
    document.getElementById('root-content')!.style.filter = 'blur(0px)'
})

</script>

<template>
  <header class="relative h80px flex flex-row p-x6 z-100">
    <div class="flex flex-col">
      <div class="flex-1" />
      <RouterLink to="/" class="decoration-none color-base text-3em font-bold" style="font-family: 'Cookie';">
        Leo Cao
      </RouterLink>
      <div class="flex-1" />
    </div>

    <div class="flex-1" />

    <div v-if="width >= 500" class="flex flex-row gap-6 font-bold">
      <VerticalCenterIconCard>
        <RouterLink class="icon-button decoration-none color-base" to="/blog">
          Blog
        </RouterLink>
      </VerticalCenterIconCard>

      <VerticalCenterIconCard>
        <RouterLink class="icon-button decoration-none color-base" to="/projects">
          Projects
        </RouterLink>
      </VerticalCenterIconCard>

      <VerticalCenterIconCard>
        <a class="decoration-none color-base" href="https://www.figma.com/files/team/1235847793536641012" target="_blank">
          <div class="icon-button h-24px w-24px" i-carbon-logo-figma />
        </a>
      </VerticalCenterIconCard>

      <VerticalCenterIconCard>
        <a class="decoration-none color-base" href="https://github.com/caojiahao-Coder/" target="_blank">
          <div class="icon-button h-24px w-24px" i-carbon-logo-github />
        </a>
      </VerticalCenterIconCard>

      <VerticalCenterIconCard>
        <DarkSwitcher />
      </VerticalCenterIconCard>
    </div>
    <div v-else class="flex flex-row gap-6">
      <VerticalCenterIconCard>
        <div class="h-24px w-24px " :class="expand ? 'i-carbon-close' : 'i-carbon-menu'" @click="() => {
          expand = !expand
        }" />
      </VerticalCenterIconCard>
    </div>
  </header>

  <div v-if="expand" class="transition-all absolute top-80px bg-base p-4 border-base overflow-hidden z-100"
    style="width: calc(100% - 32px);" b="0 t-1 b-1 solid">
    <ul class="list-none p0 m0">
      <li p="x-4 y-3" class="bg-body b-rd-1">
        <a href="/blog" class="color-base decoration-none">
          <div class="flex flex-row gap-2">
            <div i-carbon-product class="h18px" style="line-height: 22px; height: 22px;" />
            <div>Blog</div>
          </div>
        </a>
      </li>

      <li p="x-4 y-3" class="bg-body b-rd-1 m-t-2">
        <a href="/Projects" class="color-base decoration-none">
          <div class="flex flex-row gap-2">
            <div i-carbon-ibm-cloud-kubernetes-service class="h18px" style="line-height: 18px;" />
            <div>Projects</div>
          </div>
        </a>
      </li>

      <li p="x-4 y-3" class="bg-body b-rd-1 m-t-2">
        <a href="https://github.com/caojiahao-Coder/" target="_blank" class="color-base decoration-none">
          <div class="flex flex-row gap-2">
            <div i-carbon-logo-github class="h18px" style="line-height: 18px;" />
            <div>Github</div>
          </div>
        </a>
      </li>

      <li p="x-4 y-3" class="bg-body b-rd-1 m-t-2">
        <a href="https://www.figma.com/files/team/1235847793536641012" target="_blank" class="color-base decoration-none">
          <div class="flex flex-row gap-2">
            <div i-carbon-logo-figma class="h18px" style="line-height: 18px;" />
            <div>Figma</div>
          </div>
        </a>
      </li>

      <li p="x-4 y-3" class="bg-body b-rd-1 m-t-2">
        <div class="flex flex-row gap-2" @click="toggleDark">
          <div class=" color-base" dark:i-carbon-partly-cloudy-night i-carbon-partly-cloudy
            style="width: 18px; height: 18px;" />
          <div>{{ isDark === true ? 'Dark Mode' : 'Light Mode' }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie');
</style>
