<template>
   
    <div class="w-full">
        <section class="w-full prose max-w-none">
            <div class="w-full px-10 py-20">
              <form  @submit.prevent="submitData()" class="w-full">
                <div>
                  <h2>ID Check</h2>
                  <p>
                    Because you are ordering a prescription-only drug online, we need to
                    verify your age and identity. Please confirm your identity by
                    uploading your driver's license or passport below.
                  </p>
                </div>
                <div class="w-full h-14"></div>
        
                <div>
                    <h3 class="after-content"></h3>
                    <input type="file" name="" id="" @change="submitId()">
                </div>
        
                <div>
                    <p class="after-content">I hereby declare that the information given in this form and in the enclosed documents is true to the best of my knowledge and belief.</p>
                    <input type="checkbox" name="" id="">
                </div>
        
                <div class="w-full h-10"></div>
                <div
                class="w-full flex items-center justify-between mt-5"
                
              >
                <button
                 @click="gotoPreviusPage()"
                 type="button"
                  class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
                
                >
                  Back
                </button>
                <div class="flex gap-x-7">
                  <button
                    class="px-5 py-1 lg:px-10 lg:py-3 hover:bg-gray-600 hover:text-white rounded-lg"
                  >
                    Save
                  </button>
                  <button
                    type="submit"
                    class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
              </form>
            </div>
          </section>
    </div>
  </template>
    
    <script>
import { compoentToBeRender } from '../scripts/functional_quiz/renderCompos';
import userInformation from '../store/auth/userInfo';

    
  export default {
    name: "SubmitId",
    setup(){
      const submitData = function () {
      compoentToBeRender("Preview");
    };
    const submitId = function(){
      userInformation.ID = event.target.files[0].name;
      console.log(userInformation.ID);
    }
      return {
        compoentToBeRender,
        submitData,
        submitId,
        userInformation
      }
    }
  };
  </script>
    
    <style>
  </style>