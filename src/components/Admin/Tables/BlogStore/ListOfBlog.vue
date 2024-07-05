<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5 relative">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg"
      >
       <div class="flex justify-center items-center p-4">
        <button class="bg-blue-600 text-white rounded-md px-2 py-1">Create New Blog</button>
       </div>
        <div class="overflow-x-auto sticky">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border border-slate-400"
          >
            <thead
              class="text-xs text-white uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Sr No
                </th>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Blog Title
                </th>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Blog Thumbnail
                </th>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Blog Description
                </th>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(blog, index) in blogs"
                :key="blog.id"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <th class="w-4 px-4 py-3 border border-slate-300">
                  {{ index + 1 }}
                </th>
                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ blog.blog_title }}</span
                  >
                </td>

                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
                >
                  <span>{{ blog.blog_thumbnail }}</span>

                  <span>
                    <img :src="blog.blog_thumbnail" alt="" />
                  </span>
                </td>
                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ blog.blog_desc }}</span
                  >
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300 flex gap-x-2 justify-center items-center"
                >
                  <button
                    class="text-red-600 hover:text-red-800"
                    @click="deleteBlogFromDb(blog.id)"
                  >
                    <font-awesome-icon :icon="['fas', 'trash']" />
                  </button>
                  <button
                  @click="openModalInView(blog.id)"
                   class="text-blue-600 hover:text-blue-800">
                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav
          class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
          aria-label="Table navigation"
        >
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing
            <span class="font-semibold text-gray-900 dark:text-white"
              >1-10</span
            >
            of
            <span class="font-semibold text-gray-900 dark:text-white"
              >1000</span
            >
          </span>
          <ul class="inline-flex items-stretch -space-x-px">
            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >...</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >100</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  
    <div v-if="openModal">
      <globalModal />
    </div>
  </section>
</template>

<script>
import { storeToRefs } from "pinia";
import { onMounted, onUnmounted } from "vue";
import useBlogStore from "../../../../store/Blog/blogOperation";
import { PencilIcon } from "@heroicons/vue/24/solid";
import globalModal from "../../Modal/globalModal.vue";
import { openModal } from "../../../../scripts/Global/modal";

export default {
  name: "BlogsStore",
  components: {
    PencilIcon,
    globalModal,
  },
  setup() {
    const blogStore = useBlogStore();
    const { retrieveBlogsFromDB, deleteBlog, createBlog, updateBlog } =
      blogStore;

    const { blogs } = storeToRefs(blogStore);

    onMounted(async () => {
      await retrieveBlogsFromDB();
    });
    const deleteBlogFromDb = async function (id) {
      await deleteBlog(id);
    };

    const openModalInView = function (id) {
      openModal.value = !openModal.value;
    };
    onUnmounted(() => {
      openModal.value = false;
    });
    return {
      blogs,
      deleteBlogFromDb,
      openModal,

      openModalInView,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>




