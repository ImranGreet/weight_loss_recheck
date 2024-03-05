<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <form @submit.prevent="submitData()"
          class="w-full px-2 sm:px-0  flex flex-col justify-center items-center mx-auto"
        >
          <div class="space-y-6 prose w-full max-w-none">
            <div>
              <h3>Are you allergic to any of the following?</h3>
              <p>
                GLP-1 Medication including Rybelsus, Saxenda, Ozempic, Trulicity
                or Victoza
              </p>
  
              <p>Salcaprozate sodium</p>
              <p>Povidone K90</p>
              <p>Cellulose, microcrystalline</p>
              <p>Magnesium stearate</p>
            </div>
  
            <div class="flex flex-row-reverse justify-end items-center w-full ">
              <label for="yes" class="ml-3">Yes</label>
              <input
              @change="store.toggleRadio(haveAllergy)"
                type="radio"
                name="goalWeight"
                id="yes"
                class="px-2 py-3 w-6 h-6 accent-gray-500"
                v-model="haveAllergy"
                value="yes"
              />
            </div>
            <div class="flex flex-row-reverse justify-end items-center w-full ">
              <label for="No" class="ml-3">No</label>
              <input
              @change="store.toggleRadio(haveAllergy)"
                type="radio"
                name="goalWeight"
                id="yes"
                class="px-2 py-3 w-6 h-6 accent-gray-500"
                v-model="haveAllergy"
                value="no"
              />
            </div>
          </div>
          <div class="w-full h-3"></div>
          <globalForm/>
        </form>
      </div>
    </section>
  </template>
  
  <script>
import { storeToRefs } from 'pinia';

import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';
 
  import {useApplicantAllergicToSpecificDrug} from "../../store/step18"
import { toggleRecommned } from '../../scripts/functional_quiz/recommendation';
  export default {
    name: "Step18",
  
    setup() {
      
      const {haveAllergy,showerror,toggleRadio} = storeToRefs(useApplicantAllergicToSpecificDrug());
  const store = useApplicantAllergicToSpecificDrug();
      
      const submitData = function () {
        if(haveAllergy.value ==='yes'){
          toggleRecommned();
          return ;
        }
        compoentToBeRender('Step21');
      };
  
      return {
        store,
        haveAllergy,
        showerror,
        toggleRadio,
        toggleRecommned,
        submitData
      };
    },
  };
  </script>
  
  <style>
  .checkmark {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 1px solid #ccc;
    background-color: #fff;
  }
  
  .checkmark.checked {
    background-color: #60a5fa;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffffff" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path fill="%23ffffff" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }
  
  .radio-button {
    width: 100%;
    text-align: center;
  }
  </style>