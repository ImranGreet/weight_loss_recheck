<template>
    <section
      class="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-fuchsia-500 to-indigo-500 relative"
    >
      <div
        class="w-11/12 mx-auto sm:container xl:w-2/5 bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 "
        :class="{'flex':!recommneded,'hidden':recommneded}"
      >
        <div class="bg-gray-400 h-2.5 rounded-r-lg" style="width: 50%"></div>
      </div>
      <div
        class="w-11/12 sm:container px-5 py-2 xl:px-8 xl:py-5 xl:w-2/5  flex-col justify-between gap-y-4 bg-white rounded-lg relative"
        :class="{'flex':!recommneded,'hidden':recommneded}"
      >
        <router-view></router-view>

        
      </div>

      <div class="absolute  w-11/12 sm:container px-5 py-2 xl:px-8 xl:py-5 xl:w-2/5 bg-gray-200 rounded-lg"
      :class="{'hidden':!recommneded,'block':recommneded}">
        <NotAllowed />
      </div>
     
    </section>
  </template>

  <script>
import NotAllowed from '../components/NotAllowed.vue';
import { recommneded } from '../scripts/functional_quiz/recommendation';


  
  export default {
    name:"Questionnaire",
    components:{NotAllowed},
    setup(){

      return {
        recommneded
      }
    }
  }
  </script>