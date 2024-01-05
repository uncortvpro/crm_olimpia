<script setup lang="ts">
const props = defineProps<{
  inputs: InputsCreateContract;
  error: string;
}>();

const emits = defineEmits(["update:error"]);

const updateModelValue = (value: string) => {
  emits("update:error", value);
};

const { value, errorMessage } = useField(
  "createContract",
  {},
  {
    validateOnValueUpdate: false,
  }
);

const checkValidation = () => {
  // if (
  //   (props.inputs.deadline &&
  //     props.inputs.description &&
  //     props.inputs.headline &&
  //     props.inputs.responsible,
  //   props.inputs.status)
  // ) {
    value.value = true;
  // } else {
  //   value.value = false;
  // }
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
