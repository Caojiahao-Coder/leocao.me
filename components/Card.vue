<script setup lang="ts">
import Tb_ProjectInfo from '~/server/api/projects/types/project';
import '../styles/markdown.css'

defineProps<{
  projectInfo: Tb_ProjectInfo
}>()

const cardRef = ref<HTMLDivElement>()
const rootCardRef = ref<HTMLDivElement>()
const viewDetail = ref<boolean>(false)

onMounted(() => {
  if (!cardRef.value)
    return

  var cardItem = cardRef.value!

  const centerX = cardItem.offsetWidth / 2
  const centerY = cardItem.offsetHeight / 2

  const maxRotate = 10;

  const eachRotateX = maxRotate / centerX
  const eachRotateY = maxRotate / centerY

  cardItem.onmouseenter = function (e) {
    cardItem.style.transition = `all 0.18s`
  }

  cardItem.onmousemove = function (e) {
    const curX = e.offsetX - centerX
    const curY = e.offsetY - centerY
    if (!viewDetail.value)
      requestAnimationFrame(() => {
        cardItem.style.transform = `rotate3d(0,1,0,${eachRotateX * curX * -1}deg) rotate3d(1,0,0,${eachRotateY * curY}deg) rotateZ(${eachRotateY * curY * (curX < 0 ? -1 : 1) / 6}deg)`
        cardItem.style.boxShadow = `${curX / 8}px ${curY / 8}px 36px #50505090`
      })
  }

  cardItem.onmouseleave = function (e) {
    resetCardPosition()
  }

  cardItem.onclick = function () {
    viewDetail.value = true
    resetCardPosition()
  }
})

function resetCardPosition() {
  if (!cardRef.value) return
  const cardItem = cardRef.value!
  cardItem.style.transform = `rotate3d(0,0,0,0deg)`
  cardItem.style.boxShadow = `0px 0px 36px transparent`
  cardItem.style.transition = `all .8s`
}

function closeDialog(e: MouseEvent) {
  e.stopPropagation()
  viewDetail.value = false
}
</script>

<template>
  <Transition>
    <div class="perspective-1000 flex flex-col backdrop-blur-4 select-none" :class="viewDetail ? 'card-open' : ''">
      <div class="flex-1" @click="closeDialog" :class="viewDetail ? 'min-h-20' : ''" />
      <div class="flex flex-row">
        <div class="flex-1" @click="closeDialog" />
        <div id="card" ref="cardRef" class="b-rd b-solid b-1 border-base bg-body">
          <div class="p-1 relative" style="min-height: 140px;">
            <img src="../assets/default_cover.svg" style="max-width: calc(100% - 2px);"
              class="b-solid b-1 border-base b-rd">
            <img :src="projectInfo.Cover" alt="" style="max-width: calc(100% - 10px);"
              class="absolute top-4px left-4px b-solid b-1 border-base b-rd z-100">
          </div>
          <div class="p-x-4 pt-0" :class="viewDetail ? '' : 'pb-4'">
            <div class="font-bold" :class="viewDetail ? 'text-8 m-y-2' : 'text-5'">{{ projectInfo.Title }}</div>
            <div v-if="!viewDetail" class="mt-2">{{ projectInfo.Desc }}</div>
          </div>
          <div v-if="viewDetail" class="b-0 b-b-1 border-base b-solid m-y-4"></div>
          <div v-if="viewDetail" class="flex flex-row">
            <a :href="projectInfo.GitHub" class="flex-1 decoration-none color-base" target="_blank">
              <div class=" i-carbon-logo-github text-8 icon-button m-auto" />
            </a>
            <a :href="projectInfo.Link" class="flex-1 decoration-none color-base" target="_blank">
              <div i-carbon-send-alt text-8 icon-button m-auto />
            </a>
          </div>
          <div v-if="viewDetail" class="b-0 b-b-1 border-base b-solid m-y-4"></div>
          <div id="article-content" v-if="viewDetail && projectInfo.README" class="p-x-4 p-b-4 select-text!">
            <ContentDoc :path="'project/' + projectInfo.README" />
          </div>
          <div v-if="!viewDetail" class="absolute w-100% h-100% top-0 left-0  b-rd"></div>
        </div>
        <div class="flex-1" @click="closeDialog" />
      </div>
      <div class="flex-1" @click="closeDialog" :class="viewDetail ? 'min-h-20' : ''" />
    </div>
  </Transition>
</template>

<style scoped>
#card {
  background-color: white !important;
  background: linear-gradient(115deg, rgba(255, 199, 0, 0.07) 34.42%, rgba(36, 255, 0, 0.02) 100%), linear-gradient(251deg, rgba(19, 255, 43, 0.04) 0%, rgba(191, 7, 255, 0.08) 100%), rgba(255, 255, 255, 0.90);
}

html.dark #card {
  background-color: black !important;
  background: linear-gradient(250.89deg, rgba(174, 26, 26, 0.2) 0%, rgba(62, 8, 67, 0.114) 49.52%, rgba(27, 2, 35, 0.2) 100%), rgba(17, 17, 17, 0.9);
}

#card {
  transform-style: preserve-3d;
  transform-origin: center;
}

.card-open {
  position: fixed !important;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: scroll;
  background-color: transparent;
  z-index: 10000;
}

.card-open #card {
  width: 800px !important;
}

.card-open::-webkit-scrollbar {
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
