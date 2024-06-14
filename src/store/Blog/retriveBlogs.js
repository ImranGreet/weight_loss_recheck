import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

 const retriveBlogsWay = defineStore("retriveBlogs", () => {
  let alertMessage = ref(null);
  const retriveBlogsFromDB = async function () {
    const blogRetrive = await axios.get(
      "https://backendevony.evony.me/api/admin/get_blogs",
      
    );
     console.log(blogRetrive);
    
    
    if (blogRetrive) {
      alertMessage = "Patient info keeping is succesfull";
      

    } else {
      alertMessage = "Something is missing";
    }
  };

  return {
    retriveBlogsFromDB,
    
  };
});

export default retriveBlogsWay;