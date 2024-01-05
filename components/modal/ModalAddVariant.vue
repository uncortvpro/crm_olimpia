<script setup lang="ts">
const props = defineProps<{
  type: VariantType;
}>();

const emits = defineEmits(["actionSuccess"]);
const actionSuccess = () => {
  emits("actionSuccess");
};

const status = ref("");

const onCreateNewStatus = () => {
  useNewVariant(status.value, props.type).then(() => {
    actionSuccess();
  });
};
</script>

<template>
  <ModalPrimaryTitle title="Додати варіант" :ui="{ width: '!max-w-[414px]' }">
    <UiLabel class="mt-[15px] md:mt-[20px]" label="Введіть варіант:">
      <UiInputPrimary class="!bg-primary-gray" v-model="status"></UiInputPrimary>
    </UiLabel>

    <UiButtonPrimary
      :disabled="!status"
      @click="onCreateNewStatus"
      class="self-center  mt-[25px]"
      >Зберегти</UiButtonPrimary
    >
  </ModalPrimaryTitle>
</template>

<style scoped></style>
