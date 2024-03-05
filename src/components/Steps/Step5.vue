<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center ">
        <form @submit.prevent="submitData()" class="w-full p-2   mx-auto space-y-4"
        :class="{'bg-red-100':showError,'bg-blue-50': sex }">
          
          <div class="space-y-2 prose">
            <h3>What is your biological sex?</h3>
            <div class="px-3 space-y-6">

              <div class="flex flex-row-reverse justify-end items-center w-full ">
                <label for="yes" class="ml-3">Male</label>
                <input
                @change="store.toggleSex('male')"
                  type="radio"
                  name="goalWeight"
                  id="yes"
                  class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                  v-model="sex"
                  value="male"
                />
              </div>

              <div class="flex flex-row-reverse justify-end items-center w-full "
              >
                <label for="yes" class="ml-3">Female</label>
                <input
                @change="store.toggleSex('female')"
                  type="radio"
                  name="goalWeight"
                  id="yes"
                  class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                  v-model="sex"
                  value="female"
                />
              </div>

             
             
            </div>
          </div>
          <globalForm/>
        </form>
      </div>
    </section>
  </template>
  
  <script> 
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import {useApplicantSexAndRegion} from "../../store/step5"
import { storeToRefs } from 'pinia';
  
  export default {
    name: "Step5",
    setup() {
      const {sex,outOfDefault,toggleSex,selectRegion,showError} = storeToRefs(useApplicantSexAndRegion());
      ;
     
      const store = useApplicantSexAndRegion();

      

      const submitData = function () {
        if(sex.value==='female' ){

          compoentToBeRender('Step6');

        }else if(sex.value==='male' ){
          compoentToBeRender('Step8');
        }
        
        else{
          showError.value =true
        }
        
      
      };
  
      return {
        sex,
        outOfDefault,
        selectRegion,
        toggleSex,
        submitData,
        showError,
        store
      };
    },
  };
  </script>
