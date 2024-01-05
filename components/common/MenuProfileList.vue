<script setup lang="ts">
const dropdownSales = [
  {
    title: "Клієнти",
    link: "/profile/clients",
  },
  {
    title: "Замовлення",
    link: "/profile/orders",
  },
  {
    title: "Звіти торгових агентів",
    link: "/profile/reports_sales_agents",
  },
];
</script>

<template>
  <ul>
    <li>
      <CommonMenuProfileItem isDropdown to="/profile/clients">
        <template #logo>
          <SvgoSales class="!w-full !h-auto"></SvgoSales>
        </template>
        <template #title>Продажі</template>
        <template #dropdown>
          <CommonMenuProfileDropdown
            :items="dropdownSales"
          ></CommonMenuProfileDropdown>
        </template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem isDropdown to="/profile/objectives">
        <template #logo>
          <SvgoWarehouses class="!w-full !h-auto"></SvgoWarehouses>
        </template>
        <template #title>Склади</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/finance">
        <template #logo>
          <SvgoProduction class="!w-full !h-auto"></SvgoProduction>
        </template>
        <template #title>Виробництво</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/contracts">
        <template #logo>
          <SvgoContracts class="!w-full !h-auto"></SvgoContracts>
        </template>
        <template #title>Контракти</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/tasks">
        <template #logo>
          <SvgoTasks class="!w-full !h-auto"></SvgoTasks>
        </template>
        <template #title>Задачі</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/mailing_list">
        <template #logo>
          <SvgoAnalytics class="!w-full !h-auto"></SvgoAnalytics>
        </template>
        <template #title>Аналітика</template>
      </CommonMenuProfileItem>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
