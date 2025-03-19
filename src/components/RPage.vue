<template>
  <div class="cont">
    <h3 class="h3">Компонент переиспользования</h3>
    <div class="content">
      <button class="glavn" @click="goHome">Главная</button>
      <button class="grug">Другое</button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goHome = () => {
  router.push("/");
};
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
.content {
  display: grid;
  gap: 10px;
  grid-template-areas: "glavn grug";
}
button {
  padding: 7px;
  border: none;
  border-radius: 7px;
  color: white;
  font-size: 17px;
}
.glavn {
  grid-area: glavn;
  background-color: rgba(5, 173, 240, 0.719);
}
.grug {
  background-color: chocolate;
  grid-area: grug;
}
</style>
