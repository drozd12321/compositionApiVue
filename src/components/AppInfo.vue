<template>
  <div class="inf">
    <div class="one">{{ framwork.text }}</div>
    <div class="two">{{ framwork.version }}</div>
    <div class="three">{{ comp }}</div>
    <div class="foo">{{ text }}</div>
  </div>
  <button @click="changeVersion">ChangeVersion</button>
</template>
<script setup>
import { computed, inject } from "vue";
const text = inject("text");
const props = defineProps({
  framwork: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["changeVers"]);

const comp = computed(() => {
  return `${props.framwork.text} ${props.framwork.version * 2}`;
});
function changeVersion() {
  emit("changeVers", 15);
}
</script>
<style scoped>
button {
  background-color: rgb(170, 11, 11);
  border: none;
  padding: 10px;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  border-radius: 10px;
}
p {
  padding: 0;
  margin: 0;
}
.inf {
  display: grid;
  font-size: 20px;
  grid-template-areas:
    "one one two"
    "three three three"
    "foo foo foo";
}
.one {
  grid-area: one;
  padding: 5px;
  border-top-left-radius: 7px;
  background-color: red;
}
.two {
  grid-area: two;
  padding: 5px;
  background-color: green;
  border-top-right-radius: 7px;
}
.three {
  grid-area: three;
  padding: 5px;
  background-color: blueviolet;
}
.foo {
  grid-area: foo;
  color: black;
  padding: 5px;
  background-color: greenyellow;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
}
</style>
