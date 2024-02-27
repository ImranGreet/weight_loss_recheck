<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()"
          class="w-full p-2 rounded-lg flex flex-col justify-start items-start mx-auto"
          :class="{
            'bg-red-100': pageErrorMarking,
            'bg-blue-50': selectedReasons.length > 0,
          }"
        >
          <div class="space-y-4 prose max-w-none w-full">
            <h3 class="after-content">{{ currentQuestion.text }}</h3>
            <div
              v-for="reason in currentQuestion.reasons"
              :key="reason.id"
              class="flex items-center space-x-2 cursor-pointer  "
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
          <div
          :class="{
            hidden: !otherSelection,
            block: otherSelection,
          }"
        >
          <input
            type="text"
            id=""
            v-model="othersInfo"
            class="w-full px-4 py-2 rounded-md placeholder:text-blue-700 placeholder:font-semibold focus:outline-none border border-gray-100"
            placeholder="Please type another option here"
          />
          <p
            v-if="otherSelection && othersInfo.trim() === ''"
            class="bg-red-400 inline-block px-3 py-0.5 text-white rounded-lg"
          >
            <span
              class="w-5 h-5 text-gray-800 inline-flex justify-center items-center rounded-full bg-white"
              >!</span
            >
            This is field is required
          </p>
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
import {useStatragiesForLosingWeight} from "../../store/step9.js"
import { storeToRefs } from "pinia";
  
  export default {
    name: "Step9",
    setup() {
     
      const {questions,toggleCheckbox,selectedReasons,otherSelection,othersInfo,errorSign} = storeToRefs(useStatragiesForLosingWeight());

      const store = useStatragiesForLosingWeight();
      const pageErrorMarking = ref(false);
  
      const currentQuestionIndex = ref(0);
  
    

      const submitData = function () {

        if (selectedReasons.value.length === 0 || otherSelection.value === true) {
          pageErrorMarking.value = true;
          return;
        }
        compoentToBeRender(11);
        
        
      };
  
      return {
        currentQuestion: questions.value[currentQuestionIndex.value],
        toggleCheckbox,
        store,
        questions,
        othersInfo,errorSign,
        selectedReasons,
        pageErrorMarking,
        otherSelection,
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