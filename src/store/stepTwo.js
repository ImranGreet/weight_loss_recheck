import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useApplicantHeightWeight = defineStore("applicantHeightweight",()=>{
   const Applicantheight = ref(null);
   const Applicantweight = ref(null);
   const applicantTarget = ref(0);
   const haveTarget = ref(null);
   const ApplicantRegion = ref(null);
   const ApplicantBMIRange = ref(null);

   const getApplicantRegion = function(region){
      ApplicantRegion.value = region.trim();
   }

   const getApplicantBMIrange = function(range){
      ApplicantBMIRange.value = range;
   }

   const BMIresult = computed(()=>{
      if(Applicantheight.value>0 && Applicantweight.value>0){
         let applicantHeightInMeter = Applicantheight.value/100*Applicantheight.value/100;
         let BMI = (Applicantweight.value/applicantHeightInMeter).toFixed(1);
         return BMI;
      }
      
   })

  


   return {
      Applicantheight,
      Applicantweight,
      applicantTarget,
      haveTarget,
      BMIresult,
      ApplicantBMIRange,
      ApplicantRegion,
      getApplicantRegion,
      getApplicantBMIrange
   }
})