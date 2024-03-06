<template>
  <section class="w-full bg-primary">
    <div class="container xl:max-w-full mx-auto px-5 xl:px-0">
      <div class="w-full flex flex-col items-center sm:flex-row sm:gap-x-20 xl:px-20">
        <div class="w-full ">
          <div class="prose max-w-none">
            <h1
              class="text-xl md:text-2xl lg:text-4xl xl:text-6xl font-[200px] leading-snug xl:leading-[72px]"
            >
              Our <span class="text-secondary">doctors</span> are making weight loss easier to Achieve
            </h1>
            <ul class="list-none prose-ul:pl-0">
              <li v-for="(achieve, index) in achvs" :key="index" class="font-black first:font-semibold ">
                <p class="text-base xl:text-3xl ">
                  <span
                    ><CheckIcon
                      class="inline-block w-6 h-6 text-white font-black text-xl lg:text-2xl mr-3 bg-[#593461] border rounded-full p-1"
                    />{{ achieve.title }}</span
                  >
                </p>
              </li>
            </ul>
            <router-link 
              :to="{name:'quiz'}"
              class="bg-[#593560] text-white px-5 xl:px-10 mt-2 py-3 mb-5 sm:mb-0 rounded-full border border-white w-full sm:w-auto no-underline"
            >
              Am I Eligible
            </router-link>
          </div>
        </div>
        

<div class="grid grid-cols-2  gap-4">
  <div class="grid gap-4">
      <div>
          <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
      </div>
      <div>
          <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
      </div>
      <div>
          <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
      </div>
  </div>
  <div class="grid gap-4">
      <div>
          <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
      </div>
      <div>
          <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
      </div>
      <div>
          <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
      </div>
  </div>
  
</div>

      </div>
    </div>
  </section>
</template>

<script>
import { CheckBadgeIcon, CheckIcon } from "@heroicons/vue/20/solid";



import { ref } from "vue";

export default {
  name: "Intro",
  components: { CheckBadgeIcon, CheckIcon },
  setup() {
    const achvs = ref([
      {
        id: 1,
        title: "New GLP-1 medication proven to achieve lasting results",
      },
      {
        id: 2,
        title: "Doctor-led weight loss coaching and medical support",
      },
      {
        id: 3,
        title:
          "Personalised programmes for every subscriber with tailored support for black and asian individuals",
      },
    ]);
    return {
      achvs,
    };
  },
};
</script>

<style scoped>
.prose :where(ul):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  padding-left: 0px;
}
</style>