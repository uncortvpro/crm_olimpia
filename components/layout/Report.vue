<script setup lang="ts">
const props = defineProps<{
  inputs: InputsCreateReport;
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
      <VForm :validation-schema="validationCreateReport" @submit="sendForm">
        <div
          class="grid max-w-[1000px] pt-[10px] md:pt-[30px] gap-[10px] gap-x-0 sm:gap-x-[20px] md:gap-x-[78px] xl:gap-y-[20px]"
        >
          <div class="grid gap-[10px] xl:gap-[20px]">
            <UiLabel label="Торгова точка:">
              <UiInputPrimary
                v-model="inputs.shop_name"
                placeholder="Введіть назву торгової точки"
              ></UiInputPrimary>
            </UiLabel>
            <UiLabel label="Назва товару:">
              <UiInputPrimary
                v-model="inputs.product_name"
                placeholder="Введіть назву товару"
              ></UiInputPrimary>
            </UiLabel>
            <UiLabel label="Кількість товару:">
              <UiInputPrimary
                v-model="inputs.product_amount"
                placeholder="Введіть кількість товару"
              ></UiInputPrimary>
            </UiLabel>
            <UiLabel label="Кількість акційного товару:">
              <UiInputPrimary
                v-model="inputs.sale_amount"
                placeholder="Введіть кількість акційного товару"
              ></UiInputPrimary>
            </UiLabel>
          </div>
          <UiLabel for="" class="" label="Фото розстановки:">
            <CommonAddingPhoto v-model="inputs.photo"></CommonAddingPhoto>
          </UiLabel>

          <div>
            <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
            <UiAlertSuccess v-if="message">{{ message }}</UiAlertSuccess>
          </div>
          <div
            class="sm:col-span-2 text-center mt-[10px] md:mt-[20px] xl:mt-[30px]"
          >
            <PagesCreateReportSendButton
              :inputs="inputs"
              v-model:error="error"
              >{{ label }}</PagesCreateReportSendButton
            >
          </div>
        </div>
      </VForm>
    </template>
  </LayoutModulePage>
</template>
<style scoped></style>
