<template>
    <section
      class="w-full flex flex-col justify-center items-center min-h-screen"
    >
    
    <div class="w-full bg-primary">
      <nav class="container xl:max-w-7xl mx-auto px-5 xl:px-0 flex justify-between items-center py-5">
        <router-link to="/" class="text-xl xl:text-4xl font-semibold">+evony</router-link>
        <ul class="flex space-x-3">
          <li>
            <router-link to="#" class="bg-gray-800 text-white p-2 flex justify-center items-center rounded-full">
              <UserIcon class="w-5 h-5 inline-block"/>
            </router-link>
          </li>
          <li>
            <router-link to="# " class="bg-gray-800 text-white p-2 flex justify-center items-center rounded-full">
              <ShoppingCartIcon class="w-5 h-5 inline-block"/>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
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