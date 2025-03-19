<script setup>
import { computed, provide, reactive, ref, watch } from "vue";
import AppInfo from "../components/AppInfo.vue";
import { useAlert } from "@/use/alert";
import AppAlert from "@/components/AppAlert.vue";
const name = ref("VueJs");
const textInp = ref(null);
const framwork = reactive({
  version: 3.5,
  text: "Composition API ",
});
const { togleAlert, alert, closeAlert } = useAlert();
const text = ref("Provide");
provide("text", text);
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
    <AppAlert v-if="alert" @close="closeAlert" />
    <div class="api">
      <h2>Composition Api {{ name }}</h2>
      <AppInfo :framwork="framwork" @changeVers="changeVers"></AppInfo>
      <div class="divinp">
        <button class="ChangeName" @click="changeInf">ChangeName</button>
        <button class="Framer" @click="changeFramork">Framer</button>
        <input class="textInp" type="text" ref="textInp" />
        <button class="req" @click="ConsRefs">Отправить</button>
        <input
          class="firstname"
          type="text"
          placeholder="name"
          v-model="firstName"
        />
      </div>
      <button @click="togleAlert">
        {{ !alert ? "Показать Alert" : "Скрыть Alert" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.divinp {
  display: grid;
  gap: 10px;
  grid-template-areas:
    "ChangeName Framer Framer"
    "textInp textInp textInp"
    "req firstname firstname";
}
.req {
  grid-area: req;
  background-color: blue;
}
.firstname {
  grid-area: firstname;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  font-size: 15px;
}
.textInp {
  grid-area: textInp;
  background-color: rgb(11, 138, 223);
  border: 1px solid rgb(187, 183, 183);
  color: white;
  font-size: 15px;
}
.ChangeName {
  grid-area: ChangeName;
  background-color: goldenrod;
}
.Framer {
  grid-area: Framer;
  background-color: cadetblue;
}

input {
  margin-top: 10px;
  border-radius: 10px;
  padding: 7px;
  outline: none;
  width: 100%;
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
}
.api {
  width: 90%;
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
