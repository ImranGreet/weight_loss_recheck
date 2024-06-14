import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

const deleteBlogFromStore = defineStore("blogStore", () => {
  const alertMessage = ref(null);
  const blogs = ref([]);

  

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`https://backendevony.evony.me/api/admin/deleteBlog/${id}`);
      blogs.value = blogs.value.filter(blog => blog.id !== id); // Remove the deleted blog from the local state
      alertMessage.value = "Blog deleted successfully!";
    } catch (error) {
      alertMessage.value = "Failed to delete blog.";
      console.error(error);
    }
  };

  return {
    alertMessage,
    deleteBlog
  };
});

export default deleteBlogFromStore;
