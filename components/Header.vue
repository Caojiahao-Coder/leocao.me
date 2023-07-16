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

</script>

<template>
  <header class="relative h80px w100% flex flex-row z-100 fixed! backdrop-blur-12 border-#11111110 dark:border-#f1f1f110"
    b="0 b-1 solid">
    <div class="flex flex-col ml6">
      <div class="flex-1" />
      <RouterLink to="/" class="decoration-none color-base text-3em font-bold" style="font-family: 'Cookie';">
        Leo Cao
      </RouterLink>
      <div class="flex-1" />
    </div>

    <div class="flex-1" />

    <div v-if="width >= 500" class="flex flex-row gap-6 font-bold mr6">
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
        <div class="h-24px w-24px px-4" :class="expand ? 'i-carbon-close' : 'i-carbon-menu'" @click="() => {
          expand = !expand
        }" />
      </VerticalCenterIconCard>
    </div>
  </header>

  <div v-if="expand"
    class="flex flex-col transition-all absolute top-80px w-full border-base overflow-hidden z-100 backdrop-blur"
    b="0 t-1 b-1 solid" style="height: calc(100vh - 82px);">
    <ul class="list-none py4 px2 m0 bg-base">
      <li p="x-4 y-3" class="bg-body">
        <a href="/blog" class="color-base decoration-none">
          <div class="flex flex-row gap-2">
            <div i-carbon-product class="h18px" style="line-height: 22px; height: 22px;" />
            <div>Blog</div>
          </div>
        </a>
      </li>

      <li p="x-4 y-3" class="bg-body m-t-2">
        <a href="/Projects" class="color-base decoration-none">
          <div class="flex flex-row gap-2">
            <div i-carbon-ibm-cloud-kubernetes-service class="h18px" style="line-height: 18px;" />
            <div>Projects</div>
          </div>
        </a>
      </li>

      <li p="x-4 y-3" class="bg-body m-t-2">
        <a href="https://github.com/caojiahao-Coder/" target="_blank" class="color-base decoration-none">
          <div class="flex flex-row gap-2">
            <div i-carbon-logo-github class="h18px" style="line-height: 18px;" />
            <div>Github</div>
          </div>
        </a>
      </li>

      <li p="x-4 y-3" class="bg-body m-t-2">
        <a href="https://www.figma.com/files/team/1235847793536641012" target="_blank" class="color-base decoration-none">
          <div class="flex flex-row gap-2">
            <div i-carbon-logo-figma class="h18px" style="line-height: 18px;" />
            <div>Figma</div>
          </div>
        </a>
      </li>

      <li p="x-4 y-3" class="bg-body m-t-2">
        <div class="flex flex-row gap-2" @click="toggleDark">
          <div class=" color-base" dark:i-carbon-partly-cloudy-night i-carbon-partly-cloudy
            style="width: 18px; height: 18px;" />
          <div>{{ isDark === true ? 'Dark Mode' : 'Light Mode' }}</div>
        </div>
      </li>
    </ul>
    <div flex-1 @click="expand = false" />
  </div>
</template>

<style scoped>@import url('https://fonts.googleapis.com/css2?family=Cookie');
</style>
