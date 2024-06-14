import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

const useHomeImageStore = defineStore("homeImageStore", () => {
  const alertMessage = ref(null);
  const homeImages = ref([]);

  const retrieveHomeImagesFromDB = async () => {
    try {
      const response = await axios.get("https://backendevony.evony.me/api/admin/get_homeImages");
      homeImages.value = response.data; // Assuming the API response contains the homeImages array
      alertMessage.value = "Home images retrieved successfully!";
    } catch (error) {
      alertMessage.value = "Failed to retrieve home images.";
      console.error(error);
    }
  };

  const deleteHomeImage = async (id) => {
    try {
      await axios.delete(`https://backendevony.evony.me/api/admin/deleteHomeImage/${id}`);
      homeImages.value = homeImages.value.filter(homeImage => homeImage.id !== id); // Remove the deleted home image from the local state
      alertMessage.value = "Home image deleted successfully!";
    } catch (error) {
      alertMessage.value = "Failed to delete home image.";
      console.error(error);
    }
  };

  const createHomeImage = async (homeImageData, headers = {}) => {
    try {
      await axios.post("https://backendevony.evony.me/api/admin/createHomeImage", homeImageData, { headers });
      await retrieveHomeImagesFromDB(); // Refresh the list of home images after creating a new home image
      alertMessage.value = "Home image created successfully!";
    } catch (error) {
      alertMessage.value = "Failed to create home image.";
      console.error(error);
    }
  };

  const updateHomeImage = async (id, homeImageData, headers = {}) => {
    try {
      await axios.put(`https://backendevony.evony.me/api/admin/updateHomeImage/${id}`, homeImageData, { headers });
      await retrieveHomeImagesFromDB(); // Refresh the list of home images after updating the home image
      alertMessage.value = "Home image updated successfully!";
    } catch (error) {
      alertMessage.value = "Failed to update home image.";
      console.error(error);
    }
  };

  return {
    alertMessage,
    homeImages,
    retrieveHomeImagesFromDB,
    deleteHomeImage,
    createHomeImage,
    updateHomeImage
  };
});

export default useHomeImageStore;
