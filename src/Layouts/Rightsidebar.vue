<template>
  <Transition name="fade">
    <div class="py-3">
      <Logo
        class="fixed left-0 top-0 hidden sm:block"
        :class="{
          'w-[30%] xl:w-[15%]': !mobileView && !sidebarView,
          'w-[10%] xl:w-[5%]': !mobileView && sidebarView,
        }"
      />

      <div
        class="mt-[20px] md:mt-[45px] lg:mt-[48px] xl:mt-[45.5px] fixed float-right h-screen border-r-2 border-red-700/50"
        :class="{
          'w-[30%] xl:w-[15%]': !sidebarView,
          'w-[10%] xl:w-[5%]': sidebarView,
        }"
      >
        <Transition name="slide-fade">
          <router-link
            v-if="showUserProfile"
            :class="{ inline: showUserProfile, hidden: !showUserProfile }"
            to="#"
            class="w-full px-3 py-2 space-y-4"
          >
            <Userprofile />
          </router-link>
        </Transition>

        <div
          class="space-y-4 px-3 py-2"
          :class="{ inline: !showUserProfile, hidden: showUserProfile }"
        ></div>

        <div
          class="w-full overflow-x-hidden custom-overflowscroll h-[80%] px-0 md:px-2 lg:px-3 xl:px-4 relative"
        >
        <router-link
        :to="{name:'profile'}"
        class="w-full h-5 flex items-center mb-4"
        :class="{
          'justify-center': !sidebarView,
          'justify-center': sidebarView,
        }"
      >
        <font-awesome-icon
          icon="fa-solid fa-user"
          class="w-5 h-5 text-blue-600 tracking-wider text-3xl font-semibold"
        />
        <span
          :class="{
            'inline-block text-xl ml-5': !sidebarView,
            hidden: sidebarView,
          }"
          >Profile</span
        >
      </router-link>
      <span></span>


          <router-link
            :to="{name:'member'}"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }"
          >
            <font-awesome-icon
              icon="fa-solid fa-users"
              class="w-5 h-5 text-blue-600 tracking-wider text-3xl font-semibold"
            />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Member</span
            >
          </router-link>
          <span></span>

          <router-link
            :to="{name:`blogs`}"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }"
          >
            <font-awesome-icon
              icon="fa-regular fa-newspaper"
              class="w-5 h-5 text-blue-600 tracking-wider text-3xl font-semibold"
            />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Blogs</span
            >
          </router-link>

          <span></span>

          <router-link
            :to="{name:`sliderhouse`}"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }"
          >
            <font-awesome-icon
              icon="fa-solid fa-stapler"
              class="w-5 h-5 text-blue-600 tracking-wider text-3xl font-semibold"
            />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Sliders</span
            >
          </router-link>
          <span></span>

          <router-link
            :to="{name:`home-image`}"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }"
          >
            <font-awesome-icon
              icon="fa-solid fa-image"
              class="w-5 h-5 text-blue-600 tracking-wider text-3xl font-semibold"
            />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Home Image</span
            >
          </router-link>
          <span></span>

          <router-link
            :to="{name:'subscription'}"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }"
          >
            <font-awesome-icon
            icon="fa-brands fa-servicestack"
              class="w-5 h-5 text-blue-600 tracking-wider text-3xl font-semibold"
            />
          
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Our Subscription</span
            >
          </router-link>
          <span></span>
          <router-link
            :to="{name:'auth-admin'}"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }"
          >
            <font-awesome-icon
            icon="fa-brands fa-servicestack"
              class="w-5 h-5 text-blue-600 tracking-wider text-3xl font-semibold"
            />
          
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Authentication</span
            >
          </router-link>
          <span></span>
          
        </div>
      </div>
    </div>
  </Transition>
</template>
  
  <script>
import Logo from "../components/Admin/Topbar/Logo.vue";
import Userprofile from "../components/Admin/Profile/Userprofile.vue";
import Menu from "../components/Admin/Righsidebar/Menu.vue";

import {
  mobileView,
  sidebarView,
  TransitionToggler,
} from "../scripts/Admin/leftsidebar/layoutcontroller";

import useLeftSideBarRouterLink from "../scripts/Admin/rightsidebar/menuitems";
import { showUserProfile } from "../scripts/Admin/utility/profile";

import { ref } from "vue";

export default {
  name: "Rightsidebar",
  components: {
    Logo,
    Menu,
    Userprofile,
  },
  setup() {
    return {
      sidebarView,
      mobileView,
      TransitionToggler,
      useLeftSideBarRouterLink,
      showUserProfile,
    };
  },
};
</script>
  
  <style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease; /* Adjust duration and easing function */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
  