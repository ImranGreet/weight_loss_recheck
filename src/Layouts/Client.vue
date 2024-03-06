<template>
    <section
      class="w-full flex flex-col justify-center items-center min-h-screen"
    >
    <nav class="w-full flex justify-between items-center bg-primary p-5">
      <router-link to="#">evony</router-link>
      <ul class="flex space-x-3">
        <li>
          <router-link to="#">
            <UserIcon class="w-5 h-5 inline-block"/>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <ShoppingCartIcon class="w-5 h-5 inline-block"/>
          </router-link>
        </li>
      </ul>
    </nav>
      <router-view />
      <Footer />
    </section>
  </template>
  
  <script>
import { ShoppingCartIcon, UserIcon } from '@heroicons/vue/20/solid';

 
  
  import Footer from "../components/utility/Footer.vue";
  
  
  export default {
    name: "Client",
    components: {
      UserIcon,
      ShoppingCartIcon,
      Footer,
    },
  };
  </script>
  
  <style>
  </style>