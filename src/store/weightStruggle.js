import { defineStore } from "pinia";
import { ref } from "vue";

export const useStrugleOfLosingWeight = defineStore("losingStruggle",()=>{
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

     const howMuchTime = ref(null);
     const howMuchTimeSpendsToLose = function(duration){
        howMuchTime.value = duration;
     }

     return {
        howMuchTime,
        questions,
        howMuchTimeSpendsToLose
     }
});