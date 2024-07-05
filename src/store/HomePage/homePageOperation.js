import { defineStore } from "pinia";
import axios from "axios";
import { ref ,toRaw} from "vue";

const useHomePageResources = defineStore("homePageResourcesStore", () => {
  const alertMessage = ref(null);
  const homePageImages = ref([]);
  const homePageSLiders = ref([]);
  const homePageBlogs = ref([]);

  const retrieveHomePageImagesFromDB = async () => {
    try {
      const response = await axios.get(
        "https://backendevony.evony.me/api/getHomeImages"
      );
      homePageImages.value = response.data; // Assuming the API response contains the homeImages array
      alertMessage.value = "Home images retrieved successfully!";
      return homePageImages.value;
      
    } catch (error) {
      alertMessage.value = "Failed to retrieve home images.";
      console.error(error);
    }
  };
  const retrieveHomePageSlidersFromDB = async () => {
    try {
      const response = await axios.get(
        "https://backendevony.evony.me/api/getSiders"
      );
      homePageSLiders.value = response.data; // Assuming the API response contains the homeImages array
      alertMessage.value = "Home images retrieved successfully!";
    } catch (error) {
      alertMessage.value = "Failed to retrieve home images.";
      console.error(error);
    }
  };
  const retrieveHomePageBlogsFromDB = async () => {
    try {
      const response = await axios.get(
        "https://backendevony.evony.me/api/getBlogs"
      );
      homePageBlogs.value = response.data; // Assuming the API response contains the homeImages array
      alertMessage.value = "Home images retrieved successfully!";
    } catch (error) {
      alertMessage.value = "Failed to retrieve home images.";
      console.error(error);
    }
  };

  return {
    homePageImages,
    homePageBlogs,
    homePageSLiders,
    retrieveHomePageImagesFromDB,
    retrieveHomePageSlidersFromDB,
    retrieveHomePageBlogsFromDB,
  };
});

export default useHomePageResources;
