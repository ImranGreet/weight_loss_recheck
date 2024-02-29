<template>
  <section class="w-full flex-col justify-center items-center min-h-screen divide-y-8 divide-sky-600">
    <Greeting />
    <Requirments />
    <Step1 />
    <Step2 />
    <Step4 />
    <Step8 />
    <Step9 />
    <Step12 />
    <Step6 />
    <Step13 />
    <Step14 />
    <Step15 />
    <Step18 />
    <WeightBMI/>
    <AdmissionForm/>
    <SubmitID/>
  </section>
</template>

<script>
import Greeting from "../components/Steps/Greeting.vue";
import Requirments from "../components/Steps/Requirments.vue";
import Step1 from "../components/Steps/Step1.vue";
import Step2 from "../components/Steps/Step2.vue";
import Step4 from "../components/Steps/Step4.vue";
import Step6 from "../components/Steps/Step6.vue";
import Step8 from "../components/Steps/Step8.vue";
import Step9 from "../components/Steps/Step9.vue";
import Step12 from "../components/Steps/Step12.vue";
import Step13 from "../components/Steps/Step13.vue";
import Step14 from "../components/Steps/Step14.vue";
import Step15 from "../components/Steps/Step15.vue";
import Step18 from "../components/Steps/Step18.vue";
import Step21 from "../components/Steps/Step21.vue";
import WeightBMI from "../components/Steps/WeightBMI.vue";
import AdmissionForm from '../components/Steps/AdmissionForm.vue';
import SubmitID from "../components/Steps/SubmitID.vue";


/*scripts*/
import {
  rendredCompo,
  compoentToBeRender,
} from "../scripts/functional_quiz/renderCompos";


export default {
  name: "QuizAndAnswer",
  components: {
    Greeting,
    Requirments,
    Step1,
    Step2,
    Step4,
    Step6,
    Step8,
    Step9,
    Step12,
    Step13,
    Step14,
    Step15,
    Step18,
    Step21,
    WeightBMI,
    AdmissionForm,
    SubmitID
  },
  setup() {
    const componentsToRender = [
      "Greeting",
      "Requirments",
      "Step1",
      "Step2",
      "Step4",
      "Step6",
      "Step8",
      "Step9",
      "Step12",
      "Step13",
      "Step14",
      "Step15",

      "Step18",

      "Step21",
    ];

    return {
      componentsToRender,
      rendredCompo,
      compoentToBeRender,
    };
  },
};
</script>

<style>
</style>