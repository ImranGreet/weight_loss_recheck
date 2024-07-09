import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",

    component: () => import("../Layouts/Client.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../Pages/Home.vue"),
      },
      {
        path: "/blog",
        name: "read-blog",
        component: () => import("../Pages/ReadBlog.vue"),
      },
      {
        path: "/subscription",
        name: "client-subscription",
        component: () => import("../Pages/Admin/SubscriptionPage.vue"),
      },
    ],
  },

  {
    path: "/quiz",
    component: () => import("../Layouts/Questionnaire.vue"),
    children: [
      {
        path: "/quiz",
        name: "quiz",
        component: () => import("../Pages/QuizAndAnswer.vue"),
      },
    ],
  },

  {
    path: "/admin",
    name: "admin-home",
    component: () => import("../Layouts/Admin.vue"),

    children: [
      {
        path: "/admin",
        name: "admin",
        component: () => import("../Pages/Admin/Dashboard/Dashboard.vue"),
      },
      {
        path: "settingassets",
        name: "setting",
        component: () => import("../Pages/Admin/Form/Storesettingicons.vue"),
      },
      {
        path: "sliders",
        name: "sliderhouse",
        component: () => import("../Pages/Admin/Sliders/SlidrList.vue"),
      },

      /*start expense*/
      {
        path: "member",
        name: "member",
        component: () => import("../Pages/Admin/Members/MemberList.vue"),
      },
      {
        path: "home-image",
        name: "home-image",
        component: () => import("../Pages/Admin/Home image/homeimagelist.vue"),
      },
      {
        path: "user-profile",
        name: "profile",
        component: () => import("../Pages/Admin/Profile.vue"),
      },
      {
        path: "subscription",
        name: "subscription",
        component: () => import("../Pages/Admin/SubscriptionPage.vue"),
      },
      {
        path: "blogs",
        name: "blogs",
        component: () => import("../Pages/Admin/Blog/BlogList.vue"),
      },
      /*auth*/

      {
        path: "admin-reg",
        name: "auth-admin",
        component: () => import("../Pages/Admin/Form/AdminReg.vue"),
      },
      /*end expense*/
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../Pages/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
