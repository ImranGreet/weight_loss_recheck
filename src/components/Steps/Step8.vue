<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center ">
        <form
        @submit.prevent="submitData()"
          class="w-full px-2 sm:p-5 rounded-lg flex flex-col justify-start items-start mx-auto"
        >
          <div class="space-y-2 prose max-w-none w-full">
            <h3>{{ currentQuestion.text }}</h3>
            <div
              v-for="option in currentQuestion.options"
              :key="option.id"
              class="flex items-center space-x-2 cursor-pointer p-4 rounded-lg"
             
              @click="toggleOption(option)"
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
  import { useRouter } from "vue-router";
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
  
  export default {
    name: "QuizeNine",
    setup() {
      const routes = useRouter();
      const questions = ref([
        {
          id: 1,
          text: "How long have you struggled with your weight?",
          options: [
            { id: 1, text: "Last 12 months" },
            { id: 2, text: "Last 5 years" },
            { id: 3, text: "Last 10 years" },
            { id: 4, text: "Most of my life" },
            {
              id: 5,
              text: "I’ve never struggled with my weight",
            },
          ],
          selectedOption: null,
        },
      ]);
  
      const currentQuestionIndex = ref(0);
  
      const toggleOption = (option) => {
        questions.value[currentQuestionIndex.value].selectedOption = option.id;
        continueToNextStep();
      };
  
      const continueToNextStep = () => {
        const selectedOptionId =
          questions.value[currentQuestionIndex.value].selectedOption;
  
        if (selectedOptionId !== null) {
          routes.push({ name: "quizeTen" });
        } else {
          console.error("Please select an option before continuing.");
        }
      };
  
      onMounted(() => {
        questions.value[currentQuestionIndex.value].selectedOption =
          questions.value[currentQuestionIndex.value].options[0].id;
      });

      const submitData = function () {
        compoentToBeRender(10);
        
      };
  
      return {
        currentQuestion: questions.value[currentQuestionIndex.value],
        toggleOption,
        submitData
      };
    },
  };
  </script>
  
