<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <form
        @submit.prevent="submitData()"
        class="w-full p-2 mx-auto"
        :class="{ 'bg-red-100': showError, 'bg-blue-50': selected }"
      >
        <div class="space-y-2 prose max-w-none w-full">
          <h3>
            Are you taking any other medications, including GLP-1s, e.g.
            Ozempic/Saxenda/Wegovy?
          </h3>
          <div class="flex flex-row-reverse justify-end items-center w-full">
            <label for="yes" class="ml-3">Yes</label>
            <input
              @change="store.selectOption(selected)"
              type="radio"
              name="goalWeight"
              id="yes"
              class="px-2 py-3 w-6 h-6 accent-gray-500/20"
              v-model="selected"
              value="Yes"
            />
          </div>
          <div class="flex flex-row-reverse justify-end items-center w-full">
            <label for="yes" class="ml-3">No</label>
            <input
              @change="store.selectOption(selected)"
              type="radio"
              name="goalWeight"
              id="yes"
              class="px-2 py-3 w-6 h-6 accent-gray-500/20"
              v-model="selected"
              value="No"
            />
          </div>
        </div>
        <div class="w-full h-10"></div>
        <div class="prose max-w-none w-full">
          <p>
            If you are presently using a GLP-1, such as Wegovy or Ozempic we're
            here to help. If you believe you need a higher dose pen than the
            usual 0.25mg starting dose it will be necessary to send
            documentation e.g., a copy of the prior prescription/invoice or a
            photo of the medication box displaying your name and the dispensing
            date. In the absence of documentation, you will be prescribed the
            initial starting strength pen.
          </p>
        </div>
<div class="w-full h-10"></div>
        <div class="space-y-2 prose max-w-none w-full">
          <h4>
            Please list your current medications, their strengths, and what you take them for.
          </h4>
          <div class="">
            <textarea
            
             
              placeholder="Type Answer Here"
              class="w-full p-2 border border-gray-400 rounded-md"
              rows="4"
            ></textarea>
            
          </div>
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
import { useGLPMedicationReport } from "../../store/step15";
import { storeToRefs } from "pinia";

export default {
  name: "Step15",
  setup() {
    const { selected, showError, selectOption } = storeToRefs(
      useGLPMedicationReport()
    );
    const store = useGLPMedicationReport();
    const submitData = function () {
      compoentToBeRender('Step16');
    };
    return {
      selected,
      selectOption,
      store,
      showError,
      selectOption,
      submitData,
    };
  },
};
</script>
  
  <style>
</style>