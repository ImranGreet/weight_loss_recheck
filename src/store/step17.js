import { defineStore } from "pinia";
import { ref } from "vue";

export const useConsederingTreatment = defineStore("consederingTreatment", () => {
  const currentQuestionIndex = ref(0);
  const selectedReasons = ref([]);
  const otherSelection = ref(false);
  let errorSign = ref(false);
  let othersInfo = ref("");

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
    currentQuestionIndex,
    selectedReasons,
    otherSelection,
    errorSign,
    questions,
    othersInfo,
    toggleCheckbox,
  };
});