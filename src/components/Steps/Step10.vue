<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()"
          class="w-full px-2 sm:p-5 rounded-lg flex flex-col justify-start items-start mx-auto"
        >
          <div class="space-y-6 prose max-w-none w-full">
            <h3 class="after-content">{{ currentQuestion.text }}</h3>
            <div
              v-for="reason in currentQuestion.reasons"
              :key="reason.id"
              class="flex items-center space-x-2 cursor-pointer"
              @click="toggleCheckbox(reason)"
            >
              <input
                type="checkbox"
                :id="`reason-${reason.id}`"
                v-model="reason.selected"
                class="text-primary focus:ring-2 focus:ring-primary w-4 h-4 accent-gray-500/50 checked:text-white checked:bg-white checked:ring-1"              />
              <label
                :for="`reason-${reason.id}`"
                class="text-lg"
                @click="toggleCheckbox(reason)"
              >
                {{ reason.text }}
              </label>
            </div>
            
          </div>
          <div class="w-full h-3"></div>
          <globalForm/>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, computed } from "vue";
  
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import {useStatragiesInPastForLosingWeight} from "../../store/step10"
import { storeToRefs } from "pinia";
  
  export default {
    name: "Step10",
    setup() {
     
      
  const {questions,toggleCheckbox} = storeToRefs(useStatragiesInPastForLosingWeight());
  const store = useStatragiesInPastForLosingWeight();
      const currentQuestionIndex = ref(0);

      const submitData = function () {
        compoentToBeRender(12);
        
        
      };
  
      return {
        currentQuestion: questions.value[currentQuestionIndex.value],
       
        toggleCheckbox,
        
        submitData
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