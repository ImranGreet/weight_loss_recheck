<template>
  <div
    class="flex flex-col justify-center items-center py-[9px] md:py-[10px] lg:py-[12px] xl:py-[17px]"
    :class="{
      'bg-inherit': mobileView,
      'bg-gray-200 shadow-md  w-[30%] xl:w-[15%]': !sidebarView && !mobileView,
      'bg-gray-200 shadow-md w-[10%] xl:w-[5%]': sidebarView && !mobileView,
    }">
    <router-link
      :to="{ name: 'admin' }"
      class="w-full flex justify-center items-center">
      
      <div
        class="text-center"
        :class="{ hidden: mobileView || sidebarView }">
        <h1 class="tracking-wide font-semibold lg:text-base">+evony</h1>
      </div>
    </router-link>
    <button class="inline-block md:hidden">
      <!-- <XMarkIcon class="w-5 h-5 absolute top-2 right-2" /> -->
    </button>
  </div>
</template>

<script>
import {
  mobileView,
  sidebarView,
} from '../../../scripts/Admin/leftsidebar/layoutcontroller';

import { seetingsView } from '../../../scripts/Admin/topbar/topbarcontroller';

export default {
  name: 'Logo',
  components: {},
  setup() {
    return {
      sidebarView,
      seetingsView,
      mobileView,
    };
  },
};
</script>

<style></style>
