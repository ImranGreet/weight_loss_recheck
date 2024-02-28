import { defineStore } from "pinia";
import { ref } from "vue";


export const useChallengesForLosingWeight = defineStore("losingChallenges",()=>{
  const selectedReasons = ref([]);
  const otherSelection = ref(false);
  let errorSign = ref(false);
  let othersInfo = ref("");

    const questions = ref([
        {
          id: 1,
          text: "What are the main challenges you face when trying to lose weight",
          reasons: [
            {
              id: 1,
              text: "I lose motivation",
              selected: ref(false),
            },
            { id: 2, text: "I find it difficult to be consistent", selected: ref(false) },
            { id: 3, text: "I do not have enough time", selected: ref(false) },
            { id: 4, text: "I lose weight then put it back on", selected: ref(false) },
            { id: 5, text: "other", selected: ref(false) },
           
          ],
        },
        
      ]);
      const toggleCheckbox = (reason) => {
        reason.selected = !reason.selected;
        if (!selectedReasons.value.includes(reason.text)) {
          selectedReasons.value.push(reason.text);
        } else if (selectedReasons.value.includes(reason.text)) {
          selectedReasons.value = selectedReasons.value.filter(
            (item) => item !== reason.text,
          );
        }
        if (selectedReasons.value.includes("other")) {
          otherSelection.value = true;
        } else {
          otherSelection.value = false;
        }
      };

      return {
        questions,
        selectedReasons,
        otherSelection,
        errorSign,
        othersInfo,
        toggleCheckbox
      }
});