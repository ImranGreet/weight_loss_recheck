<template>
  <div class="w-full h-36"></div>

  <div class="w-full flex flex-col justify-center items-center max-w-96">
    <Subscription :subscriptionPackage="'One Month'" :subscriptionPrice=250 />
  </div>
  <div class="w-full h-36"></div>
  <section
    class="w-full h-full md:flex flex-row grid grid-cols-2 md:grid-cols-none justify-between items-start md:gap-6 flex-wrap lg:px-10"
  >
    <Subscription 
    v-for="subscriptionbox,index in subscriptionsDuration" :key="index"
     :subscriptionPackage="subscriptionbox.packageName"
     :subscriptionPrice="subscriptionbox.price"
    />
    
  </section>
</template>

<script>
import { ref } from "vue";
import Subscription from "../../components/Card/Subscription.vue";

export default {
  name: "SubscriptionPage",
  components: {
    Subscription,
  },
  setup() {
    const subscriptionsDuration = ref([
      {
        packageName: "One Month",
        price: 129,
      },
      {
        packageName: "Two Months",
        price: 129,
      },
      {
        packageName: "Three Months",
        price: 129,
      },
      {
        packageName: "Four  Months",
        price: 129,
      },
      {
        packageName: "Five Months",
        price: 129,
      },
      {
        packageName: "Six Months And More",
        price: 129,
      },
    ]);
    return {
      subscriptionsDuration,
    };
  },
};
</script>

<style>
</style>