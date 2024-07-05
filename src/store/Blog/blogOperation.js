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

  const deleteBlog = async (id) => {
    let confirm = window.confirm("Are You Sure To Delete It ?");
    if(confirm){
      try {
        await axios.delete(`https://backendevony.evony.me/api/admin/deleteBlog/${id}`);
        blogs.value = blogs.value.filter(blog => blog.id !== id); // Remove the deleted blog from the local state
        alertMessage.value = "Blog deleted successfully!";
      } catch (error) {
        alertMessage.value = "Failed to delete blog.";
        console.error(error);
      }
    }
    
  };

  const createBlog = async (blogData, headers = {}) => {
    try {
      await axios.post("https://backendevony.evony.me/api/admin/createBlog", blogData, { headers });
      await retrieveBlogsFromDB(); // Refresh the list of blogs after creating a new blog
      alertMessage.value = "Blog created successfully!";
    } catch (error) {
      alertMessage.value = "Failed to create blog.";
      console.error(error);
    }
  };

  const updateBlog = async (id, blogData, headers = {}) => {
    try {
      await axios.put(`https://backendevony.evony.me/api/admin/updateBlog/${id}`, blogData, { headers });
      await retrieveBlogsFromDB(); // Refresh the list of blogs after updating the blog
      alertMessage.value = "Blog updated successfully!";
    } catch (error) {
      alertMessage.value = "Failed to update blog.";
      console.error(error);
    }
  };

  return {
    alertMessage,
    blogs,
    retrieveBlogsFromDB,
    deleteBlog,
    createBlog,
    updateBlog
  };
});

export default useBlogStore;
