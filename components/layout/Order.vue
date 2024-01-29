<script setup lang="ts">
const props = defineProps<{
  inputs: InputsCreateOrder;
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
      <VForm :validation-schema="validationCreateOrder" @submit="sendForm">
        <div class="pt-[10px] md:pt-[30px]">
          <div class="flex flex-col md:gap-[50px] md:flex-row">
            <div
              class="flex flex-col gap-[10px] flex-1 xl:max-w-[465px] xl:gap-[20px]"
            >
              <UiLabel label="Торговий агент:" class="">
                <UiInputPrimary
                  v-model="inputs.sales_agent"
                  placeholder="Введіть торгового агента"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel class="" label="Дистрибʼютор:">
                <UiInputPrimary
                  v-model="inputs.distributor"
                  placeholder="Введіть дистрибʼютора"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="Торгова точка:" class="">
                <UiInputPrimary
                  v-model="inputs.shop"
                  placeholder="Введіть назву торгової точки"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="Статус:" for="" class="">
                <CommonSelectVariant
                  v-model="inputs.status"
                  :typeVariant="'order'"
                  :typeSelect="'status'"
                  placeholder="Оберіть статус задачі"
                ></CommonSelectVariant>
              </UiLabel>
              <UiLabel for="" class="" label="Фото розстановки:">
                <CommonAddingPhoto v-model="inputs.photos"></CommonAddingPhoto>
              </UiLabel>
            </div>
            <div class="flex flex-col gap-[10px] flex-1 xl:gap-[20px]">
              <h5 class="title_primary mt-[30px] md:mt-0">Замовлення</h5>
              <PagesCreateOrderAddingProduct
                v-model:products="inputs.products"
              ></PagesCreateOrderAddingProduct>
            </div>
          </div>

          <div>
            <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
            <UiAlertSuccess v-if="message">{{ message }}</UiAlertSuccess>
          </div>
          <div
            class="col-span-2 text-center mt-[10px] md:mt-[20px] xl:mt-[30px]"
          >
            <PagesCreateOrderSendButton
              :inputs="inputs"
              v-model:error="error"
              type="submit"
              >{{ label }}</PagesCreateOrderSendButton
            >
          </div>
        </div>
      </VForm>
    </template>
  </LayoutModulePage>
</template>
<style scoped></style>
