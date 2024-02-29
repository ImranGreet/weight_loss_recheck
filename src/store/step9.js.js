import { defineStore } from "pinia";
import { ref } from "vue";


export const useStatragiesForLosingWeight = defineStore("losingStratagies",()=>{
  const selectedReasons = ref([]);
  const otherSelection = ref(false);
  let errorSign = ref(false);
  let othersInfo = ref("");

    const questions = ref([
        {
          id: 1,
          text: "What methods or approaches have you previously tried in your attempts to lose weight?",
          reasons: [
            {
              id: 1,
              text: "Exercising",
              selected: ref(false),
            },
            { id: 2, text: "Dieting", selected: ref(false) },
            { id: 3, text: "Calorie counting", selected: ref(false) },
            { id: 4, text: "Weight loss programmes", selected: ref(false) },
            { id: 5, text: "Weight loss medications", selected: ref(false) },
            { id: 6, text: "I haven't tried to lose weight", selected: ref(false) },
           
            { id: 7, text: "Other", selected: ref(false) },
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
        if (selectedReasons.value.includes("Other")) {
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