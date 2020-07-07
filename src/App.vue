<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      
    </v-app-bar>

    <v-content>
      <Posts />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Posts from "./components/Posts.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {
    Posts
  },

  setup() {
    console.log("setup");
  }
});
</script>
