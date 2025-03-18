<template>
  <div>
    {{ framwork.text }}
    {{ framwork.version }}
    {{ comp }}
  </div>
  <button @click="changeVersion">ChangeVersion</button>
</template>
<script setup>
import { computed } from "vue";

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
<style>
button {
  background-color: rgb(170, 11, 11);
  border: none;
  padding: 10px;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  border-radius: 10px;
}
</style>
