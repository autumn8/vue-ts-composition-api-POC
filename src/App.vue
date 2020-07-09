<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <button v-if="authenticated" v-on:click="logout" id="logout-button">
        Logout
      </button>
      <button v-else v-on:click="login" id="login-button">Login</button>
    </v-app-bar>

    <v-content>
      <div id="nav">
        <v-btn @click="safeNavigate($route, 'Home')">Home</v-btn> |
        <v-btn @click="safeNavigate($route, 'About')">About</v-btn> |
        <v-btn @click="safeNavigate($route, 'Edit')" v-if="showEdit">Edit</v-btn>
      </div>
      <router-view />
      <Posts />
    </v-content>
  </v-app>
</template>

<script>
import Posts from "./components/Posts.vue";
import Vue from "vue";
//import { defineComponent, reactive } from "@vue/composition-api";
import { isInGroup } from "./user";

export default {
  name: "App",
  components: {
    Posts
  },
  data: () => ({
    title: "Vue Groups",
    authenticated: false,
    showEdit: false
  }),
  watch: {
    $route: "isAuthenticated"
  },
  methods: {
    async enableGroups() {
      console.log(await Vue.prototype.$auth.getUser());
      this.showEdit = await isInGroup("user");
    },
    safeNavigate(route, dest) {
      if (route.name != dest) this.$router.push({ name: dest });
    },

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
    this.enableGroups();

  }
};

// export default defineComponent({
//   components: {
//     Posts
//   },

//   setup() {
//     console.log(this);
//     const state = reactive({
//       authenticated: false
//     });

//     return { state };
//   }
// });
</script>
