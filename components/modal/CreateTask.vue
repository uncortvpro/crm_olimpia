<script setup lang="ts"></script>
<template>
  <ModalPrimaryTitleClose
    :ui="{ width: '!max-w-[850px]' }"
    label="Додати задачу"
  >
    <div>
      <UiLabel label="Задача:">
        <UiInputPrimary placeholder="Введіть задачу"></UiInputPrimary>
      </UiLabel>
      <UiLabel label="Опис задачі:">
        <UiTextarea placeholder="Введіть задачу"></UiTextarea>
      </UiLabel>
      <UiLabel label="Задача:">
        <UiInputPrimary placeholder="Введіть задачу"></UiInputPrimary>
      </UiLabel>
    </div>
  </ModalPrimaryTitleClose>
</template>

<style scoped></style>
