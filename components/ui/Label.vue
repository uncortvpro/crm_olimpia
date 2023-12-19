<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <label class="flex flex-col gap-[5px] xl:gap-[7px]">
    <p
      class="truncate text-[10px] md:text-[13px] text-white font-medium xl:text-[16px]"
    >
      {{ label }}
    </p>
    <slot />
  </label>
</template>

<style scoped></style>
