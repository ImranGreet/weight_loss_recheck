<template>
  <div class="w-full">
    <section class="w-full prose max-w-none">
      <div class="w-full px-10 py-20">
        <form  @submit.prevent="submitData()" class="w-full space-y-20">
          <div>
            <h4>Tell us more about yourself</h4>
            <p>
              Please use your legal name, real date of birth and gender assigned
              on your identification documents to be able to pass ID checks.
            </p>
          </div>
          <div class="w-full h-14"></div>
          <div>
            <h3 class="after-content">Name</h3>
            <div
              class="w-full flex flex-col space-y-3 md:space-x-3 md:flex-row justify-between"
            >
              <div class="flex flex-col-reverse w-full">
                <label for="name">First Name</label>
                <input
                v-model="userInformation.firstName"
                  type="text"
                  name=""
                  id=""
                  class="px-3 py-2 rounded-md border border-gray-600"
                />
              </div>
              <div class="flex flex-col-reverse w-full">
                <label for="name">Last Name</label>
                <input
                v-model="userInformation.lastName"
                  type="text"
                  name=""
                  id=""
                  class="px-3 py-2 rounded-md w-full border border-gray-600"
                />
              </div>
            </div>
          </div>
          <div>
            <div
              class="w-full flex flex-col space-y-3 md:space-y-0 md:space-x-3 md:flex-row justify-between"
            >
              <div class="flex flex-col w-full">
                <label for="name" class="after-content">Email</label>
                <div class="">
                  <input
                  v-model="userInformation.email"
                    type="email"
                    name=""
                    id=""
                    class="px-3 py-2 rounded-md border border-gray-600 w-full"
                  />
                  <small>example@example.com</small>
                </div>
              </div>

              <div class="flex flex-col w-full">
                <label for="name" class="after-content">Phone Number</label>

                <div>
                  <input
                  v-model="userInformation.phoneNumber"
                    type="text"
                    name=""
                    id=""
                    class="px-3 py-2 rounded-md w-full border border-gray-600"
                  />
                  <small class="sr-only">000000000000</small>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-10">
            <h3 class="after-content">Address</h3>
            <input
            
              type="text"
              name=""
              id=""
              class="px-3 py-2 rounded-md border border-gray-600 w-full"
            />
            <div class="w-full flex flex-col gap-y-4 justify-between">
              <div class="flex flex-col-reverse w-full">
                <label for="name">Street Address</label>
                <input
                  v-model="userInformation.address.streetAdressOne"
                  type="text"
                  name=""
                  id=""
                  class="px-3 py-2 rounded-md border border-gray-600"
                />
              </div>

              <div class="flex flex-col-reverse w-full">
                <label for="name">Street Address Line 2</label>
                <input
                v-model="userInformation.address.streetAddressTwo"
                  type="text"
                  name=""
                  id=""
                  class="px-3 py-2 rounded-md w-full border border-gray-600"
                />
              </div>
            </div>
          </div>

          <div>
            <div
              class="w-full flex flex-col space-y-3 md:space-x-3 md:flex-row justify-between"
            >
              <div class="flex flex-col-reverse w-full">
                <label for="name">City</label>
                <input
                v-model="userInformation.address.city"
                  type="text"
                  name=""
                  id=""
                  class="px-3 py-2 rounded-md border border-gray-600"
                />
              </div>
              <div class="flex flex-col-reverse w-full">
                <label for="name">Town</label>
                <input
                v-model="userInformation.address.town"
                  type="text"
                  name=""
                  id=""
                  class="px-3 py-2 rounded-md w-full border border-gray-600"
                />
              </div>
            </div>
          </div>

          <div>
            <input
             v-model="userInformation.address.zipCode"
              type="text"
              name=""
              id="zipcode"
              class="px-3 py-2 rounded-md border border-gray-600 w-full"
            />
            <h3 class="after-content">Postal Zipcode</h3>
          </div>

          <div class="space-y-10">
            <div>
              <h3 class="after-content">Date Of Birth</h3>
              
            </div>
            <div class="w-full flex justify-between gap-x-4">
              <div class="flex flex-col-reverse w-full">
                <label for="name">Date</label>
                <input
                v-model="userInformation.dateOfBirth"
                  type="text"
                  name=""
                  id=""
                  class="px-3 py-2 rounded-md border border-gray-600 w-full"
                />
              </div>

              <div class="flex flex-col-reverse w-full">
                <label for="name">Place Of Birth</label>
                <input
                v-model="userInformation.placeOfBirth"
                  type="text"
                  name=""
                  id=""
                  class="px-3 py-2 rounded-md w-full border border-gray-600"
                />
              </div>
            </div>
          </div>

          <div>
            <label class="after-content" for="countries">Gender</label>
            <select
             v-model="userInformation.gender"
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Please Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div class="space-y-2 prose max-w-none w-full">
            <h4>
              What are your main challenges when it comes to losing weight?
            </h4>
            <div class="">
              <textarea
                placeholder="Type Answer Here"
                class="w-full p-2 border border-gray-400 rounded-md"
                rows="4"
              ></textarea>
            </div>
          </div>

          <div>
            <label
              >If you know your GP Practice's email address, please write it
              here</label
            >
            <input
            v-model="userInformation.GPS_name_and_address"
              type="text"
              name=""
              id=""
              class="px-3 py-2 rounded-md w-full border border-gray-600"
            />
          </div>

          <div>
            <h4 class="after-content">
              *By checking the box below, you consent to the collection and
              processing of your personal data in accordance with our Privacy
              Policy. You also authorise the company to contact you for purposes
              related to the products or services we provide.
            </h4>
          </div>

          <div class="flex justify-start items-center gap-x-2">
            <input
            v-model="submitValue"
            type="checkbox" name="" id="" class="w-5 h-5 rounded-md" />
            <label for="readpolicy"
              >I have read and agree to the term of the
              <a
                href="https://maroon-randie-37.tiiny.site/"
                target="_blank"
                class="underline decoration-blue-500 text-blue-500"
                >Privacy Policy</a
              ></label
            >
          </div>
          <div class="w-full h-10"></div>
          <globalForm />
        </form>
      </div>
    </section>
  </div>
</template>
  
  <script>
import { ref } from 'vue';
import { compoentToBeRender } from "../scripts/functional_quiz/renderCompos";
import userInformation from "../store/auth/userInfo";
export default {
  name: "AdmissionForm",
  setup() {
    let submitValue = ref(false);
    const submitData = function () {
      if(submitValue){
        compoentToBeRender("SubmitDocs");
      }
      
    };
    return {
      compoentToBeRender,
      submitData,
      userInformation,
      submitValue
    };
  },
};
</script>
  
  <style>
</style>