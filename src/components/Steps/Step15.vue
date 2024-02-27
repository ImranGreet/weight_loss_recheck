<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()" class="w-full p-2  mx-auto"
        :class="{'bg-red-100':showError,'bg-blue-50':selected}">
          <div class="space-y-2 prose max-w-none w-full">
            <h3>
              Are you taking any other medications, including GLP-1s, e.g.
              Ozempic/Saxenda/Wegovy?
            </h3>
            <div class="flex flex-row-reverse justify-end items-center w-full ">
              <label for="yes" class="ml-3">Yes</label>
              <input
              @change="store.selectOption(selected)"
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
              @change="store.selectOption(selected)"
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
 
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import {useGLPMedicationReport} from "../../store/step15"
import { storeToRefs } from 'pinia';
 
  
  export default {
    name: "Step15",
    setup() {
       const {selected,showError,selectOption} = storeToRefs(useGLPMedicationReport());
       const store = useGLPMedicationReport();
      const submitData = function () {
        compoentToBeRender(17);
        
      };
      return {
        selected,
        selectOption,
        store,
        showError,selectOption,
        submitData,
      };
    },
  };
  </script>
  
  <style>
  </style>