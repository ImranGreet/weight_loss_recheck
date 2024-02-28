<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center ">
        <form
        @submit.prevent="submitData()"
          class="w-full p-2 rounded-lg flex flex-col justify-start items-start mx-auto"
          :class="{'bg-red-100':showError}"
        >
          <div class="space-y-2 prose max-w-none w-full">
            <h3>{{ currentQuestion.text }}</h3>
            <div
              v-for="option in currentQuestion.options"
              :key="option.id"
              class="flex items-center space-x-2 cursor-pointer p-4 rounded-lg"
             
              @click="store.toggleOption(option)"
            >
              <input
                type="radio"
                :id="`option-${option.id}`"
                :name="`question-${currentQuestion.id}`"
                v-model="selectedOption"
                :value="option.id"
                class="w-5 h-5 accent-gray-500/20"
              />
              <label :for="`option-${option.id}`" class="text-lg">
                {{ option.text }}
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
  import { ref, onMounted } from "vue";

import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';

import {useStruggledForLosingWeight} from "../../store/step8"
import { storeToRefs } from 'pinia';
  
  export default {
    name: "Step8",
    setup() {
     
    
   const {questions,selectedOption,showError,toggleOption} = storeToRefs(useStruggledForLosingWeight());

   const store = useStruggledForLosingWeight();
  
      const currentQuestionIndex = ref(0);
  
      
  
  
      onMounted(() => {
        questions.value[currentQuestionIndex.value].selectedOption =
          questions.value[currentQuestionIndex.value].options[0].id;
      });

      const submitData = function () {
        if(selectedOption.value){
          compoentToBeRender(10);
        }else{
          showError.value=true
        }
        
        
      };
  
      return {
        currentQuestion: questions.value[currentQuestionIndex.value],
        toggleOption,
        submitData,
        selectedOption,
        store,
        showError
      };
    },
  };
  </script>
  
