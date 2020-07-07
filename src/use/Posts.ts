import { reactive, computed, toRefs } from "@vue/composition-api";

export default () => {
    const state = reactive({
        newPost: "",
        posts: ["Post 1", "Post 2"]
      });
  
      function addPost(): void {
        if (state.posts.length) {
          state.posts.push(state.newPost);
          state.newPost = "";
        }
      }

      function removePost(i:string):void {
          state.posts.splice(parseInt(i),1);
      }
  
      return {
        ...toRefs(state),
        addPost,
        removePost
      };
}

