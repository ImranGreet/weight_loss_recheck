<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()" class="w-full px-2 sm:px-0  mx-auto space-y-4">
          <div class="prose max-w-none">
            <h3>Are you from any of the following ethnic groups</h3>
            <ul class="list-none">
              <li><small> Asian </small></li>
              <li><small> Black African </small></li>
  
              <li><small> African-Caribbean or Middle Eastern </small></li>
              <li>
                <label for="cars" class="sr-only">Choose a option</label>
                <select
                  name="cars"
                  id="cars"
                  class="w-24 p-2 rounded-lg bg-gray-300/50 text-gray-900"
                  v-model="outOfDefault"
                  @change="store.selectRegion(outOfDefault)"
                >
                 <option value="select any of them" disabled  selected>Select Any Of Them</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </li>
            </ul>
            
          </div>
          <div class="space-y-2 prose">
            <h3>What is your biological sex?</h3>
            <div class="px-3 space-y-6">

              <div class="flex flex-row-reverse justify-end items-center w-full ">
                <label for="yes" class="ml-3">Male</label>
                <input
                @change="store.toggleSex('male')"
                  type="radio"
                  name="goalWeight"
                  id="yes"
                  class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                  v-model="sex"
                  value="male"
                />
              </div>

              <div class="flex flex-row-reverse justify-end items-center w-full "
              >
                <label for="yes" class="ml-3">Female</label>
                <input
                @change="store.toggleSex('female')"
                  type="radio"
                  name="goalWeight"
                  id="yes"
                  class="px-2 py-3 w-6 h-6 accent-gray-500/20"
                  v-model="sex"
                  value="female"
                />
              </div>

             
             
            </div>
          </div>
          <globalForm/>
        </form>
      </div>
    </section>
  </template>
  
  <script> 
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import {useApplicantSexAndRegion} from "../../store/sexRegion"
import { storeToRefs } from 'pinia';
  
  export default {
    name: "Step5",
    setup() {
      const {sex,outOfDefault,toggleSex,selectRegion} = storeToRefs(useApplicantSexAndRegion());
      ;
     
      const store = useApplicantSexAndRegion();

      

      const submitData = function () {
        
        compoentToBeRender(7);
      
      };
  
      return {
        sex,
        outOfDefault,
        selectRegion,
        toggleSex,
        submitData,
        store
      };
    },
  };
  </script>
