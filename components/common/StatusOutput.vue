<script setup lang="ts">
defineProps<{
  color: string;
}>();
</script>

<template>
  <p
    :style="`background: ${color};`"
    class="px-[8px] inline-block md:px-[10px] py-[4px] text-white md:py-[5px] font-medium text-[11px] md:text-[12px] xl:text-[14px] rounded-[25px] text-center"
  >
    <slot />
  </p>
</template>

<style scoped></style>
