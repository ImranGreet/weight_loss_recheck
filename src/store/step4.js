import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicantWeightTarget = defineStore("applicantWeightTarget",()=>{
  
   const applicantTarget = ref(null);
   const haveTarget = ref(null);
   const showError = ref(false);

   return {
      
      applicantTarget,
      haveTarget,
      showError
   }
})