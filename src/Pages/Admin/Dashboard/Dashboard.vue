<template>
  <div class="w-full flex flex-col justify-between items-center mt-5 space-y-2">
    <div class="w-full flex flex-col lg:flex-row justify-between items-center">
      <LastMonthReport class="w-full" />
      <div class="w-full">
        <MonthlyIncome />
      </div>
    </div>
    <!-- report annual -->
    <div
      class="w-full flex flex-col lg:flex-row justify-between items-center shadow-sm lg:gap-x-3"
    >
      <div class="w-full xl:w-full">
        <IncomeExpenseMonthlyReport />
      </div>
    </div>
  </div>
</template>

<script>
import MonthlyIncome from "../../../components/Admin/Graph/MonthlyIncome.vue";
import TotalSales from "../../../components/Admin/Graph/TotalSales.vue";
import IncomeExpenseMonthlyReport from "../../../components/Admin/Report/IncomeExpenseMonthlyReport.vue";
import LastMonthReport from "../../../components/Admin/Report/LastMonthReport.vue";

export default {
  name: "Dashboard",
  components: {
    MonthlyIncome,
    LastMonthReport,

    TotalSales,

    IncomeExpenseMonthlyReport,
  },
  setup() {
    return {};
  },
};
</script>
