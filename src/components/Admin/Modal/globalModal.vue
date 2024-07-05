<template>
  <section
    class="fixed top-0 right-0 left-0 bottom-0 bg-gray-200/35 w-full h-full"
  >
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="w-2/4 h-2/4 border bg-white border-gray-400 p-6 rounded-md row-end-auto relative"
      >
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="title" class="block text-sm font-medium text-gray-700"
              >Title</label
            >
            <input
              type="text"
              id="title"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div class="mb-4">
            <label for="content" class="block text-sm font-medium text-gray-700"
              >Content</label
            >
            <textarea
              id="content"
              rows="5"
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
        <button
          @click="closeModal()"
          class="absolute top-1 right-1 bg-red-500 px-1 py-0.5 rounded-md"
        >
          X
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { openModal } from "../../../scripts/Global/modal";
export default {
  setup() {
    const closeModal = function () {
      openModal.value = false;
    };
    return {
      closeModal,
    };
  },
};
</script>

<style>
</style>