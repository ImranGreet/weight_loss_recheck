import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

const useBlogStore = defineStore("blogStore", () => {
  const alertMessage = ref(null);
  const blogs = ref([]);

  const retrieveBlogsFromDB = async () => {
    try {
      const response = await axios.get("https://backendevony.evony.me/api/admin/get_blogs");
      blogs.value = response.data.blogs;

      if (response.data.length > 0) {
        alertMessage.value = "Blogs retrieved successfully";
      } else {
        alertMessage.value = "No blogs found";
      }
    } catch (error) {
      alertMessage.value = "Error retrieving blogs";
    }
  };

  return {
    retrieveBlogsFromDB,
    blogs,
    alertMessage,
  };
});

export default useBlogStore;
