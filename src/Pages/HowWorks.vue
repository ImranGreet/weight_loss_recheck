<template>
    <section class="w-full flex flex-col justify-between space-y-24">
      <div>
        <how />
        <Formula />
      </div>
      <Procedure />
      <Expectations />
      <ResultSpeak />
  
      <!-- <BeforeAfter /> -->
  
      <Paralax class="rounded-t-[72px]">
        <div class="w-full flex flex-col justify-center items-center h-96">
          <div class="w-full lg:w-2/6 max-auto">
            <div class="prose max-w-none text-center text-white">
              <h1>The last weight loss programme you will ever need</h1>
              <p class="text-sm">
                Take the first step towards weight loss that lasts.
              </p>
              <div class="w-full h-5"></div>
              <router-link 
              :to="{name:'quiz'}"
              class="bg-[#593560] text-white px-5 xl:px-10 mt-2 py-3 mb-5 sm:mb-0 rounded-full border border-white w-full sm:w-auto no-underline"
            >
              Am I Eligible
            </router-link>
            </div>
          </div>
        </div>
      </Paralax>
    </section>
  </template>
  
  <script>
  import ExpectParent from "../components/HowItWorks/ExpectParent.vue";
  import Expectations from "../components/HowItWorks/Expectations.vue";
  import Formula from "../components/HowItWorks/Formula.vue";
  import How from "../components/HowItWorks/How.vue";
  import Procedure from "../components/HowItWorks/Procedure.vue";
  import ResultSpeak from "../components/HowItWorks/ResultSpeak.vue";
  import Paralax from "../components/utility/Paralax.vue";
  import BeforeAfter from "../components/Slider/BeforeAfter.vue";
  
  export default {
    name: "How Works",
    components: {
      How,
      Formula,
      Procedure,
      Expectations,
      ExpectParent,
      ResultSpeak,
      Paralax,
      BeforeAfter,
    },
  };
  </script>
  
  <style>
  </style>