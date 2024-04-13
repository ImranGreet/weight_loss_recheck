<template>
 <section class="max-w-7xl mx-auto mb-24 xl:my-0 ">
 

  <div  :class="[$route.name===`client-subscription` ? 'hidden':'w-full  flex flex-col justify-center items-center']">
    <div class="my-10">
      <h3 class="text-3xl">You Have subscribed for </h3>
    </div>
    <Subscription :subscriptionPackage="'One Month'" :subscriptionPrice=129 />
    <div class="w-full h-36"></div>
  </div>


  
  <div  :class="[$route.name===`client-subscription` ? 'w-full  flex flex-col justify-center items-center':'hidden']">
    
    <div class="my-10">
      <h3 class="text-3xl">Our Packages Or Offer </h3>
    </div>
   
  </div>

  <section
    class="w-full h-full md:flex flex-row grid grid-cols-2 md:grid-cols-none justify-between items-start gap-2 md:gap-6 flex-wrap lg:px-10 "
  >
    <Subscription 
    v-for="subscriptionbox,index in subscriptionsDuration" :key="index"
     :subscriptionPackage="subscriptionbox.packageName"
     :subscriptionPrice="subscriptionbox.price"
    />
    
  </section>
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
        price: 199,
      },
      {
        packageName: "Three Months",
        price: 239,
      },
      {
        packageName: "Four  Months",
        price: 269,
      },
      {
        packageName: "Five Months",
        price: 299,
      },
      {
        packageName: "Six Months And More",
        price: 299,
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