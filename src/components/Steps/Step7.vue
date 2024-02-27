<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()" class="w-full p-2  mx-auto"
        :class="{'bg-red-100':showError,'bg-blue-50':decision}">
          <div class="mt-6 space-y-4">
            <p>
              Our program contains medication that isn’t suitable for pregnant
              women, therefore it is recommended to use contraception when taking
              this medication. If you do become pregnant or wish to conceive when
              taking this medication, please update us straight away.
            </p>
            <div class="flex flex-row-reverse justify-end items-center w-full">
              <label for="yes" class="ml-3"> I understand</label>
              <input
                type="radio"
                name="goalWeight"
                id="yes"
                class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                v-model="decision"
                value="understand"
              />
            </div>
            <div class="flex flex-row-reverse justify-end items-center w-full">
              <label for="no" class="ml-3"> I don’t wish to continue</label>
              <input
                type="radio"
                name="goalWeight"
                id="no"
                class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                v-model="decision"
                value="I don’t wish to continue"
              />
            </div>
          </div>
          <div class="w-full h-3"></div>
          <globalForm/>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import {usePregnantWomenReport} from "../../store/step6"
import { storeToRefs } from 'pinia';
 
  
  export default {
    name: "Step7",
    setup() {
     const {decision,handleDecision,showError} = storeToRefs(usePregnantWomenReport());
     const store = usePregnantWomenReport();

      const submitData = function () {
        if(decision.value){
          compoentToBeRender(9);
        }else{
          showError.value =true
        }
      };
  
      return {
        decision,
        handleDecision,
        submitData,
        store,
        showError
      };
    },
  };
  </script>
  
  <style>
  </style>