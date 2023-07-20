<script setup lang="ts">
defineProps<{
  isLoading:boolean
}>()
</script>

<template>
  <div v-show="isLoading" class="loading-dialog-view fixed w-full top-81px left-0 z-100000 backdrop-blur flex flex-col">
    <div class="flex-1" />
    <div>
      <div class="m-auto text-5 i-svg-spinners-ring-resize" />
      <div class="text-center mt-2">
        Loading.
      </div>
    </div>
    <div class="flex-1" />
  </div>
</template>

<style scoped>
.loading-dialog-view {
  height: calc(100% - 81px);
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%201024%201024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22imnpwhlk8z5qt9%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%221%22%20numOctaves%3D%222.4%22%20stitchTiles%3D%22stitch%22%20%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23imnpwhlk8z5qt9)%22%20opacity%3D%220.13%22%20%2F%3E%3C%2Fsvg%3E');
  animation: identifier .18s ease-in-out;
}

@keyframes identifier {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
