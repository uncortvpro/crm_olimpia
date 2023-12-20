<script setup lang="ts">
defineProps<{
  ui?: object;
  title: string;
}>();
</script>

<template>
  <UiModal :ui="{ ...ui }">
    <div class="flex flex-col">
      <UiTitlePrimarySmall class="text-center">{{ title }}</UiTitlePrimarySmall>
      <slot />
    </div>
  </UiModal>
</template>

<style scoped></style>
