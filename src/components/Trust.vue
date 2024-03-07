<template>
  <section class="container xl:max-w-7xl mx-auto px-5 xl:px-0">
    <div class="w-full space-y-8">
      <div class="prose max-w-none xl:max-w-prose">
        <h1 class="text-4xl">
          <span class="text-[#3F7D6E]">Transform your body</span>,
          <span class="text-[#3F7D6E]">transform your life</span>
          <span> With our simple approach</span>
        </h1>
      </div>
      <div class="w-full p-5">
        <div
          class="w-full grid xl:flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3    justify-between gap-6"
        >
          <!-- card -->
          <div
            class="w-full md:max-w-xs flex flex-col justify-between items-start gap-y-4"
          >
            <div
              class="w-full flex justify-center items-center overflow-hidden rounded-2xl h-72 relative bg-[#B2CBC5]"
            >
              <img
                src="../assets/homepage/devices.png"
                alt=""
                class="w-11/12 self-end mx-auto object-contain aspect-video"
              />
              <div class="absolute top-2 left-2 px-3">
                <h2 class="text-2xl font-extrabold">
                  <span class="flex flex-col">
                    <span>Innovative</span>
                    <span class="text-[#3F7D6E]">Treatment</span>
                  </span>
                </h2>
              </div>
            </div>

            <div>
              <p class="text-xl leading-snug font-semibold">
                Clinically proven once weekly injections that suppresses hunger
                and cravings. It has been shown to achieve significant weight
                loss without the need for calorie counting or extreme diets.
              </p>
            </div>
          </div>
          <div
            class="w-full md:max-w-xs flex flex-col justify-between items-start gap-y-4"
          >
            <div
              class="w-full flex justify-center items-center overflow-hidden rounded-2xl relative bg-[#B2CBC5] h-72"
            >
              <img
                src="../assets/homepage/head 1.png"
                alt=""
                class="w-11/12 self-center mx-auto object-contain aspect-video"
              />
              <div class="w-full flex -gap-x-4"></div>
              <div class="absolute top-2 left-2 px-3">
                <h2 class="text-xl font-extrabold">
                  <span class="flex flex-col">
                    <span>Access</span>
                    <span class="text-[#3F7D6E]">To Expert</span>
                  </span>
                </h2>
              </div>
            </div>

            <div>
              <p class="text-xl leading-snug font-semibold">
                Stay on track with tailored support from our team of experts.
                Our doctors and clinicians are here to help with your
                medication, nutrition, or motivation needs.
              </p>
            </div>
          </div>
          <div
            class="w-full md:max-w-xs flex flex-col justify-between items-start gap-y-4"
          >
            <div
              class="w-full flex justify-center items-center overflow-hidden rounded-2xl h-72 relative bg-[#B2CBC5]"
            >
              <img
                src="../assets/homepage/Layer.png"
                alt=""
                class="w-11/12 self-end mx-auto object-contain aspect-video"
              />
              <div class="absolute top-2 left-2 px-3">
                <h2 class="text-xl font-extrabold">
                  <span class="flex flex-col">
                    <span> Track Progress <span>&#38;</span> </span>
                    <span class="text-[#3F7D6E]">Followup</span>
                  </span>
                </h2>
              </div>
            </div>

            <div>
              <p class="text-xl leading-snug font-semibold">
                We’ll give you the tools you need to reach your goals and track
                your progress along the way. We’ll check in with you to ensure
                your covered during you weight loss journey.
              </p>
            </div>
          </div>
          <!-- emdcard -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";


export default {
  name: "Trust",
  components: { },
  setup() {
    const trustedBy = ref([
      {
        id: 1,
        title: "Innovative treatment",
        who: "devices_variants.jpg",
        description:
          "Clinically proven once weekly injections that suppresses hunger and cravings. It has been shown to achieve significant weight loss without the need for calorie counting or extreme diets.",
      },
      {
        id: 2,
        title: "Access to expert",
        who: "doctor_brown.jpg",
        description:
          "Stay on track with tailored support from our team of experts. Our doctors and clinicians are here to help with your medication, nutrition, or motivation needs.",
      },
      {
        id: 3,
        title: "Track progress and follow up",
        who: "mobile_log.jpg",
        description:
          "Stay on track with tailored support from our team of experts. Our doctors and clinicians are here to help with your medication, nutrition, or motivation needs.",
      },
    ]);
    return {
      trustedBy,
    };
  },
};
</script>

<style>
</style>




