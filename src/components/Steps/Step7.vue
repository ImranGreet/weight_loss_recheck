<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()" class="w-full px-2 sm:px-0  mx-auto">
          <div class="mt-6 space-y-4">
            <p>
              Our program contains medication that isn’t suitable for pregnant
              women, therefore it is recommended to use contraception when taking
              this medication. If you do become pregnant or wish to conceive when
              taking this medication, please update us straight away.
            </p>
            <div class="flex flex-row-reverse justify-end items-center w-full">
              <label for="yes" class="ml-3"> I understand</label>
              <input
                type="radio"
                name="goalWeight"
                id="yes"
                class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                v-model="selectedOption"
                value="understand"
              />
            </div>
            <div class="flex flex-row-reverse justify-end items-center w-full">
              <label for="no" class="ml-3"> I don’t wish to continue</label>
              <input
                type="radio"
                name="goalWeight"
                id="no"
                class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                v-model="selectedOption"
                value="I don’t wish to continue"
              />
            </div>
          </div>
          <div class="w-full h-3"></div>
          <globalForm/>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, watch } from "vue";
  import { useRouter } from "vue-router";
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
 
  
  export default {
    name: "QuizEight",
    setup() {
      const routes = useRouter();
      const decision = ref(null);
  
      const handleDecision = function (option) {
        decision.value = option;
  
        if (decision.value === "understand") {
          routes.push({ name: "quizNine" });
        } else {
         
        }
      };

      const submitData = function () {
        compoentToBeRender(9);
      };
  
      return {
        decision,
        handleDecision,
        submitData
      };
    },
  };
  </script>
  
  <style>
  </style>