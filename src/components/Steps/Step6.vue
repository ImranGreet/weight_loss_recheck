<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()"
          class="w-full px-2 sm:px-0  flex flex-col justify-center items-center mx-auto"
        >
          <div class="space-y-6 prose max-w-none w-full">
            <h3>Are you pregnant, breastfeeding, or trying to conceive?</h3>
  
            <div class="flex flex-row-reverse justify-end items-center w-full">
              <label for="yes" class="ml-3"> yes</label>
              <input
              @change="store.toggleSelectStates(pregnacnyOrHaveChild)"
                type="radio"
                name="goalWeight"
                id="yes"
                class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                v-model="pregnacnyOrHaveChild"
                value="yes"
              />
            </div>
  
            <div class="flex flex-row-reverse justify-end items-center w-full">
              <label for="no" class="ml-3"> no</label>
              <input
              @change="store.toggleSelectStates(pregnacnyOrHaveChild)"
                type="radio"
                name="goalWeight"
                id="no"
                class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                v-model="pregnacnyOrHaveChild"
                value="no"
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
  
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import {usePregnantWomenReport} from "../../store/Pregnant"
import { storeToRefs } from "pinia";
  
  export default {
    name: "Step6",
  
    setup() {

      const {pregnacnyOrHaveChild,toggleSelectStates} = storeToRefs(usePregnantWomenReport());
      const store = usePregnantWomenReport();
      
      const submitData = function () {
        compoentToBeRender(8);
        
      };
  
      return {
        
        toggleSelectStates,
        submitData,
        pregnacnyOrHaveChild,
        store
      
      };
    },
  };
  </script>
  
  <style>
  .checkmark {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #f76d57; /* Orange border color */
  }
  
  .checkmark.checked {
    background-color: #f76d57; /* Orange background color when checked */
  }
  
  .radio-button {
    width: 100%;
    text-align: center;
  }
  </style>