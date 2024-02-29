<template>
    <section class="w-full bg-inherit rounded-lg shadow-sm">
      <div class="w-full flex flex-col justify-between min-h-[70vh] items-start">
        <div class="prose max-w-none">
          <h3>
            Let’s find out if you are suitable for the evony programme.
           
          </h3>
          <h3>This will require around 20 minutes of your time.</h3>
        </div>
        <div class="prose max-w-none w-full">
          <p>Please ensure you have the following before you start the form:</p>
          <ul >
            <li v-for="(doc, index) in necessaryDocs" :key="index">
              {{ doc.title }}
            </li>
          </ul>
        </div>
        <div
          class="w-full flex items-center justify-between"
          
        >
          <button
           
            class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
           
          >
            Back
          </button>
          <div class="flex gap-x-7">
            <button
              class="px-5 py-1 lg:px-10 lg:py-3 hover:bg-gray-600 hover:text-white rounded-lg"
            >
              Save
            </button>
            <button
           @click="compoentToBeRender(2)"
              class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
    
    <script>
  import { ref } from "vue";
import { compoentToBeRender } from "../../scripts/functional_quiz/renderCompos";
  
 
  
  export default {
    name: "Requirments",
    setup() {
      const necessaryDocs = ref([
        {
          id: 1,
          title: "Your current weight",
        },
        {
          id: 2,
          title: "Your height",
        },
        {
          id: 3,
          title: "Driving licence or passport to confirm your identity",
        },
        {
          id: 4,
          title: "Your GP's details",
        },
      ]);
  
      return {
        necessaryDocs,
        compoentToBeRender
       
      };
    },
  };
  </script>
    
    <style>
  </style>