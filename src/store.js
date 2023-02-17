import { reactive } from "vue";

export const store = reactive({
  page: 1,
  name: "",
  email: "",
  phone: "",
  planSelected: 9,
  yearly: false,
  add_on_multi: false,
  add_on_storage: false,
  add_on_custom: false,
  done: false,
});
