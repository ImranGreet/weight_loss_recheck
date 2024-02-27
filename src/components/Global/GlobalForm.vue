<template>
    <div
      class="w-full flex items-center justify-between"
      
    >
      <button
       
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
  </template>
  
  <script>
 
  
  export default {
    name: "GlobalForm",
    setup() {
      return {
       
      };
    },
  };
  </script>
  
  <style>
  </style>