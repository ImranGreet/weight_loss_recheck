<template>
     <section class="w-full">
        <div class="w-full h-full flex flex-col justify-center items-center">
          <form @submit.prevent="submitData()"
            class="w-full px-2 sm:px-0  flex flex-col justify-center items-center mx-auto prose max-w-none "
          >
           <div class="w-full space-y-2  not-prose text-gray-800">
            <div class="w-full flex flex-col lg:flex-row">
              <label for="weight" class="w-full text-start lg:text-end mr-2">Please enter your current weight</label>
             <div class="w-full flex gap-x-2">
              <input type="number" name="" id="" 
              v-model="Applicantweight"
              class="w-full px-4 border border-gray-500 focus:outline-none self-start">
              <small>KGs</small>
              
             </div>
             <div class="w-full"></div>
            </div>
            <div class="w-full flex flex-col lg:flex-row">
              <label for="weight" class="w-full after-content text-start lg:text-end mr-2">and height</label>
              <div class="w-full flex gap-x-2 ">
                <input type="number" name="" id="" 
                v-model="Applicantheight"
                class="w-full px-4  border border-gray-500 focus:outline-none self-start">
                <small>CM</small>
              </div>
              <div class="w-full"></div>
            </div>
            <div class="w-full flex  flex-col lg:flex-row">
              <label for="weight" class="w-full  text-start lg:text-end mr-2"></label>
              <div class="w-full flex gap-x-2 ">
                <p  id="" class="w-full   self-start text-xl text-gray-600/80">BMI <span>:</span>{{BMIresult}}</p>
                <small></small>
              </div>
              <div class="w-full"></div>
            </div>
           
           </div>
          
           <div class="w-full h-10"></div>
           <div class="w-full">
            <h4>Are you from any of the following ethnic groups: Black, Caribbean or African, Asian or Arab?</h4>
            <div>
                <div class="flex flex-row-reverse justify-end items-center w-full ">
                    <label for="yes" class="ml-3">Yes</label>
                    <input
                    @change="store.getApplicantRegion(ApplicantRegion)"
                      type="radio"
                      name="ethnicGroup"
                      id="yes"
                      class="px-2 py-3 w-6 h-6 accent-gray-500"
                     v-model="ApplicantRegion"
                      value="yes"
                    />
                  </div>
                  <div class="flex flex-row-reverse justify-end items-center w-full ">
                    <label for="No" class="ml-3">No</label>
                    <input
                     @change="store.getApplicantRegion(ApplicantRegion)"
                      type="radio"
                      name="ethnicGroup"
                      id="yes"
                      class="px-2 py-3 w-6 h-6 accent-gray-500"
                      v-model="ApplicantRegion"
                      value="no"
                    />
                  </div>
            </div>
           </div>

           <div class="w-full">
            <h4 class="after-content">Please select the option which best represents your BMI</h4>
            <div>
                <div class="flex flex-row-reverse justify-end items-center w-full ">
                    <label for="yes" class="ml-3">BMI is over 30</label>
                    <input
                    @change="store.getApplicantBMIrange(ApplicantBMIRange)"
                     v-model="ApplicantBMIRange"
                      type="radio"
                      name="bmiRange"
                      id="yes"
                      class="px-2 py-3 w-6 h-6 accent-gray-500"
                     
                      value="over 30"
                    />
                  </div>
                  <div class="flex flex-row-reverse justify-end items-center w-full ">
                    <label for="No" class="ml-3">BMI is between 27.5 - 30</label>
                    <input
                    @change="store.getApplicantBMIrange(ApplicantBMIRange)"
                    v-model="ApplicantBMIRange"
                      type="radio"
                      name="bmiRange"
                      id="yes"
                      class="px-2 py-3 w-6 h-6 accent-gray-500"
                     
                      value="between 27.5 - 30"
                    />
                  </div>

                  <div class="flex flex-row-reverse justify-end items-center w-full ">
                    <label for="No" class="ml-3">BMI is between 24.5 - 27.5</label>
                    <input
                    @change="store.getApplicantBMIrange(ApplicantBMIRange)"
                    v-model="ApplicantBMIRange"
                      type="radio"
                      name="bmiRange"
                      id="yes"
                      class="px-2 py-3 w-6 h-6 accent-gray-500"
                     
                      value="between 24.5 - 27.5"
                    />
                  </div>
            </div>
           </div>
            <div class="w-full h-3"></div>
            <globalForm/>
          </form>
        </div>
      </section>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
import { useApplicantHeightWeight } from "../../store/stepTwo";

import { storeToRefs } from 'pinia';
import { useApplicantSuffering } from "../../store/step13";
import { toggleRecommned } from '../../scripts/functional_quiz/recommendation';

  
  export default {
    name: "Step2",
    setup() {
      const routes = useRouter();

      const {Applicantheight,Applicantweight,BMIresult,ApplicantBMIRange,ApplicantRegion,getApplicantRegion} = storeToRefs(useApplicantHeightWeight());
      const {selectedReasons} = storeToRefs(useApplicantSuffering());
      const store = useApplicantHeightWeight();

    
  
      let question = "What is your height and weight?";
      let height = ref("");
      let weight = ref("");
      let heightError = ref("");
      let weightError = ref("");
      let hasErrors = ref(false);
  
      let validateHeight = function () {
        let parsedHeight = parseFloat(height.value);
        if (isNaN(parsedHeight) || parsedHeight < 90 || parsedHeight > 230) {
          heightError.value = "This doesn't look right, enter your height in cm.";
        } else {
          heightError.value = "";
        }
  
        hasErrors.value = Boolean(heightError.value || weightError.value);
      };
  
      let validateWeight = function () {
        let parsedWeight = parseFloat(weight.value);
        if (isNaN(parsedWeight) || parsedWeight < 22 || parsedWeight > 444) {
          weightError.value = "This doesn't look right, enter your weight in kg.";
        } else {
          weightError.value = "";
        }
  
        hasErrors.value = Boolean(heightError.value || weightError.value);
      };
  
      //calculate BMI
      
  
      
  
      const naviagteToPage = function () {
        if (isAllowedToAdmin()) {
          calcculateBMI();
          weightOfApplicant.value = weight.value;
          heightOfApplicant.value = height.value;
          console.log(weightOfApplicant.value);
        }
      };

      const submitData = function () {
          if(Applicantheight.value && Applicantweight.value && ApplicantRegion.value && ApplicantBMIRange.value){
            if(ApplicantBMIRange.value ==="between 27.5 - 30" && selectedReasons.value.length>1){
              compoentToBeRender("Assesment");
            }else if(ApplicantBMIRange.value ==="over 30"){
              compoentToBeRender("Assesment");
            }else if(ApplicantBMIRange.value === "between 24.5 - 27.5" && ApplicantRegion.value ==="yes"){
              compoentToBeRender("Assesment");
            }else{
              toggleRecommned();
            }
            
          }
          
          
          
    
      };
  
      return {
        Applicantweight,
        Applicantheight,
        question,
        naviagteToPage,
        height,
        weight,
        heightError,
        weightError,
        hasErrors,
        validateHeight,
        validateWeight,
        BMIresult,
        ApplicantBMIRange,ApplicantRegion,
        store,
        submitData
      };
    },
  };
  </script>
  
  <style>
  .form-checkbox:checked {
    color: #60a5fa; /* Customize the color of the selected checkbox */
  }
  .focus\:ring-primary-dark:focus {
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5); /* Customize the focus ring color */
  }
  </style>