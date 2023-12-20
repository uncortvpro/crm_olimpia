<script setup lang="ts">
defineProps<{
  ui?: object;
}>();
</script>

<template>
  <UModal
    :ui="{
      container: 'items-center sm:p-4',
      background: 'bg-dark',
      rounded: 'rounded-[5px] md:rounded-[20px]',
      base: 'p-[20px] md:p-[30px]',
      ...ui,
      overlay: { background: 'bg-dark-transparent' },
    }"
  >
    <slot />
  </UModal>
</template>

<style scoped></style>
