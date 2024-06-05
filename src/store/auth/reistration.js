import { defineStore } from "pinia";
import userInformation from "./userInfo";
import patientHealthInfo from "../patient/store_patient_info";
import axios from "axios";
import { ref } from "vue";

 const useAuthRegistration = defineStore("registration", () => {
  let alertMessage = ref(null);
  const registrationToEvony = async function () {
    let patientPersonalInfoStore = patientHealthInfo();
    console.log(JSON.stringify(userInformation),'json');
    const evonyRegWay = await axios.post(
      "https://backendevony.evony.me/api/user",
      JSON.stringify(userInformation)
    );
    if (evonyRegWay) {
      alertMessage = "Registration is succesfull";
      await patientPersonalInfoStore.keepPatientInfo();

    } else {
      alertMessage = "Something is missing";
    }
  };

  return {
    registrationToEvony,
  };
});


export default useAuthRegistration;