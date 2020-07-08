import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Auth from "@okta/okta-vue";



Vue.use(Auth, {
  issuer: `https://${oktaDomain}.okta.com/oauth2/default`,
  clientId: clientId,
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
})

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
  { path: '/implicit/callback', component: Auth.handleCallback() },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next('/');
    }
  }
];

const router = new VueRouter({
  mode : "history",
  routes
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());
export default router;
