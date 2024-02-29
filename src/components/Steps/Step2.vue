<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <form
        @submit.prevent="submitData()"
        class="w-full p-2  flex flex-col justify-center items-center mx-auto"
        :class="{'bg-red-100':showerror}"
        
      >
        <div class="space-y-6 prose max-w-none w-full">
          <h3 class="after-content">Have you set a target weight that you aim to reach?</h3>

          <div class="flex flex-row-reverse justify-end items-center w-full">
            <label for="yes" class="ml-3"> Yes</label>
            <input
            @change="store.toggleRadio(haveTarget)"
              type="radio"
              name="goalWeight"
              id="yes"
              class="px-2 py-3 w-6 h-6 accent-gray-500/20"
              v-model="haveTarget"
              value="yes"
            />
          </div>
          <div class="flex flex-row-reverse justify-end items-center w-full">
            <label for="no" class="ml-3"> No</label>
            <input
            @change="store.toggleRadio(haveTarget)"
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
import { useApplicantTargetWeight } from '../../store/step3';
import { storeToRefs } from 'pinia';


  
  export default {
    name: "Step3",
  
    setup() {
     const {haveTarget,toggleRadio,showerror} = storeToRefs(useApplicantTargetWeight())
   
  const store = useApplicantTargetWeight();
     
  
    

      const submitData = function () {
        
        if(haveTarget.value ==='yes'){
          compoentToBeRender(5);
        }else if(haveTarget.value ==='no'){
         compoentToBeRender(6);
        }
        
        else{
          showerror.value =true
        }
          
        
        
      
      };
  
      return {
        
        store,
        compoentToBeRender,
        submitData,
        toggleRadio,
        haveTarget,
        showerror
       
      };
    },
  };
  </script>