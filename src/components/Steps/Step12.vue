<template>
    <section class="w-full">
      <form @submit.prevent="submitData()" class="w-full h-full flex flex-col justify-center items-center">
        <div class="w-full px-2 sm:px-0  mx-auto">
          <div class="space-y-2 prose max-w-none w-full">
            <h1>Do you suffer from any of the following?</h1>
            <div class="px-3">
              <ol class="list-disc">
                <li>Liver, kidney, or heart failure</li>
                <li>Pancreatitis</li>
                <li>Multiple endocrine neoplasia type 2</li>
                <li>history of cancer</li>
                <li>Type 1 diabetes or diabetic retinopathy</li>
                
                <li>Personal or family history of medullary thyroid cancer</li>
                <li>
                  A current eating disorder or a history of an eating disorder?
                  (e.g., anorexia, bulimia, binge eating disorder)
                </li>
                <li>Gallstones</li>
                <li>History of Inflammatory bowel disease or gastroparesis</li>
              </ol>
              
            </div>
          </div>
        </div>
        <div class="w-full h-3"></div>
        <globalForm/>
      </form>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
import { compoentToBeRender } from '../../scripts/functional_quiz/renderCompos';

  
  export default {
    name: "Step12",
    setup() {
      const routes = useRouter();
      const selected = ref(null);
  
      const selectOption = function (option) {
        selected.value = option;
        console.log(selected.value);
  
        if (selected.value) {
         
        } else {
          routes.push({ name: "quiz15" });
        }
      };
  
      const submitData = function () {
        compoentToBeRender(14);
        
        
      };

      return {
        selected,
        selectOption,
        submitData
      };
    },
  };
  </script>
  
  <style>
  </style>