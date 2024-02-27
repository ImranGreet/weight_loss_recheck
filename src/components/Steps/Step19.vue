<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()" class="w-full px-2 sm:px-0  mx-auto">
          <div class="space-y-2 prose max-w-none w-full">
            <h3>
              If you have any other allergies, please tell us about them here?
            </h3>
            <div class="px-3">
              <textarea
                v-model="userAnswer"
                placeholder="Type Your Answer Here .."
                class="w-full p-2 border border-gray-400 rounded-md"
                rows="4"
              ></textarea>
              <div class="w-full h-3"></div>
              <globalForm/>
            </div>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
  
  export default {
    name: "Step19",
    setup() {
      const routes = useRouter();
      const userAnswer = ref("");
  
      const continueToNextStep = () => {
        routes.push({ name: "quiz23" });
      };
  
      const submitData = function () {
        compoentToBeRender(21);
        
      };

      return {
        userAnswer,
        continueToNextStep,
        submitData
      };
    },
  };
  </script>
  
  <style>
  </style>