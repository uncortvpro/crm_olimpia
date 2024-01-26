<script setup lang="ts">
const props = defineProps<{
  inputs: InputsCreateClient;
  error: string;
}>();

const emits = defineEmits(["update:error"]);

const updateModelValue = (value: string) => {
  emits("update:error", value);
};

const { value, errorMessage } = useField(
  "createClient",
  {},
  {
    validateOnValueUpdate: false,
  }
);

const checkValidation = () => {
  if (
    props.inputs.name &&
    props.inputs.edrpou &&
    props.inputs.ipn &&
    props.inputs.bank &&
    props.inputs.account_number &&
    props.inputs.address_jur &&
    props.inputs.address_phiz &&
    props.inputs.address_sklad &&
    props.inputs.pib_kerivnyka &&
    props.inputs.pib_kontaktna &&
    props.inputs.number &&
    props.inputs.email
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
