<template>
  <section class="w-full bg-inherit rounded-lg shadow-sm">
    <div
      class="w-full flex flex-col sm:flex-row  justify-center items-center gap-x-5"
    >
      <div class="w-full flex justify-center items-center">
        <img :src="evonyHome" alt="" />
      </div>
      <div class="prose max-w-none self-start">
        <h2>
          Congratulations on choosing to enhance your health and well-being with
          evony.
        </h2>
      </div>
    </div>
    <div
      class="w-full flex items-center "
      :class="{
        'justify-end': rendredCompo === 0,
        'justify-between': rendredCompo > 0,
      }"
      
    >
      <button
      
        class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
        :class="{'hidden':rendredCompo ===0,'inline-block':rendredCompo>0}"
       
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
          @click="compoentToBeRender(1)"
          class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import evonyHome from "../../assets/Stesps/evony.png";
import { rendredCompo,compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';



export default {
  name: "Greeting",
  setup() {
    
    return {
      evonyHome,
      rendredCompo,
      compoentToBeRender
      
    };
  },
};
</script>

<style>
</style>