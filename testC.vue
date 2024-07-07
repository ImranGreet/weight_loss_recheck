<template>
  <section class="w-full">
    <div class="w-full lg:w-4/6 mx-auto flex flex-col justify-center gap-y-4">
      <h2 class="text-start text-xl md:text-5xl font-semibold leading-snug">
        What our clients say
      </h2>
      <div class="w-12 h-2 bg-red-200"></div>
      <p class="text-gray-700 font-light">
        Here are what some of our amazing customers are saying
      </p>
      <div class="mt-5"></div>
    </div>

    <div
      class="w-full lg:w-4/6 mx-auto border h-48 lg:h-96 border-gray-100 rounded-md relative"
    >
      <!-- Slides Container with Transition -->
      <transition name="slide-fade" mode="out-in">
        <div
          v-if="showSlide"
          class="w-full h-full flex flex-col justify-center items-center rounded-md"
        >
          <img
            :src="slidesPhoto"
            alt=""
            class="w-full h-full object-fill object-center rounded-md square"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              cum nesciunt dolores perspiciatis quis dignissimos odio ad nihil
              aperiam, culpa atque!
            </p>
          </div>
        </div>
      </transition>

      <!-- Navigation Buttons -->
      <div
        class="w-full h-full absolute bg-gray-600/10 inset-x-0 inset-y-0 rounded-md"
      >
        <div class="w-full h-full flex justify-between items-center">
          <button
            @click="previusSlideImage()"
            class="bg-slate-600/80 lg:hover:bg-slate-900/70 text-white w-10 lg:w-12 h-10 lg:h-12 shadow rounded-full flex flex-col justify-center items-center"
          >
            <ChevronLeftIcon class="w-5 lg:w-6 lg:h-6 h-5 text-white" />
          </button>
          <button
            @click="nextSlideImage()"
            class="bg-slate-600/80 lg:hover:bg-slate-900/70 text-white w-10 lg:w-12 h-10 lg:h-12 shadow rounded-full flex flex-col justify-center items-center"
          >
            <ChevronRightIcon class="w-5 lg:w-6 lg:h-6 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
   
   <script>
import { computed, ref, watch, watchEffect, nextTick } from "vue";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

export default {
  name: "SlidingPhoto",
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },

  setup() {
    let slides = ref([
      {
        id: 1,
        title: "Installation",
        description:
          "Laravel utilizes Composer to manage its dependencies. First, download a copy of the composer.phar. Once you have the PHAR archive, you can either keep it in your local project directory or move to usr/local/bin to use it globally on your system. On Windows, you can use the Composer Windows installer.",
        image:
          "https://images.unsplash.com/photo-1700514015106-4d8480938dcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "Via Composer Create-Project",
        description:
          "Once installed, the simple laravel new command will create a fresh Laravel installation in the directory you specify. For instance, laravel new blog would create a directory named blog containing a fresh Laravel installation with all dependencies installed. This method of installation is much faster than installing via Composer.",
        image:
          "https://demo.foodking.dev/storage/23/conversions/slider_three-cover.png",
      },
      {
        id: 3,
        title: "Via Download",
        description:
          "Once Composer is installed, download the 4.2 version of the Laravel framework and extract its contents into a directory on your server. Next, in the root of your Laravel application, run the php composer.phar install (or composer install) command to install all of the framework's dependencies. This process requires Git to be installed on the server to successfully complete the installation.",
        image:
          "https://images.unsplash.com/photo-1674622720208-2a67da6ff4e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ]);
    let currentSlideElement = ref(0);
    let itemIndex = ref(0);

    const nextSlideImage = () => {
      if (currentSlideElement.value < slides.value.length - 1) {
        currentSlideElement.value++;
      } else {
        currentSlideElement.value = 0;
      }
    };

    const previusSlideImage = () => {
      if (currentSlideElement.value > 0) {
        currentSlideElement.value--;
      } else {
        currentSlideElement.value = slides.value.length - 1;
      }
    };

    setInterval(() => {
      nextSlideImage();
    }, 50000);

    const slidesPhoto = computed(
      () => slides.value[currentSlideElement.value].image
    );
    const showSlide = ref(true);

    watch(
      () => currentSlideElement.value,
      () => {
        showSlide.value = false;

        nextTick(() => {
          showSlide.value = true;
        });
      }
    );

    return {
      slidesPhoto,
      slides,
      currentSlideElement,
      nextSlideImage,
      previusSlideImage,
      showSlide,
    };
  },
};
</script>
   
   <style>
/*
     Enter and leave animations can use different
     durations and timing functions.
   */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>