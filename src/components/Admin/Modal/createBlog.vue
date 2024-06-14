<template>
  <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Create Blog
              </h3>
              <div class="mt-2">
                <form @submit.prevent="createBlog">
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="blog_title"
                      >Blog Title</label
                    >
                    <input
                      v-model="blog_title"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="blog_title"
                      type="text"
                      placeholder="Blog Title"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="blog_thumbnail"
                      >Blog Thumbnail</label
                    >
                    <input
                      @change="handleFileUpload"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="blog_thumbnail"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="blog_desc"
                      >Blog Description</label
                    >
                    <textarea
                      v-model="blog_desc"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="blog_desc"
                      placeholder="Blog Description"
                    ></textarea>
                  </div>
                  <div class="flex items-center justify-between">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Create Blog
                    </button>
                    <button
                      @click="closeModal"
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      blog_title: "",
      blog_thumbnail: null,
      blog_desc: "",
    };
  },
  methods: {
    handleFileUpload(event) {
      this.blog_thumbnail = event.target.files[0];
    },
    createBlog() {
      const formData = new FormData();
      formData.append("blog_title", this.blog_title);
      formData.append("blog_thumbnail", this.blog_thumbnail);
      formData.append("blog_desc", this.blog_desc);

      // Replace the URL with your actual endpoint
      fetch("/api/blogs", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.closeModal();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    closeModal() {},
  },
};
</script>
  
  <style scoped>
/* Add any additional styles here */
</style>
  