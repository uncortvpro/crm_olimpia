<script setup lang="ts">
type Props = {
  modelValue: any[];
  maxCount?: number;
  deleteLinks: string[];
};

const props = withDefaults(defineProps<Props>(), {
  maxCount: 5,
});

const emits = defineEmits(["update:modelValue", "update:deleteLinks"]);

const updateModelValue = (value: any) => {
  emits("update:modelValue", value);
};

const updateDeleteLinks = (value: any) => {
  emits("update:deleteLinks", [...props.deleteLinks, value]);
};

const updateInput = (value: any) => {
  if (value.type !== "application/pdf") return false;
  if (props.modelValue.length === props.maxCount) return false;

  updateModelValue([...props.modelValue, value]);
};
</script>

<template>
  <div class="input_primary_height self-end relative flex items-center">
    <UiButtonOpacityAdding v-if="modelValue.length < 2" class="relative">
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
    <CommonShowPdfList
      :value="modelValue"
      @updateModelValue="updateModelValue"
      @updateDeleteLinks="updateDeleteLinks"
    ></CommonShowPdfList>
  </div>

</template>

<style scoped></style>
