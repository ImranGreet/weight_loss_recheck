import { defineStore } from "pinia";
import userInformation from "./userInfo";
import axios from "axios";
import { ref } from "vue";

export const useAuthRegistration = defineStore("registration", () => {
  let alertMessage = ref(null);
  const registrationToEvony = async function () {
    const evonyRegWay = await axios.post(
      "https://backendevony.evony.me/api/user",
      JSON.stringify(userInformation)
    );
    if (evonyRegWay) {
      alertMessage = "Registration is succesfull";
    } else {
      alertMessage = "Something is missing";
    }
  };

  return {
    registrationToEvony,
  };
});
