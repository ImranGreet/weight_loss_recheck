<template>
    <section class="w-full">
      <form @submit.prevent="submitData()" class="w-full h-full flex flex-col justify-center items-center">
        <div class="w-full px-2 sm:px-0  mx-auto">
          <div class="space-y-2 prose max-w-none w-full">
            <h3>Have you been diagnosed with any of these medical conditions?</h3>
            <div class="px-3">
              <ol class="list-disc">
                <li>
                  Type 2 diabetes that is treated injectable medication or insulin
                </li>
                <li>High blood pressure</li>
                <li>High cholesterol</li>
                <li>Erectile dysfunction</li>
                <li>Sleep apnoea</li>
                <li>Asthma</li>
                <li>Gallstones</li>
                <li>Osteoarthritis</li>
                <li>Chronic back pain</li>
                <li>Depression</li>
                <li>PCOS</li>
                <li>Fatty liver disease</li>
                <li>Chronic malabsorption syndrome</li>
              </ol>
             
            </div>
          </div>
        </div>
        <globalForm/>
      </form>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';

  
  export default {
    name: "Step13",
    setup() {
      const routes = useRouter();
      const selected = ref(false);
  
      const selectOption = function (option) {
        selected.value = option;
  
        if (selected.value) {
          routes.push({ name: "quiz16" });
        } else {
          routes.push({ name: "quiz17" });
        }
      };

      const submitData = function () {
        compoentToBeRender(15);
        
      };
  
      return {
        selected,
        selectOption,
        submitData
      };
    },
  };
  </script>
  
  <style>
  </style>