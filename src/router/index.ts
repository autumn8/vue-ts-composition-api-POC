import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Auth from "@okta/okta-vue";

import { isInGroup } from "../user";

const clientId = "0oajj6j7ym3LKYVpQ4x6";
const oktaDomain = "dev-116492";

Vue.use(Auth, {
  issuer: `https://dev-116492.okta.com/oauth2/default`,
  clientId: "0oajj6j7ym3LKYVpQ4x6",
  redirectUri: "http://localhost:8080/implicit/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true
});

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/edit",
    name: "Edit",
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "edit" */ "../views/Edit.vue"),
    beforeEnter: async (to, from, next) => {
      const canProceed = await isInGroup("user");
      if (canProceed) next();
      else next("/");
    }
  },
  { path: "/implicit/callback", component: Auth.handleCallback() },
  {
    path: "*",
    beforeEnter: (to, from, next) => {
      next("/");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
