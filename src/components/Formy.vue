<template>
  <div class="formy">
    <v-row align="center">
      <v-row justify="space-around">
        <v-switch
          v-model="valid"
          class="ma-4"
          label="Valid"
          readonly
        ></v-switch>
        <v-switch v-model="lazy" class="ma-4" label="Lazy"></v-switch>
      </v-row>
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form>
    </v-row>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import useFormNameRules from "@/composables/formNameRules";

export default defineComponent({
  setup() {
    const form = ref(null);
    const valid = ref(true);
    const name = ref("");
    const nameRules = useFormNameRules().nameRules;
    const select = ref(null);
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
    const checkbox = ref(false);
    const lazy = ref(false);

    function validate() {
      form.value.validate();
    }

    function reset() {
      form.value.reset();
    }

    function resetValidation() {
      form.value.resetValidation();
    }

    return {
        form,
      valid,
      name,
      nameRules,
      select,
      items,
      checkbox,
      lazy,
      validate,
      reset,
      resetValidation
    };
  }
});
// export default {
//   data: () => ({
//     valid: true,
//     name: "",
//     nameRules: [
//       v => !!v || "Name is required",
//       v => (v && v.length <= 10) || "Name must be less than 10 characters"
//     ],
//     email: "",
//     emailRules: [
//       v => !!v || "E-mail is required",
//       v => /.+@.+\..+/.test(v) || "E-mail must be valid"
//     ],
//     select: null,
//     items: ["Item 1", "Item 2", "Item 3", "Item 4"],
//     checkbox: false,
//     lazy: false
//   }),

//   methods: {
//     validate() {
//       this.$refs.form.validate();
//     },
//     reset() {
//       this.$refs.form.reset();
//     },
//     resetValidation() {
//       this.$refs.form.resetValidation();
//     }
//   }
// };
</script>

<style>
.formy {
  width: 800px;
}
</style>
