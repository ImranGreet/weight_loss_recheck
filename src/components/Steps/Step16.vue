<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()" class="w-full px-2 sm:px-0  mx-auto">
          <div class="space-y-2 prose">
            <h3>Do you have any allergies?</h3>
            <div class="flex flex-row-reverse justify-end items-center w-full ">
              <label for="yes" class="ml-3">Yes</label>
              <input
              @change="store.toggleRadio(haveAllergy)"
                type="radio"
                name="goalWeight"
                id="yes"
                class="px-2 py-3 w-6 h-6 accent-gray-500"
                v-model="haveAllergy"
                value="yes"
              />
            </div>
            <div class="flex flex-row-reverse justify-end items-center w-full ">
              <label for="yes" class="ml-3">No</label>
              <input
              @change="store.toggleRadio(haveAllergy)"
                type="radio"
                name="goalWeight"
                id="yes"
                class="px-2 py-3 w-6 h-6 accent-gray-500"
                v-model="haveAllergy
                "
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
import { storeToRefs } from 'pinia';
 

import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
 import {useApplicantAllergeticHistory} from "../../store/step16"
  
  export default {
    name: "Step16",
    setup() {
      
  const {haveAllergy,showerror,toggleRadio} = storeToRefs(useApplicantAllergeticHistory());
  const store = useApplicantAllergeticHistory();
      const submitData = function () {
        compoentToBeRender(18);
        
      };
  
      return {
        haveAllergy,showerror,toggleRadio,
        store,
        compoentToBeRender,
       
        submitData
      };
    },
  };
  </script>
  
  <style>
  </style>