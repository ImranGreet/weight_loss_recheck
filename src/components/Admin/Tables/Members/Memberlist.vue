<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg"
      >
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border border-slate-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Sr No
                </th>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  First Name
                </th>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Last name
                </th>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Email
                </th>

                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Phone Number
                </th>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Address
                </th>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Subscribed Package
                </th>

                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Sex
                </th>
                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Health Status
                </th>

                <th scope="col" class="px-4 py-3 border border-slate-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(subscriber, index) in subscribers"
                :key="subscriber.id"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <th class="w-4 px-4 py-3 border border-slate-300">
                  {{ index + 1 }}
                </th>
                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ subscriber.firstName }}</span
                  >
                </td>

                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ subscriber.lastName }}</span
                  >
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
                >
                  <div class="flex items-center">
                    
                    {{ subscriber.email }}
                  </div>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
                >
                  {{ subscriber.phoneNumber }}
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
                >
                  {{ subscriber.address }}
                </td>

                <td class="px-4 py-2 border border-slate-300">
                  {{ subscriber.subscribedPackage }}
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
                >
                  <div class="flex items-center">
                    {{ subscriber.sex }}
                  </div>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
                >
                  {{ subscriber.healthStatus }}
                </td>

                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
                >
                  <div class="flex gap-x-2 justify-center items-center">
                    <button class="text-red-600 hover:text-red-800">
                      <font-awesome-icon :icon="['fas', 'trash']" />
                    </button>
                    <button class="text-blue-600 hover:text-blue-800">
                      <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                    </button>
                    <button class="text-green-600 hover:text-green-800">
                      <font-awesome-icon icon="fa-solid fa-shield" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav
          class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
          aria-label="Table navigation"
        >
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing
            <span class="font-semibold text-gray-900 dark:text-white"
              >1-10</span
            >
            of
            <span class="font-semibold text-gray-900 dark:text-white"
              >1000</span
            >
          </span>
          <ul class="inline-flex items-stretch -space-x-px">
            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >...</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >100</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";

export default {
  name: "Expenses",

  setup() {
    const subscribers = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "123-456-7890",
        sex: "Male",
        address: "123 Main St, Springfield",
        subscribedPackage: "Basic",
        healthStatus: "Good",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phoneNumber: "234-567-8901",
        sex: "Female",
        address: "456 Elm St, Shelbyville",
        subscribedPackage: "Premium",
        healthStatus: "Excellent",
      },
      {
        firstName: "Michael",
        lastName: "Johnson",
        email: "michael.johnson@example.com",
        phoneNumber: "345-678-9012",
        sex: "Male",
        address: "789 Oak St, Capital City",
        subscribedPackage: "Standard",
        healthStatus: "Fair",
      },
      // ... more objects here ...
      {
        firstName: "Emily",
        lastName: "Brown",
        email: "emily.brown@example.com",
        phoneNumber: "456-789-0123",
        sex: "Female",
        address: "101 Maple St, Springfield",
        subscribedPackage: "Basic",
        healthStatus: "Good",
      },
      {
        firstName: "James",
        lastName: "Davis",
        email: "james.davis@example.com",
        phoneNumber: "567-890-1234",
        sex: "Male",
        address: "202 Pine St, Shelbyville",
        subscribedPackage: "Premium",
        healthStatus: "Excellent",
      },
      {
        firstName: "Olivia",
        lastName: "Miller",
        email: "olivia.miller@example.com",
        phoneNumber: "678-901-2345",
        sex: "Female",
        address: "303 Birch St, Capital City",
        subscribedPackage: "Standard",
        healthStatus: "Fair",
      },
      // ... more objects here ...
      {
        firstName: "Daniel",
        lastName: "Wilson",
        email: "daniel.wilson@example.com",
        phoneNumber: "789-012-3456",
        sex: "Male",
        address: "404 Cedar St, Springfield",
        subscribedPackage: "Basic",
        healthStatus: "Good",
      },
      {
        firstName: "Sophia",
        lastName: "Moore",
        email: "sophia.moore@example.com",
        phoneNumber: "890-123-4567",
        sex: "Female",
        address: "505 Ash St, Shelbyville",
        subscribedPackage: "Premium",
        healthStatus: "Excellent",
      },
      {
        firstName: "Alexander",
        lastName: "Taylor",
        email: "alexander.taylor@example.com",
        phoneNumber: "901-234-5678",
        sex: "Male",
        address: "606 Fir St, Capital City",
        subscribedPackage: "Standard",
        healthStatus: "Fair",
      },
      // ... more objects here ...
      {
        firstName: "Ava",
        lastName: "Anderson",
        email: "ava.anderson@example.com",
        phoneNumber: "012-345-6789",
        sex: "Female",
        address: "707 Spruce St, Springfield",
        subscribedPackage: "Basic",
        healthStatus: "Good",
      },
      {
        firstName: "Liam",
        lastName: "Thomas",
        email: "liam.thomas@example.com",
        phoneNumber: "123-456-7890",
        sex: "Male",
        address: "808 Walnut St, Shelbyville",
        subscribedPackage: "Premium",
        healthStatus: "Excellent",
      },
      {
        firstName: "Isabella",
        lastName: "Jackson",
        email: "isabella.jackson@example.com",
        phoneNumber: "234-567-8901",
        sex: "Female",
        address: "909 Cherry St, Capital City",
        subscribedPackage: "Standard",
        healthStatus: "Fair",
      },
      // ... more objects here ...
      {
        firstName: "Ethan",
        lastName: "White",
        email: "ethan.white@example.com",
        phoneNumber: "345-678-9012",
        sex: "Male",
        address: "1010 Willow St, Springfield",
        subscribedPackage: "Basic",
        healthStatus: "Good",
      },
      {
        firstName: "Mia",
        lastName: "Harris",
        email: "mia.harris@example.com",
        phoneNumber: "456-789-0123",
        sex: "Female",
        address: "1111 Cypress St, Shelbyville",
        subscribedPackage: "Premium",
        healthStatus: "Excellent",
      },
      {
        firstName: "Benjamin",
        lastName: "Martin",
        email: "benjamin.martin@example.com",
        phoneNumber: "567-890-1234",
        sex: "Male",
        address: "1212 Redwood St, Capital City",
        subscribedPackage: "Standard",
        healthStatus: "Fair",
      },
      // ... more objects here ...
      {
        firstName: "Charlotte",
        lastName: "Thompson",
        email: "charlotte.thompson@example.com",
        phoneNumber: "678-901-2345",
        sex: "Female",
        address: "1313 Sequoia St, Springfield",
        subscribedPackage: "Basic",
        healthStatus: "Good",
      },
      {
        firstName: "Lucas",
        lastName: "Garcia",
        email: "lucas.garcia@example.com",
        phoneNumber: "789-012-3456",
        sex: "Male",
        address: "1414 Magnolia St, Shelbyville",
        subscribedPackage: "Premium",
        healthStatus: "Excellent",
      },
      {
        firstName: "Amelia",
        lastName: "Martinez",
        email: "amelia.martinez@example.com",
        phoneNumber: "890-123-4567",
        sex: "Female",
        address: "1515 Dogwood St, Capital City",
        subscribedPackage: "Standard",
        healthStatus: "Fair",
      },
      // ... more objects here ...
      {
        firstName: "Matthew",
        lastName: "Robinson",
        email: "matthew.robinson@example.com",
        phoneNumber: "901-234-5678",
        sex: "Male",
        address: "1616 Cedar St, Springfield",
        subscribedPackage: "Basic",
        healthStatus: "Good",
      },
      {
        firstName: "Ella",
        lastName: "Clark",
        email: "ella.clark@example.com",
        phoneNumber: "012-345-6789",
        sex: "Female",
        address: "1717 Birch St, Shelbyville",
        subscribedPackage: "Premium",
        healthStatus: "Excellent",
      },
      {
        firstName: "Oliver",
        lastName: "Rodriguez",
        email: "oliver.rodriguez@example.com",
        phoneNumber: "123-456-7890",
        sex: "Male",
        address: "1818 Spruce St, Capital City",
        subscribedPackage: "Standard",
        healthStatus: "Fair",
      },
      // ... more objects here ...
      {
        firstName: "Abigail",
        lastName: "Lewis",
        email: "abigail.lewis@example.com",
        phoneNumber: "234-567-8901",
        sex: "Female",
        address: "1919 Pine St, Springfield",
        subscribedPackage: "Basic",
        healthStatus: "Good",
      },
      {
        firstName: "Henry",
        lastName: "Walker",
        email: "henry.walker@example.com",
        phoneNumber: "345-678-9012",
        sex: "Male",
        address: "2020 Maple St, Shelbyville",
        subscribedPackage: "Premium",
        healthStatus: "Excellent",
      },
      {
        firstName: "Grace",
        lastName: "Hall",
        email: "grace.hall@example.com",
        phoneNumber: "456-789-0123",
        sex: "Female",
        address: "2121 Elm St, Capital City",
        subscribedPackage: "Standard",
        healthStatus: "Fair",
      },
      // ... more objects here ...
      {
        firstName: "Jack",
        lastName: "Allen",
        email: "jack.allen@example.com",
        phoneNumber: "567-890-1234",
        sex: "Male",
        address: "2222 Oak St, Springfield",
        subscribedPackage: "Basic",
        healthStatus: "Good",
      },
      {
        firstName: "Sofia",
        lastName: "Young",
        email: "sofia.young@example.com",
        phoneNumber: "678-901-2345",
        sex: "Female",
        address: "2323 Willow St, Shelbyville",
        subscribedPackage: "Premium",
        healthStatus: "Excellent",
      },
      {
        firstName: "Sebastian",
        lastName: "King",
        email: "sebastian.king@example.com",
        phoneNumber: "789-012-3456",
        sex: "Male",
        address: "2424 Cypress St, Capital City",
        subscribedPackage: "Standard",
        healthStatus: "Fair",
      },
    ];

    return {
      subscribers,
    };
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
