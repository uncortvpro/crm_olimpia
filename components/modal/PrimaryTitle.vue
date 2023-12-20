<script setup lang="ts">
defineProps<{
  ui?: object;
  title: string;
}>();
</script>

<template>
  <ModalPrimary :ui="{ ...ui }">
    <div class="flex flex-col">
      <UiTitlePrimarySmall class="text-center">{{ title }}</UiTitlePrimarySmall>
      <slot />
    </div>
  </ModalPrimary>
</template>

<style scoped></style>
