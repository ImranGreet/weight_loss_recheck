<template>
  <section class="fixed top-0 right-0 left-0 bottom-0 bg-gray-800/35 w-full h-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-2/4 h-2/4 border bg-white border-gray-400 p-6 rounded-md row-end-auto relative">
        <div class="text-center ">
          <h1 class="text-3xl">Create Your Blog</h1>
        </div>
        <form @submit.prevent="submitBlog" :class="{ 'transition-all duration-500 ': createModal }">
          <div class="mb-4">
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              v-model="blogTitle"
              placeholder="Enter Your Blog Title"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div class="mb-4">
            <label for="thumbnail" class="block text-sm font-medium text-gray-700">Thumbnail</label>
            <input
              type="file"
              id="thumbnail"
              @change="handleFileUpload"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div class="mb-4">
            <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              rows="5"
              placeholder="Enter Your Blog Description Here"
              v-model="blogDescription"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
          </div>
        </form>
        <button @click="closeModal" class="absolute top-1 right-1 bg-red-500 text-white px-1 py-0.5 rounded-md">X</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import  useBlogStore  from "../../../store/Blog/blogOperation"; // Adjust the import path accordingly
import { createModal } from "../../../scripts/Global/modal";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const blogStore = useBlogStore();
    const { blogTitle, blogDescription, selectedFile,retrieveBlogsFromDB } = storeToRefs(blogStore);

    const handleFileUpload = (event) => {
      selectedFile.value = event.target.files[0];
    };

    const submitBlog = async () => {
      if (!selectedFile.value) {
        alert("Please select a file first.");
        return;
      }

      const formData = new FormData();
      formData.append('blog_title', blogTitle.value);
      formData.append('blog_desc', blogDescription.value);
      formData.append('blog_thumbnail', selectedFile.value);

      try {
        await blogStore.createBlog(formData);
        await blogStore.retrieveBlogsFromDB();
         createModal.value =false;
         blogTitle.value="";
         blogDescription.value="";
        
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    };

    const closeModal = () => {
      createModal.value = false;
    };

    return {
      createModal,
      blogTitle,
      blogDescription,
      handleFileUpload,
      closeModal,
      submitBlog,
    };
  },
};
</script>
