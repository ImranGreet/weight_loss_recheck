import { defineStore } from "pinia";
import { ref } from "vue";

export const useGLPMedicationReport = defineStore("applicantGLPMedication",()=>{
  
   const applicantTarget = ref(0);
   const haveTarget = ref(null);
   const showError = ref(false);
   const selected = ref(null);

   const selectOption = function (option) {
    selected.value = option;
    if(showError.value){
        showError.value =false
    }
  };

   return {
      
      applicantTarget,
      haveTarget,
      showError,
      selected,
      selectOption
   }
})