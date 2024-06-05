<template>
  <form @submit.prevent="submitData()">
    <div class="max-w-full mx-auto px-2">
      <div class="text-center border gray-800 rounded-sm p-6">
        <p class="text-3xl">
          Congratulations on choosing to enhance your health and well-being with
          evony!
        </p>
      </div>
      <ul class="list-decimal">
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-2xl font-bold mb-2"
              >Let’s find out if you are suitable for the evony
              programme.</label
            >
            <p class="text-gray-900 text-2xl p-2 rounded-sm">
              This will require around 20 minutes of your time.
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-2xl font-bold mb-2"
              >Please ensure you have the following before you start the
              form:</label
            >
            <ul class="space-y-6">
              <li>
                <p>Your current weight</p>
              </li>
              <li>
                <p>Your height</p>
              </li>
              <li>
                <p>Driving licence or passport to confirm your identity</p>
              </li>
              <li>
                <p>Your GP's details</p>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >What are the primary motivations behind your desire to shed
              excess weight?*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              Improving my sleep or energy levels
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Have you set a target weight that you aim to reach?*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
             {{ patientHealthStatus.have_target_weight }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >What is your target weight?</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.target_weight }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >How long have you struggled with your weight?*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.how_struggled_weight }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >What methods or approaches have you previously tried in your
              attempts to lose weight?*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.approaches_methods }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >What are your main challenges when it comes to losing
              weight?</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.your_main_challenges }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Do you suffer from any of the following?*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.suffer_following }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Are pregnant, breast feeding or trying to conceive?*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
           {{patientHealthStatus.pregnant_lactic}}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Have you been diagnosed with any of these medical
              conditions?*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
             {{patientHealthStatus.diagnosed_conditions}}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Are you taking any of the following medications*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.taking_medications }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Are you taking any other medications, including GLP-1s, e.g.
              Ozempic/Saxenda/Wegovy?*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.taking_Ozempic }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >If you are presently using a GLP-1, such as Wegovy or Ozempic
              we're here to help. If you believe you need a higher dose pen than
              the usual 0.25mg starting dose it will be necessary to send
              documentation e.g., a copy of the prior prescription/invoice or a
              photo of the medication box displaying your name and the
              dispensing date. In the absence of documentation, you will be
              prescribed the initial starting strength pen.</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm"></p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Please list your current medications, their strengths, and what
              you take them for.</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.list_current_medications }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Are you allergic to any of the following?*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.allergic_to_these }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >If 'no' please list any other allergies you have or write
              'none'</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.allergies_none }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Please enter your current weight and height *</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.current_weight_height }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Are you from any of the following ethnic groups: Black, Caribbean
              or African, Asian or Arab?</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ patientHealthStatus.ethnic_groups }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Are you from any of the following ethnic groups: Black, Caribbean
              or African, Asian or Arab?</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
             {{ patientHealthStatus.ethnic_groups }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Please select the option which best represents your BMI*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              BMI is {{ patientHealthStatus.BMI_range }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-2xl font-bold mb-2"
              >Tell us more about yourself
            </label>
            <p class="text-gray-900 p-2 rounded-sm">
              Please use your legal name, real date of birth and gender assigned
              on your identification documents to be able to pass ID checks.
            </p>
          </div>
        </li>

        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Name*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              Courtney Clemons
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Name*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ userInformation.firstName + userInformation.lastName }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Email*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ userInformation.email }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Phone Number*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ userInformation.phoneNumber }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Address*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ userInformation.address.streetAdressOne }},
              {{ userInformation.address.streetAddressTwo }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Date of Birth*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ userInformation.dateOfBirth }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Place of Birth</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ userInformation.placeOfBirth }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Gender*</label
            >
            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              {{ userInformation.gender }}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Please provide your GP's name and address for us to notify them
              of details of the programme*</label
            >

            <address
              class="text-gray-900 border border-lime-300 p-2 rounded-sm"
            >
              
              {{ userInformation.GPS_name_and_address }}
            </address>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >If you know your GP Practice's email address, please write it
              here</label
            >

            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
             {{userInformation.GP_Practices_email_address}}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >*By checking the box below, you consent to the collection and
              processing of your personal data in accordance with our Privacy
              Policy. You also authorise the company to contact you for purposes
              related to the products or services we provide.*</label
            >

            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              Accepted
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >ID Check</label
            >

            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
             {{userInformation.ID}}
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >I hereby declare that the information given in this form and in
              the enclosed documents is true to the best of my knowledge and
              belief.*</label
            >

            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm">
              Screenshot (5).png
            </p>
          </div>
        </li>
        <li>
          <div class="patient-input-field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >I hereby declare that the information given in this form and in
              the enclosed documents is true to the best of my knowledge and
              belief.*</label
            >

            <p class="text-gray-900 border border-lime-300 p-2 rounded-sm"></p>
          </div>
        </li>
      </ul>

      <section>
        <div class="w-full flex items-center justify-between mt-5">
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
      </section>
    </div>
  </form>
</template>

<script>
import { compoentToBeRender } from "../scripts/functional_quiz/renderCompos";
import userInformation from '../store/auth/userInfo';
import patientHealthStatus from "../store/patient/health_info";
import useAuthRegistration from "../store/auth/reistration";

export default {
  name: "Preview",
  setup() {
    const useAuthStore = useAuthRegistration();
    const submitData = async function () {
      console.log("async start");
      await useAuthStore.registrationToEvony();
      console.log("async end");
       
        compoentToBeRender("ThankYou");
       
       
      
    };
    return {
      submitData,
      compoentToBeRender,
      userInformation,
      patientHealthStatus
    };
  },
};
</script>

<style>
</style>