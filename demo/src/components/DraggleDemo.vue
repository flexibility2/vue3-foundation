<script setup lang="ts">
import { useDraggle } from "../composition/useDraggle";
const { dragDom, x, y, style } = useDraggle();
</script>
<template>
  <div class="draggable" ref="dragDom" :style="style">
    x: {{ x }}, y: {{ y }}
  </div>
</template>

<style scoped>
.draggable {
  cursor: move;
  background-color: #42b983;
  height: 100px;
  width: 100px;
}
</style>
