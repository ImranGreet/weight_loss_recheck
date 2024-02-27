import { createRouter, createWebHistory } from "vue-router";

const routes = [
  

  
  {
    path: "/quiz",
    component: () => import("../Layouts/Questionnaire.vue"),
    children: [
      {
        path: "/quiz",
        component: () => import("../Pages/QuizAndAnswer.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;