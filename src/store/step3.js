 import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicantTargetWeight = defineStore("applicatTargetWeight",()=>{
   
  
   const haveTarget = ref(null);
   const showerror = ref(false);

   const toggleRadio = (value) => {
    haveTarget.value = value;
    

  };


   return {
      
      haveTarget,
      toggleRadio,
      showerror
   }
})