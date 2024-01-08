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
  if (
    props.inputs.category &&
    props.inputs.counterpartie &&
    props.inputs.date &&
    props.inputs.deadline &&
    props.inputs.number &&
    props.inputs.status &&
    props.inputs.subject
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
