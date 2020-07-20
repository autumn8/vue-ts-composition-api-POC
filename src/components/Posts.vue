<template>
  <div class="posts">
    <div class="post" v-for="(post, i) in posts" v-bind:key="i">
      <div @click="removePost(i)">
        {{ post }}
      </div>
    </div>
    <v-form ref="form">
      <v-text-field
        v-model="model"
        :counter="max"
        :rules="rules"
        label="First name"
      ></v-text-field>
    </v-form>
    <v-text-field
      label="Outlined"
      outlined
      v-model="newPost"
      @keypress.enter="addPost"
    ></v-text-field>
    <!-- <p>{{oktaAuth.key}}</p>
    <p>{{authenticated}}</p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "@vue/composition-api";
import usePosts from "@/composables/Posts";
//import { useOktaAuth } from "../plugins/oktaAuth";
import Vue from "vue";

export default defineComponent({
  setup() {
    //const oktaAuth = useOktaAuth();
    //console.log(oktaAuth);
    const model = ref("Stinky");
    const max = ref(10);
    const authenticated = ref(false);

    const rules = ref([
      (v: string) => {
        return (
          (v || "").length <= max.value || 
          `A maximum of ${max.value} characters is allowed`
        );
      }
    ]);
    onMounted(async () => {
      authenticated.value = await Vue.prototype.$auth.isAuthenticated();
      console.log("mounted!");
    });

    const { newPost, posts, addPost, removePost } = usePosts();

    return {
      newPost,
      posts,
      addPost,
      removePost,
      rules,
      max,
      model,
      //oktaAuth,
      authenticated
    };
  }
});
</script>

<style></style>
