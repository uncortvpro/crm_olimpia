<script setup lang="ts">
const props = defineProps<{
  color: string;
}>();

const computedStyles = computed(() => ({
  base: "w-[25px] h-[25px] checked:!bg-none",
  border: `border-transparent border-[4px] checked:!border-[#00000077]`,
}));
</script>

<template>
  <URadio :ui="computedStyles" :style="`background: ${color};`" />
</template>

<style></style>
