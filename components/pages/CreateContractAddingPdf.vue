<script setup lang="ts">
const props = defineProps<{
  modelValue: any[];
}>();

const emits = defineEmits(["update:modelValue"]);

const updateModelValue = (value: any) => {
  emits("update:modelValue", value);
};

const updateInput = (value: any) => {
  if (value.type !== "application/pdf") return false;
  if (props.modelValue.length === 3) return false;

  updateModelValue([...props.modelValue, value]);
};
</script>

<template>
  <div class="input_primary_height self-end relative flex items-center">
    <UiButtonOpacityAdding class="relative">
      <label class="absolute left-0 top-0 z-50 h-full w-full cursor-pointer">
        <UiInputFile
          accept="application/pdf"
          class="invisible h-full w-full"
          @updateInput="updateInput"
        />
      </label>
      Додати сканкопію PDF</UiButtonOpacityAdding
    >
  </div>
  <div class="col-span-2">
    <CommonAddingPdf
      :value="modelValue"
      @updateModelValue="updateModelValue"
    ></CommonAddingPdf>
  </div>
</template>

<style scoped></style>
