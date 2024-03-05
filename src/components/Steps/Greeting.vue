<template>
  <section class="w-full bg-inherit rounded-lg shadow-sm">
    
     
      <div class="prose max-w-none self-start w-full px-5 py-14">
        <h2 class="font-semibold tracking-wide text-3xl leading-snug">
          Congratulations on choosing to enhance your health and well-being with
          evony!
        </h2>
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
          @click='compoentToBeRender("Requirments")'
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