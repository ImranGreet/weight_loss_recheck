<template>
  <section class="flex flex-col justify-center items-center w-full h-full max-w-3xl mx-auto ">
    <Registration/>
  </section>
</template>

<script>
import Registration from '../../../components/Admin/Auth/Registration.vue';


export default {
    name:"AdminReg",
    components:{
        Registration
    }

}
</script>

<style>

</style>