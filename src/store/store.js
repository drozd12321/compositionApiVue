import { createStore } from "vuex";
export const store = createStore({
  state() {
    return {
      title: "Vuex and Composition",
    };
  },
  getters: {
    appTitle(state) {
      return state.title.toUpperCase();
    },
  },
});
