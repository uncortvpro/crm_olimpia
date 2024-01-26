<script setup lang="ts">
defineProps<{
  modelValue?: string;
  type?: string;
  placeholder?: string;
}>();

const emits = defineEmits(["update:modelValue", "deleteAction"]);

const handleInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emits("update:modelValue", inputValue);
};

const deleteAction = () => {
  emits("deleteAction");
};
</script>

<template>
  <div class="input_primary_style flex items-center">
    <input
      :value="modelValue"
      :type="type"
      @input="handleInput"
      class="!p-0 input_primary_style w-full"
      :placeholder="placeholder"
    />
    <UiButtonOpacity @click="deleteAction">
      <SvgoClose class="stroke-white"></SvgoClose>
    </UiButtonOpacity>
  </div>
</template>

<style scoped></style>
