<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()"
          class="w-full px-2   flex flex-col justify-center items-center mx-auto"
          :class="{'bg-red-100':showError,'bg-blue-50':pregnacnyOrHaveChild}"
        >
          <div class="space-y-6 prose max-w-none w-full">
            <h3>Are you pregnant, breastfeeding, or trying to conceive?</h3>
  
            <div class="flex flex-row-reverse justify-end items-center w-full">
              <label for="yes" class="ml-3 capitalize"> yes</label>
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
              <label for="no" class="ml-3 capitalize"> no</label>
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
import {usePregnantWomenReport} from "../../store/step6"
import { storeToRefs } from "pinia";
import { toggleRecommned } from "../../scripts/functional_quiz/recommendation";
import patientHealthStatus from '../../store/patient/health_info';
  
  export default {
    name: "Step6",
  
    setup() {

      const {pregnacnyOrHaveChild,toggleSelectStates,showError} = storeToRefs(usePregnantWomenReport());
      const store = usePregnantWomenReport();
      
      const submitData = function () {

        if(pregnacnyOrHaveChild.value ==='yes'){
          
          toggleRecommned();
          return;
        }

        if(pregnacnyOrHaveChild.value ){
          patientHealthStatus.pregnant_lactic = pregnacnyOrHaveChild.value;
          compoentToBeRender('Step8');
        }else{
          showError.value = true
        }
        
        
      };
  
      return {
        
        toggleSelectStates,
        
        pregnacnyOrHaveChild,
        store,
        showError,
        toggleRecommned,
        submitData,
      
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