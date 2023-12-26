<script setup lang="ts">
defineProps<{
  name?: string;
  modelValue?: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emits("update:modelValue", inputValue);
};
</script>

<template>
  <textarea
    :name="name"
    @input="handleInput"
    :value="modelValue"
    class="input_primary_style resize-none rounded-[20px] py-[15px]"
  ></textarea>
</template>

<style scoped></style>
