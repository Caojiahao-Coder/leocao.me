<script setup lang="ts">
import { toggleDark } from '~/logics';
</script>

<template>
  <a class="select-none icon-button" title="Toggle Color Scheme" @click="toggleDark">
    <div dark:i-carbon-partly-cloudy-night i-carbon-partly-cloudy text-6 />
  </a>
</template>
