import { ref } from "vue";

export function useAlert() {
  const alert = ref(false);
  const togleAlert = () => {
    alert.value = !alert.value;
  };
  const closeAlert = () => {
    alert.value = false;
  };
  return { togleAlert, alert, closeAlert };
}
