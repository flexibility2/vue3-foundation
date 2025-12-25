<script setup lang="ts">
import { vFocus } from "../directives/vFocus";
import CounterDemo from "./CounterDemo.vue";
import DraggleDemo from "./DraggleDemo.vue";
</script>

<template>
  <input v-focus />
  <CounterDemo />
  <DraggleDemo />
</template>

<style scoped></style>
