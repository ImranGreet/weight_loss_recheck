import { defineStore } from "pinia";
import { ref } from "vue";

export const usePatientInvoiceDocs = defineStore("patientInvoiceDoc",()=>{
  const userAnswerInput = ref("");
  const showerror = ref(false);
  const getTheAnswer = function(userValue){
    userAnswerInput.value = userValue;
    if(userAnswerInput.value.trim().length>0){
        showerror.value =false
    }
  }

  return {
    userAnswerInput,
    showerror,
    getTheAnswer
  }
});