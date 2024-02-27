import { defineStore } from "pinia";
import { ref } from "vue";

export const useStruggledForLosingWeight = defineStore("useStruggle",()=>{
    const selectedOption = ref(null);
    const showError = ref(false);

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
          
        },
      ]);

      const toggleOption = (option) => {
       selectedOption.value = option;
       showError.value = false
      };

     

      return {
        questions,
        selectedOption,
        showError,
        toggleOption
      }
});