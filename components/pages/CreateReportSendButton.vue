<script setup lang="ts">
const props = defineProps<{
  inputs: InputsCreateReport;
  error: string;
}>();

const emits = defineEmits(["update:error"]);

const updateModelValue = (value: string) => {
  emits("update:error", value);
};

const { value, errorMessage } = useField(
  "createReport",
  {},
  {
    validateOnValueUpdate: false,
  }
);

const checkValidation = () => {
  if (
    props.inputs.product_amount &&
    props.inputs.product_name &&
    props.inputs.sale_amount &&
    props.inputs.shop_name
  ) {
    value.value = true;
  } else {
    value.value = false;
  }
};

watchDeep(errorMessage, () => {
  console.log(errorMessage.value);

  updateModelValue(errorMessage.value || "");
});

watchDeep(
  () => props.inputs,
  () => {
    checkValidation();
  }
);
</script>

<template>
  <UiButtonPrimary type="submit"><slot /></UiButtonPrimary>
</template>

<style scoped></style>
