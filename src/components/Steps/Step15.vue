<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()" class="w-full px-2 sm:px-0  mx-auto">
          <div class="space-y-2 prose max-w-none w-full">
            <h3>
              Are you taking any other medications, including GLP-1s, e.g.
              Ozempic/Saxenda/Wegovy?
            </h3>
            <div class="flex flex-row-reverse justify-end items-center w-full ">
              <label for="yes" class="ml-3">Yes</label>
              <input
                type="radio"
                name="goalWeight"
                id="yes"
                class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                v-model="selected"
                value="Yes"
              />
            </div>
            <div class="flex flex-row-reverse justify-end items-center w-full ">
              <label for="yes" class="ml-3">No</label>
              <input
                type="radio"
                name="goalWeight"
                id="yes"
                class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                v-model="selected"
                value="No"
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
  import { ref } from "vue";
  import { useRouter } from "vue-router";
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
 
  
  export default {
    name: "Step15",
    setup() {
      const routes = useRouter();
      const selected = ref(false);
  
      const selectOption = function (option) {
        selected.value = option;
        if (selected.value) {
          routes.push({ name: "quiz19" });
        } else {
          routes.push({ name: "quiz20" });
        }
      };
      const submitData = function () {
        compoentToBeRender(17);
        
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