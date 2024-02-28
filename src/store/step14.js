import { defineStore } from "pinia";
import { ref } from "vue";

export const usePatientMedicationReport = defineStore("patientMedicationRecord",()=>{
  const patinetRecord = ref(null);
  const showerror = ref(false);
  const toggleSelectReport = function(option){
    patinetRecord.value = option
}

  return {
    patinetRecord,
    showerror,
    toggleSelectReport
    
  }
});