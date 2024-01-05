<script setup lang="ts">
const props = defineProps<{
  inputs: InputsCreateContract;
  errorResponse: string;
  message: string;
  label: string;
}>();

const emits = defineEmits(["sendForm"]);

const sendForm = () => {
  emits("sendForm");
};
const error = ref("");

const getResponseError = () => {
  if (props.errorResponse) {
    error.value = props.errorResponse;
  }
};

watchDeep(
  () => props.errorResponse,
  () => {
    getResponseError();
  }
);
</script>

<template>
  <LayoutModulePage :title="label">
    <template #content>
      <VForm :validation-schema="validationCreateContract" @submit="sendForm">
        <div
          class="grid max-w-[1000px] pt-[10px] md:pt-[30px] gap-[10px] sm:grid-cols-2 xl:gap-[20px]"
        >
          <UiLabel label="№ договору:" class="col-span-2 sm:col-span-1">
            <UiInputPrimary
              v-model="inputs.number"
              placeholder="Введіть № договору"
            ></UiInputPrimary>
          </UiLabel>
          <UiLabel class="col-span-2 sm:col-span-1" label="Дата завершення:">
            <UiDatePicker
              v-model="inputs.deadline"
              placeholder="Оберіть дату завершення договору"
            ></UiDatePicker>
          </UiLabel>
          <UiLabel label="Контрагент:" class="col-span-2 sm:col-span-1">
            <UiInputPrimary
              v-model="inputs.counterpartie"
              placeholder="Оберіть контрагента"
            ></UiInputPrimary>
          </UiLabel>
          <UiLabel
            for=""
            class="relative z-40 col-span-2 sm:col-span-1"
            label="Предмет:"
          >
            <CommonSelectVariant
              v-model="inputs.subject"
              :typeSelect="'variant'"
              :typeVariant="'subject_contract'"
              placeholder="Оберіть предмет договору"
            ></CommonSelectVariant>
          </UiLabel>
          <UiLabel
            for=""
            class="relative z-30 col-span-2 sm:col-span-1"
            label="Категорія:"
          >
            <CommonSelectVariant
              v-model="inputs.category"
              :typeVariant="'category_contract'"
              :typeSelect="'variant'"
              placeholder="Оберіть категорію контрагента"
            ></CommonSelectVariant>
          </UiLabel>
          <UiLabel
            for=""
            class="relative z-20 col-span-2 sm:col-span-1"
            label="Статус:"
          >
            <CommonSelectVariant
              v-model="inputs.status"
              :typeVariant="'contract'"
              :typeSelect="'status'"
              placeholder="Оберіть статус договору"
            ></CommonSelectVariant>
          </UiLabel>
          <UiLabel class="col-span-2 sm:col-span-1" label="Дата договору:">
            <UiDatePicker
              v-model="inputs.date"
              placeholder="Оберіть дату договору"
            ></UiDatePicker>
          </UiLabel>
          <PagesCreateContractAddingPdf v-model="inputs.scans"></PagesCreateContractAddingPdf>

          <div>
            <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
            <UiAlertSuccess v-if="message">{{ message }}</UiAlertSuccess>
          </div>
          <div
            class="col-span-2 text-center mt-[10px] md:mt-[20px] xl:mt-[30px]"
          >
            <PagesCreateContractSendButton
              :inputs="inputs"
              v-model:error="error"
              >{{ label }}</PagesCreateContractSendButton
            >
          </div>
        </div>
      </VForm>
    </template>
  </LayoutModulePage>
</template>
<style scoped></style>
