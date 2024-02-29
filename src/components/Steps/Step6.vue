<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <form
        @submit.prevent="submitData()"
        class="w-full px-2 flex flex-col justify-center items-center mx-auto"
        :class="{ 'bg-red-100': showError, 'bg-blue-50': pregnacnyOrHaveChild }"
      >
        <div class="space-y-6 prose max-w-none w-full">
          <label>Are you pregnant, breastfeeding, or trying to conceive?</label>

          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Please Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not applicable">Not Applicable</option>
            
          </select>
        </div>
        <div class="w-full h-3"></div>
        <globalForm />
      </form>
    </div>
  </section>
</template>
  
  <script>
import { ref } from "vue";

import { compoentToBeRender } from "../../scripts/functional_quiz/renderCompos";
import { usePregnantWomenReport } from "../../store/step6";
import { storeToRefs } from "pinia";
import { toggleRecommned } from "../../scripts/functional_quiz/recommendation";

export default {
  name: "Step6",

  setup() {
    const { pregnacnyOrHaveChild, toggleSelectStates, showError } = storeToRefs(
      usePregnantWomenReport()
    );
    const store = usePregnantWomenReport();

    const submitData = function () {
      if (pregnacnyOrHaveChild.value === "yes") {
        toggleRecommned();
        return;
      }

      if (pregnacnyOrHaveChild.value) {
        compoentToBeRender(8);
      } else {
        showError.value = true;
      }
    };

    return {
      toggleSelectStates,

      pregnacnyOrHaveChild,
      store,
      showError,
      toggleRecommned,
      submitData,
    };
  },
};
</script>
  
  <style>
.checkmark {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #f76d57; /* Orange border color */
}

.checkmark.checked {
  background-color: #f76d57; /* Orange background color when checked */
}

.radio-button {
  width: 100%;
  text-align: center;
}
</style>