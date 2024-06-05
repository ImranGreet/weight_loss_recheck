import { defineStore } from "pinia";
import patientInfo from "../patient/health_info";
import axios from "axios";
import { ref } from "vue";

 const patientHealthInfo = defineStore("patientInfo", () => {
  let alertMessage = ref(null);
  const keepPatientInfo = async function () {
    const evonyRegWay = await axios.post(
      "https://backendevony.evony.me/api/questions",
      JSON.stringify(patientInfo)
    );
    
    if (evonyRegWay) {
      alertMessage = "Patient info keeping is succesfull";
      

    } else {
      alertMessage = "Something is missing";
    }
  };

  return {
    keepPatientInfo,
  };
});

export default patientHealthInfo;