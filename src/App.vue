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
        <v-btn @click="safeNavigate($route, 'Edit')" v-if="showEdit"
          >Edit</v-btn
        >
      </div>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
//import Vue from "vue";
//import { defineComponent, reactive } from "@vue/composition-api";
//import { isInGroup } from "./user";
//import {provideOktaAuth} from "./plugins/oktaAuth";

// export default {
//   name: "App",
//   components: {
//     //Posts
//   },
//   data: () => ({
//     title: "Vue Groups",
//     authenticated: false,
//     showEdit: false
//   }),
//   watch: {
//     $route: "isAuthenticated"
//   },
//   methods: {
//     async enableGroups() {
//       console.log(await Vue.prototype.$auth.getUser());
//       this.showEdit = await isInGroup("user");
//     },
//     safeNavigate(route, dest) {
//       if (route.name != dest) this.$router.push({ name: dest });
//     },

//     async isAuthenticated() {
//       this.authenticated = await this.$auth.isAuthenticated();
//     },
//     login() {
//       this.$auth.loginRedirect("/");
//     },
//     async logout() {
//       await this.$auth.logout();
//       await this.isAuthenticated();
//       if (this.$route.path !== "/") this.$router.push({ path: "/" });
//     }
//   },
//   created() {
//     this.isAuthenticated();
//     this.enableGroups();
//   }
// };


import { defineComponent, ref, onMounted, watch } from "@vue/composition-api";
import useOktaAuthUser from "@/composables/auth/useOktaAuthUser";
import { provideOktaAuth } from "./plugins/oktaAuth";
import useRouter from "@/composables/useRouter";
import useOktaAuth from "@/composables/auth/useOktaAuth";

export default defineComponent({
  setup() {
    const title = "Vue Groups";
    const authenticated = ref(false);
    const showEdit = ref(false);
    const { router, route } = useRouter();
    const { auth } = useOktaAuth();
    const { isInGroup } = useOktaAuthUser();

    function safeNavigate(route, dest) {
      if (route.name != dest) router.push({ name: dest });
    }

    async function isAuthenticated() {
      authenticated.value = await auth.isAuthenticated();
    }

    async function enableGroups() {
      showEdit.value = await isInGroup(auth, "user");
    }

    function login() {
      auth.loginRedirect("/");
    }

    async function logout() {
      await auth.logout();
      await isAuthenticated();
      //if (route.path !== "/") router.push({ path: "/" });
    }

    watch(route, () => {
      isAuthenticated();
    });

    onMounted(() => {
      isAuthenticated();
      enableGroups()
    });

    provideOktaAuth({
      key: "234qwerqwefsdf"
    });

    return {
      title,
      authenticated,
      showEdit,
      login,
      logout,
      enableGroups,
      safeNavigate
    };
  }
});
</script>
