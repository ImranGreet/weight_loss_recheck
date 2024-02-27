<template>
    <section class="w-full">
      <form @submit.prevent="submitData()" class="w-full h-full flex flex-col justify-center items-center">
        <div
          class="w-full px-2 sm:px-0  flex flex-col justify-center items-center mx-auto"
        >
          <div class="space-y-6 prose max-w-none w-full">
            <h3>{{ currentQuestion.text }}</h3>
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
                class="text-primary focus:ring-2 focus:ring-primary w-4 h-4 accent-gray-500/50 checked:text-white checked:bg-white checked:ring-1"
              />
              <label
                :for="`reason-${reason.id}`"
                class="text-lg"
                @click="toggleCheckbox(reason)"
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
  import { ref, computed } from "vue";
  import { useRouter } from "vue-router";
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
  
  export default {
    name: "Step17",
    setup() {
      const routes = useRouter();
      const questions = ref([
        {
          id: 1,
          text: "When considering treatment options, which of the following are important to you?",
          reasons: [
            {
              id: 1,
              text: "I want to minimise the risk of common side effects, e.g., nausea",
              selected: ref(false),
            },
            {
              id: 2,
              text: "I want to maximise my results",
              selected: ref(false),
            },
            {
              id: 3,
              text: "I want an easy and convenient option",
              selected: ref(false),
            },
            {
              id: 4,
              text: "I want something that helps me stay consistent",
              selected: ref(false),
            },
            { id: 5, text: "None of the above", selected: ref(false) },
          ],
        },
      ]);
  
      const currentQuestionIndex = ref(0);
  
      const toggleCheckbox = (reason) => {
        reason.selected = !reason.selected;
      };
  
      const continueToNextStep = () => {
        routes.push({ name: "agree" });
        if (currentQuestionIndex.value < questions.value.length - 1) {
          currentQuestionIndex.value++;
        }
      };
  
      const anyReasonSelected = computed(() => {
        return questions.value[currentQuestionIndex.value].reasons.some(
          (reason) => reason.selected
        );
      });

      const submitData = function () {
        compoentToBeRender(19);
        
        
      };
  
      return {
        currentQuestion: questions.value[currentQuestionIndex.value],
        continueToNextStep,
        toggleCheckbox,
        anyReasonSelected,
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