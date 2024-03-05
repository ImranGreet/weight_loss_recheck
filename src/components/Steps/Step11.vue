<template>
    <section class="w-full">
      <form @submit.prevent="submitData()" class="w-full h-full  flex flex-col justify-center items-center">
        <div
          class="w-full px-2 sm:px-0  flex flex-col justify-center items-center mx-auto"
        >
          <div class="space-y-6 prose max-w-none w-full">
            <h3>{{ currentQuestion.text }}</h3>
            <div
              v-for="reason in currentQuestion.reasons"
              :key="reason.id"
              class="flex items-center space-x-2 cursor-pointer"
              
              @click="store.toggleCheckbox(reason)"
            >
              <input
                type="checkbox"
                :id="`reason-${reason.id}`"
                v-model="reason.selected"
                class="text-primary focus:ring-2 focus:ring-primary w-4 h-4 accent-gray-500/50 checked:text-white checked:bg-white checked:ring-1"
              />
              <label
                :for="`reason-${reason.id}`"
                class="text-lg"
                @click="store.toggleCheckbox(reason)"
              >
                {{ reason.text }}
              </label>
            </div>
           
          </div>
        </div>
        <div class="w-full h-3"></div>
        <globalForm/>
      </form>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
 
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import {useChallengesForLosingWeight} from "../../store/step11"
import { storeToRefs } from 'pinia';
  
  export default {
    name: "Step11",
    setup() {
      
      const{questions,toggleCheckbox} = storeToRefs(useChallengesForLosingWeight());
      const store = useChallengesForLosingWeight();
  
      const currentQuestionIndex = ref(0);
      
  

      const submitData = function () {
        compoentToBeRender('Step12');
        
        
      };

  
      return {
        currentQuestion: questions.value[currentQuestionIndex.value],
        
        toggleCheckbox,
        
        submitData,
        store
      };
    },
  };
  </script>
  
  <style>
  .form-checkbox:checked {
    color: #f76d57; /* Customize the color of the checkmark when checked */
  }
  .focus\:ring-primary-dark:focus {
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5); /* Customize the focus ring color */
  }
  </style>