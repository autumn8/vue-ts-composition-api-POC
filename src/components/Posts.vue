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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import usePosts from "../use/Posts";

export default defineComponent({
  setup() {
    const max = ref(10);
    const rules = ref([
      (v: string) => {
        return (
          (v || "").length <= max.value ||
          `A maximum of ${max.value} characters is allowed`
        );
      }
    ]);
    const { newPost, posts, addPost, removePost } = usePosts();

    return {
      newPost,
      posts,
      addPost,
      removePost,
      rules,
      max
    };
  }
});
</script>

<style></style>
