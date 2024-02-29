<template>
    <section class="w-full">
        <div class="w-full h-full flex flex-col justify-center items-center">
          <form 
            class="w-full px-2 sm:px-0  flex flex-col justify-center items-center mx-auto prose max-w-none "
          >
           <div class="space-y-3 w-11/12">
            <div class="flex justify-center items-center space-x-2">
                <label for="weight">Please enter your current weight</label>
                <input type="text" name="" id="" class="px-4 w-full border border-gray-500 rounded-md focus:outline-none">
                <p>KGs</p>
            </div>
            <div class="flex justify-center items-center space-x-2">
                <label for="weight" class="after-content">and height </label>
                <input type="text" name="" id="" class="px-4 w-full border border-gray-500 rounded-md focus:outline-none">
                <p>CM</p>
            </div>
           </div>
           <div class="w-full h-10"></div>
           <div class="w-full">
            <h4>Are you from any of the following ethnic groups: Black, Caribbean or African, Asian or Arab?</h4>
            <div>
                <div class="flex flex-row-reverse justify-end items-center w-full ">
                    <label for="yes" class="ml-3">Yes</label>
                    <input
                   
                      type="radio"
                      name="goalWeight"
                      id="yes"
                      class="px-2 py-3 w-6 h-6 accent-gray-500"
                     
                      value="yes"
                    />
                  </div>
                  <div class="flex flex-row-reverse justify-end items-center w-full ">
                    <label for="No" class="ml-3">No</label>
                    <input
                   
                      type="radio"
                      name="goalWeight"
                      id="yes"
                      class="px-2 py-3 w-6 h-6 accent-gray-500"
                     
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
                   
                      type="radio"
                      name="goalWeight"
                      id="yes"
                      class="px-2 py-3 w-6 h-6 accent-gray-500"
                     
                      value="yes"
                    />
                  </div>
                  <div class="flex flex-row-reverse justify-end items-center w-full ">
                    <label for="No" class="ml-3">BMI is between 27.5 - 30</label>
                    <input
                   
                      type="radio"
                      name="goalWeight"
                      id="yes"
                      class="px-2 py-3 w-6 h-6 accent-gray-500"
                     
                      value="no"
                    />
                  </div>

                  <div class="flex flex-row-reverse justify-end items-center w-full ">
                    <label for="No" class="ml-3">BMI is between 24.5 - 27.5</label>
                    <input
                   
                      type="radio"
                      name="goalWeight"
                      id="yes"
                      class="px-2 py-3 w-6 h-6 accent-gray-500"
                     
                      value="no"
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
export default {

}
</script>

<style>

</style>