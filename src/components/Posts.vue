<template>
  <div class="posts">
    <div class="post" v-for="(post, i) in posts" v-bind:key="i">
      <div @click="removePost(i)">
        {{ post }}
      </div>
    </div>
    <v-text-field
      label="Outlined"
      outlined
      v-model="newPost"
      @keypress.enter="addPost"
    ></v-text-field>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import usePosts from "../use/Posts";

export default defineComponent({
  setup() {    
    const { newPost, posts, addPost, removePost } = usePosts();
    return {
      newPost,
      posts,
      addPost,
      removePost
    };
  }
});
</script>

<style></style>
