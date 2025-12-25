<script setup lang="ts">
import { useCounter } from "../composition/useCounter";

const { count, add, update } = useCounter();
</script>

<template>
  <div>{{ count }}</div>
  <button @click="add">Add</button>
  <button @click="update(10)">Update</button>
</template>
