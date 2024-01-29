<script setup lang="ts">
const props = defineProps<{
  inputs: InputsCreateOrder;
  error: string;
}>();

const emits = defineEmits(["update:error"]);

const updateModelValue = (value: string) => {
  emits("update:error", value);
};

const { value, errorMessage } = useField(
  "createOrder",
  {},
  {
    validateOnValueUpdate: false,
  }
);

const checkValidation = () => {
  if (
    props.inputs.distributor &&
    props.inputs.sales_agent &&
    props.inputs.shop &&
    props.inputs.status
  ) {
    value.value = true;
  } else {
    value.value = false;
  }
};

watchDeep(errorMessage, () => {
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
