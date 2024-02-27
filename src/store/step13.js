import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicantSuffering = defineStore("sufferingStates", () => {
  const currentQuestionIndex = ref(0);
  const selectedReasons = ref([]);
  const otherSelection = ref(false);
  let errorSign = ref(false);
  let othersInfo = ref("");

  const questions = ref([
    {
      id: 1,
      text: "Have you been diagnosed with any of these medical conditions?",
      reasons: [
        {
          id: 1,
          text: " Type 2 diabetes that is treated injectable medication or insulin",
          selected: ref(false),
        },
        {
          id: 2,
          text: "High blood pressure",
          selected: ref(false),
        },
        {
          id: 3,
          text: "Erectile dysfunction",
          selected: ref(false),
        },
        { id: 4, text: "Sleep apnoea", selected: ref(false) },
        {
          id: 5,
          text: "Asthma",
          selected: ref(false),
        },
        {
          id: 6,
          text: "Gallstones",
          selected: ref(false),
        },
        {
          id: 7,
          text: "Osteoarthritis",
          selected: ref(false),
        },
        {
          id: 8,
          text: "Chronic back pain",
          selected: ref(false),
        },
        {
          id: 9,
          text: "Depression",
          selected: ref(false),
        },
        {
          id: 10,
          text: "PCOS",
          selected: ref(false),
        },
        {
          id: 11,
          text: "Fatty liver disease",
          selected: ref(false),
        },
        { id: 12, text: "Chronic malabsorption syndrome", selected: ref(false) },
        { id: 13, text: "none", selected: ref(false) },
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