<script setup lang="ts">
const props = defineProps<{
  inputs: InputsCreateTask;
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
      <VForm :validation-schema="validationCreateTask" @submit="sendForm">
        <div
          class="grid max-w-[1000px] pt-[10px] md:pt-[30px] gap-[10px] sm:grid-cols-2 xl:gap-[20px]"
        >
          <UiLabel label="Задача:" class="col-span-2 md:col-span-1">
            <UiInputPrimary
              v-model="inputs.headline"
              placeholder="Введіть задачу"
            ></UiInputPrimary>
          </UiLabel>
          <UiLabel
            class="md:row-span-2 col-span-2 md:col-span-1"
            label="Опис задачі:"
          >
            <UiTextarea
              v-model="inputs.description"
              class="min-h-[130px] xl:min-h-[147px]"
              placeholder="Опишіть задачу"
            ></UiTextarea>
          </UiLabel>
          <UiLabel
            for=""
            class="col-span-2 md:col-span-1"
            label="Відповідальний:"
          >
            <PagesCreateTaskSelectResponsible
              v-model="inputs.responsible"
              placeholder="Введіть імʼя"
            ></PagesCreateTaskSelectResponsible>
          </UiLabel>
          <UiLabel class="col-span-2 sm:col-span-1" label="Термін:">
            <UiDatePicker
              v-model="inputs.deadline"
              placeholder="Визначте термін"
            ></UiDatePicker>
          </UiLabel>
          <UiLabel for="" class="col-span-2 sm:col-span-1" label="Статус:">
            <CommonSelectVariant
              v-model="inputs.status"
              :typeVariant="'tasks'"
              :typeSelect="'status'"
              placeholder="Оберіть статус задачі"
            ></CommonSelectVariant>
          </UiLabel>
          <div>
            <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
            <UiAlertSuccess v-if="message">{{ message }}</UiAlertSuccess>
          </div>
          <div
            class="col-span-2 text-center mt-[10px] md:mt-[20px] xl:mt-[30px]"
          >
            <PagesCreateTaskSendButton :inputs="inputs" v-model:error="error">{{
              label
            }}</PagesCreateTaskSendButton>
          </div>
        </div>
      </VForm>
    </template>
  </LayoutModulePage>
</template>
<style scoped></style>
