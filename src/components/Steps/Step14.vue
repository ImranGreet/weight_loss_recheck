<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()" class="w-full px-2 sm:px-0 min-h-28  mx-auto">
          <div class="space-y-2 prose max-w-none w-full">
            <h3>Are you taking any of the following medications?</h3>

            <div class="px-3">
              <select>
                <option value="">Please Select</option>
                <option value="insulin">Insulin</option>
                <option value="Sulfonylureas">Sulfonylureas e.g., gliclazide</option>
                <option value="Orlistat">Orlistat</option>
                <option value="DPP4 inhibitors">'DPP4 inhibitors - usually ending in the word 'gliptin''</option>
                <option value="none">None</option>
              </select>
              
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
import { toggleRecommned } from "../../scripts/functional_quiz/recommendation";


  
  export default {
    name: "Step14",
    setup() {

      
  const store = usePatientMedicationReport();
  const {patinetRecord,showerror,toggleSelectReport} = storeToRefs(usePatientMedicationReport());
      
      const submitData = function () {
        if(patinetRecord.value ==='yes'){
            toggleRecommned();
            return ;
        }
        compoentToBeRender(16);
        
      };
  
      return {
        patinetRecord,showerror,toggleSelectReport,
        store,
        toggleRecommned,
        submitData
      };
    },
  };
  </script>
  
  <style>
  </style>