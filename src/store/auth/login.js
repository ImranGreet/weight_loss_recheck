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
    try {
      const response = await axios.post(
        "https://backendevony.evony.me/api/user",
        userLoginProperties.value,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        alertMessage.value = "Login is successful";
        // Store the token in local storage or a cookie
        localStorage.setItem("authToken", response.data.token);
        // Set the axios default authorization header
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
      } else {
        alertMessage.value = "Login failed";
      }
    } catch (error) {
      alertMessage.value = "An error occurred during login";
      console.error("Login error:", error);
    }
  };

  return {
    loginToEvony,
    userLoginProperties,
    alertMessage,
  };
});
