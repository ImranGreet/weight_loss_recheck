import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicantHeightWeight = defineStore("applicantHeightweight",()=>{
   const Applicantheight = ref(0);
   const Applicantweight = ref(0);
   const applicantTarget = ref(0);
   const haveTarget = ref(null);


   return {
      Applicantheight,
      Applicantweight,
      applicantTarget,
      haveTarget
   }
})