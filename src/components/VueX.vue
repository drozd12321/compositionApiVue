<template>
  <div class="cont">{{ appTitle }}</div>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
const appTitle = store.getters.appTitle;
</script>
<style scoped>
.cont {
  display: grid;
  background-color: rgb(235, 236, 232);
  border-radius: 7px;
  width: 90%;
  place-content: center;
  margin: 10px auto;
  padding: 10px;
}
</style>
