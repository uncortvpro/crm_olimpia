<script setup lang="ts">
const props = defineProps<{
  type: VariantType;
}>();

const emits = defineEmits(["actionSuccess"]);
const actionSuccess = () => {
  emits("actionSuccess");
};

const statusColor = ref("");
const status = ref("");

const isStatus = computed(() =>
  statusColor.value && status.value ? true : false
);

const onCreateNewStatus = () => {
  useNewVariant(status.value, props.type, statusColor.value).then(() => {
    actionSuccess();
  });
};
</script>

<template>
  <ModalPrimaryTitle title="Додати статус" :ui="{ width: '!max-w-[414px]' }">
    <UiLabel class="mt-[15px] md:mt-[20px]" label="Введіть статус:">
      <UiInputPrimary v-model="status"></UiInputPrimary>
    </UiLabel>
    <UiLabel class="mt-[15px] md:mt-[20px]" label="Оберіть колір:">
      <div class="flex gap-[10px] flex-wrap mt-[5px]">
        <UiRadioColor
          v-model="statusColor"
          color="#AAC3F4"
          value="#AAC3F4"
          name="color"
        />
        <UiRadioColor
          v-model="statusColor"
          color="#BAD388"
          value="#BAD388"
          name="color"
        />
        <UiRadioColor
          v-model="statusColor"
          color="#EBAEAE"
          value="#EBAEAE"
          name="color"
        />
        <UiRadioColor
          v-model="statusColor"
          color="#F1B2EE"
          value="#F1B2EE"
          name="color"
        />
        <UiRadioColor
          v-model="statusColor"
          color="#FFEAA5"
          value="#FFEAA5"
          name="color"
        />
        <UiRadioColor
          v-model="statusColor"
          color="#FBD9C0"
          value="#FBD9C0"
          name="color"
        />
        <UiRadioColor
          v-model="statusColor"
          color="#DBBDF3"
          value="#DBBDF3"
          name="color"
        />
      </div>
    </UiLabel>

    <UiButtonPrimary
      :disabled="!isStatus"
      @click="onCreateNewStatus"
      class="self-center mt-[25px]"
      >Зберегти</UiButtonPrimary
    >
  </ModalPrimaryTitle>
</template>

<style scoped></style>
