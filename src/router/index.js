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
    ],
  },
  
  {
    path: "/quiz",
    component: () => import("../Layouts/Questionnaire.vue"),
    children: [
      {
        path: "/quiz",
        name:"quiz",
        component: () => import("../Pages/QuizAndAnswer.vue"),
      },
    ],
  },

  {
    path:"/personal_info",
    component:()=>import("../Pages/PersonalInformation.vue"),
    name:"personal info"
  },
  {
    path:"/submit_ids",
    component:()=>import("../Pages/SubmitDocs.vue"),
    name:"submit_ids"
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;