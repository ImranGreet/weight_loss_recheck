<template>
  <section
    class="w-full h-screen  mx-auto flex flex-col justify-center items-center bg-gray-500/25"
  >
    <Login />
  </section>
</template>

<script>
import Login from "../components/Global/Login.vue";

export default {
  name: "LoginToEvony",
  components: {
    Login,
  },
};
</script>

<style>
</style>