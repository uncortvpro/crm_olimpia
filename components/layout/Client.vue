<script setup lang="ts">
const props = defineProps<{
  inputs: InputsCreateClient;
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
      <VForm :validation-schema="validationCreateClient" @submit="sendForm">
        <div class="pt-[10px] md:pt-[30px]">
          <div class="flex flex-col md:gap-[50px] md:flex-row">
            <div
              class="flex flex-col gap-[10px] flex-1 xl:max-w-[465px] xl:gap-[20px]"
            >
              <UiLabel label="Назва:" class="">
                <UiInputPrimary
                  v-model="inputs.name"
                  name="name"
                  placeholder="Введіть назву клієнта"
                ></UiInputPrimary>
              </UiLabel>
              <h5 class="title_primary mt-[10px]">Реквізити</h5>
              <UiLabel class="" label="Код ЄДРПОУ:">
                <UiInputPrimary
                  name="edrpou"
                  v-model="inputs.edrpou"
                  placeholder="Введіть код ЄДРПОУ"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="ІПН:" class="">
                <UiInputPrimary
                  name="ipn"
                  v-model="inputs.ipn"
                  placeholder="Введіть ІПН"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="Банк:" class="">
                <UiInputPrimary
                  name="bank"
                  v-model="inputs.bank"
                  placeholder="Введіть назву банку"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="Розрахунковий рахунок:" class="">
                <UiInputPrimary
                  name="account_number"
                  v-model="inputs.account_number"
                  placeholder="Введіть назву розрахункового рахунку"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="Юридична адреса:" class="">
                <UiInputPrimary
                  name="address_jur"
                  v-model="inputs.address_jur"
                  placeholder="Введіть юридичну адресу"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="Фізична адреса:" class="">
                <UiInputPrimary
                  name="address_phiz"
                  v-model="inputs.address_phiz"
                  placeholder="Введіть фізичну адресу клієнта"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="Адреса складу клієнта:" class="">
                <UiInputPrimary
                  name="address_sklad"
                  v-model="inputs.address_sklad"
                  placeholder="Введіть адресу складу клієнта"
                ></UiInputPrimary>
              </UiLabel>
              <h5 class="title_primary mt-[10px]">Контакти</h5>
              <UiLabel label="ПІБ керівника клієнта:" class="">
                <UiInputPrimary
                  name="pib_kerivnyka"
                  v-model="inputs.pib_kerivnyka"
                  placeholder="Введіть ПІБ керівника клієнта"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="ПІБ контактної особи клієнта:" class="">
                <UiInputPrimary
                  name="pib_kontaktna"
                  v-model="inputs.pib_kontaktna"
                  placeholder="Введіть ПІБ контактної особи клієнта"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="Контактний телефон:" class="">
                <UiInputPrimary
                  v-model="inputs.number"
                  name="number"
                  placeholder="Введіть контактний телефон клієнта"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="Електронна пошта:" class="">
                <UiInputPrimary
                  v-model="inputs.email"
                  name="email"
                  placeholder="Введіть електронну пошту"
                ></UiInputPrimary>
              </UiLabel>
            </div>
            <div class="flex flex-col gap-[10px] flex-1 xl:gap-[20px]">
              <h5 class="title_primary mt-[30px] md:mt-0">Супервайзери</h5>
              <CommonSupervisors
                v-model:supervisors="inputs.supervisors"
              ></CommonSupervisors>
              <h5 class="title_primary mt-[10px]">Договір</h5>
              <UiLabel
                label="Терміни та умови розрахунків:"
                class="xl:max-w-[465px]"
              >
                <UiInputPrimary
                  v-model="inputs.payment_terms_and_conditions"
                  placeholder="Введіть терміни та умови"
                ></UiInputPrimary>
              </UiLabel>
              <UiLabel label="Прикріпити договір:" class="xl:max-w-[465px]">
                <CommonAddingPdf
                  :maxCount="5"
                  v-model="inputs.contracts"
                  v-model:deleteLinks="inputs.delete_contracts"
                ></CommonAddingPdf>
              </UiLabel>
            </div>
          </div>

          <div>
            <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
            <UiAlertSuccess v-if="message">{{ message }}</UiAlertSuccess>
          </div>
          <div
            class="col-span-2 text-center mt-[10px] md:mt-[20px] xl:mt-[30px]"
          >
            <PagesCreateClientSendButton
              :inputs="inputs"
              v-model:error="error"
              type="submit"
              >{{ label }}</PagesCreateClientSendButton
            >
          </div>
        </div>
      </VForm>
    </template>
  </LayoutModulePage>
</template>
<style scoped></style>
