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
          text: "Type 2 diabetes",
          selected: ref(false),
        },
        {
          id: 2,
          text: "High cholesterol",
          selected: ref(false),
        },
        {
          id: 3,
          text: "Sleep apnoea",
          selected: ref(false),
        },
        { id: 4, text: "Gallbladder disease", selected: ref(false) },
        {
          id: 5,
          text: "Chronic back pain",
          selected: ref(false),
        },
        {
          id: 6,
          text: "PCOS",
          selected: ref(false),
        },
        {
          id: 7,
          text: "Chronic malabsorption syndrome",
          selected: ref(false),
        },
        {
          id: 8,
          text: "High blood pressure",
          selected: ref(false),
        },
        {
          id: 9,
          text: "Erectile dysfunction",
          selected: ref(false),
        },
        {
          id: 10,
          text: "Asthma",
          selected: ref(false),
        },
        {
          id: 11,
          text: "Osteoarthritis",
          selected: ref(false),
        },
        { id: 12, text: "Depression", selected: ref(false) },
        { id: 13, text: "Fatty liver disease", selected: ref(false) },
        { id: 14, text: "None", selected: ref(false) },
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