import { defineStore } from "pinia";
import { ref } from "vue";

export const usePatientSufferingConditions = defineStore("sufferingConditions", () => {
  const currentQuestionIndex = ref(0);
  const selectedReasons = ref([]);
  const otherSelection = ref(false);
  let errorSign = ref(false);
  let othersInfo = ref("");

  const questions = ref([
    {
      id: 1,
      text: "Do you suffer from any of the following?",
      reasons: [
        {
          id: 1,
          text: "Liver, kidney, or heart failure",
          selected: ref(false),
        },
        {
          id: 2,
          text: "Multiple endocrine neoplasia type 2",
          selected: ref(false),
        },
        {
          id: 3,
          text: "history of cancer",
          selected: ref(false),
        },
        { id: 4, text: "Type 1 diabetes or diabetic retinopathy", selected: ref(false) },
        {
          id: 5,
          text: "Personal or family history of medullary thyroid cancer",
          selected: ref(false),
        },
        {
          id: 6,
          text: "A current eating disorder or a history of an eating disorder?(e.g., anorexia, bulimia, binge eating disorder)",
          selected: ref(false),
        },
        { id: 7, text: "Gallstones", selected: ref(false) },
        { id: 8, text: "History of Inflammatory bowel disease or gastroparesis", selected: ref(false) },
        { id: 9, text: "none", selected: ref(false) },
        
        

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