<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()" class="w-full px-2 sm:px-0  mx-auto">
          <div class="space-y-2 prose max-w-none w-full">
            <h3>Are you taking any of the following medications?</h3>
            <div class="px-3">
              <ol class="list-disc">
                <li>Insulin</li>
                <li>Sulfonylureas e.g., gliclazide</li>
                <li>Orlistat</li>
                <li>'DPP4 inhibitors - usually ending in the word 'gliptin''</li>
              </ol>
              <div class="flex flex-col items-center w-full space-y-4">
                <div class="flex flex-row-reverse justify-end items-center w-full">
                  <label for="yes" class="ml-3"> yes</label>
                  <input
                  @change="store.toggleSelectReport(patinetRecord)"
                    type="radio"
                    name="goalWeight"
                    id="yes"
                    class="px-2 py-3 w-5 h-5 accent-gray-500/20"
                    v-model="patinetRecord"
                    value="yes"
                  />
                </div>

                <div class="flex flex-row-reverse justify-end items-center w-full">
                  <label for="yes" class="ml-3">no</label>
                  <input
                  @change="store.toggleSelectReport(patinetRecord)"
                    type="radio"
                    name="goalWeight"
                    id="yes"
                    class="px-2 py-3 w-5 h-5 accent-gray-500/20"
                    v-model="patinetRecord"
                    value="no"
                  />
                </div>
  
                
              </div>
            </div>
            <div class="w-full h-3"></div>
            <globalForm/>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";

import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import { usePatientMedicationReport } from "../../store/step14";
import { storeToRefs } from "pinia";


  
  export default {
    name: "Step14",
    setup() {

      
  const store = usePatientMedicationReport();
  const {patinetRecord,showerror,toggleSelectReport} = storeToRefs(usePatientMedicationReport());
      
      const submitData = function () {
        compoentToBeRender(16);
        
      };
  
      return {
        patinetRecord,showerror,toggleSelectReport,
        store,
        submitData
      };
    },
  };
  </script>
  
  <style>
  </style>