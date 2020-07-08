<template>
  <v-app>
    <v-app-bar app color="primary" dark> 
      <button v-if='authenticated' v-on:click='logout' id='logout-button'> Logout </button>
      <button v-else v-on:click='login' id='login-button'> Login </button>
    </v-app-bar>

    <v-content>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
      <Posts />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Posts from "./components/Posts.vue";
//import { defineComponent } from "@vue/composition-api";

export default {
  name: "App",
  components: {
    Posts
  },
  data: () => ({
    title: "Vue Groups",
    authenticated: false
  }),
  watch: {
    $route: "isAuthenticated"
  },
  methods: {
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();
    },
    login() {
      this.$auth.loginRedirect("/");
    },
    async logout() {
      await this.$auth.logout();
      await this.isAuthenticated();
      if (this.$route.path !== "/") this.$router.push({ path: "/" });
    }
  },
  created() {
    this.isAuthenticated();
  }
};

/* export default defineComponent({
  components: {
    Posts
  },

  setup() {
    console.log("setup");
  }
}); */
</script>
