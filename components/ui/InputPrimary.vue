<script setup lang="ts">
defineProps<{
  modelValue?: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emits("update:modelValue", inputValue);
};
</script>

<template>
  <input
    :value="modelValue"
    @input="handleInput"
    class="bg-primary-gray text-[10px] focus:outline-none rounded-[40px] md:text-[12px] xl:text-[14px] px-[15px] py-[8px] xl:px-[20px] xl:py-[15px]"
  />
</template>

<style scoped></style>
