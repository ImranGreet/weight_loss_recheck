<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()" class="w-full px-2 sm:px-0  mx-auto">
          <div class="space-y-2 prose">
            <h3>Do you have any allergies?</h3>
            <div class="flex flex-row-reverse justify-end items-center w-full ">
              <label for="yes" class="ml-3">Yes</label>
              <input
                type="radio"
                name="goalWeight"
                id="yes"
                class="px-2 py-3 w-6 h-6 accent-gray-500"
                v-model="selected"
                value="true"
              />
            </div>
            <div class="flex flex-row-reverse justify-end items-center w-full ">
              <label for="yes" class="ml-3">No</label>
              <input
                type="radio"
                name="goalWeight"
                id="yes"
                class="px-2 py-3 w-6 h-6 accent-gray-500"
                v-model="selected"
                value="false"
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
  import { onMounted, onUnmounted, ref } from "vue";
  import { useRouter } from "vue-router";
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
 
  
  export default {
    name: "Step16",
    setup() {
      
  
      const routes = useRouter();
      const selected = ref("true");
  
      const handleButtonClick = function () {
        if (selected.value === "true") {
          routes.push({ name: "quiz21" });
        } else {
          routes.push({ name: "quiz23" });
        }
      };
  
      const navigateToPage = function () {
        handleButtonClick();
      };

      const submitData = function () {
        compoentToBeRender(18);
        
      };
  
      return {
        selected,
        handleButtonClick,
        compoentToBeRender,
        navigateToPage,
        submitData
      };
    },
  };
  </script>
  
  <style>
  </style>