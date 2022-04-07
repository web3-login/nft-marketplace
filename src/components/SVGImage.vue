<script setup lang="ts">
import button from "../assets/button.svg";
const props = defineProps<{ color: string }>();
</script>

<template>
  <div class="card card-body">
    <object :key="props.color" type="image/svg+xml" v-bind:data="button">
      <param name="fill" :value="props.color" />
      <param name="stroke" value="#fcba03" />
      <param name="label" value="Jo" />
    </object>
  </div>
</template>

<style scoped>
</style>
