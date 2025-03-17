<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <div class="api">
      <h2>Composition Api</h2>
      <div>fff</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.api {
  width: 70%;
  background-color: rgb(36, 35, 35);
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  padding: 10px;
}
</style>
