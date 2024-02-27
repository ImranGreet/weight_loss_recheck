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
          text: "What have you tried in the past to lose weight?",
          reasons: [
            {
              id: 1,
              text: "Exercise or being more active",
              selected: ref(false),
            },
            { id: 2, text: "Dieting", selected: ref(false) },
            { id: 3, text: "Calorie counting", selected: ref(false) },
            { id: 4, text: "Weight loss programs", selected: ref(false) },
            { id: 5, text: "weight loss medications", selected: ref(false) },
            { id: 6, text: "Meal replacements and shakes", selected: ref(false) },
            { id: 7, text: "Other", selected: ref(false) },
            {
              id: 8,
              text: "I haven't tried to lose weight",
              selected: ref(false),
            },
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