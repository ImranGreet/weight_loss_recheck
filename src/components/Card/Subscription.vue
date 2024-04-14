<template>
  <div
    :class="[
      subscribed ? 'bg-blue-600/50 ' : 'bg-white',
      'max-w-full xl:max-w-md p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700',
    ]"
  >
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ subscriptionPackage }}
    </h5>

    <p>Fees {{ subscriptionPrice }}</p>
    <button
      type="button"
      :disabled="subscribed"
      :class="[
        subscribed ? 'cursor-not-allowed' : 'cursor-pointer',
        'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      ]"
    >
      <span v-if="subscribed">Subscribed</span>

      <span v-else>Subscribe</span>

      <svg
        v-if="subscribed"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-red-600 text-4xl"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
      <svg
        v-else
        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "Subscription",
  props: {
    subscriptionPackage: {
      type: String,
      required: true,
    },
    subscriptionPrice: {
      type: Number,
      required: true,
    },
    subscribed: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style></style>
