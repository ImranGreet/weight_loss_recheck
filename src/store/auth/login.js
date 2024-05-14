import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useAuthLogin = defineStore("login", () => {
  const alertMessage = ref(null);

  const userLoginProperties = ref({
    email: "",
    password: "",
  });

  const loginToEvony = async function () {
    const evonyLoginWay = await axios.post(
      "https://backendevony.evony.me/api/user",
      JSON.stringify(userLoginProperties)
    );
    if (evonyLoginWay) {
      alertMessage = "Login is succesfull";
    } else {
      alertMessage = "Something is missing";
    }
  };

  return {
    loginToEvony,
    userLoginProperties
  };
});
