import { getCurrentInstance } from "@vue/composition-api";

export default () => {
  const vm = getCurrentInstance();

  if (!vm) {
    throw new ReferenceError("No vue instance found.");
  }
  return { auth: vm.$auth };
};
