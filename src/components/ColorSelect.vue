<script setup lang="ts">
import { ref } from "vue";
import ColorInput from "vue-color-input";
import SVGImage from "./SVGImage.vue";
let color = ref("rgba(150, 50, 50, 0.5)");
</script>

<template>
  <div class="colorselect">
    <color-input v-model="color" />
    <SVGImage :color="color" />
  </div>
</template>

<style scoped>
.colorselect {
  width: 100px;
  height: 100px;
}
</style>
