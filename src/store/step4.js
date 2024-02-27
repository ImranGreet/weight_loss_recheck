import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicantWeightTarget = defineStore("applicantWeightTarget",()=>{
  
   const applicantTarget = ref(0);
   const haveTarget = ref(null);
   const showError = ref(false);

   return {
      
      applicantTarget,
      haveTarget,
      showError
   }
})