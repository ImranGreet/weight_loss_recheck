import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicantSexAndRegion = defineStore("applicantSexAndRegion",()=>{
    const sex = ref(null);
    const  outOfDefault = ref(null);

    const selectRegion = function(region){
        outOfDefault.value = region;
      }

      const toggleSex = function(option) {
        sex.value = option;
        
      };
      const showError = ref(false);
      
    return {
        sex,
        outOfDefault,
        showError,
        selectRegion,
        toggleSex
    }
})