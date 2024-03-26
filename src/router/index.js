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
    path: '/admin',
    name: 'admin-home',
    component: () => import('../Layouts/Admin.vue'),

    children: [
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../Pages/Admin/Dashboard/Dashboard.vue'),
      },
      {
        path: 'settingassets',
        name: 'setting',
        component: () => import('../Pages/Admin/Form/Storesettingicons.vue'),
      },
      {
        path: 'products',
        name: 'products house',
        component: () => import('../Pages/Admin/Products/ProductHouse.vue'),
      },

      /*start expense*/
      {
        path: 'expenses',
        name: 'expense',
        component: () => import('../Pages/Admin/Expense/Expenselist.vue'),
      },
     
      /*end expense*/
    
      
     
    ],
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;