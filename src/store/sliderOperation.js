import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

const useSliderResource = defineStore("sliderStore", () => {
  const alertMessage = ref(null);
  const sliders = ref([]);
  const selectedFile = ref("");
  const sliderTitle =ref("");

  const sliderDescription = ref("");

  const retrieveSliderFromDB = async () => {
    try {
      const response = await axios.get("https://backendevony.evony.me/api/admin/get_blogs");
      console.log(response,'res');
      return ;
      sliders.value = response.data.blogs;

      if (response.data.length > 0) {
        alertMessage.value = "Blogs retrieved successfully";
      } else {
        alertMessage.value = "No blogs found";
      }
    } catch (error) {
      alertMessage.value = "Error retrieving blogs";
    }
  };

  const deleteSlider = async (id) => {
    let confirm = window.confirm("Are You Sure To Delete It ?");
    if(confirm){
      try {
        await axios.delete(`https://backendevony.evony.me/api/admin/deleteBlog/${id}`);
        sliders.value = blogs.value.filter(blog => blog.id !== id); // Remove the deleted blog from the local state
        alertMessage.value = "Blog deleted successfully!";
      } catch (error) {
        alertMessage.value = "Failed to delete blog.";
        console.error(error);
      }
    }
    
  };

  const createSlider = async (blogData) => {
    try {
      await axios.post("https://backendevony.evony.me/api/admin/create_Slider", blogData, { 
        'Content-Type': 'multipart/form-data',
       });
      await retrieveSliderFromDB(); // Refresh the list of blogs after creating a new blog
      alertMessage.value = "Blog created successfully!";
    } catch (error) {
      alertMessage.value = "Failed to create blog.";
      console.error(error);
    }
  };

  const updateSlider = async (id, blogData, headers = {}) => {
    try {
      await axios.put(`https://backendevony.evony.me/api/admin/updateSlider/${id}`, blogData, { headers });
      await retrieveSliderFromDB(); // Refresh the list of blogs after updating the blog
      alertMessage.value = "Blog updated successfully!";
    } catch (error) {
      alertMessage.value = "Failed to update blog.";
      console.error(error);
    }
  };

  return {
    alertMessage,
    sliders,
    selectedFile,
    sliderTitle, 
    sliderDescription,
    retrieveSliderFromDB,
    deleteSlider,
    createSlider,
    updateSlider
  };
});

export default useSliderResource;
