<template>
  <section class="w-full flex flex-col justify-between items-center space-y-14">
    <intro />
    <Trust />
    <WayOfLossWeight />

    <div class="w-full h-10"></div>

    <Curve />
    <div class="w-full h-10"></div>
    <testimonial/>
    <div class="w-full h-10"></div>
    <div class="container xl:max-w-7xl mx-auto px-5 xl:px-0">
      <div>
        <h2 class="text-start text-xl md:text-5xl font-semibold leading-snug">Our Blog</h2>
        <div class="my-4  w-12 h-2 border-4 border-primary"></div>
        <div class="text-start text-gray-700 font-light">Here are what some of our amazing customers are
          saying ...</div>
      </div>
      <div
        class="w-full flex flex-col md:flex-row justify-between items-center gap-5"
      >
        <div
        v-for="blog,index in homePageBlogs" :key="index"
          class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <router-link :to="{name:'read-blog'}" >
            <img
              class="rounded-t-lg"
              src="../assets/homepage/Untitled-1.png"
              alt=""
            />
          </router-link>
          <div class="p-5">
            <router-link :to="{name:'read-blog'}" >
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ blog.blog_title }}
              </h5>
            </router-link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ blog.blog_desc }}
            </p>
            <router-link :to="{name:'read-blog'}"
              
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#A25756] rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </router-link>
          </div>
        </div>
        
        
      </div>
    </div>
    <div class="w-full h-10"></div>
  </section>
</template>
  
  <script>
import Curve from "../components/Curve.vue";
import WayOfLossWeight from "../components/Homepage/focusText.vue";
import Intro from "../components/Intro.vue";
import Result from "../components/Result.vue";

import Step from "../components/Step.vue";
import Trust from "../components/Trust.vue";
import Video from "../components/Video.vue";

import ExpertGroup from "../components/Homepage/ExpertGroup.vue";
import Testimonial from '../components/utility/Testimonial.vue';
import useHomePageResources from '../store/HomePage/homePageOperation';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

export default {
  name: "Home",
  components: {
    Intro,
    Trust,
    Video,
    Step,
    Result,
    Curve,
    Testimonial,
    WayOfLossWeight,
    ExpertGroup,
  },
  setup(){
    const homepageStore = useHomePageResources();
    const {homePageBlogs} = storeToRefs(homepageStore);
    onMounted(async ()=>{
     await homepageStore.retrieveHomePageBlogsFromDB();
    })
    return {
      homePageBlogs,
      
    }
  }
};
</script>
  
  <style>
</style>