<template>
  <form @submit.prevent="submitData()">
    <div class="max-w-full mx-auto">
      <h2 class="text-xl font-semibold mb-4">Patient Information</h2>

      <div class="patient-input-field">
        <label class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <p class="text-gray-900">John Doe</p>
      </div>

      <div class="patient-input-field">
        <label class="block text-gray-700 text-sm font-bold mb-2"
          >Date of Birth:</label
        >
        <p class="text-gray-900">January 1, 1980</p>
      </div>

      <div class="patient-input-field">
        <label class="block text-gray-700 text-sm font-bold mb-2"
          >Gender:</label
        >
        <p class="text-gray-900">Male</p>
      </div>

      <div class="patient-input-field">
        <label class="block text-gray-700 text-sm font-bold mb-2"
          >Address:</label
        >
        <p class="text-gray-900">123 Main Street, City, State, Zip</p>
      </div>

      <div class="patient-input-field">
        <label class="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
        <p class="text-gray-900">123-456-7890</p>
      </div>

      <div class="patient-input-field">
        <label class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <p class="text-gray-900">johndoe@example.com</p>
      </div>

      <div class="patient-input-field">
        <label class="block text-gray-700 text-sm font-bold mb-2"
          >Insurance:</label
        >
        <p class="text-gray-900">ABC Health Insurance</p>
      </div>

      <section>
        <div class="w-full flex items-center justify-between mt-5">
          <button
            @click="gotoPreviusPage()"
            type="button"
            class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
          >
            Back
          </button>
          <div class="flex gap-x-7">
            <button
              class="px-5 py-1 lg:px-10 lg:py-3 hover:bg-gray-600 hover:text-white rounded-lg"
            >
              Save
            </button>
            <button
              type="submit"
              class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  </form>
</template>

<script>
import { compoentToBeRender } from '../scripts/functional_quiz/renderCompos';

export default {
  name: "Preview",
  setup() {
    const submitData = function () {
      
      compoentToBeRender("ThankYou");
    };
    return {
      submitData,
      compoentToBeRender
    };
  },
};
</script>

<style>
</style>