<script setup lang="ts">
const pointsCount = ref<number>(6 * 6)

defineProps<{
  show:boolean
}>()

onMounted(() => {
  var container = document.querySelector('.container');
  var cubes = document.querySelectorAll('.cube');

  container!.addEventListener('mousemove', function (event: any) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    cubes.forEach(function (cube) {
      var rect = cube.getBoundingClientRect();
      var cubeX = rect.left + rect.width / 2;
      var cubeY = rect.top + rect.height / 2;

      const mousePoint: Point = { x: mouseX, y: mouseY };
      const cubePoint: Point = { x: cubeX, y: cubeY };

      let angle = cubePoint.x <= mousePoint.x ? calculateAngleLeft(cubePoint, mousePoint) : calculateAngleLeft(mousePoint, cubePoint);

      (cube as HTMLDivElement).style.transform = 'rotateZ(' + angle + 'deg)';
    })
  });

  container!.addEventListener('mouseleave', function () {
    cubes.forEach(function (cube) {
      (cube as HTMLDivElement).style.transform = 'rotateZ(0deg)';
    });
  });
})

interface Point {
  x: number;
  y: number;
}

function calculateAngleLeft(point1: Point, point2: Point): number {
  const deltaX = point2.x - point1.x;
  const deltaY = point2.y - point1.y;
  const radians = Math.atan2(deltaY, deltaX);
  const degrees = radians * (180 / Math.PI);
  return degrees;
}
</script>

<template>
  <div v-show="show" class="container grid grid-cols-6 p-y-4 gap-y-8 relative">
    <div v-for=" in pointsCount" class=" cube w-24px h-4px m-auto b-rd"
      :style="{ backgroundColor: `${'#' + Math.floor(Math.random() * 16777215).toString(16)}`, boxShadow: `0px 0px 1px 1px ${'#' + Math.floor(Math.random() * 16777215).toString(16)}50,0px 0px 2px 1px ${'#' + Math.floor(Math.random() * 16777215).toString(16)}25` }">
    </div>

    <div class="w-100% h-216px absolute top-0 left-0 text-center line-height-216px text-12 font-700 z-100 backdrop-blur-2.6"
      style="font-family: 'Ubuntu';">
      NOTHING
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,700&display=swap');

.container>.cube {
  transition-duration: .24s;
}
</style>
