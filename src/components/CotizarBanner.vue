<template>
  <div class="mt-5">
    <router-link to="/cotizar">
      <img :src="url" class="img-fluid rounded mx-auto d-block" alt="imagen"
    /></router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  url: String,
});
</script>

<style scoped>
.mt-5 {
  margin-top: 11rem !important;
}
</style>
