<template>
  <div>
    <v-btn @click="increment">
      {{ state.someText }} is: {{ state.count }}, double is: {{ state.double }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref } from "@vue/composition-api";
import { reactive, ref, computed } from "@vue/composition-api";

interface StateInterface {
  count: number;
  double: number;
  someText: string;
}

export default defineComponent({
  setup() {
    const someOtherNumber: Ref<number> = ref(10);
    const state: StateInterface = reactive({
      count: 0,
      double: computed(() => state.count * 2),
      someText: "Bob"
    });

    function increment(): void {
      state.count++;
    }

    return {
      state,
      someOtherNumber,
      increment
    };
  }
});
</script>
