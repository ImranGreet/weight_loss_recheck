import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicantAllergeticHistory = defineStore("applicantAllergicHistory",()=>{
   
  
   const haveAllergy = ref(null);
   const showerror = ref(false);

   const toggleRadio = (value) => {
    haveAllergy.value = value;
    

  };


   return {
    haveAllergy,
      toggleRadio,
      showerror
   }
})