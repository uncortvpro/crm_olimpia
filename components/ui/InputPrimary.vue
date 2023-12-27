<script setup lang="ts">
defineProps<{
  modelValue?: string;
  type: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emits("update:modelValue", inputValue);
};
</script>

<template>
  <UInput
    :value="modelValue"
    @input="handleInput"
    v-if="type === 'password'"
    type="password"
    :ui="{
      wrapper: 'input_primary_style',
      base: 'h-full !bg-transparent !text-white !border-none focus:outline !ring-0',
    }"
  />
  <input
    v-else
    :value="modelValue"
    :type="type"
    @input="handleInput"
    class="input_primary_style"
  />
</template>

<style scoped></style>
