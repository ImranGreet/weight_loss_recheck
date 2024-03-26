<template>
    <section
      class="w-full  flex flex-col justify-center items-center bg-primary"
    >
      <div class="w-full  mx-auto bg-primary/15">
        <div class="w-full text-center">
          <div class="flex flex-col justify-center items-center gap-y-2 py-4">
            <div class="w-full prose text-center max-w-none ">
              <h3>Your assessment</h3>
              <div class="w-full flex flex-col justify-center items-center">
                <div>
                  <p class="bg-orange-600 bg-clip-text text-4xl">
                    Congratulations!
                  </p>
                  <h2>
                    You qualify for the evony weight loss program. Please complete
                    the next steps to commence your weight loss journey.
                  </h2>
                </div>
                
                <div>
                  <h2>Your Current  Weight Is {{  Math.ceil(Applicantweight) }} </h2>
                  <h2>You could reach {{ Math.ceil(Applicantweight - Applicantweight*15/100) }} kg</h2>
                  <!-- <h2>In 6 Months</h2> -->
                  <p class="text-xl text-red-400 italic">
                    That’s a weight loss of {{ Math.floor(Applicantweight*15/100) }} kg
                  </p>
                </div>
              </div>
            </div>
            <div class="hidden">
              <WeightChnage :weightLossData="remainWeight"  />
            </div>
            <form @submit.prevent="submitData()">
              <globalForm />
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import WeightChnage from "../Graphs/WeightChnage.vue";
  import {
   useApplicantHeightWeight
  } from "../../store/stepTwo";
import { storeToRefs } from 'pinia';
import GlobalForm from '../Global/GlobalForm.vue';
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';

  
  export default {
    name: "Assesment",
    components: { WeightChnage, GlobalForm },
    setup() {
        const {Applicantheight,Applicantweight} = storeToRefs(useApplicantHeightWeight());
      const initialWeight = Applicantweight.value;
      const height = Applicantheight.value / 100;
  
      const targetBMI = 24;
      const targetWeight = targetBMI * height * height;
      const weightLossTotal = initialWeight - targetWeight;
      const months = 6;
      let newWeight = 0;
      let remainWeight = [];
  
      for (let month = 1; month <= months; month++) {
        const weightLossThisMonth = (weightLossTotal / months) * month;
  
        newWeight = initialWeight - weightLossThisMonth;
        remainWeight.push(newWeight);
      }
      console.log(remainWeight);

      
    const submitData = function () {
      
     
      compoentToBeRender('PersonalInformation');
    
    };


      return {
        Applicantweight,
        Applicantheight,
        newWeight,
        weightLossTotal,
        remainWeight,
        compoentToBeRender,
        submitData
      };
    },
  };
  </script>
  
  <style>
  </style>