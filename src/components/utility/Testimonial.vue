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
   <div>
    
   </div>
      <transition name="slide-fade" mode="out-in">
        
        <div
          class="grid grid-cols-1  gap-8 w-full"
          v-if="showSlide"
        >
          <div
            class="relative mx-auto mt-8 rounded-lg shadow max-w-full p-10 bg-primary text-gray-700 leading-snug flex flex-col justify-between"
          >
            <div class="">
              <svg
                class="w-8 opacity-25 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 640 640"
                fill="currentColor"
              >
                <path
                  d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z"
                />
              </svg>
            </div>
            <div class="mt-2">
              {{ slidesDetails.reviewDetails}} 
            </div>
            <div>
              <div class="mx-auto w-full border border-gray-300 my-8"></div>
              <div class="flex items-center">
                <div>
                  <img
                    class="w-12 h-12 rounded-full border-2 border-indigo-400"
                    :src="slidesDetails.reviewrProfile"
                  />
                </div>
                <div class="ml-4">
                  <div class="font-bold">{{ slidesDetails.reviewBy }}</div>
                  <div class="text-sm text-gray-600 mt-1">
                    CTO,
                    <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Boosting Metabolism</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Repeat the structure for other slides as needed -->
        </div>
      </transition>

      <!-- Navigation Buttons -->
      <div class="w-full h-full absolute bg-gray-600/10 inset-x-0 inset-y-0 rounded-md">
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
import { computed, ref, watch, nextTick } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

export default {
  name: "SlidingPhoto",
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  setup() {
    const slides = ref([
      {
        id: 1,
        title: "Installation",
        reviewer:"Imran",
        description:
          "Laravel utilizes Composer to manage its dependencies. First, download a copy of the composer.phar. Once you have the PHAR archive, you can either keep it in your local project directory or move to usr/local/bin to use it globally on your system. On Windows, you can use the Composer Windows installer.",
        image:
          "https://images.unsplash.com/photo-1700514015106-4d8480938dcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "Via Composer Create-Project",
        reviewer:"Imran",
        description:
          "Once installed, the simple laravel new command will create a fresh Laravel installation in the directory you specify. For instance, laravel new blog would create a directory named blog containing a fresh Laravel installation with all dependencies installed. This method of installation is much faster than installing via Composer.",
        image:
          "https://plus.unsplash.com/premium_photo-1681412205228-aaec4570dc65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        title: "Via Download",
        reviewer:"Imran",
        description:
          "Once Composer is installed, download the 4.2 version of the Laravel framework and extract its contents into a directory on your server. Next, in the root of your Laravel application, run the php composer.phar install (or composer install) command to install all of the framework's dependencies. This process requires Git to be installed on the server to successfully complete the installation.",
        image:
          "https://images.unsplash.com/photo-1674622720208-2a67da6ff4e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
     
    ]);

    const currentSlideElement = ref(0);
    const showSlide = ref(true);

    const nextSlideImage = () => {
      currentSlideElement.value =
        (currentSlideElement.value + 1) % slides.value.length;
    };

    const previusSlideImage = () => {
      currentSlideElement.value =
        (currentSlideElement.value - 1 + slides.value.length) %
        slides.value.length;
    };

    setInterval(nextSlideImage, 5000);

    const slidesDetails = computed(() => {
      const { image, description, title, reviewer } = slides.value[
        currentSlideElement.value
      ];
      return {
        reviewBy: reviewer,
        reviewTitle: title,
        reviewDetails: description,
        reviewrProfile: image,
      };
    });

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
      slidesDetails,
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
/* Enter and leave animations can use different durations and timing functions. */
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
