<script setup lang="ts"></script>

<template>
  <ul>
    <li>
      <CommonMenuProfileItem to="/profile/clients">
        <template #logo>
          <SvgoSales class="!w-full !h-auto"></SvgoSales>
        </template>
        <template #title>Продажі</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/objectives">
        <template #logo>
          <SvgoWarehouses class="!w-full !h-auto"></SvgoWarehouses>
        </template>
        <template #title>Склади</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/finance">
        <template #logo>
          <SvgoProduction
            class="!w-full !h-auto"
          ></SvgoProduction>
        </template>
        <template #title>Виробництво</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/warehouses">
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
