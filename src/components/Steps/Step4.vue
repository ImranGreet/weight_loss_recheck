<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form
        @submit.prevent="submitData()"
          class="w-full p-2 sm:px-0  flex flex-col justify-center items-center mx-auto"
          :class="{'bg-red-100':showError}"
        >
          <div class="space-y-6 prose max-w-none w-full">
            <h3>{{ question }}</h3>
            <div class="flex flex-col items-start cursor-pointer p-4">
              <label for="weight" class="text-lg sr-only"
                >What is your target weight?</label
              >
              <input
                type="number"
                class="w-3/5 p-3 rounded-lg bg-inherit border focus:outline-none placeholder:text-blue-700 placeholder:font-bold"
                placeholder="Kg"
                v-model="applicantTarget"
                @input="validateGoalWeight"
              />
              <p v-if="goalWeightError && applicantTarget>0" class="text-red-500">
                {{ goalWeightError }}
              </p>
            </div>
  
           
          </div>
          <globalForm/>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import { useApplicantWeightTarget } from '../../store/step4';
import { storeToRefs } from 'pinia';

  
  export default {
    name: "Step4",
    setup() {
      
  const {applicantTarget,showError} = storeToRefs(useApplicantWeightTarget());

      let question = "What is your goal weight?";
     
      let goalWeightError = ref("");
      let switchToStone = ref(false);
      let hasErrors = ref(false);
  
      // Initial validation on component mount
      const mounted = ref(false);
      onMounted(() => {
        mounted.value = true;
        validateGoalWeight();
      });
  
      // Modify validateGoalWeight to update hasErrors and goalWeightError immediately
      let validateGoalWeight = function () {
        let parsedGoalWeight = parseFloat(applicantTarget.value);
        if (
          isNaN(parsedGoalWeight) ||
          parsedGoalWeight < 0 ||
          parsedGoalWeight > 444
        ) {
          goalWeightError.value =
            "This doesn't look right, enter your goal weight in kg.";
        } else {
          goalWeightError.value = "";
        }
  
        hasErrors.value = Boolean(goalWeightError.value);
  
        // If component is mounted, trigger reactivity
        if (mounted.value) {
          goalWeightError.value = goalWeightError.value;
          hasErrors.value = hasErrors.value;
        }
        
      };
  
      let isAllowedToAdmin = function () {
        validateGoalWeight();
  
        if (!hasErrors.value) {
          return true;
        }
  
        return false;
      };
  
     

      const submitData = function () {
        if(applicantTarget.value !==0){
          if(isAllowedToAdmin()){
          compoentToBeRender('Step5');
        }
        }else if(applicantTarget.value ===0){
          showError.value ===true
        }
       
       
        
        
      
      };
  
      return {
        question,
        showError,
        goalWeightError,
        switchToStone,
        hasErrors,
        validateGoalWeight,
        submitData,
        applicantTarget
      };
    },
  };
  </script>
  
  <style>
  .form-checkbox:checked {
    color: #60a5fa; /* Customize the color of the selected checkbox */
  }
  .focus\:ring-primary-dark:focus {
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5); /* Customize the focus ring color */
  }
  </style>