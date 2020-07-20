import { computed, getCurrentInstance } from "@vue/composition-api";

export default () => {
  const vm = getCurrentInstance();

  if (!vm) {
    throw new ReferenceError("No vue instance found.");
  }

  const route = computed(() => vm.$route);

  return { route, router: vm.$router };
};
