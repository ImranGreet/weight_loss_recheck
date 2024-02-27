<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <form
        @submit.prevent="submitData()"
        class="w-full px-2 sm:px-0  flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose max-w-none w-full">
          <h3>Do you have a goal weight you would like to achieve?</h3>

          <div class="flex flex-row-reverse justify-end items-center w-full">
            <label for="yes" class="ml-3"> yes</label>
            <input
              type="radio"
              name="goalWeight"
              id="yes"
              class="px-2 py-3 w-6 h-6 accent-gray-500/20"
              v-model="haveTarget"
              value="yes"
            />
          </div>
          <div class="flex flex-row-reverse justify-end items-center w-full">
            <label for="no" class="ml-3"> no</label>
            <input
              type="radio"
              name="goalWeight"
              id="no"
              class="px-2 py-3 w-6 h-6 accent-gray-500/20"
              v-model="haveTarget"
              value="no"
            />
          </div>
        </div>
<div class="w-full h-3"></div>
        <globalForm />
      </form>
    </div>
  </section>
</template>

  
  <script>
  import { ref } from "vue";
 
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import { useApplicantHeightWeight } from '../../store/stepTwo';
import { storeToRefs } from 'pinia';


  
  export default {
    name: "Step3",
  
    setup() {
     const {haveTarget} = storeToRefs(useApplicantHeightWeight())
   
  
     
  
      const toggleRadio = (value) => {
        haveTarget.value = value;
    
      };

      const submitData = function () {
        
        
        compoentToBeRender(5);
        
        
      
      };
  
      return {
        
        toggleRadio,
        compoentToBeRender,
        submitData,
        haveTarget
       
      };
    },
  };
  </script>