import { defineStore } from "pinia";
import { ref } from "vue";

export const useChallengesForLosingWeight = defineStore("losingStratagies",()=>{
    const questions = ref([
        {
          id: 1,
          text: "What are the main  challenges you face when trying to lose weight",
          reasons: [
            { id: 1, text: "I lose motivation", selected: ref(false) },
            {
              id: 2,
              text: "I find it difficult to be consistent",
              selected: ref(false),
            },
            { id: 3, text: "I do not have enough time", selected: ref(false) },
            {
              id: 4,
              text: "I lose weight then put it back on",
              selected: ref(false),
            },
            { id: 5, text: "Other", selected: ref(false) },
          ],
        },
      ]);
      const toggleCheckbox = (reason) => {
        reason.selected = !reason.selected;
      };

      return {
        questions,
        toggleCheckbox
      }
});