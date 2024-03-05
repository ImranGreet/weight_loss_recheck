<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()" class="w-full p-2  mx-auto" :class="{'bg-red-100':showerror}">
          <div class="space-y-2 prose max-w-none w-full">
            <h3>
              If you have any other allergies, please tell us about them here?
              <span>If You don't have allergies write 'None'</span>
            </h3>
            <div class="px-3">
              <textarea
              @input="store.getTheAnswer(userAnswerInput)"
                v-model="userAnswerInput"
                placeholder="Type Your Answer Here .."
                class="w-full p-2 border border-gray-400 rounded-md"
                rows="4"
              ></textarea>
              <div class="w-full h-3"></div>
              <globalForm/>
            </div>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>

import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import {usePatientAllergicInfo} from "../../store/step19"
import { storeToRefs } from 'pinia';
  
  export default {
    name: "Step19",
    setup() {
      const {userAnswerInput,getTheAnswer,showerror} = storeToRefs(usePatientAllergicInfo());
      const store = usePatientAllergicInfo();

      const submitData = function () {
        if(showerror.value ===false && userAnswerInput.value.trim().length>0){
          compoentToBeRender('Step21');
        }
        
        
      };

      return {
        userAnswerInput,
        getTheAnswer,
        store,
        showerror,
        submitData
      };
    },
  };
  </script>
  
  <style>
  </style>