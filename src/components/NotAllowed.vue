<template>
    <section class="w-full">
      <div
        class="w-full  mt-6 flex flex-col justify-center items-center"
      >
        <div>
          <h1 class="flex flex-col justify-center items-center">
            <span class="rounded-full p-1 border-2 border-red-400"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
          </h1>
          <h2 class="text-2xl tracking-widest font-black capitalize">
              treatment Not recommended
          </h2>
        </div>
        <div class="w-full h-5"></div>
        <div class="w-full py-2">
          <p>
            Based on your answers there is no treatment suitable for you. If you
            think you have made an error in your responses, please click below to
            review your answers
          </p>
          <small
            >Warning: Giving inaccurate information in a clinical consultation,
            could put your health at risk.
          </small>
        </div>
        <div class="w-full h-5"></div>
        <div
      class="w-full flex items-center justify-between"
      
      
    >
      <button
      @click="discloseOptions()"
      type="button"

        class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm">
        Back
      </button>
      <div class="flex gap-x-7">
        <button
          class="px-5 py-1 lg:px-10 lg:py-3 hover:bg-gray-600 hover:text-white rounded-lg">
          Save
        </button>
        
      </div>
    </div>
      </div>
    </section>
  </template>
  
  <script>
import { toggleRecommned } from '../scripts/functional_quiz/recommendation';
 
  export default {
    name: "notrecommended ",
    setup() {
      const discloseOptions = ()=>{
        toggleRecommned();
      }
     
      return {
        discloseOptions
      };
    },
  };
  </script>
  
  <style>
  </style>