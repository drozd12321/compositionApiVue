<template>
  <div class="alert">
    <h2>Alert</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veritatis
      corrupti amet porro sapiente repellendus nihil et est in maxime quasi
      iusto, eius hic iure vitae optio harum error quos.
    </p>
    <button @click="closeAl">Закрыть</button>
  </div>
</template>
<script setup>
const emit = defineEmits(["close"]);
const closeAl = () => {
  emit("close");
};
</script>
<style scoped>
.alert {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 80%;
  border-radius: 7px;
  margin-top: 10px;
  padding: 5px;
}
h2,
p {
  text-align: center;
}
button {
  background-color: gray;
  border: none;
  padding: 10px;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  border-radius: 10px;
  width: 100%;
}
</style>
