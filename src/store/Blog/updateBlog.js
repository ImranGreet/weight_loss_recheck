import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

const useBlogStoreToUpdate = defineStore("blogStore", () => {
  const alertMessage = ref(null);
  const blogs = ref([]);
  const retrieveBlogsFromDB = async () => {
    try {
      const response = await axios.get("https://backendevony.evony.me/api/admin/get_blogs");
      blogs.value = response.data; // Assuming the API response contains the blogs array
      alertMessage.value = "Blogs retrieved successfully!";
    } catch (error) {
      alertMessage.value = "Failed to retrieve blogs.";
      console.error(error);
    }
  };
  
  const updateBlog = async (id, blogData, headers = {}) => {
    try {
      await axios.put(
        `https://backendevony.evony.me/api/admin/updateBlog/${id}`,
        blogData,
        { headers }
      );
      await retrieveBlogsFromDB(); // Refresh the list of blogs after updating
      alertMessage.value = "Blog updated successfully!";
    } catch (error) {
      alertMessage.value = "Failed to update blog.";
      console.error(error);
    }
  };

  return {
    alertMessage,

    updateBlog,
  };
});

export default useBlogStoreToUpdate;
