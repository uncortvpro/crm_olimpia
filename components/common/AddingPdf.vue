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
</script>

<template>
  <div>
    <CommonShowPdfList
      :isAdding="true"
      :value="modelValue"
      @updateModelValue="updateModelValue"
      @updateDeleteLinks="updateDeleteLinks"
    ></CommonShowPdfList>
  </div>
</template>

<style scoped></style>
