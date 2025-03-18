<script setup>
import { computed, reactive, ref, watch } from "vue";
import { RouterView } from "vue-router";
import AppInfo from "./components/AppInfo.vue";
const name = ref("VueJs");
const textInp = ref(null);
const framwork = reactive({
  version: 3.5,
  text: "Composition API ",
});
const firstName = ref("");
function changeInf() {
  name.value = "vuejs";
}
function changeFramork() {
  framwork.version = 4.4;
  framwork.text = `${framwork.text} ${name.value}`;
}

function ConsRefs() {
  console.log(textInp.value.value);
}
watch(firstName, (n, o) => {
  console.log(n);
});
function changeVers(num) {
  framwork.version = num;
}
</script>

<template>
  <div class="container">
    <div class="api">
      <h2>Composition Api {{ name }}</h2>

      <AppInfo :framwork="framwork" @changeVers="changeVers"></AppInfo>
      <button @click="changeInf">Change</button>
      <button @click="changeFramork">Framer</button>
      <input type="text" ref="textInp" />
      <button @click="ConsRefs">Отправить</button>

      <input type="text" placeholder="name" v-model="firstName" />
    </div>
  </div>
</template>

<style scoped>
input {
  margin-top: 10px;
  border-radius: 10px;
  padding: 7px;
  outline: none;
}
button {
  background-color: gray;
  border: none;
  padding: 10px;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  border-radius: 10px;
}
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
