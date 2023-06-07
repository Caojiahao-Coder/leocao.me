<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isDark = useDark()

const canvasRef = ref<HTMLCanvasElement>()
const ctx = ref<CanvasRenderingContext2D>()

let w = 0
let h = 0
interface Point {
  x: number
  y: number
}

onMounted(async () => {
  w = window.innerWidth
  h = window.innerHeight

  initCanvas()
})

const pendingTasks: Function[] = []

function initCanvas() {
  if (!ctx.value)
    ctx.value = canvasRef.value!.getContext('2d')!

  if (isDark.value) 
    ctx.value.strokeStyle = '#20202050'
  else
    ctx.value.strokeStyle = '#99999920'

  const x_1_1 = Math.floor(Math.random() * ((w - (w / 4)) - (w / 4) + 1)) + (w / 4)

  drawLine({ x: x_1_1, y: h }, { x: x_1_1, y: h - 20 }, -Math.PI / 2)

  const x_2_1 = Math.floor(Math.random() * ((w - (w / 4)) - (w / 4) + 1)) + (w / 4)

  drawLine({ x: x_2_1, y: 0 }, { x: x_2_1, y: 20 }, Math.PI / 2)

  const y_1_1 = Math.floor(Math.random() * ((h - (h / 4)) - (h / 4) + 1)) + (h / 4)

  drawLine({ x: w, y: y_1_1 }, { x: w - 20, y: y_1_1 }, -Math.PI)

  const y_2_1 = Math.floor(Math.random() * ((h - (h / 4)) - (h / 4) + 1)) + (h / 4)

  drawLine({ x: 0, y: y_2_1 }, { x: 20, y: y_2_1 }, Math.PI / 4)

  startFrame()
}

function drawLine(start: Point, end: Point, theta: number, depth = 1) {
  if (!ctx.value)
    return

  ctx.value.beginPath()
  ctx.value.moveTo(start.x, start.y)
  ctx.value.lineTo(end.x, end.y)
  ctx.value.stroke()

  // 需要创建分支
  createBranch(end, theta, depth)
}

function createBranch(end: Point, theta: number, depth: number) {
  const leftTheta = theta - 0.2 * Math.random()
  const rightTheta = theta + 0.2 * Math.random()
  const leftPoint = createPoint(end, leftTheta)
  const rightPoint = createPoint(end, rightTheta)
  if ((depth < 6 || Math.random() < (depth < 300 ? 0.5 : 0.3)) && depth <= 650) {
    pendingTasks.push(() => {
      drawLine(end, leftPoint, leftTheta, depth + 1)
    })
  }
  if ((depth < 6 || Math.random() < (depth < 300 ? 0.5 : 0.3)) && depth <= 650) {
    pendingTasks.push(() => {
      drawLine(end, rightPoint, rightTheta, depth + 1)
    })
  }
}

function createPoint(endPoint: Point, theta: number) {
  return {
    x: endPoint.x + (5 + Math.random() * 10 - 5) * Math.cos(theta),
    y: endPoint.y + (5 + Math.random() * 10 - 5) * Math.sin(theta),
  }
}

function frame() {
  const tasks = [...pendingTasks]
  pendingTasks.length = 0
  tasks.forEach(fn => fn())
}

function startFrame() {
  requestAnimationFrame(() => {
    frame()
    startFrame()
  })
}
</script>

<template>
  <div absolute top-0 left-0 overflow-hidden max-h-100vh min-h-100vh z-100
    style="min-width: 100%; max-width: 100%; filter: blur(.6px);">
    <canvas ref="canvasRef" :width="w" :height="h" absolute />
  </div>
</template>

<style scoped>
.bg-light {
  position: absolute;
  width: 400px;
  height: 400px;
  opacity: .4;
  background: radial-gradient(35.81% 35.81% at 50% 50%, rgba(16, 232, 193, 0.63) 0%, rgba(16, 232, 193, 0) 100%)
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  ;
}
</style>
