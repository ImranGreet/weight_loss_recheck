import { defineStore } from "pinia";
import userInformation from "./userInfo";
import patientHealthInfo from "../patient/store_patient_info";
import axios from "axios";
import { ref } from "vue";

const useAuthRegistration = defineStore("registration", () => {
  const alertMessage = ref(null); // Ensure alertMessage is a ref to update it reactively

  const registrationToEvony = async function () {
    try {
      const patientPersonalInfoStore = patientHealthInfo();

      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        "https://backendevony.evony.me/api/register", // Adjusted the endpoint to a typical registration route
        userInformation,
        { headers }
      );

      if (response.data) {
        alertMessage.value = "Registration is successful";

        

        // Optional: Save patient personal information after successful registration
        // await patientPersonalInfoStore.keepPatientInfo();
      } else {
        alertMessage.value = "Registration failed";
      }
    } catch (error) {
      alertMessage.value = "An error occurred during registration";
      console.error("Registration error:", error);
    }
  };

  return {
    registrationToEvony,
    alertMessage, // Export alertMessage for use in components
  };
});

export default useAuthRegistration;
