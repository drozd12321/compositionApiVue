<template>
  <header class="head">
    <h2>Vue Composition</h2>
    <div class="grid">
      <div><router-link to="/">Главная</router-link></div>
      <div><router-link to="/rpage">Страница</router-link></div>
      <div><router-link to="/vuex">VueX</router-link></div>
    </div>
  </header>
</template>
<script setup></script>
<style scoped>
.head {
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  color: white;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  font-size: 20px;
}
a {
  text-decoration: none;
  color: white;
}
</style>
